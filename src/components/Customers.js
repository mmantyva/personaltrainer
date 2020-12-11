import React, {useState, useEffect, useRef} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Customers() {

    const [customers, setCustomers] = useState([]);
    const gridRef = useRef();

    useEffect(() => {
        fetchCustomers();
    }, [])

    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err))
    }

     const columns = [
        {
            headerName: 'First name',
            field: 'firstname',
            sortable: true,
            filter: true,
            floatingFilter: true,
            sort: 'asc'
        },
        {
            headerName: 'Last name',
            field: 'lastname',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            headerName: 'Street address',
            field: 'streetaddress',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            headerName: 'Post code',
            field: 'postcode',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            headerName: 'City',
            field: 'city',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            headerName: 'Email',
            field: 'email',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            headerName: 'Phone',
            field: 'phone',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
    ]
 

    return (
        <div className="ag-theme-alpine" style={{height: '600px', width: '100%'}}>
            <AgGridReact 
                columnDefs={columns} 
                rowData={customers}
                ref={gridRef}
                onGridReady={params => { 
                    gridRef.current = params.api;
                    params.api.sizeColumnsToFit();
                }}
                pagination={true}
                paginationAutoPageSize={true} 
                animateRows={true} >
            </AgGridReact>
      </div>
    );

}