import {CategoryType} from "./AppTypes";

export default {}

export const AppNames = (function () {
  return {
    CategoryType: function (type) {
      switch (type) {
        case CategoryType.all: return '전체보기';
        case CategoryType.business: return '비즈니스';
        case CategoryType.entertainment: return '엔터테인먼트';
        case CategoryType.health: return '건강';
        case CategoryType.science: return '과학';
        case CategoryType.sports: return '스포츠';
        case CategoryType.technology: return '기술';
        default: return null;
      }
    }
  }
}());
