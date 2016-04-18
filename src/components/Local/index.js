import bkg from './hotel-itaimbe.jpg';

import ContentBanner from 'ui/ContentBanner';

export default class Local extends BaseComponent {
  render() {
    let props = {
      id: 'local',
      title: 'Local do Evento',
      description: 'Onde será o evento?',
      icon: 'location',
      image: 'hotel-itaimbe.jpg'
    };

    return (
      <ContentBanner {...props}>
        <address>Itaimbé Palace Hotel - Rua Venâncio Aires, 2741 - Santa Maria - RS</address>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.1819726302842!2d-53.80452268502868!3d-29.685503421634134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cb155f4bc369%3A0xf5231f2db7f99515!2sItaimb%C3%A9+Palace+Hotel!5e0!3m2!1spt-BR!2sbr!4v1460430169476"
          width="100%"
          height="450"
          frameBorder="0"
          style={{border: 0, marginTop: '20px'}}
          allowFullScreen>
        </iframe>
      </ContentBanner>
    );
  }
}
