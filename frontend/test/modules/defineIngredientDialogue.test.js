
import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

chai.use(chaiAsPromised);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import {defineIngredientDialogueReducer, openDialogue, closeDialogue} from 'src/modules/defineIngredientDialogue';

describe('(modules)defineIngredientDialogue', function () {
    describe('#closeDialogue()', function () {
        it('should dispatch CLOSE_DIALOGUE action', function () {

            const store = mockStore();

            store.dispatch(closeDialogue());
            
            expect(store.getActions()).to.deep.equal([{type: 'CLOSE_DIALOGUE'}]);
        });
    });

    describe('#openDialogue()', function () {
        it('should dispatch OPEN_DIALOGUE action with {} when no initial values provided', function () {

            const store = mockStore();

            store.dispatch(openDialogue());

            expect(store.getActions()).to.deep.equal([{type: 'OPEN_DIALOGUE', initialValues: {}, editId: undefined}]);
        });

        it('should dispatch OPEN_DIALOGUE action with initial values and editId when provided', function () {

            const store = mockStore();

            store.dispatch(openDialogue({name: 'apple', proteins: 20}, '12345'));

            expect(store.getActions()).to.deep.equal([{
                type: 'OPEN_DIALOGUE',
                initialValues: {name: 'apple', proteins: 20},
                editId: '12345'
            }]);
        });
    });

    describe('#defineIngredientDialogueReducer()', function () {
        it('should return proper default state on initialization', function () {

            expect(defineIngredientDialogueReducer(undefined, {})).to.deep.equal(
                {open: false, initialValues: {}, editId: undefined}
            );

        });

        it('should return current state when unrecognized action is given', function () {

            expect(defineIngredientDialogueReducer({open: true, initialValues: {name: 'apple'}, editId: '123'}, {})).to.deep.equal(
                {open: true, initialValues: {name: 'apple'}, editId: '123'}
            );
        });

        it('should open dialogue without ingredient data on OPEN_DIALOGUE action (create ingredient)', function () {

            expect(defineIngredientDialogueReducer(
                {open: false, initialValues: {}, editId: undefined},
                {type: 'OPEN_DIALOGUE',  initialValues: {}, editId: undefined})).to.deep.equal(
                {open: true, initialValues: {}, editId: undefined}
            );
        });

        it('should open dialogue with ingredient on OPEN_DIALOGUE action (edit ingredient)', function () {

            expect(defineIngredientDialogueReducer(
                {open: false, initialValues: {}, editId: undefined},
                {type: 'OPEN_DIALOGUE',  initialValues: {name: 'apple'}, editId: '123'})).to.deep.equal(
                {open: true, initialValues: {name: 'apple'}, editId: '123'}
            );
        });
    });
});
