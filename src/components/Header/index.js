import banner from './banner.jpg';
import styles from './style.css';

import Logo from 'Logo';
import Title from 'ui/Title';
import Button from 'ui/Button';

export default class Header extends BaseComponent {
  render() {
    return (
      <header className={styles.banner}>
        <Logo />
        <Title type="date">25 de Junho - Santa Maria - RS</Title>
        <Button href="#tickets" type="banner" action="link" label="Inscreva-se" />
      </header>
    );
  }
}