import React, {useState, useEffect} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const CalendarView = () => {

    const [trainings, setTrainings] = useState([]);
    const get_url = 'https://customerrest.herokuapp.com/gettrainings/';
    const localizer = momentLocalizer(moment);
    moment.locale('en-gb', {
        week: {
            dow: 1,
            doy: 1,
        },
    });

    useEffect(() => {
        fetchTrainings();
    }, [])

    const fetchTrainings= () => {
        fetch(get_url)
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
    }

    const events = trainings.map(training => {
        let date = new Date(training.date)
        
        const appts = {
            title: training.activity + ' (' + training.customer.firstname + ' ' + training.customer.lastname + '), ' + training.duration + ' minutes',
            start: date,
            end: new Date(moment(date).add('minutes', training.duration)),
        }
  
        return appts
    }) 
  
    return(
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        defaultView='month'
        style={{height: 600, margin: 50}}
      />
    )

}

export default CalendarView;