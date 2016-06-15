import Content from 'ui/Content';
import Eventick from 'ui/Eventick';
import ConductCode from 'ui/ConductCode';

export default class Tickets extends BaseComponent {
  render() {
    let props = {
      id: 'tickets',
      title: 'Participe do Evento',
      description: 'Garanta já seu ticket',
      icon: 'cart',
      type: 'odd'
    };

    return (
      <Content {...props}>
        <Eventick evid="ivv5j7mxn0zsjazz" />
        <ConductCode />
      </Content>
    );
  }
}
