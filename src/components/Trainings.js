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

    const deleteTraining = link => {
        console.log(link);
        fetch(api_url + link, {method: 'DELETE'})
        .then(res => fetchTrainings())
        .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: 'Customer',
            id: 'fullname',
            accessor: name => {
                return name.customer.firstname + ' ' + name.customer.lastname
            }
        },
        {
            Header: 'Date',
            id: 'localiseddate',
            accessor: local => {
                return moment(local.date).format('DD.MM.YYYY, HH:mm')
            }
        },
        {
            Header: 'Duration',
            id: 'minutes',
            accessor: minutes => {
                return minutes.duration + ' minutes'
            }
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: '',
            accessor: '',
            width: 80,
            sortable: false,
            filterable: false,
            Cell: row => 
                <Button onClick={() => deleteTraining(row.value)} variant='outline-light'> <Trash color='red' size={20} /></Button>

        }
    ]

    return (
        <div>
            <ReactTable data={trainings} columns={columns} filterable={true} />  
        </div>
    );

};

export default Trainings;