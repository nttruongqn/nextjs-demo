import { combineReducers } from 'redux';
import { localeReducer, modalReducer } from './common';
import { categoriesPaginationReducer, categoriesReducer, categoryReducer, loaderReducer, userProfileReducer } from './api';

const rootReducers = combineReducers({
    locale: localeReducer,
    modal: modalReducer,
    loader: loaderReducer,
    profile: userProfileReducer,
    category: categoryReducer,
    categories: categoriesReducer,
    categoriesPagination: categoriesPaginationReducer
});
export type ReduxStates = ReturnType<typeof rootReducers>;
export default rootReducers;
