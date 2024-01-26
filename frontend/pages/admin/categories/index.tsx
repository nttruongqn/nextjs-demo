import { MainHeader, Table } from "@components/index";
import { fetchCategoriesPagination } from "@redux/actions/api";
import { ReduxStates } from "@redux/reducers";
import { images, routes } from "@utils/constants";
import { useTrans } from "@utils/hooks";
import { useRouter } from "next/router";
import { createRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryPage = () => {
    const { profile } = useSelector((states: ReduxStates) => states);
    const router = useRouter();
    const trans = useTrans();
    const dispatch = useDispatch();
    const { categoriesPagination } = useSelector((states: ReduxStates) => states);
    const tableRef = createRef<ITableComponentHandle>();
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        if (profile.id) {
            router.push({
                pathname: routes.CLIENT.CATEGORY_PAGES.LIST.href,
            },
                undefined,
                { scroll: false });
        }
    }, []);




    useEffect(() => {
        const fetchCategoriesData = async () => {
            const categories = await fetchCategoriesPagination({ page });
            dispatch(categories);
        }
        fetchCategoriesData()
    }, [dispatch, page]);

    const handleTableDatas = () => {
        return categoriesPagination?.data?.data?.map((data) => {
            return {
                ...data,
                checkbox: [
                    {
                        type: 'checkbox',
                        data: [
                            {
                                id: `table_data_${data.id}`,
                                value: data.id
                            }
                        ]
                    }
                ],
                detail_btn: {
                    srcIcon: images.ICON_DETAIL,
                    onClick: () => console.log('detail', data.id),
                },
                delete_btn: {
                    srcIcon: images.ICON_DELETE,
                    onClick: () => console.log('delete', data.id),
                    background: 'red',
                },
            }
        })

    }

    const table = {
        heads: [
            {
                isChecbox: true,
                dataCheckbox: [
                    {
                        data: [
                            {
                                id: 'checkAll',
                                value: 'all'
                            },
                        ],
                    },
                ],
            },
            {
                title: 'id',
                isSort: true,
            },
            {
                title: 'name',
                isSort: true,
            },
            {
                title: 'slug',
                isSort: true,
            },
            {
                title: 'Detail',
                className: 'text-center',
            },
            {
                title: 'Delete',
                className: 'text-center',
            }
        ],
        body: {
            columns: [
                {
                    field: 'checkbox',
                    isInput: false,
                    isCheckbox: true
                },
                {
                    field: 'id',
                },
                {
                    field: 'name',
                },
                {
                    field: 'slug',
                },
                {
                    field: 'detail_btn',
                    isButton: true,
                },
                {
                    field: 'delete_btn',
                    isButton: true,
                },
            ],
            rows: handleTableDatas()
        }
    }



    return (
        <div className="pages__category bases__padding--horizontal8">
            <MainHeader title={trans.category.name} />
            <Table
                ref={tableRef}
                total={categoriesPagination.data?.total}
                perPage={categoriesPagination.data?.per_page}
                heads={table.heads}
                body={table.body}
                itemName={trans.category.name}
                onChangeCheckList={(value: string[]) => console.log(value)}
                onChangePage={(page: number) => setPage(page)}
            />
        </div>
    );
}
export default CategoryPage;
