import Content from 'ui/Content';
import BrandGroup from 'ui/BrandGroup';
import Brand from 'ui/BrandProfile';

import PartnersData from 'partners_data';

export default class Partnership extends BaseComponent {
  getProfiles() {
    return PartnersData.getDataArray().map((props) => {
      return <Brand {...props} />
    });
  }

  render() {
    let props = {
      id: 'partnership',
      title: 'Parceiros',
      description: 'Quem está junto com a gente',
      icon: 'archive',
      type: 'odd'
    };

    return (
      <Content {...props}>
        <BrandGroup>{ this.getProfiles() }</BrandGroup>
      </Content>
    );
  }
}
