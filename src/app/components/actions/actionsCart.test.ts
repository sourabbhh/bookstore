import EnzymeConfig from "../../../EnzymeConfig";
import * as actions from "./actionsCart";
import * as actionTypes from "./typesCart";
import * as mockData from "./mockData";

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
EnzymeConfig();



describe('Async cart actions',()=>{

    it('Customers init action',()=>{
        fetchMock.getOnce('http://localhost:7070/customers',{
            body: mockData.customers,
            headers: { 'content-type': 'application/json' }
        });

        const exActions = [{
            type:actionTypes.INIT_CUSTS,
            payload:{
                customers:mockData.customers
            }
        }];
        const store = mockStore([]);

        return store.dispatch(actions.InitCustsApi()).then(() => {
        expect(store.getActions()).toEqual(exActions)
        })
    });

    it('Customers Add customer api',()=>{
        fetchMock.getOnce('http://localhost:7070/customers',{
            body: mockData.customers,
            headers: { 'content-type': 'application/json' }
        });

        const exActions = [{
            type:actionTypes.INIT_CUSTS,
            payload:{
                customers:mockData.customers
            }
        }];
        const store = mockStore([]);

        return store.dispatch(actions.InitCustsApi()).then(() => {
        expect(store.getActions()).toEqual(exActions)
        })
    });
})