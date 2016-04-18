import styles from './style.css';

export default class Title extends BaseComponent {
  static defaultProps = {
    type: 'default'
  }

  static propTypes = {
    type: React.PropTypes.string.isRequired
  }

  getClassNameByType(type) {
    switch (type) {
      case "banner":
        return styles.titleBanner;
      case "date":
        return styles.dateTitle;
      default:
        return styles.title;
    }
  }

  render() {
    return (
      <h1 className={this.getClassNameByType(this.props.type)}>
        { this.props.children }
      </h1>
    );
  }
}
