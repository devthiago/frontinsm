import ContentText from 'ui/ContentText';
import Sign from 'ui/Sign';

export default class Footer extends BaseComponent {
  render() {
    return (
      <ContentText>
        <Sign author={{name: 'taltk9', link: 'http://thiagoalv.es/'}} />
      </ContentText>
    );
  }
}
