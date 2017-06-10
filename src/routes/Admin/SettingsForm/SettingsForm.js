import React from 'react';

import {reduxForm} from 'redux-form';
import {/*Checkbox, Radio, */Button, Grid, Row, Col} from 'react-bootstrap';

import {FieldComponent} from './FieldComponent';
import {DebounceFieldComponent} from './DebounceFieldComponent';

class SettingsForm extends React.Component {

    render () {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Grid>
                    <Row>
                        <Col xs={8}>
                            <FieldComponent
                                controlId='Nutrient'
                                type='text'
                                label='Nutrient name'
                                placeholder='Enter text' />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}>
                            
                            <FieldComponent
                                controlId='Proteins'
                                type='text'
                                label='Proteins'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='Fats'
                                type='text'
                                label='Fats'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='Carbohidrates'
                                type='text'
                                label='Carbohidrates'
                                placeholder='Enter text' />
                            

                        </Col>
                        
                        <Col xs={2}>

                            <FieldComponent
                                controlId='AA1'
                                type='text'
                                label='AA1'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA2'
                                type='text'
                                label='AA2'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA3'
                                type='text'
                                label='AA3'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA4'
                                type='text'
                                label='AA4'
                                placeholder='Enter text' />
                            {/*<FieldComponent 
                                controlId='formControlsSelect'
                                label='Select'
                                componentClass='select' >
                                    <option value='select'>select</option>
                                    <option value='other'>...</option>
                            </FieldComponent>*/}

                            {/*<FieldComponent 
                                controlId='formControlsSelectMultiple'
                                label='SelectMultiple'
                                componentClass='select'
                                multiple={true}>
                                    <option value='select'>select-multiple</option>
                                    <option value='other'>...</option>
                            </FieldComponent>*/}

                            {/*<FieldComponent 
                                controlId='formControlsTextarea'
                                label='Textarea'
                                componentClass='textarea' 
                                placeholder='textarea' />

                            <DebounceFieldComponent 
                                controlId='formControlsDebounceInput'
                                label='Debounce Input'
                                componentClass='input' 
                                placeholder='input' />*/}

                            {/*<FieldComponent 
                                controlId='formControlsStatic'
                                label='Static text'
                                componentClass='static'
                                static>
                                email@example.com
                            </FieldComponent>

                            <FormGroup>
                                <ControlLabel>Static text</ControlLabel>
                                <FormControl.Static>
                                    email@example.com
                                </FormControl.Static>
                            </FormGroup>*/}
                        </Col>

                        <Col xs={2}>

                            <FieldComponent
                                controlId='AA1'
                                type='text'
                                label='AA1'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA2'
                                type='text'
                                label='AA2'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA3'
                                type='text'
                                label='AA3'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA4'
                                type='text'
                                label='AA4'
                                placeholder='Enter text' />
                        </Col>

                        <Col xs={2}>

                            <FieldComponent
                                controlId='AA1'
                                type='text'
                                label='AA1'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA2'
                                type='text'
                                label='AA2'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA3'
                                type='text'
                                label='AA3'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='AA4'
                                type='text'
                                label='AA4'
                                placeholder='Enter text' />
                        </Col>
                    </Row>
                    <Row>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Button type='submit' disabled={!this.props.dirty}>
                                Save nutrient
                            </Button>
                            <Button type='button' disabled={!this.props.dirty} onClick={this.props.reset}>
                                Cancel
                            </Button>
                        </div>
                    </Row>
                </Grid>
                
            </form>
        );
    }

}

const initialValues = {
    formControlsText: 'vedraf',
    formControlsPassword: 'abc'
};

const SettingsFormReduxWrapper = reduxForm({
    form: 'manageNutrients',
    destroyOnUnmount: true,
    initialValues: initialValues
})(SettingsForm);

export {SettingsFormReduxWrapper as SettingsForm};