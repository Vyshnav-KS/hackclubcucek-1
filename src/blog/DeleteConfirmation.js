import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import {useEffect, useState} from 'react';
import {getCookie, serverAddress} from '../Utility';
import useFetch from '../useFetch';
import {useHistory} from 'react-router';
import {getConfig} from '@testing-library/dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '90%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  button: {
    margin: theme.spacing(2),
  },
}));


const DeleteConfirmation = ({open, setOpen, postId}) => {
  const classes = useStyles();
  const [target, setTarget] = useState({uri: '', data: {type: 'delete', id: postId}});
  const [labeltext, setLabeltext] = useState("You can't undo this!");
  const serverResponse = useFetch(target);

  const history = useHistory();
  const handleClose = () => {
    setOpen(!open)
  }

  const deletePost = () => {
    setLabeltext("Deleting ...");
    setTarget({uri: `${serverAddress}/blogPost.php`, data: {
      type: 'delete', id: postId, author: getCookie('username'), authorPass: getCookie('hash')}});
  }

  useEffect(() => {
    if (serverResponse.error.error) {
      setLabeltext(serverResponse.error.msg);
    }
    if (serverResponse.data) {
      if (serverResponse.data.result) {
        history.push('/blog');
      }
      else {
        setLabeltext(serverResponse.data.err);
      }
    }
  }, [serverResponse.error, serverResponse.data])

  const body = (
    <div className={classes.paper}>
      <Typography variant='h4'>
        Delete This Post?
      </Typography>
      <p id="simple-modal-description">
        {labeltext}
      </p>
      <Button variant="contained" className={classes.button} onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="contained" color="secondary" className={classes.button} onClick={deletePost}>
        Delete
      </Button>
    </div>
  );


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default DeleteConfirmation
