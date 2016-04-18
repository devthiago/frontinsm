import styles from './style.css';

export default class ListItem extends BaseComponent {
  render() {
    let {children} = this.props;

    return (
      <li className={styles.listItem}>
        {children}
      </li>
    );
  }
}
