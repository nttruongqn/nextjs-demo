export default {
    common: {
        cancel: 'Cancel',
        ok: 'OK',
        page_title: 'Training',
        no_options: 'Empty',
        table: {
            total: (total: number, itemName: string) => {
                return `Total ${total} ${itemName}`;
            },
        },
    },
    home: {
        title: 'Training',
    },
    header: {
        english: 'English',
        vietnamese: 'Vietnamese',
        hi: 'Hi'
    },
    admin: {
        title: 'Admin'
    },
    sidebar: {
        home_page: 'Homepage',
        user: 'User',
        category: 'Category Page'
    },
    category: {
        create: 'Create',
        total: 'Tổng cộng',
        name: 'Category Page'
    },
};
