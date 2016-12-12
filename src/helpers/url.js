import _ from 'lodash';

export const getURLParams = (currentURL, param) => {
  const aURL = currentURL.split('?');
  if (aURL.length < 2) {
    return (!!param ? undefined : {});
  }
  const sParams = aURL[1];
  const aParams = sParams.split('&');
  const params = _.reduce(aParams, (acc, value) => {
    if (value.indexOf('=') > -1) {
      const p = value.split('=');
      acc[p[0]] = p[1];
    }
    return acc;
  }, {});
  if (!!param) {
    return params[param];
  }
  return params;
};
