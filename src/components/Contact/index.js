import Content from 'ui/Content';
import ProfileGroup from 'ui/ProfileGroup';
import ContactProfile from 'ui/ContactProfile';

export default class Contact extends BaseComponent {
  getProfiles() {
    let managers = [
        {
          type: "email",
          name: "Contato",
          href: "mailto:contato@frontinsm.com.br"
        },
        {
          type: "twitter",
          name: "@frontinsm",
          href: "https://twitter.com/frontinsm/"
        },
        {
          type: "facebook",
          name: "/frontinsm",
          href: "https://www.facebook.com/frontinsm/"
        }
      ],
      profiles = [];

    managers.forEach((props, index) => {
      profiles.push(<ContactProfile key={index} {...props} />);
    });

    return profiles;
  }

  render() {
    let props = {
      id: 'contact',
      title: 'Fale conosco',
      description: 'Como podemos ajudar?',
      icon: 'envelope',
      type: 'odd'
    };

    return (
      <Content {...props}>
        <ProfileGroup>{ this.getProfiles() }</ProfileGroup>
      </Content>
    );
  }
}
