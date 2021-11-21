export class ValueUtils {
  constructor() {
    throw new Error();
  }

  static nvl(str, defaultValue) {
    if (ValueUtils.isEmpty(str)) return defaultValue;
    return str;
  }

  static isEmpty(str, includeBlank = true) {
    const empty = str === null || str === undefined || (includeBlank && str === "");
    return empty;
  }
}
