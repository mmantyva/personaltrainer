import React from 'react';

export default function Home() {
   
    return (
        <div className='homebox'>
            <div className='separator'></div>
            <p>This is the home component!</p>
            <p>This app has the following functionalities:</p>
            <p>
                &#x2B50; Pre-existing backend of 2 database tables
                <br/>&#x2B50; CRUD for customer detail management
                <br/>&#x2B50; Adding/deleting customer trainings
                <br/>&#x2B50; React Big Calendar for viewing the trainings in a calendar.
            </p>

        </div>
    );

}