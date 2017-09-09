export const LOAD_ENTITIES_START = 'LOAD_ENTITIES_START';
export const LOAD_ENTITIES_SUCCESS = 'LOAD_ENTITIES_SUCCESS';
export const LOAD_ENTITIES_FAILURE = 'LOAD_ENTITIES_FAILURE';

export const loadEntities = ({ viewId, endpoint }) => ({
  types: [LOAD_ENTITIES_START, LOAD_ENTITIES_SUCCESS, LOAD_ENTITIES_FAILURE],
  meta: { viewId },
  promise: ({ api }) => api.get(endpoint),
});

export const selectEntitiesByViewId = (state, viewId) => state.entities[viewId] || [];

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_ENTITIES_SUCCESS: {
      return { ...state, [action.meta.viewId]: action.payload };
    }
    default:
      return state;
  }
};
