import { Actions, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_SUCCESS: {
      return featureAdapter.addAll(action.payload.items, {
        ...state,
        hasLoaded: true,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.LOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    case ActionTypes.LOAD_ONE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_ONE_SUCCESS: {
      return featureAdapter.addOne(action.payload.item, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.UPDATE_SUCCESS: {
      return featureAdapter.updateOne(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.CREATE_SUCCESS: {
      return featureAdapter.addOne(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.DELETE_SUCCESS: {
      return featureAdapter.removeOne(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    default: {
      return state;
    }
  }
}
