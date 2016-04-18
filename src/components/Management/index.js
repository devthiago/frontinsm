import Content from 'ui/Content';
import ProfileGroup from 'ui/ProfileGroup';
import Profile from 'ui/Profile';

export default class Management extends BaseComponent {
  getProfiles() {
    let managers = [
        {
          photo: "https://avatars0.githubusercontent.com/u/5190217?v=3&s=460",
          name: "Thiago Alves",
          twitter: "https,://twitter.com/taltk9",
          github: "https://github.com/taltk9",
          linkedin: "https://br.linkedin.com/in/thiagoalvesluiz"
        },
        {
          photo: "https://avatars0.githubusercontent.com/u/1386782?v=3&s=460",
          name: "Tonin Bolzan",
          facebook: "https://www.facebook.com/tonybolzan",
          github: "https://github.com/tonybolzan",
          google: "https://plus.google.com/+ToninRBolzan/"
        },
        {
          photo: "https://avatars3.githubusercontent.com/u/1533805?v=3&s=460",
          name: "Fernando Sávio",
          twitter: "https://twitter.com/fernandosavio86/",
          facebook: "https://www.facebook.com/fernandosavio86",
          github: "https://github.com/fernandosavio"
        }
      ],
      profiles = [];

    managers.forEach((props, index) => {
      profiles.push(<Profile key={index} {...props} />);
    });

    return profiles;
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
