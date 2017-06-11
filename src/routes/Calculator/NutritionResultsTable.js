import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const columns = [{
    Header: '',
    accessor: 'component' // String-based value accessors!
}, {
    Header: 'Nutrient 1 [g]',
    accessor: 'nutrients[0]',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Nutrient 2 [g]',
    accessor: 'nutrients[1]',
    //accessor: d => d.friend.name // Custom value accessors!
}, {
    Header: 'Nutrient 3 [g]', // Custom header components!
    accessor: 'nutrients[2]'
}, {
    Header: 'Total [g]', // Custom header components!
    accessor: 'total'
}];

class NutritionResultsTable extends React.Component {
    render () {

        const data = [{
            component: 'Proteins',
            nutrients: [ 
                12,
                23,
                33,
            ],
            total: 2
        },{
            component: 'Fats',
            nutrients: [ 
                12,
                23,
                33,
            ],
            total: 2
        },{
            component: 'Carbohydrates',
            nutrients: [ 
                12,
                23,
                33,
            ],
            total: 2
        }];

        return (
            <div style={{marginLeft: '40px', marginRight: '40px', marginTop: '40px'}}>
                
                <ReactTable 
                    data={data}
                    columns={columns}
                    pageSizeOptions={[10, 15, 25, 50, 100]}
                    defaultPageSize={15} />
            </div>
        );
    }
}

export {NutritionResultsTable};