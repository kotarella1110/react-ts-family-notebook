import { Store, createStore, applyMiddleware, compose } from 'redux';
import { History } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import config from 'config';
import middlewares from './middlewares';
import reducer from './reducer';
import sagas from './sagas';

const devtools: any =
  config.isDev && config.isBrowser && (window as any).devToolsExtension
    ? (window as any).devToolsExtension
    : () => (fn: any) => fn;

const configureStore = (initialState: object = {}, history: History) => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancers: ReadonlyArray<any> = [
    applyMiddleware(...middlewares, sagaMiddleware, routerMiddleware(history)),
    devtools(),
  ];

  const store: Store = createStore(
    connectRouter(history)(reducer),
    initialState,
    compose(...enhancers)
  );

  // tslint:disable-next-line:no-expression-statement
  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
