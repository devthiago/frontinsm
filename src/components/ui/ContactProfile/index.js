import styles from './style.css';

import Icon from 'react-evil-icons';

export default class ContactProfile extends BaseComponent {
  static defaultProps = {
    type: '',
    name: '',
    href: ''
  }

  static propTypes = {
    type: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    href: React.PropTypes.string
  }

  getIcon(type) {
    let iconNames = {
        twitter: 'ei-sc-twitter',
        github: 'ei-sc-github',
        facebook: 'ei-sc-facebook',
        google: 'ei-sc-google-plus',
        linkedin: 'ei-sc-linkedin',
        website: 'ei-link',
        email: 'ei-envelope'
      },
      icon = iconNames.website;

    if ( !!iconNames[type] ) {
      icon = iconNames[type];
    }

    return <Icon name={icon} size="l" className={styles.profileIcon} />;
  }

  render() {
    let {type, name, href} = this.props,
      linkProps = {
        href: href,
        target: "_blank",
        className: styles.profileLink
      };

    return (
      <a {...linkProps} className={styles.profile}>
        { this.getIcon(type) }
        <span className={styles.profileName}>{name}</span>
      </a>
    );
  }
}
