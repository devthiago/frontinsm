import styles from './style.css';
import Icon from 'react-evil-icons';

export default class TimelineBlock extends BaseComponent {
  static defaultProps = {
    icon: 'comment',
    moment: '--',
    title: 'Not defined yet'
  }

  static propTypes = {
    icon: React.PropTypes.string.isRequired,
    moment: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  }

  verifyProp(propName, callback) {
    if (this.props[propName] == '' || this.props[propName] === undefined) {
      return null;
    }
    return callback(this.props[propName]);
  }

  getResponsible() {
    return this.verifyProp('responsible', (prop) => {
      return <h3>{prop}</h3>;
    });
  }

  getDescription() {
    return this.verifyProp('description', (prop) => {
      return <p>{prop}</p>;
    });
  }

  render() {
    let {icon, moment, title} = this.props;

    return (
      <div className={styles.timeline_block}>
        <div className={styles.timeline_block_image}>
          <Icon name={"ei-" + icon} size="s" />
        </div>

        <div className={styles.timeline_block_content}>
          <span>{ moment }</span>
          { this.getResponsible() }
          <h2>{ title }</h2>
          { this.getDescription() }
        </div>
      </div>
    );
  }
}
