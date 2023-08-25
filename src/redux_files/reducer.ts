
import { FormState, FormActionTypes } from './types';

const initialState: FormState = {
  formData: {
    firstName: "",
    lastName: "",
    status:""
  },
};

const formReducer = (state = initialState, action: FormActionTypes): FormState => {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
