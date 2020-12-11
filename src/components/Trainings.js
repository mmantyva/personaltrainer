import React, {useState, useEffect, useRef} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import moment from 'moment';

export default function Trainings() {

    const [trainings, setTrainings] = useState([]);
    const gridRef = useRef();

    useEffect(() => {
        fetchTrainings();
    }, [])

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
    }

    

     const columns = [
        {
            headerName: 'Customer',
            filter: true,
            floatingFilter: true,
            headerClass: 'header-parent',
            children: [
            {
                headerName: 'First name',
                field: 'customer.firstname',
                sortable: true,
                filter: true,
                floatingFilter: true,
            },
            {
                headerName: 'Last name',
                field: 'customer.lastname',
                sortable: true,
                filter: true,
                floatingFilter: true,
            }]
        },
        {
            headerName: 'Training details',
            filter: true,
            floatingFilter: true,
            headerClass: 'header-parent',
            children: [
            {
                headerName: 'Date',
                field: 'date',
                filter: true,
                floatingFilter: true,
                sortable: true,
                sort: 'asc',
                valueFormatter: function(params) {
                    return moment(params.value).format('DD.MM.YYYY, HH:mm');
                },
            },
            {
                headerName: 'Duration (min)',
                field: 'duration',
                filter: true,
                floatingFilter: true,
                sortable: true,
            },
            {
                headerName: 'Activity',
                field: 'activity',
                filter: true,
                floatingFilter: true,
                sortable: true,
            }
            ]
        }];
 

    return (
        <div className="ag-theme-alpine" style={{height: '600px', width: '100%'}}>
            <AgGridReact 
                columnDefs={columns} 
                rowData={trainings}
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