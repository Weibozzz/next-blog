import { DEV_DOMAIN, ONLINE_DOMAIN } from './constantsData';

const dev = process.env.NODE_ENV !== 'production';
export function getDomain() {
  return dev ? DEV_DOMAIN : `${ONLINE_DOMAIN}/`;
}
