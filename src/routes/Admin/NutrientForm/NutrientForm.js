import React from 'react';

import {reduxForm} from 'redux-form';
import {/*Checkbox, Radio, */Button, Grid, Row, Col} from 'react-bootstrap';

import {FieldComponent} from './FieldComponent';
/*import {DebounceFieldComponent} from './DebounceFieldComponent';*/
import {ProteinsComponent} from './ProteinsComponent';
import {FatsComponent} from './FatsComponent';
import {CarbohidratesComponent} from './CarbohidratesComponent';

class NutrientForm extends React.Component {

    render () {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Grid>
                    <Row>
                        <Col xs={12} xsOffset={0}>
                            <FieldComponent
                                controlId='Nutrient'
                                type='text'
                                label='Nutrient name'
                                placeholder='Enter text' />
                        </Col>
                    </Row>

                    <ProteinsComponent />
                    <FatsComponent />
                    <CarbohidratesComponent />

                    <Row>
                        <Col xs={12} xsOffset={0}>
                            <FieldComponent
                                controlId='Source'
                                type='text'
                                label='Source link'
                                placeholder='Enter text' />
                        </Col>
                    </Row>
                        
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

const NutrientFormReduxWrapper = reduxForm({
    form: 'manageNutrients',
    destroyOnUnmount: true,
    initialValues: initialValues
})(NutrientForm);

export {NutrientFormReduxWrapper as NutrientForm};