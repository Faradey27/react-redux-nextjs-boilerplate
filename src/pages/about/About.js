import withRedux from 'next-redux-wrapper';
import createStore from './../../data/redux/create';

const About = () => (
  <div>
    <p>{'About Page'}</p>
  </div>
);

export default withRedux(createStore, null, null)(About);
