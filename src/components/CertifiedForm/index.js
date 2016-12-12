import bkg from './talking.jpg';

import ContentBanner from 'ui/ContentBanner';
import Button from 'ui/Button';
import Input from 'ui/Input';
import Link from 'ui/Link';

import PeopleData from 'people_data';

export default class CertifiedForm extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isLinkDisabled: true
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange({ currentTarget }) {
    const value = currentTarget.value;
    const newState = {
      inputValue: value,
      isLinkDisabled: value.length < 5
    };
    this.setState(newState);
  }

  handleClick(ev) {
    ev.preventDefault();
    const { inputValue } = this.state;
    const doc = window.open('/certified.html?search=' + inputValue, '_blank');
    doc.focus();
  }

  render() {
    const props = {
      id: 'certified',
      title: 'Certificados',
      description: 'Participantes, palestrantes e organizadores',
      icon: 'star',
      image: 'talking.jpg'
    };

    const { inputValue, isLinkDisabled } = this.state;

    return (
      <ContentBanner {...props}>
        <Input
          placeholder="Digite seu nome ou código..."
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <Link
          label="Emitir certificado de participação"
          disabled={isLinkDisabled}
          onClick={this.handleClick}
        />
      </ContentBanner>
    );
  }
}
