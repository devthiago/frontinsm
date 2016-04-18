import styles from './style.css';

import Text from 'ui/Text';

export default class Sign extends BaseComponent {
  static defaultProps = {
    author: { name: '', link: '' }
  }

  static propTypes = {
    author: React.PropTypes.object
  }

  render() {
    let {author} = this.props,
      linkProps = {
      href: author.link,
      target: "_blank",
      className: styles.signLink
    };

    return (
      <Text type="sign">
        Desenvolvido com <span className={styles.heartIcon}>&hearts;</span> por <a {...linkProps}>{author.name}</a>
      </Text>
    );
  }
}
