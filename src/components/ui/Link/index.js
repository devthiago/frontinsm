import styles from './style.css';

export default class Link extends BaseComponent {
  static defaultProps = {
    label: 'Just a link',
    type: 'default',
    href: '/',
    onClick: (e) => {}
  }

  static propTypes = {
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    onChange: React.PropTypes.func
  }

  getClassName() {
    const { type } = this.props;
    return styles.default;
  }

  handleClick() {
    const { onClick, disabled } = this.props;
    if (disabled) {
      return (ev) => ev.preventDefault();
    }
    return onClick;
  }

  render() {
    const { label, type, ...props } = this.props;
    return (
      <a {...props} className={this.getClassName()} onClick={this.handleClick()}>
        { label }
      </a>
    );
  }
}
