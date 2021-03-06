import { Middleware } from 'redux';

const req = require.context('.', true, /.+\.middleware\.ts$/);

const middlewares: ReadonlyArray<Middleware> = req
  .keys()
  .map(key => req(key).default);

export default middlewares;
