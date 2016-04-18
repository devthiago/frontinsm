import styles from './style.css';

export default class List extends BaseComponent {
  render() {
    let {children} = this.props;

    return (
      <ul className={styles.list}>
        {children}
      </ul>
    );
  }
}
