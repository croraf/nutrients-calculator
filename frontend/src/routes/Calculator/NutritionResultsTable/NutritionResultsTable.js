import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const tableStyleOuter = {
    marginLeft: '-5px',
    marginRight: '-5px',
    marginTop: '30px',
    border: '2px solid rgb(0, 188, 212)',
    borderRadius: '5px'
};

class NutritionResultsTable extends React.Component {
    render () {

        const {foodsAnalyzed} = this.props;

        return (
            <div style={tableStyleOuter}>
                
                <ReactTable 
                    data={foodsAnalyzed.data}
                    columns={foodsAnalyzed.columns}
                    showPagination={false}
                    pageSizeOptions={[10, 15, 25, 50, 100]}
                    defaultPageSize={25} />
            </div>
        );
    }
}

NutritionResultsTable.propTypes = {
    /* nutrientsList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        nutrientsProportion: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired).isRequired */
};


export {NutritionResultsTable};
