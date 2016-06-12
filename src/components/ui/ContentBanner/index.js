import styles from './style.css';

import Icon from 'react-evil-icons';
import Title from 'ui/Title';
import Divider from 'ui/Divider';

export default class ContentBanner extends BaseComponent {
  static defaultProps = {
    id: '',
    title: '',
    description: '',
    icon: '',
    image: 'assets',
    hideHeader: false
  }

  static propTypes = {
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    icon: React.PropTypes.string,
    image: React.PropTypes.string,
    hideHeader: React.PropTypes.bool
  }

  getHeader() {
    let {title, description, icon, hideHeader} = this.props;
    if ( !hideHeader ) {
      return (
        <header className={styles.contentBannerHeader}>
          <Title type="banner">{title}</Title>
          <p className={styles.contentBannerHeaderDescription}>{description}</p>
          <div className={styles.contentBannerHeaderDivider}>
            <Divider type="contentBannerHeader" />
            <Icon name={"ei-" + icon} size="s" className={styles.contentBannerHeaderIcon} />
            <Divider type="contentBannerHeader" />
          </div>
        </header>
      );
    }
    return null;
  }

  getBackgroundImage() {
    let {image} = this.props;
    let url = image.indexOf('http') >= 0 ? image : ('assets/' + image);
    return {
      backgroundImage: 'url(' + url + ')'
    };
  }

  render() {
    let {id, children} = this.props;
    let sectionProps = {
      id,
      className: styles.contentBanner,
      style: this.getBackgroundImage()
    };

    return (
      <section {...sectionProps}>
        { this.getHeader() }
        <div className={styles.contentBannerInternal}>
          {children}
        </div>
      </section>
    );
  }
}
