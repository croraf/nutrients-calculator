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
                        <Col xs={6}>
                            <FieldComponent
                                controlId='formControlsText'
                                type='text'
                                label='Username'
                                placeholder='Enter text' />
                            <FieldComponent
                                controlId='formControlsPassword'
                                label='Password'
                                type='password' />
                            <FieldComponent
                                controlId='formControlsEmail'
                                type='email'
                                label='Email address'
                                placeholder='Enter email' />
                            
                            <FieldComponent
                                    controlId='formControlsFile'
                                    type='file'
                                    label='File'
                                    help='Example block-level help text here.' />

                            {/*radio and checkbox*/}
                            <div>
                                {/*
                                <Checkbox checked readOnly>
                                Checkbox
                                </Checkbox>
                                <Radio checked readOnly>
                                Radio
                                </Radio>

                                <FormGroup>
                                    <Checkbox inline>
                                        1
                                    </Checkbox>
                                    {' '}
                                    <Checkbox inline>
                                        2
                                    </Checkbox>
                                    {' '}
                                    <Checkbox inline>
                                        3
                                    </Checkbox>
                                </FormGroup>
                                <FormGroup>
                                <Radio name='radioGroup' inline>
                                    1
                                </Radio>
                                {' '}
                                <Radio name='radioGroup' inline>
                                    2
                                </Radio>
                                {' '}
                                <Radio name='radioGroup' inline>
                                    3
                                </Radio>
                                </FormGroup>*/}
                            </div>

                        </Col>
                        
                        <Col xs={6}>
                            <FieldComponent 
                                controlId='formControlsSelect'
                                label='Select'
                                componentClass='select' >
                                    <option value='select'>select</option>
                                    <option value='other'>...</option>
                            </FieldComponent>

                            {/*<FieldComponent 
                                controlId='formControlsSelectMultiple'
                                label='SelectMultiple'
                                componentClass='select'
                                multiple={true}>
                                    <option value='select'>select-multiple</option>
                                    <option value='other'>...</option>
                            </FieldComponent>*/}

                            <FieldComponent 
                                controlId='formControlsTextarea'
                                label='Textarea'
                                componentClass='textarea' 
                                placeholder='textarea' />

                            <DebounceFieldComponent 
                                controlId='formControlsDebounceInput'
                                label='Debounce Input'
                                componentClass='input' 
                                placeholder='input' />

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
                    </Row>
                    <Row>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Button type='submit' disabled={!this.props.dirty}>
                                Save
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
    form: 'settings',
    destroyOnUnmount: true,
    initialValues: initialValues
})(SettingsForm);

export {SettingsFormReduxWrapper as SettingsForm};