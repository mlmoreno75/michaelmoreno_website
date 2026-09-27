const DEV_SITE_URL = 'http://localhost:4321';

const withProtocol = (host: string) => (/^https?:\/\//.test(host) ? host : `https://${host}`);

const clean = (value: string | undefined) => value?.trim().replace(/\/+$/, '') || undefined;

/**
 * Resolve the canonical site origin for the current build.
 *
 * Precedence:
 *  1. NEXT_PUBLIC_SITE_URL – explicit override (custom domain, staging, etc.)
 *  2. VERCEL_PROJECT_PRODUCTION_URL – stable production domain, production builds only
 *  3. VERCEL_URL – the unique URL of this deployment (preview builds)
 *  4. `site.site` from config.yaml, if someone still sets one
 *  5. http://localhost:4321 for local development
 *
 * Nothing is hardcoded, so preview deployments canonicalize to themselves
 * and production canonicalizes to the production domain.
 */
export const resolveSiteUrl = (configuredSite?: string): string => {
  const env = process.env;

  const explicit = clean(env.NEXT_PUBLIC_SITE_URL);
  if (explicit) return withProtocol(explicit);

  if (env.VERCEL_ENV === 'production') {
    const production = clean(env.VERCEL_PROJECT_PRODUCTION_URL);
    if (production) return withProtocol(production);
  }

  const deployment = clean(env.VERCEL_URL);
  if (deployment) return withProtocol(deployment);

  const configured = clean(configuredSite);
  if (configured) return withProtocol(configured);

  return DEV_SITE_URL;
};
