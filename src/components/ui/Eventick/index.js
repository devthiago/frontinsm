import styles from './style.css';

export default class Eventick extends BaseComponent {
  static defaultProps = {
    evid: ''
  }

  static propTypes = {
    evid: React.PropTypes.string.isRequired
  }

  createUrl(evid) {
    return "https://www.eventick.com.br/e/" + evid;
  }

  render() {
    return (
      <iframe
        className={styles.embed}
        src={this.createUrl(this.props.evid)}
        frameBorder="0"
        height="388px"
        width="100%"
        vspace="0"
        hspace="0"
        marginHeight="5"
        marginWidth="5"
        scrolling="auto"
        allowTransparency="true" />
    );
  }
}
