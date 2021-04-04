import Avatar from '@material-ui/core/Avatar';
import {useState} from 'react';
import useFetch from '../useFetch';
import {serverAddress} from '../Utility';

const UserAvatar = ({username, className=null}) => {
  const [target, ] = useState({uri: `${serverAddress}/users.php`, data: {name: username, type: 'info', field: 'avatar'}});
  const serverResponse = useFetch(target);

  let imgSrc = ""; 

  if (serverResponse.data && serverResponse.data.result) { 
    imgSrc = serverResponse.data.userInfo.avatar;
  }
  return (
    <Avatar
      alt={username}
      src={imgSrc}
      className={className}
    />
  );
}

export default UserAvatar
