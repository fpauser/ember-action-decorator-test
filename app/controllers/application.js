import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @action
  callAction(action, params) {
    return { action, params };
  }

  // Renaming the action parameter
  // to e.g. 'aktion' would work.
  //
  // @action
  // callAction(aktion, params) {
  //   return { aktion, params };
  // }
}
