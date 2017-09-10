import Jed from 'jed';
import en from './../assets/locales/en.json';
import ru from './../assets/locales/ru.json';

const locales = {
  en, ru,
};

class I18n {
  constructor({ locale }) {
    this.setLanguage(locale);
  }

  setLanguage = (locale) => {
    this.localeData = locales[locale];
    this.locale = locale;

    this.jed = new Jed(this.localeData);
  }

  l = (text) => this.jed.gettext(text);
}

export default (
  new I18n({ locale: 'en' })
);
