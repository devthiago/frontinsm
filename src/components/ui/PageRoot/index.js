import styles from './style.css';

export default class PageRoot extends BaseComponent {
  render() {
    return (
      <div className={styles.pageRoot}>
        { this.props.children }
      </div>
    );
  }
}
