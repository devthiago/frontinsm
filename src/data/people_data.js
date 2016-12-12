import { find, reduce } from 'lodash';

import AttendeesData from './attendees_data.js';
import ManagersData from './managers_data.js';
import SpeakersData from './speakers_data.js';

export default class PeopleData {
  static getDataBy(options = {}) {
    const objs = [
      // ManagersData,
      // SpeakersData,
      AttendeesData
    ];

    return reduce(objs, (acc, cur) => {
      if (acc.length > 0) {
        return acc;
      }
      return cur.getDataBy(options);
    }, []);
  }
}
