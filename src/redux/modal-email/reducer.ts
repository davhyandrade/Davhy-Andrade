import { ModalEmailActionTypes } from './action-types';

const initialState = {
  isActiveModal: false,
};

interface IAction {
  type: string;
}

export default function modalEmailReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case ModalEmailActionTypes.ENABLE_MODAL:
      if (state.isActiveModal) {
        return { ...state, isActiveModal: false };
      } else {
        return { ...state, isActiveModal: true };
      }
    default:
      return state;
  }
}
        