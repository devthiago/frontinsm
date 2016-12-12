import { isEmpty } from 'lodash';
import { findByNameOrCode } from '../helpers/filters';

import { attendees } from './attendees';

export default class AttendeesData {
  static getDataBy(options = {}) {
    const { year, search } = options;
    const byYear = year || '2016';
    const response = attendees[byYear];

    if (response.length > 0 && !isEmpty(search)) {
      return response.filter(findByNameOrCode(search));
    }

    return response;
  }
}
