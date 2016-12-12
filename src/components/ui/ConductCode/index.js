import styles from './style.css';

import Link from '../Link';

export default class ConductCode extends BaseComponent {
  render() {
    return (
      <div>
        <Link
          label="Código de conduta do Evento"
          href="http://pt-br.confcodeofconduct.com/"
          target="_blank"
        />
      </div>
    );
  }
}
