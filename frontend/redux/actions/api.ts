import { Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';

import { authHelper, apiHelper } from '@utils/helpers';

import { SET_CATEGORIES_PAGINATION, SET_LOADER, SET_USER_PROFILE } from '@redux/actions/type';

const setLoader = (data: boolean = false) => {
    return {
        type: SET_LOADER,
        data,
    };
};

export const fetchLogin = async (
    data: ILoginDataAPI,
    callBack?: (result: ILoginAPIRes | IErrorAPIRes | null) => void,
    isLoad: boolean = true,
) => {
    return async (dispatch: Dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }
        try {
            const res = await apiHelper.login(data);
            authHelper.setAccessToken(res.data.data.access_token ?? '');
            if (callBack) {
                callBack(res?.data);
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err as AxiosResponse<IErrorAPIRes, AxiosError>;
                if (callBack) {
                    callBack(res?.data);
                }
            }
        }

        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};

export const fetchUserProfile = async (
    data: IUserProfileApi,
    callBack?: (result: IUserProfileApiRes | IErrorAPIRes | null) => void,
) => {
    try {
        const res = await apiHelper.userProfile(data);
        return {
            type: SET_USER_PROFILE,
            data: res?.data?.data.user
        }
    } catch (err) {
        if (!(err instanceof Error)) {
            const res = err as AxiosResponse<IErrorAPIRes, AxiosError>;
            if (callBack) {
                callBack(res.data);
            }
        }
    }

}

export const fetchCategoriesPagination = async (
    { page }: IGetCategoriesPaginationReduxData,
    callBack?: (result: ICategoriesPaginationApiRes | IErrorAPIRes | null) => void,
    isLoad: boolean = true,
) => {
    return async (dispatch: Dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }
        try {
            const res = await apiHelper.categoriesPagination(page ? page : 1);
            if (callBack) {
                callBack(res?.data);
            }
            if (res.data.data) {
                dispatch(setCategoriesPagination({ data: res.data.data }));
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err as AxiosResponse<IErrorAPIRes, AxiosError>;
                if (callBack) {
                    callBack(res?.data);
                }
            }
        }
        if (isLoad) {
            dispatch(setLoader(false));
        }
    }
}

export const setCategoriesPagination = (data: IGetCategoriesPaginationReduxData) => {
    return {
        type: SET_CATEGORIES_PAGINATION,
        data
    }
}


