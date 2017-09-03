import { mount } from 'enzyme';
import About from './../index';

export default class AboutDriver {
  when = {
    created: (props) => {
      this.component = mount(<About {...props} />);

      return this;
    },
  };

  get = {
    isOk: () => Boolean(typeof this.component === 'object' && Object.keys(this.component).length > 0),
    text: () => this.component.text(),
  }
}
