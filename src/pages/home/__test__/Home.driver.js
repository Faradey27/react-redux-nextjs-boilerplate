import { mount } from 'enzyme';
import { getStore } from './../../../../__test__/utils/mockedStore';
import About from './../../index';

export default class AboutDriver {
  when = {
    created: (props) => {
      this.component = mount(<About {...props} />);

      return this;
    },

    doServerDataLoad: () => {
      About.getInitialProps({ isServer: true, store: getStore() });
    },
  };

  get = {
    isOk: () => Boolean(typeof this.component === 'object' && Object.keys(this.component).length > 0),
    text: () => this.component.text(),
    numberOfWidgets: () => this.component.find('[data-hook="home-widget"]').length,
  }
}
