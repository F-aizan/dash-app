
export interface FormData {
    firstName: string;
    lastName: string;
    status:string
  }
  
  export interface FormState {
    formData: FormData;
  }
  
  export interface UpdateFormDataAction {
    type: 'UPDATE_FORM_DATA';
    payload: FormData;
  }
  
  export type FormActionTypes = UpdateFormDataAction;
  