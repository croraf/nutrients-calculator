import React from 'react';

import {connect} from 'react-redux';

import TextField from '@material-ui/core/TextField';
import AutoComplete from '@material-ui/core/AutoComplete';

class FormControlWrapper extends React.Component {

    render () {

        // catching placeholder not to forward it to TextField
        const {label, placeholder, input, meta, dataSource, ...props} = this.props;
        
        return (
            <div>
                {/*Enhanced FormControl if it is the name of the ingredient, rather than quantity*/}
                {input.name.match(/name$/) ?
                    <AutoComplete
                        floatingLabelText={label}
                        fullWidth={true}
                        dataSource={Object.values(dataSource)}
                        searchText={meta.visited === false ? input.value : undefined}
                        {...input}
                        {...props} /> :
                    <TextField
                        floatingLabelText={label}
                        fullWidth={true}
                        {...input}
                        {...props} />
                }
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    dataSource: state.ingredients.ingredients
});

const FormControlWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(FormControlWrapper);

export {FormControlWrapperContainer};
