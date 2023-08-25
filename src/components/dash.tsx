import {NavLink} from 'react-router-dom';
function dash_board() {
  return (
    <nav className='navbar'>
      <NavLink id='Contact' to={"/contacts"}>Contacts</NavLink>
      <NavLink id='charts_maps' to={"/charts_maps"}>Charts and Maps</NavLink>
    </nav>
  );
}
export default dash_board