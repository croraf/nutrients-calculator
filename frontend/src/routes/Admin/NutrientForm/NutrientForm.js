import React from 'react';

import {reduxForm} from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';

import {FieldComponent} from './FieldComponent';
/*import {DebounceFieldComponent} from './DebounceFieldComponent';*/
import {ProteinsComponent} from './ProteinsComponent';
import {FatsComponent} from './FatsComponent';
import {CarbohidratesComponent} from './CarbohidratesComponent';

import {Grid, Row, Col} from 'react-flexbox-grid';

class NutrientForm extends React.Component {

    render () {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Grid fluid={true}>
                    <Row>
                        <Col xs={12} offset={0}>
                            <FieldComponent
                                controlId='name'
                                type='text'
                                label='Nutrient name'
                                placeholder='Enter text' />
                        </Col>
                    </Row>

                    <ProteinsComponent />
                    <FatsComponent />
                    <CarbohidratesComponent />

                    <Row>
                        <Col xs={12} offset={0}>
                            <FieldComponent
                                controlId='Source'
                                type='text'
                                label='Source link'
                                placeholder='Enter text' />
                        </Col>
                    </Row>
                        
                    <Row>
                        <Col xs={12}  style={{display: 'flex', justifyContent: 'center'}}>
                            <RaisedButton type='submit' disabled={false && !this.props.dirty}  style={{marginLeft: '5px', marginRight: '5px', paddingLeft: '10px', paddingRight: '10px'}} >
                                Save nutrient
                            </RaisedButton>
                            <RaisedButton type='button' disabled={false && !this.props.dirty} onClick={this.props.reset}  style={{marginLeft: '5px', marginRight: '5px', paddingLeft: '10px', paddingRight: '10px'}} >
                                Cancel
                            </RaisedButton>
                        </Col>
                    </Row>
                </Grid>
            </form>
        );
    }

}

const initialValues = {
};

const NutrientFormReduxWrapper = reduxForm({
    form: 'manageNutrients',
    destroyOnUnmount: true,
    initialValues: initialValues
})(NutrientForm);

export {NutrientFormReduxWrapper as NutrientForm};