import styles from './style.css';

export default class ProfileGroup extends BaseComponent {
  render() {
    let {children} = this.props;

    return (
      <div className={styles.profileGroup}>
        {children}
      </div>
    );
  }
}
