import styles from './style.css';

export default class Divider extends BaseComponent {
  static defaultProps = {
    type: 'default'
  }

  static propTypes = {
    type: React.PropTypes.string.isRequired
  }

  getClassNameByType(type) {
    switch (type) {
      case 'contentHeader':
        return styles.dividerContentHeader;
      case 'contentBannerHeader':
        return styles.dividerContentBannerHeader;
      default:
        return styles.divider;
    }
  }

  render() {
    return (
      <div className={this.getClassNameByType(this.props.type)} />
    );
  }
}
