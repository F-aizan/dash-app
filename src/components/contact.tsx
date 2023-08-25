import {Navigate, NavLink} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import Create  from './create_contact';
import { RootState } from '../redux_files/rootreducer';
import {useNavigate} from 'react-router'

interface comps {
    f_name:string,
    l_name:string,
    status:string
}

const Button = () => {
    return (
        <div className='button'>
                <NavLink  to={"/create_contact"}>
                    Create Contact
                </NavLink>
        </div>
    )
}

const Alert = () => {
    return (
        <div className='alert'>
            <pre>No Contact Found</pre>
            <pre>Please add contact from</pre>
            <pre>Create Contact Button</pre>
        </div>
    )
}

const Persons = (props:comps) => {
    const navigate = useNavigate();
    return (
        <div className='contacts'>
            <pre>First Name:{props.f_name}</pre>
            <pre>Last Name:{props.l_name}</pre>
            <pre>Status: {props.status}</pre>
            <input type="submit" value={"Edit"} onClick={() => navigate("/edit")}/><br/>
            <input type="submit" value={"Delete"} onClick={() => navigate("/delete")}/>
        </div>
    )
}

export default function Contacts() {
    const formData = useSelector((state: RootState) => state.form.formData);
    return (
        <div>
            <Button />
            {formData.firstName =="" ? <Alert /> : <Persons f_name={formData.firstName} l_name={formData.lastName}  status={formData.status}/>}

        </div>
    );
}
