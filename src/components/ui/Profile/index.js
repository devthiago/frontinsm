import styles from './style.css';

import Icon from 'react-evil-icons';
import Text from 'ui/Text';

export default class Profile extends BaseComponent {
  constructor(props) {
    super(props);
    this.getSocialLinks = this.getSocialLinks.bind(this);
  }

  static defaultProps = {
    photo: '',
    name: '',
    description: '',
    company: '',
    twitter: '',
    github: '',
    facebook: '',
    google: '',
    linkedin: '',
    website: ''
  }

  static propTypes = {
    photo: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    company: React.PropTypes.string,
    twitter: React.PropTypes.string,
    github: React.PropTypes.string,
    facebook: React.PropTypes.string,
    google: React.PropTypes.string,
    linkedin: React.PropTypes.string,
    website: React.PropTypes.string
  }

  getSocialIcon(social) {
    let iconNames = {
        twitter: 'ei-sc-twitter',
        github: 'ei-sc-github',
        facebook: 'ei-sc-facebook',
        google: 'ei-sc-google-plus',
        linkedin: 'ei-sc-linkedin',
        website: 'ei-link'
      },
      icon = iconNames.website;

    if ( !!iconNames[social] ) {
      icon = iconNames[social];
    }

    return <Icon name={icon} size="m" className={styles.profileIcon} />;
  }

  getSocialLinks(social) {
    let links = [],
      href = '',
      props = {};

    for (let name in social) {
      href = social[name];
      if ( href !== '' ) {
        props = {
          key: "link_" + name,
          href: href,
          target: "_blank",
          className: styles.profileLink
        };
        links.push(<a {...props}>{ this.getSocialIcon(name) }</a>);
      }
    }

    return links;
  }

  getProfileCompany(company) {
    if ( company !== '' ) {
      return <div className={styles.profileCompany}>{company}</div>;
    }
    return null;
  }

  getProfileDescription(description) {
    if ( description !== '' ) {
      return <Text>{description}</Text>;
    }
    return null;
  }

  render() {
    let {photo, name, description, company, ...social} = this.props;

    return (
      <div className={styles.profile}>
        <img src={photo} alt={name} className={styles.profilePhoto} />
        <div className={styles.profileDetails}>
          <h3 className={styles.profileName}>{ name }</h3>
          { this.getProfileCompany(company) }
          <div className={styles.profileLinks}>{ this.getSocialLinks(social) }</div>
          { this.getProfileDescription(description) }
        </div>
      </div>
    );
  }
}
