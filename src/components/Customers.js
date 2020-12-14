import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from 'react-bootstrap/Button';
import {Trash} from 'react-bootstrap-icons';

import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';
import Addtraining from './Addtraining';

const Customers = () => {

    const [customers, setCustomers] = useState([]);
    const api_customers = 'https://customerrest.herokuapp.com/api/customers/';
    const api_trainings = 'https://customerrest.herokuapp.com/api/trainings/';

    useEffect(() => {
        fetchCustomers();
    }, [])

    const fetchCustomers = () => {
        fetch(api_customers)
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err))
        }

    const newCustomer = (customer) => {
        fetch(api_customers, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customer)
            })
        .then(res => fetchCustomers())
        .catch(err => console.error(err))
    }

    const updateCustomer = (customer, link) => {
        fetch(link, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(customer)
        })
    .then(res => fetchCustomers())
    .catch(err => console.error(err))
    }

    const deleteCustomer = (link) => {
        if (window.confirm("Are you sure you want to delete this customer?")) {
            fetch(link, {method: 'DELETE'})
            .then(res => fetchCustomers())
            .catch(err => console.error(err))
        }
    }

    const newTraining = (training) => {
        fetch(api_trainings, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(training)
        })
        .catch(err => console.error(err))
    }

    const caseInsensitive = ({id, value}, row) =>
        row[id]?row[id].toLowerCase().includes(value.toLowerCase()): true

    const columns = [
        {
            Header: '',
            accessor: 'links[2].href',
            width: 110,
            sortable: false,
            filterable: false,
            Cell: train => 
                <Addtraining newTraining={newTraining} trainingCustomer={train.original} />  
        },
        {
            Header: 'First name',
            accessor: 'firstname'
        },
        {
            Header: 'Last name',
            accessor: 'lastname'
        },
        {
            Header: 'Street address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Post code',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            Header: '',
            accessor: '',
            width: 70,
            sortable: false,
            filterable: false,
            Cell: row => 
                <Editcustomer updateCustomer={updateCustomer} customer={row.original} />
        },
        {
            Header: '',
            accessor: 'links[0].href',
            width: 70,
            sortable: false,
            filterable: false,
            Cell: row =>
                <Button onClick={() => deleteCustomer(row.value)} variant='outline-light'><Trash color='red' size={20} /></Button>
        }

    ]

    return (
        <div>
            <Addcustomer newCustomer={newCustomer} />
            <ReactTable data={customers} columns={columns} filterable={true}
            defaultFilterMethod={caseInsensitive} style={{margin: 30, marginTop: 10}}
            />  
        </div>
    );

};

export default Customers;