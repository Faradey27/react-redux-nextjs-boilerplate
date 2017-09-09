import dataView from './modules/dataView';
import entities from './modules/entities';

export default (reducers) => ({
  dataView,
  entities,
  ...reducers,
});
