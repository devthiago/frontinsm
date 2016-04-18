import styles from './style.css';

export default class Text extends BaseComponent {
  static defaultProps = {
    type: 'default'
  }

  static propTypes = {
    type: React.PropTypes.string
  }

  getClassNameByType(type) {
    switch (type) {
      case "banner":
        return styles.textBanner;
      case "sign":
        return styles.textSign;
      case "date":
      default:
        return styles.text;
    }
  }

  render() {
    let {type, children} = this.props;

    return (
      <p className={this.getClassNameByType(type)}>
        {children}
      </p>
    );
  }
}
