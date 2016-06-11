import styles from './style.css';

export default class BrandProfile extends BaseComponent {
  static defaultProps = {
    logo: '',
    name: '',
    website: ''
  }

  static propTypes = {
    logo: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    website: React.PropTypes.string
  }

  render() {
    let {logo, name, website} = this.props;

    return (
      <div className={styles.brandProfile}>
        <a href={website} title={name} target="_blank" className={styles.brandProfileLink}>
          <img src={logo} alt={name} className={styles.brandProfileLogo} />
        </a>
      </div>
    );
  }
}
