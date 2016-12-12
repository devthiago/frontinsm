import Page from 'Certified';
import { getURLParams } from '../helpers/url';

if (typeof document !== 'undefined') {
  const params = getURLParams(window.location.href);
  ReactDOM.render(<Page params={params} />, document.getElementById('app'));
}

module.exports = Page;
