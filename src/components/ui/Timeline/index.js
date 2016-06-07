import styles from './style.css';

export default class Timeline extends BaseComponent {
  render() {
    let {children} = this.props;

    return (
      <div className={styles.timeline}>
        {children}
      </div>
    );
  }
}
