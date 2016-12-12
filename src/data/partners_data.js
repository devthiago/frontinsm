import _ from 'lodash';

const createPartner = (name, obj) => {
  let key = name.toLowerCase().replace(" ", "_").replace(".", "_");
  let prtObj = {
    key: key + "_partner",
    code: key + "_partner",
    name
  };

  return _.merge(prtObj, obj);
};

const partners = {
  GloboCom: createPartner("Globo.com", {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Logo_do_provedor_Globo.png",
    website: "http://www.globo.com/"
  }),

  EuCompraria: createPartner("Eu Compraria", {
    logo: "https://eucompraria.com.br/media/img/logo/menino.png",
    website: "https://eucompraria.com.br/"
  }),

  Jetimob: createPartner("Jetimob", {
    logo: "https://www.jetimob.com/imagens/frontinsm/marca-jetimob.png",
    website: "https://www.jetimob.com/"
  })
};

export default class PartnersData {
  static getData() {
    return partners;
  }

  static getDataArray() {
    let data = [];
    let oPartners = this.getData();
    for (let key in oPartners) {
      data.push(oPartners[key]);
    }
    return data;
  }
}
