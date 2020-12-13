import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from 'react-bootstrap/Button';
import {Trash} from 'react-bootstrap-icons';

import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';

const Customers = () => {

    const [customers, setCustomers] = useState([]);
    const api_customers = 'https://customerrest.herokuapp.com/api/customers';

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
        fetch(link, {method: 'DELETE'})
        .then(res => fetchCustomers())
        .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: '',
            accessor: '',
            width: 110,
            sortable: false,
            filterable: false,
            Cell: row => 
            <Button variant='outline-success' size='sm'>Add training</Button>
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
            width: 80,
            sortable: false,
            filterable: false,
            Cell: row => 
                <Editcustomer updateCustomer={updateCustomer} customer={row.original} />
        },
        {
            Header: '',
            accessor: 'links[0].href',
            width: 80,
            sortable: false,
            filterable: false,
            Cell: row =>
                <Button onClick={() => deleteCustomer(row.value)} variant='outline-light'> <Trash color='red' size={20} /></Button>
        }

    ]

    return (
        <div>
            <Addcustomer newCustomer={newCustomer} />
            <ReactTable data={customers} columns={columns} filterable={true} />  
        </div>
    );

};

export default Customers;