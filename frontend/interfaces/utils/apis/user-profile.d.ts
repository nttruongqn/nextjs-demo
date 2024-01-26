interface IUserProfile {
    id: string;
    name: string;
    email: string;
}

interface IUserProfileApi {
    access_token: string;
}

interface IUserProfileApiRes extends IBaseAPIRes {
    data: {
        user: IUserProfile
    }
}
