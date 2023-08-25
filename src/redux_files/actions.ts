// actions.ts
import { FormData, FormActionTypes } from './types';

export const updateFormData = (formData: FormData): FormActionTypes => ({
  type: 'UPDATE_FORM_DATA',
  payload: formData,
});
