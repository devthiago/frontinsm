import ContentBanner from 'ui/ContentBanner';
import BrazilJS from 'ui/BrazilJS';

export default class Sponsoring extends BaseComponent {
  render() {
    let props = {
      id: 'sponsoring',
      image: 'https://braziljs.org/images/braziljs-bg.jpg',
      hideHeader: true
    };

    return (
      <ContentBanner {...props}>
        <BrazilJS evid="56b4e6d0a45974380e77fd91" />
      </ContentBanner>
    );
  }
}
