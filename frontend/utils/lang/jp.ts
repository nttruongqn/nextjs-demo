export default {
    common: {
        cancel: 'キャンセル',
        ok: 'OK',
        page_title: 'Training',
        no_options: 'Empty',
        table: {
            total: (total: number, itemName: string) => {
                return `Tổng cộng ${total} ${itemName}`;
            },
        },
    },
    home: {
        title: 'ホームページ',
    },
    header: {
        english: 'Tiếng anh',
        vietnamese: 'Tiếng việt',
        hi: 'Xin chào'
    },
    admin: {
        title: 'Trang admin'
    },
    sidebar: {
        home_page: 'Trang chủ',
        user: 'Tài khoản',
        category: 'Trang Danh mục'
    },
    category: {
        create: 'Tạo mới',
        total: 'Tổng cộng',
        name: 'Trang danh mục'
    },
};
