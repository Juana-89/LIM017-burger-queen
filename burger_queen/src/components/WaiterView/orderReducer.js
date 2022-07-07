import React from 'react';
import { TYPES } from './orderAction';
import products from '../../data/menu.json';

export const orderInitialState = {products, order: [],};

export function orderReducer(state, action) {
    switch(action.type) {
        case TYPES.ADD_TO_ORDER:{
        let newItem = state.products.find(
        (product) => product.id === action.payload);
            
        let itemInOrder = state.order.find(item => item.id === newItem.id)
        return itemInOrder ? {
        ...state,
        order: state.order.map(item => item.id === newItem.id ?  {...item, quantity: item.quantity + 1}: item),
        }:{...state, order: [...state.order,{...newItem, quantity: 1}]}
        }

        case TYPES.REMOVE_ONE_FROM_ORDER:{
        let itemToDelete = state.order.find(item => item.id === action.payload);
        return itemToDelete.quantity > 1 ? {...state, order: state.order.map(item =>  item.id === action.payload
        ? {...item, quantity: item.quantity - 1}
        : item),
        } : {...state, order: state.order.filter(item => item.id !== action.payload)}
        }

        case TYPES.REMOVE_ALL_FROM_ORDER:{
        return { 
        ...state,
        order: state.order.filter((item) => item.id !== action.payload),
        }
        }
        
        case TYPES.CLEAR_ORDER:
        return orderInitialState;
        default:
        return state;
        }
        }
