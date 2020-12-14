import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto';

export default function Home() {
   
    return (
        <div className='homebox'>
            <div className='separator'></div>
            <Container maxWidth='sm'>
                <Typography variant='h5'>You're viewing the Personal Training app!</Typography>
                <div className='separator'></div>
                <Typography variant='body1'>
                    <p>This ReactJS front end app has the following functionalities:</p>
                    <p>
                        &#x2B50; Pre-existing backend of 2 database tables
                        <br/>&#x2B50; CRUD for customer detail management
                        <br/>&#x2B50; Adding &#x26; deleting customer trainings
                        <br/>&#x2B50; A calendar view for existing trainings.
                    </p>
                    <p>Libraries/frameworks used: React Router, React Table v6, Material-UI, React Bootstrap, MomentJS, React Big Calendar.</p>
                </Typography>
            </Container>
        </div>
    )

}