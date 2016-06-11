import Content from 'ui/Content';
import ProfileGroup from 'ui/ProfileGroup';
import Profile from 'ui/Profile';

import ManagersData from 'managers_data';

export default class Management extends BaseComponent {
  getProfiles() {
    return ManagersData.getDataArray().map((props) => {
      return <Profile {...props} />
    });
  }

  render() {
    let props = {
      id: 'management',
      title: 'Organização',
      description: 'Quem somos?',
      icon: 'gear'
    };

    return (
      <Content {...props}>
        <ProfileGroup>{ this.getProfiles() }</ProfileGroup>
      </Content>
    );
  }
}
