import { useTable } from 'react-table';
//import 'react-table/react-table.css';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const tableStyleOuter = {
    marginLeft: '-5px',
    marginRight: '-5px',
    marginTop: '30px',
    border: '2px solid rgb(0, 188, 212)',
    borderRadius: '5px'
};

const parseNutrient = (nutrientName, item) => {
    const listOfFoodNutrients = item.food.foodNutrients;
    for (const foodNutrient of listOfFoodNutrients) {
        if (foodNutrient.nutrient.name === nutrientName) {
            return foodNutrient.amount * (item.quantity / 100);
        }
    }
};

const parseData = (item) => {
    const parsed = {
        name: item.food.description,
        quantity: item.quantity,
        'Protein': parseNutrient('Protein', item),
        'Carbohydrate, by difference': parseNutrient('Carbohydrate, by difference', item),
        'Total lipid (fat)': parseNutrient('Total lipid (fat)', item),
    };

    return parsed;
};

const NutritionResultsTable = () => {
    const foodsAnalyzed = useSelector(state => state.nutrients.data);

    const columns = useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name',
            width: 350,
            minWidth: 350,
        },
        {
            Header: 'Quantity',
            accessor: 'quantity',
            width: 350,
            minWidth: 350,
        },
        {
            Header: 'Proteins',
            accessor: 'Protein',
            width: 350,
            minWidth: 350,
        },
        {
            Header: 'Carbs',
            accessor: 'Carbohydrate, by difference',
            width: 350,
            minWidth: 350,
        },
        {
            Header: 'Fats',
            accessor: 'Total lipid (fat)',
            width: 350,
            minWidth: 350,
        },
    ], []);

    const data = useMemo(() =>
        foodsAnalyzed.map(item => parseData(item)), [foodsAnalyzed]
    );

    const tableInstance = useTable({ columns, data });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <table {...getTableProps()}>
            <thead>
                {// Loop over the header rows
                    headerGroups.map(headerGroup => (
                        // Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {// Loop over the headers in each row
                                headerGroup.headers.map(column => (
                                    // Apply the header cell props
                                    <th {...column.getHeaderProps()}>
                                        {// Render the header
                                            column.render('Header')}
                                    </th>
                                ))}
                        </tr>
                    ))}
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
                {// Loop over the table rows
                    rows.map(row => {
                        // Prepare the row for display
                        prepareRow(row);
                        return (
                            // Apply the row props
                            <tr {...row.getRowProps()}>
                                {// Loop over the rows cells
                                    row.cells.map(cell => {
                                        // Apply the cell props
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {// Render the cell contents
                                                    cell.render('Cell')}
                                            </td>
                                        );
                                    })}
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};


export default NutritionResultsTable;
