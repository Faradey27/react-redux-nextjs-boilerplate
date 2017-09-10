/* eslint-disable fp/no-let */
/* eslint-disable fp/no-mutation */

import Jed from 'jed';
import ajax from './../utils/ajax';

class I18n {
  locales = {};
  currentLanguage = 'en';
  inited = false;

  loadTranslations = (locale = this.currentLanguage) => ajax.get(`/assets/locales/${locale}.json`)

  init = ({ locale = this.currentLanguage, localeData }) => {
    this.locales[locale] = localeData;
    this.setLanguage(locale);

    return this.l;
  }

  setLanguage = (locale) => {
    this.currentLanguage = locale;
    this.jed = new Jed(this.locales[locale]);
    this.inited = true;
  }

  l = (text) => this.jed.gettext(text);
}

export default (
  new I18n({ locale: 'en' })
);
