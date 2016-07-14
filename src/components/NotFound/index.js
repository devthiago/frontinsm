import styles from './style.css';

import not_found from './not_found.png';

import Button from 'ui/Button';
import Image from 'ui/Image';
import PageRoot from 'ui/PageRoot';

export default class NotFound extends BaseComponent {
  render() {
    return (
      <PageRoot>
        <div className={styles.container}>
          <div className={styles.containerInner}>
            <Image src="not_found.png" />
          </div>
          <Button href="/" type="banner" action="link" label="Front-in SM" />
        </div>
      </PageRoot>
    );
  }
}
