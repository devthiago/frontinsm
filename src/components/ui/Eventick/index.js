import styles from './style.css';

export default class Eventick extends BaseComponent {
  static defaultProps = {
    evid: ''
  }

  static propTypes = {
    evid: React.PropTypes.string.isRequired
  }

  createUrl(evid) {
    return "http://www.eventick.com.br/" + evid + "/embedded";
  }

  render() {
    return (
      <iframe
        src={this.createUrl(this.props.evid)}
        frameBorder="0"
        height="180px"
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
