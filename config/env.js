import {DEV_DOMAIN, ONLINE_DOMAIN} from './constantsData';
const dev = process.env.NODE_ENV !== 'production';
const isShow = false; //是否只是演示
export function getDomain() {
  if (isShow) {
    return 'http://www.liuweibo.cn:7654/';
  }
  return dev ? DEV_DOMAIN : ONLINE_DOMAIN + '/';
}
