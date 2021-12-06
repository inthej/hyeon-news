import moment from 'moment';

moment.locale('ko');

export class MomentUtils {
  constructor() {
    throw new Error();
  }

  static dt(str) {
    return moment(str);
  }

  static dt2dateTime(str, defaultFormat = 'YYYY.MM.DD HH:mm:ss') {
    if (!str) { return null; }
    const dt = MomentUtils.dt(str);
    return dt.format(defaultFormat);
  }
}
