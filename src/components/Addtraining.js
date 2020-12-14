import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from 'react-bootstrap/Button';
import {MuiPickersUtilsProvider, DateTimePicker} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

export default function Addtraining(props) {
    
    const [training, setTraining] = React.useState(
    {date: '', activity: '', duration: '', customer: ''});

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        console.log(props.trainingCustomer)
        setOpen(true);
    }
  
    const handleClose = () => {
      setOpen(false);
    }

    const addTraining = () => {
        console.log(training);
        props.newTraining({...training, customer: props.trainingCustomer.links[0].href});
        handleClose();
    }

    const handleChange = (e) => {
        setTraining({...training, [e.target.name]: e.target.value})
    }

    return (   
    <div>
        <Button onClick={handleOpen} variant='outline-success' size='sm'>Add training</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>Add training for customer</DialogTitle>
            <DialogContentText>
                Please fill in new training information below.
            </DialogContentText>
            <DialogContent>
                <TextField autoFocus fullWidth margin='dense' name='activity' value={training.activity} label='Activity: '
                onChange={e => handleChange(e)}
                />
                <TextField autoFocus fullWidth margin='dense' type='datetime-local' name='date' InputLabelProps={{shrink: true}}
                value={training.date} label='Date: ' onChange={e => handleChange(e)}
                />  
                <TextField autoFocus fullWidth margin='dense' name='duration' value={training.duration} label='Duration: '
                onChange={e => handleChange(e)}
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={addTraining} variant='success'>Save</Button>
                <Button onClick={handleClose} variant='outline-secondary'>Cancel</Button>
            </DialogActions>
        </Dialog>
    </div>
    )

}