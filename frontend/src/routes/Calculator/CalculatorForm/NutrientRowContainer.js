import {connect} from 'react-redux';

import {NutrientRow} from './NutrientRow';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    suggestions: ['ab', 'nc', 'asd']
});

const NutrientRowContainer = connect(mapStateToProps, mapDispatchToProps)(NutrientRow);

export {NutrientRowContainer};