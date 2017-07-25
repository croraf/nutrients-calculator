
/*import {describe, it} from 'mocha';*/
import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import {defineIngredientDialogueReducer, openDialogue, closeDialogue} from 'modules/defineIngredientDialogue';

describe('(modules)defineIngredientDialogue', function () {
    describe('#closeDialogue()', function () {
        test('should dispatch CLOSE_DIALOGUE action', function () {

            const store = mockStore();

            store.dispatch(closeDialogue());
            
            expect(store.getActions()).to.deep.equal([{type: 'CLOSE_DIALOGUE'}]);
        });
    });

    describe('#openDialogue()', function () {
        test('should dispatch OPEN_DIALOGUE action with {} when no initial values', function () {

            const store = mockStore();

            store.dispatch(openDialogue());

            expect(store.getActions()).to.deep.equal([{type: 'OPEN_DIALOGUE', initialValues: {}, editId: undefined}]);
        });

        test('should dispatch OPEN_DIALOGUE action with initial values and editId', function () {

            const store = mockStore();

            store.dispatch(openDialogue({name: 'apple', proteins: 20}, '12345'));

            expect(store.getActions()).to.deep.equal([{
                type: 'OPEN_DIALOGUE',
                initialValues: {name: 'apple', proteins: 20},
                editId: '12345'
            }]);
        });
    });
});