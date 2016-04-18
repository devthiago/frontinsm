import banner from './frontinsm-banner.png';
import styles from './style.css';

import Image from 'ui/Image';

export default class Logo extends BaseComponent {
  render() {
    return (
      <picture className={styles.logoBanner}>
        <Image src="frontinsm-banner.png" alt="Banner FrontInSM 2016" />
      </picture>
    );
  }
}