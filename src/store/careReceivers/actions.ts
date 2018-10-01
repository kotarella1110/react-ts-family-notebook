import actionCreatorFactory from 'typescript-fsa';
import * as schemas from '../schemas';
// import { CareReceiver } from 'models';

const actionCreator = actionCreatorFactory('careRedceivers');

export const FETCH: string = 'fetch';

export const fetchCareReceivers = actionCreator.async<
  {},
  {
    entities: {
      careReceivers: any;
      folders?: any;
    };
    result: any;
  }
>(FETCH, {
  schema: [schemas.careReceiver],
});
