interface IBaseAPIRes {
    code?: number;
    message?: string;
}

interface IErrorAPIRes extends IBaseAPIRes {

}

interface IPaginationApiRes {
    current_page: number,
    from?: number,
    to?: number,
    last_page?: number,
    first_page_url?: string,
    last_page_url?: string,
    next_page_url?: string,
    path?: string,
    per_page?: number,
    prev_page_url?: string,
    total: number
}
