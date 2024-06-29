import { configureStore } from '@reduxjs/toolkit';
import CustomerReducer from './CustomerSlice';

export const store =configureStore(
  {
    reducer:{
        customers:CustomerReducer
    }
  }
)
