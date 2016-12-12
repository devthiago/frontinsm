import { isEmpty } from 'lodash';

import styles from './style.css';

import favicon from '../DefaultPage/favicon.ico';
import certified2016 from './fis2016crtfcdtmpl.jpg';

import PageRoot from 'ui/PageRoot';
import PeopleData from 'people_data';

export default class Certified extends BaseComponent {
  constructor(...args) {
    super(...args);

    const width = 2339;
    const height = 1654;

    this.canvas = undefined;
    this.imageProps = { width, height };
    this.canvasProps = {
      ref: (c) => this.canvas = c,
      ...this.imageProps
    };
  }

  drawAttendeeType(ctx, title) {
    ctx.font = '72pt Helvetica';
    ctx.fillStyle = '#fff';
    ctx.fillText(title, 880, 420);
  }

  drawAttendeeName(ctx, name) {
    ctx.font = '58pt Helvetica';
    ctx.fillStyle = '#000';
    ctx.fillText(name, 200, 790);
  }

  drawValidURL(ctx, url) {
    ctx.font = '19pt Helvetica';
    ctx.fillStyle = '#fff';
    ctx.fillText(url, 204, 1610);
  }

  drawTalkTitle(ctx, talkTitle) {
    if (talkTitle !== null) {
      ctx.font = '28pt Helvetica';
      ctx.fillStyle = '#000';
      ctx.fillText('Título da palestra:', 204, 1200);

      ctx.font = '48pt Helvetica';
      ctx.fillStyle = '#000';
      ctx.fillText(talkTitle, 204, 1270);
    }
  }

  componentDidMount() {
    const { width, height } = this.imageProps;
    const { params: { search } } = this.props;

    if (isEmpty(search)) {
      window.location = '/404.html';
    }

    const data = PeopleData.getDataBy({ search: decodeURI(search) });
    if (data.length === 0) {
      window.location = '/404.html';
    }
    const person = data[0];

    let personType = 'Participante';
    let talkName = null;

    switch (person.type) {
      case 'manager':
        personType = 'Organizador(a)';
        break;
      case 'speaker':
        personType = 'Palestrante';
        talkName = person.talk.title;
        break;
      default:
        personType = 'Participante';
        break;
    }

    const canvas = this.canvas;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');

    const drawAttendeeType = this.drawAttendeeType;
    const drawAttendeeName = this.drawAttendeeName;
    const drawValidURL = this.drawValidURL;
    const drawTalkTitle = this.drawTalkTitle;

    // draw image
    const img = new Image();
    img.src = 'assets/fis2016crtfcdtmpl.jpg';
    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);

      drawAttendeeType(ctx, personType);
      drawAttendeeName(ctx, `${person.name},`);
      drawTalkTitle(ctx, talkName);
      drawValidURL(ctx, window.location.href);
    };

    // draw text
  }

  render() {
    return (
      <PageRoot>
        <div className={styles.wrapper}>
          <canvas name="certificado" ref={(c) => this.canvas = c}></canvas>
        </div>
      </PageRoot>
    );
  }
}
