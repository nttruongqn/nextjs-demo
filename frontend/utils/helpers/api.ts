import { routes } from '@utils/constants';
import { axios } from '@utils/plugins';
import { authHelper } from '.';


const checkAccessTokenAndParams = (accessToken: string, params: any = undefined) => {
    if (params) {
        return {
            params,
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }
    } else {
        return {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }
    }

}

export const login = async (data: ILoginDataAPI) => {
    try {
        return await axios.post<ILoginAPIRes>(`${routes.API.LOGIN.href}`, data);
    } catch (err) {
        throw err;
    }
};

export const userProfile = async ({ access_token }: IUserProfileApi) => {
    try {
        return await axios.get<IUserProfileApiRes>(`${routes.API.PROFILE.href}`, checkAccessTokenAndParams(access_token));
    } catch (error) {
        throw error;
    }
}

export const categories = async () => {
    try {
        return await axios.get<ICategoriesApiRes>(`${routes.API.CATEGORIES.href}`, checkAccessTokenAndParams(authHelper.accessToken()))
    } catch (error) {
        throw error;
    }
}

export const categoriesPagination = async (page: number) => {
    try {
        return await axios.get<ICategoriesPaginationApiRes>(`${routes.API.CATEGORIES.href}`, checkAccessTokenAndParams(authHelper.accessToken(), { page }))
    } catch (error) {
        throw error;
    }
}
export const category = async ({ id }: ICategoryDataApi) => {
    try {
        return await axios.get<ICategoryApiRes>(`${routes.API.CATEGORY.href}/${id}`, checkAccessTokenAndParams(authHelper.accessToken()))
    } catch (error) {
        throw error;
    }
}

export const createCategory = async () => {
    try {
        return await axios.post<ICategoryApiRes>(`${routes.API.CREATE_CATEGORY.href}`, checkAccessTokenAndParams(authHelper.accessToken()))
    } catch (error) {
        throw error;
    }
}

export const updateCategory = async ({ id }: ICategoryDataApi) => {
    try {
        return await axios.put<ICategoryApiRes>(`${routes.API.EDIT_CATEGORY.href}/${id}`, checkAccessTokenAndParams(authHelper.accessToken()))
    } catch (error) {
        throw error;
    }
}

export const deleteCategory = async ({ id }: ICategoryDataApi) => {
    try {
        return await axios.delete<ICategoryApiRes>(`${routes.API.DELETE_CATEGORY.href}/${id}`, checkAccessTokenAndParams(authHelper.accessToken()))
    } catch (error) {
        throw error;
    }
}



