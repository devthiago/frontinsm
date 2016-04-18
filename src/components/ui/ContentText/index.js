import styles from './style.css';

export default class ContentText extends BaseComponent {
  static defaultProps = {
    id: ''
  }

  static propTypes = {
    id: React.PropTypes.string
  }

  render() {
    let {id, children} = this.props;

    return (
      <section id={id} className={styles.content}>
        <div className={styles.contentInternal}>
          {children}
        </div>
      </section>
    );
  }
}
