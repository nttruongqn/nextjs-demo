import { SET_USER_PROFILE, SET_LOADER, SET_CATEGORIES, SET_CATEGORY, SET_CATEGORIES_PAGINATION } from '@redux/actions/type';

const loaderReducer = (state: boolean = false, action: ILoaderReduxAction) => {
    switch (action.type) {
        case SET_LOADER:
            return action.data;
        default:
            return state;
    }
};

const userProfileReducer = (state: IUserProfile = { id: '', name: '', email: '' }, action: IUserProfileReduxAction) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return action.data
        default:
            return state;
    }
}

const categoriesReducer = (state: ICategory[] = [], action: IGetCategoriesReduxAction) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return action.data;
        default:
            return state;
    }
}

const categoriesPaginationReducer = (state: IGetCategoriesPaginationReduxData = { data: { current_page: 1, total: 0 } }, action: IGetCategoriesPaginationReduxAction) => {
    switch (action.type) {
        case SET_CATEGORIES_PAGINATION:
            return action.data
        default:
            return state;
    }
}

const categoryReducer = (state: ICategory = { id: '', name: '', slug: '' }, action: IGetCategoryReduxAction) => {
    switch (action.type) {
        case SET_CATEGORY:
            return action.data;
        default:
            return state;
    }
}

export { loaderReducer, userProfileReducer, categoriesReducer, categoryReducer, categoriesPaginationReducer };
