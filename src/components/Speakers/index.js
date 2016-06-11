import Content from 'ui/Content';
import ProfileGroup from 'ui/ProfileGroup';
import Profile from 'ui/Profile';

import SpeakersData from 'speakers_data';

export default class Speakers extends BaseComponent {
  getProfiles() {
    return SpeakersData.getBioDataArray().map((props) => {
      return <Profile {...props} />;
    });
  }

  render() {
    let props = {
      id: 'speakers',
      title: 'Palestrantes',
      description: 'O pessoal que "manja das paradas"',
      icon: 'user'
    };

    return (
      <Content {...props}>
        <ProfileGroup>{ this.getProfiles() }</ProfileGroup>
      </Content>
    );
  }
}
