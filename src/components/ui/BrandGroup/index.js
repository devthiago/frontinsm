import styles from './style.css';

export default class BrandGroup extends BaseComponent {
  render() {
    let {children} = this.props;

    return (
      <div className={styles.brandGroup}>
        {children}
      </div>
    );
  }
}
