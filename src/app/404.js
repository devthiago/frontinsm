import Page from 'NotFound';

if (typeof document !== 'undefined') {
  ReactDOM.render(<Page />, document.getElementById('app'));
}

module.exports = Page;
