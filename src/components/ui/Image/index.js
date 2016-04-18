import styles from './style.css';

export default class Image extends BaseComponent {
  static defaultProps = {
    src: '',
    alt: ''
  }

  static propTypes = {
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string
  }

  render() {
    return <img src={'assets/' + this.props.src} alt={this.props.alt} className={styles.defaultImage} />;
  }
}