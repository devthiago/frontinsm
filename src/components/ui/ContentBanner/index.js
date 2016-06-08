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
    image: 'assets'
  }

  static propTypes = {
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    icon: React.PropTypes.string,
    image: React.PropTypes.string
  }

  getBackgroundImage(src) {
    return {
      backgroundImage: 'url(assets/' + src + ')'
    };
  }

  render() {
    let {id, title, description, icon, children, image, onClick, style} = this.props;
    let sectionProps = {
      id,
      className: styles.contentBanner,
      style: {...this.getBackgroundImage(image), ...style},
      onClick
    };

    return (
      <section {...sectionProps}>
        <header className={styles.contentBannerHeader}>
          <Title type="banner">{title}</Title>
          <p className={styles.contentBannerHeaderDescription}>{description}</p>
          <div className={styles.contentBannerHeaderDivider}>
            <Divider type="contentBannerHeader" />
            <Icon name={"ei-" + icon} size="s" className={styles.contentBannerHeaderIcon} />
            <Divider type="contentBannerHeader" />
          </div>
        </header>
        <div className={styles.contentBannerInternal}>
          {children}
        </div>
      </section>
    );
  }
}
