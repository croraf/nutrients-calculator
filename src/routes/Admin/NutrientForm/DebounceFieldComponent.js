import React from 'react';

import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import {Field} from 'redux-form';
import {connect} from 'react-redux';
import {fetchSkillsList} from 'modules/debounceField';

import DebounceInput from 'react-debounce-input';

class DebounceFormControlWrapper extends React.Component {

    debounceElement = (p) => {
        
        const {input, meta, debounceHandler, ...props} = this.props;
        return <FormControl {...input} {...props} {...p}/>;
    }

    onChange = (event) => {

        this.props.input.onChange(event);
        this.props.debounceHandler(event.target.value);
    }

    render () {
        
        //console.log('did rerender');

        return (
            <div>
                {/*<FormControl {...input} {...props} />*/}
                <DebounceInput
                    debounceTimeout={1500}
                    minLength={-1}
                    element={this.debounceElement}
                    onChange={this.onChange}/>
            </div>
        );
    }
}

class DebounceFieldComponent1 extends React.Component {

    render () {
        
        const { controlId, label, help, debounceHandler, debounceResults, ...props } = this.props;

        const debounceResultsComponent = debounceResults.map((item)=>(
            <span key={item} style={{color: 'red', paddingLeft: '10px', paddingRight: '10px'}}>{item}</span>
        ));

        return (
            <div>
                <FormGroup controlId={controlId}>
                    <ControlLabel>{label}</ControlLabel>
                    <Field name={controlId} component={DebounceFormControlWrapper} debounceHandler={debounceHandler} {...props} />
                    {help && <HelpBlock>{help}</HelpBlock>}
                </FormGroup>
                
                <div>{debounceResultsComponent}</div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    debounceHandler: (value) => {dispatch(fetchSkillsList(value));}
});

const mapStateToProps = (state) => ({
    debounceResults: state.debounce.results
});

const DebounceFieldComponent = connect(mapStateToProps, mapDispatchToProps)(DebounceFieldComponent1);

export {DebounceFieldComponent};