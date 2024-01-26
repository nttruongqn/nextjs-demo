const HOME_PAGE: IRouteConstant = {
    href: '/',
};
const LOGIN_PAGE: IRouteConstant = {
    href: '/login',
};
const NOT_FOUND_PAGE: IRouteConstant = {
    href: '/404',
};
const ADMIN_PAGE: IRouteConstant = {
    href: '/admin'
}

const CATEGORY_PAGES = {
    LIST: { href: '/admin/categories' },
    SINGLE: { href: '/admin/categories' },
    CREATE: { href: '/admin/categories/create' },
    EDIT: { href: '/admin/categories/edit' },
    DELETE: { href: '/admin/categories/delete' }
}

export const CLIENT = {
    HOME: HOME_PAGE,
    LOGIN: LOGIN_PAGE,
    NOT_FOUND: NOT_FOUND_PAGE,
    ADMIN: ADMIN_PAGE,
    CATEGORY_PAGES: CATEGORY_PAGES
};

const LOGIN_API: IRouteConstant = {
    href: 'auth/login',
};
const PROFILE_API: IRouteConstant = {
    href: 'auth/profile',
};

const CATEGORY_API = {
    LIST: { href: 'admin/categories' },
    SINGLE: { href: 'admin/categories' },
    CREATE: { href: 'admin/categories/create' },
    EDIT: { href: 'admin/categories/edit' },
    DELETE: { href: 'admin/categories/delete' }
}

export const API = {
    LOGIN: LOGIN_API,
    PROFILE: PROFILE_API,
    CATEGORIES: CATEGORY_API.LIST,
    CATEGORY: CATEGORY_API.SINGLE,
    CREATE_CATEGORY: CATEGORY_API.CREATE,
    EDIT_CATEGORY: CATEGORY_API.EDIT,
    DELETE_CATEGORY: CATEGORY_API.DELETE
};
