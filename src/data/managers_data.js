import { merge, isEmpty } from 'lodash';
import { findByNameOrCode } from '../helpers/filters';

const createManager = (name, obj) => {
  let key = name.toLowerCase().replace(" ", "_");
  let mngObj = {
    key: key + "_manager",
    code: key + "_manager",
    type: 'manager',
    name
  };

  return merge(mngObj, obj);
};

const managers = {
  ThiagoAlves: createManager("Thiago Alves", {
    photo: "https://avatars0.githubusercontent.com/u/5190217?v=3&s=460",
    twitter: "https://twitter.com/taltk9",
    github: "https://github.com/taltk9",
    linkedin: "https://br.linkedin.com/in/thiagoalvesluiz"
  }),

  FuadSaud: createManager("Fuad Saud", {
    photo: "https://avatars1.githubusercontent.com/u/1993787?v=3&s=460",
    twitter: "https://twitter.com/fuadsaud",
    github: "https://github.com/fuadsaud",
    linkedin: "https://www.linkedin.com/in/fuadsaud"
  }),

  CristianoNicola: createManager("Cristiano Nicola", {
    photo: "https://avatars3.githubusercontent.com/u/13872701?v=3&s=460",
    facebook: "https://www.facebook.com/cristiano.nicola.3",
    github: "https://github.com/CristianoNicolaFerreira",
    linkedin: "https://www.linkedin.com/in/cristiano-nicola-ferreira-9b7b31102?trk=hp-identity-photo"
  }),

  ToninBolzan: createManager("Tonin Bolzan", {
    photo: "https://avatars0.githubusercontent.com/u/1386782?v=3&s=460",
    facebook: "https://www.facebook.com/tonybolzan",
    github: "https://github.com/tonybolzan",
    google: "https://plus.google.com/+ToninRBolzan/"
  }),

  FernandoSavio: createManager("Fernando Sávio", {
    photo: "https://avatars3.githubusercontent.com/u/1533805?v=3&s=460",
    name: "Fernando Sávio",
    twitter: "https://twitter.com/fernandosavio86/",
    facebook: "https://www.facebook.com/fernandosavio86",
    github: "https://github.com/fernandosavio"
  })
};

export default class ManagersData {
  static getData() {
    return managers;
  }

  static getDataArray() {
    const data = [];
    const oManagers = this.getData();
    for (let key in oManagers) {
      data.push(oManagers[key]);
    }
    return data;
  }

  static getDataBy(options = {}) {
    const { year, search } = options;
    const response = this.getDataArray();

    if (response.length > 0 && !isEmpty(search)) {
      return response.filter(findByNameOrCode(search));
    }

    return response;
  }
}
