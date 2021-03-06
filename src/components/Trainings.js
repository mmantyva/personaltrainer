import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import {Trash} from 'react-bootstrap-icons';


const Trainings = () => {

    const [trainings, setTrainings] = useState([]);
    const get_url = 'https://customerrest.herokuapp.com/gettrainings/';
    const api_url = 'https://customerrest.herokuapp.com/api/trainings/';

    useEffect(() => {
        fetchTrainings();
    }, [])

    const fetchTrainings= () => {
        fetch(get_url)
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
    }

    const deleteTraining = id => {
        if (window.confirm("Are you sure you want to delete this training?")) {
            fetch(api_url + id, {method: 'DELETE'})
            .then(res => fetchTrainings())
            .catch(err => console.error(err))
        }
    }

    const caseInsensitive = ({id, value}, row) =>
        row[id]?row[id].toLowerCase().includes(value.toLowerCase()): true

    const columns = [
        {
            Header: 'Customer', id: 'fullname',
            accessor: name => {return name.customer.firstname + ' ' + name.customer.lastname}
        },
        {
            Header: 'Activity', accessor: 'activity'
        },
        {
            Header: 'Duration', id: 'minutes',
            accessor: minutes => {return minutes.duration + ' minutes'}
        },
        {
            Header: 'Date', id: 'localiseddate',
            accessor: local => {return moment(local.date).format('DD.MM.YYYY, HH:mm')}
        },
        {
            Header: '', accessor: 'id', width: 80, sortable: false, filterable: false,
            Cell: row => <Button onClick={() => deleteTraining(row.value)} variant='outline-light'>
            <Trash color='red' size={20} /></Button>}
    ]

    return (
        <div>
            <ReactTable data={trainings} columns={columns} filterable={true} defaultPageSize={20}
            defaultFilterMethod={caseInsensitive} style={{margin: 30, marginTop: 60}}
            />  
        </div>
    )
}

export default Trainings;