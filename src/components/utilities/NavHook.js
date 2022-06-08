import {useHistory} from 'react';

const NavHook = (props) => {
    const history = useHistory();
   
      history.push(props.url);
}

export default NavHook
