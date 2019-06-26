export function getCookie (name) {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (arr = document.cookie.match(reg)) {
    return decodeURIComponent(arr[2])
  } else {
    return null
  }
}
export function setCookie (c_name, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = c_name + '='
    + encodeURIComponent(value) +
    ((expiredays == null) ? '' : ';expires=' +
      exdate.toGMTString())
}
export function clearAllCookie () {
  var keys = document.cookie.match(/[^ =;]+(?=\=)/g)
  if (keys) {
    for (var i = keys.length; i--;) {
      document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
  }
}
