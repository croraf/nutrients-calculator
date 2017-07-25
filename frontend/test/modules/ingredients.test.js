
import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

chai.use(chaiAsPromised);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import {fetchResourceFromBackend} from '../_mocks_/fetchResourcesFromBackend';


jest.doMock('../../src/modules/utilities/fetchResourceFromBackend', () =>({
    fetchResourceFromBackend: fetchResourceFromBackend
}));

const {fetchIngredientsReducer, fetchIngredients} = require('modules/ingredients');


describe('(modules)ingredients', function () {

    beforeEach(() => {
    });

    describe('#fetchIngredients()', function () {

        test('should make a call to fetchResourceFromBackend for ingredients, and then dispatch retrieved ingredients', function () {
            /*nock('http://example.com/')
                .get('/todos')
                .reply(200, { body: { todos: ['do something'] } });*/

            const store = mockStore();

            store.dispatch(fetchIngredients()).then(() => {
                expect(store.getActions()).to.deep.equal([
                    {type: 'FETCHING_INGREDIENTS'},
                    {type: 'INGREDIENTS_RETRIEVED', retrievedIngredients: [{name: 'apple'}, {name: 'banana'}]}
                ]);
            });

            
        });

        /*test('should dispatch OPEN_DIALOGUE action with initial values and editId', function () {

            const store = mockStore();

            store.dispatch(fetchIngredients());

            expect(store.getActions()).to.deep.equal([{
                type: 'OPEN_DIALOGUE',
                initialValues: {name: 'apple', proteins: 20},
                editId: '12345'
            }]);
        });*/
    });
});