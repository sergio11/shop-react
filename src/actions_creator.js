import ActionTypes from './action_types';
import Dispatcher from 'dispatcher';

/*
 * @class Actions
 */
class ActionsCreator {

  /*
   * @constructs Actions
   * @param {Object} dispatcher
   */
  constructor (Dispatcher) {
    this.dispatcher = Dispatcher;
  }


}

export default new ActionsCreator(Dispatcher);