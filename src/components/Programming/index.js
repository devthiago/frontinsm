import moment from 'moment';

import Content from 'ui/Content';
import Timeline from 'ui/Timeline';
import TimelineBlock from 'ui/TimelineBlock';

import SpeakersData from 'speakers_data';

export default class Programming extends BaseComponent {
  getProgramming() {
    let _checkIn = { key: 'time-for-checkin', duration: 30, type: 'check', title: 'Credenciamento' };
    let _coffeBreak1 = { key: 'coffee-break1', duration: 30, type: 'interval', title: 'Coffee break' };
    let _lunch = { key: 'time-for-lunch', duration: 120, type: 'interval', title: 'Almoço' };
    let _coffeBreak2 = { key: 'coffee-break-2', duration: 15, type: 'interval', title: 'Coffee break' };
    let _checkOut = { key: 'finishing', duration: 30, type: 'check', title: 'Encerramento' };

    let {
      IcaroHeimig,
      GutoFoletto,
      MatheusAzzi,
      AlmirFilho,
      MauricioKlein,
      MauricioDick,
      JaydsonGomes,
      GuilhermeSerrano
    } = SpeakersData.getTalkData();

    const programming = [
      _checkIn,

      MauricioDick,
      MatheusAzzi,

      _coffeBreak1,

      IcaroHeimig,
      GuilhermeSerrano,

      _lunch,

      MauricioKlein,
      JaydsonGomes,
      AlmirFilho,

      _coffeBreak2,

      GutoFoletto,

      _checkOut
    ];

    const beginning = moment('25/06/2016 08:00', 'DD/MM/YYYY hh:mm');
    let next = beginning;

    return programming.map((props) => {
      props.moment = next.format('HH:mm');
      next = next.add(props.duration, 'm');

      if ( props.type === 'check' ) {
        props.icon = 'check';
      } else if ( props.type === 'interval' ) {
        props.icon = 'bell';
      }

      return <TimelineBlock {...props} />
    });
  }

  render() {
    let props = {
      id: 'programming',
      title: 'Programação',
      description: 'Todo o conteúdo do evento',
      icon: 'clock',
      type: 'odd'
    };

    return (
      <Content {...props}>
        <Timeline>
          {this.getProgramming()}
        </Timeline>
      </Content>
    );
  }
}
