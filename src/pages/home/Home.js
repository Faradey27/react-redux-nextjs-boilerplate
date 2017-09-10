import { Component } from 'react';
import { array } from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { l } from './../../i18n';
import createStore from './../../data/redux/create';
import { loadEntities, selectEntitiesByViewId } from './../../data/redux/modules/entities';

const WIDGETS_VIEW_ID = 'WIDGETS';

class Home extends Component {
  static propTypes = {
    widgets: array,
  }

  static getInitialProps({ store, isServer }) {
    store.dispatch(loadEntities({ viewId: WIDGETS_VIEW_ID }));

    return { isServer };
  }

  render() {
    return (
      <div data-testid="homePage">
        <p>{l('Home Page')}</p>
        {
          this.props.widgets.map((widget) => (
            <div
              data-hook="home-widget"
              key={widget.id}
            >
              {widget.id}
            </div>
          ))
        }
      </div>
    );
  }
}

export default withRedux(
  createStore,
  (state) => ({
    widgets: selectEntitiesByViewId(state, WIDGETS_VIEW_ID),
  }),
  { loadEntities }
)(Home);
