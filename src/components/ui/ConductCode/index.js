import styles from './style.css';

export default class ConductCode extends BaseComponent {
  render() {
    return (
      <div>
        <a className={styles.link} href="http://pt-br.confcodeofconduct.com/" target="_blank">
          Código de conduta do Evento
        </a>
      </div>
    );
  }
}
