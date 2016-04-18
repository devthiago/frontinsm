import styles from './style.css';

import Icon from 'react-evil-icons';
import Title from 'ui/Title';
import Divider from 'ui/Divider';

export default class Content extends BaseComponent {
  static defaultProps = {
    id: '',
    title: '',
    description: '',
    icon: '',
    type: 'even'
  }

  static propTypes = {
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    icon: React.PropTypes.string,
    type: React.PropTypes.string
  }

  getClassNameByType(type) {
    switch (type) {
      case 'odd':
        return styles.contentOdd;
      default:
        return styles.content;
    }
  }

  render() {
    let {id, title, description, icon, children, type} = this.props;

    return (
      <section id={id} className={this.getClassNameByType(type)}>
        <header className={styles.contentHeader}>
          <Title>{title}</Title>
          <p className={styles.contenttHeaderDescription}>{description}</p>
          <div className={styles.contentHeaderDivider}>
            <Divider type="contentHeader" />
            <Icon name={"ei-" + icon} size="s" className={styles.contentHeaderIcon} />
            <Divider type="contentHeader" />
          </div>
        </header>
        <div className={styles.contentInternal}>
          {children}
        </div>
      </section>
    );
  }
}
