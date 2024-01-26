interface IGetCategoryReduxData {
    id: string;
    name: string;
    slug: string;
    // created_at: Date;
    // updated_at: Date
}

interface IGetCategoriesReduxAction {
    type: string,
    data: IGetCategoryReduxData[]
}

interface IGetCategoryReduxAction {
    type: string,
    data: IGetCategoryReduxData
}


interface IGetCategoriesPaginationReduxData {
    page?: number,
    data?: ICategoriesPagination
}

interface IGetCategoriesPaginationReduxAction {
    type: string,
    data: IGetCategoriesPaginationReduxData
}

interface IPostCategoryReduxData {
    name: string;
    slug: string;
}

interface IPostCategoryReduxAction {
    type: string,
    data: IPostCategoryReduxData
}

interface IEditCategoryReduxData {
    id: string;
    name: string;
}

interface IEditCategoryReduxAction {
    type: string,
    data: IEditCategoryReduxData
}

interface IDeleteCategoryReduxData {
    id: string;
}

interface IDeleteCategoryReduxAction {
    type: string,
    data: IDeleteCategoryReduxAction
}
