const DEV_SITE_URL = 'http://localhost:4321';

const withProtocol = (host: string) => (/^https?:\/\//.test(host) ? host : `https://${host}`);

const clean = (value: string | undefined) => value?.trim().replace(/\/+$/, '') || undefined;

/**
 * Resolve the canonical site origin for the current build.
 *
 * Precedence:
 *  1. NEXT_PUBLIC_SITE_URL – explicit override (staging, experiments, etc.)
 *  2. `site.site` from config.yaml – the custom domain
 *  3. VERCEL_PROJECT_PRODUCTION_URL – stable production domain, production builds only
 *  4. VERCEL_URL – the unique URL of this deployment (preview builds)
 *  5. http://localhost:4321 for local development
 *
 * With a custom domain configured, every deployment canonicalizes to it so
 * search engines and link previews never surface a *.vercel.app address.
 */
export const resolveSiteUrl = (configuredSite?: string): string => {
  const env = process.env;

  const explicit = clean(env.NEXT_PUBLIC_SITE_URL);
  if (explicit) return withProtocol(explicit);

  const configured = clean(configuredSite);
  if (configured) return withProtocol(configured);

  if (env.VERCEL_ENV === 'production') {
    const production = clean(env.VERCEL_PROJECT_PRODUCTION_URL);
    if (production) return withProtocol(production);
  }

  const deployment = clean(env.VERCEL_URL);
  if (deployment) return withProtocol(deployment);

  return DEV_SITE_URL;
};
