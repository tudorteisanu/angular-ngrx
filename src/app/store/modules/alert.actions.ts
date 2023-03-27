import {createAction, props} from "@ngrx/store";
import {CreateAlertInterface} from "./alert.state";

const show = createAction('[Alert] show', props<{alert: CreateAlertInterface}>())
const hide = createAction('[Alert] show', props<{id: number}>())

export {
  show, hide
}
