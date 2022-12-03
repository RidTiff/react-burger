import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../services/reducers/rootReducer';
import thunk from 'redux-thunk';
import { socketMiddleware } from './middleware/socket-middleware';
import { wsUrl } from '../utils/constants';

import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
} from './actions/wsActions';

const wsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE, 
};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 

const enhancer = composeEnhancers(applyMiddleware(
    thunk, 
    socketMiddleware(wsUrl, wsActions))
  );

export const store = createStore(rootReducer, enhancer)