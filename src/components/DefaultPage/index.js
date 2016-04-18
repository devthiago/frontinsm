import thumbnail from './thumbnail.jpg';
import favicon from './favicon.ico';

import Header from 'Header';
import About from 'About';
import Tickets from 'Tickets';
import Local from 'Local';
import Management from 'Management';
import Contact from 'Contact';
import Footer from 'Footer';

import PageRoot from 'ui/PageRoot';

export default class DefaultPage extends BaseComponent {
  render() {
    return (
      <PageRoot>
        <Header />
        <About />
        <Tickets />
        <Local />
        <Management />
        <Contact />
        <Footer />
      </PageRoot>
    );
  }
}
