interface IUserProfileReduxData {
    access_token: string;
}

interface IUserProfileReduxAction {
    type: string;
    data: IUserProfile;
}
