import { mount } from 'enzyme';
import About from './../index';
import { mockLocales } from './../../../../__test__/utils/mockedAxios';

const localeData = {
  en: require('./../../../assets/locales/en.json'),
};

export default class AboutDriver {
  constructor() {
    mockLocales();
  }

  when = {
    created: (props) => {
      this.component = mount(<About
        localeData={localeData}
        {...props}
      />);

      return this;
    },
  };

  get = {
    initialProps: () => About.getInitialProps(),
    isOk: () => Boolean(typeof this.component === 'object' && Object.keys(this.component).length > 0),
    text: () => this.component.text(),
  }
}
