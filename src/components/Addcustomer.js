import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from  '@material-ui/core/Typography';
import 'fontsource-roboto';
import Button from 'react-bootstrap/Button';
import {Pencil} from 'react-bootstrap-icons';

export default function Addcustomer(props) {
    
    const [customer, setCustomer] = React.useState(
    {firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''});

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    }
  
    const handleClose = () => {
      setOpen(false);
    }

    // props from newCustomer function on customer list page
    const addCustomer = () => {
        props.newCustomer(customer);
        handleClose();
    }

    const handleChange = (e) => {
        setCustomer({...customer, [e.target.name]: e.target.value})
    }

    return (
        
    <div>
        <div style={{display: 'flex'}}>
            <Button style={{marginTop: 12, marginLeft: 30}} variant='warning' onClick={handleOpen}><Pencil /> Add customer</Button>
        </div>
        <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>
                <Typography variant='h5' align='center'>Add new customer</Typography>
            </DialogTitle>
            <DialogContentText>
                <Typography align='center'>Please fill in new customer information below.</Typography>
            </DialogContentText>
            <DialogContent>
                <TextField autoFocus fullWidth margin='dense' name='firstname' value={customer.firstname} label='First name: '
                    onChange={e => handleChange(e)}
                />
                <TextField fullWidth margin='dense' name='lastname' value={customer.lastname} label='Last name: '
                    onChange={e => handleChange(e)}
                />
                <TextField fullWidth margin='dense' name='streetaddress' value={customer.streetaddress} label='Street address: '
                    onChange={e => handleChange(e)}
                />
                <TextField fullWidth margin='dense' name='postcode' value={customer.postcode} label='Post code: '
                    onChange={e => handleChange(e)}
                />
                <TextField fullWidth margin='dense' name='city' value={customer.city} label='City: '
                    onChange={e => handleChange(e)}
                />
                <TextField fullWidth margin='dense' name='email' value={customer.email} label='Email: '
                    onChange={e => handleChange(e)}
                />
                <TextField fullWidth margin='dense' name='phone' value={customer.phone} label='Phone: '
                    onChange={e => handleChange(e)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={addCustomer} variant='success'>Save</Button>
                <Button onClick={handleClose} variant='outline-secondary'>Cancel</Button>
            </DialogActions>
        </Dialog>
    </div>
    )

}