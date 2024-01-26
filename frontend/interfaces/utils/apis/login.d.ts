interface ILoginDataAPI {
    email?: string;
    password?: string;
}

interface ILoginAPIRes extends IBaseAPIRes {
    data: {
        access_token?: string;
        session_id?: string;
    }

}
