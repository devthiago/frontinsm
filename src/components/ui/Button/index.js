import styles from './style.css';

export default class Button extends BaseComponent {
  static defaultProps = {
    action: 'button',
    label: '',
    type: 'default',
    href: '',
  }

  static propTypes = {
    action: React.PropTypes.string,
    label: React.PropTypes.string,
    type: React.PropTypes.string,
  }

  getType(type) {
    switch (type) {
      case 'banner':
        return styles.buttonBanner;
      default:
        return styles.button;
    }
  }

  render() {
    if ( this.props.action === 'link' ) {
      return (
        <a href={this.props.href} className={this.getType(this.props.type)}>
          { this.props.label }
        </a>
      );
    }

    return (
      <button type={this.props.action} className={this.getType(this.props.type)}>
        { this.props.label }
      </button>
    );
  }
}
