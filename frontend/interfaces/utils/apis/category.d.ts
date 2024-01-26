interface ICategory {
    id: string,
    name: string,
    slug: string
}

interface ICategoryDataApi {
    id?: string;
    ids?: string[];
}

interface ICategoriesPagination extends IPaginationApiRes {
    data?: ICategory[]
}

interface ICategoriesApiRes extends IBaseAPIRes {
    data: ICategory[]
}
interface ICategoriesPaginationApiRes extends IBaseAPIRes {
    data: ICategoriesPagination
}

interface ICategoryApiRes extends IBaseAPIRes {
    data: ICategory;
}
