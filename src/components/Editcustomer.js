import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import Button from 'react-bootstrap/Button';

export default function Editcustomer(props) {
    
    const [customer, setCustomer] = React.useState(
    {firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''});

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setCustomer(
            {firstname: props.customer.firstname, lastname: props.customer.lastname, streetaddress: props.customer.streetaddress,
            postcode: props.customer.postcode, city: props.customer.city, email: props.customer.email, phone: props.customer.phone}
        );
        setOpen(true);
    }
  
    const handleClose = () => {
        setOpen(false);
    }

    const updateCustomer = () => {
        props.updateCustomer(customer, props.customer.links[0].href);
        handleClose();
    }

    const handleChange = (e) => {
        setCustomer({...customer, [e.target.name]: e.target.value})
    }

    return (
        
    <div>
        <Button onClick={handleOpen} variant='outline-info' size='sm'>Edit</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>
                <Typography variant='h5' align='center'>Edit customer information</Typography>
            </DialogTitle>
            <DialogContentText>
                <Typography align='center'>Edit customer details below.</Typography>
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
                <Button onClick={updateCustomer} variant='success'>Save</Button>
                <Button onClick={handleClose} variant='outline-secondary'>Cancel</Button>
            </DialogActions>
        </Dialog>
    </div>
    )

}