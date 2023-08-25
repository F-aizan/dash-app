import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFormData } from "../redux_files/actions";
import { RootState } from "../redux_files/rootreducer";

export function Edit() {
  const navigate = useNavigate();
  const formData = useSelector((state: RootState) => state.form.formData);
  const dispatch = useDispatch();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    dispatch(updateFormData(updatedFormData));
  };
  const Adduser = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateFormData(formData))
    navigate("/contacts")
  }
    
    return(
    <div className="form">
     <h3>Edit Contact Screen</h3>
     <form onSubmit={Adduser}>
       <div className="form-group">
         <label htmlFor="firstName">First Name</label>
         <input
           type="text"
           className="form-control"
           name="firstName"
           id="f_name"
           value={formData.firstName}
           onChange={handleFormChange}
           required
         />
       </div>
       <div className="form-group">
         <label htmlFor="lastName">Last Name</label>
         <input
           type="text"
           className="form-control"
           name="lastName"
           id="l_name"
           value={formData.lastName}
           onChange={handleFormChange}
           required
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
         <label htmlFor="Active">Status</label>
           <input
             className="form-check-input"
             type="radio"
             name="status"
             id="Active"
             value="Active"
             checked={formData.status === "Active"}
             onChange={handleFormChange}
             required
           />
           <label htmlFor="Active" className="form-check-label">Active</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="status"
             id="Inactive"
             value="Inactive"
             checked={formData.status === "Inactive"}
             onChange={handleFormChange}
             required
           />
           <label htmlFor="Inactive" className="form-check-label">Inactive</label>
         </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Save Editted Contact"
         />
       </div>
     </form>
   </div>
    );
    
}