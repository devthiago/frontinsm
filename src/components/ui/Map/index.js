export default class Map extends BaseComponent {
  static defaultProps = {
    url: ''
  }

  static propTypes = {
    url: React.PropTypes.string.isRequired
  }

  handleClick(ev) {
    ev.preventDefault();
  }

  handleMouseLeave(ev) {
    ev.preventDefault();
  }

  handleMouseEnter(ev) {
    ev.preventDefault();
  }

  render() {
    let {url} = this.props;
    let width = "100%";
    let height = "450";

    let divParams = {
      style: {
        width,
        height: height + "px",
        marginTop: "20px"
      }
    };

    let iframeParams = {
      src: url,
      width,
      height,
      frameBorder: "0",
      style: {
        border: 0,
        pointerEvents: "none"
      },
      allowFullScreen: "true",
      onClick: this.handleClick,
      onMouveLeave: this.handleMouseLeave,
      onMouveEnter: this.handleMouseEnter
    };

    return (
      <div {...divParams}>
        <iframe {...iframeParams} />
      </div>
    );
  }
}
