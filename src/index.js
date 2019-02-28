var cookieData = document.cookie.replace(/\s/g,'').split(';') || []
var cookieList = cookieData.map(item => {
  const element = item.split('=')
  const [key, value] = [...element]
  return {
    [key]: value
  }
}) || []

function lookCookie(name) {
  if(!name) {
    return ''
  }
  return cookieList[name]
}

function setCookie(name, contnet, expires) {
  const expiresTime = (new Date(new Date().getTime() + expires)).toGMTString()
  document.cookie = `${name}=${contnet};expires=${expiresTime}`
}

function deleteCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = lookCookie(name);
  if (cval != null) {
      document.cookie = `${name}=${cval};expires=${exp.toGMTString()}`;
  }
}

export default {
  lookCookie,
  setCookie,
  deleteCookie
}