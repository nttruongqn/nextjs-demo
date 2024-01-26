import { IHomePage, IHomePageProps } from "@interfaces/pages/home";
import { fetchUserProfile } from "@redux/actions";
import { ReduxStates } from "@redux/reducers";
import { routes } from "@utils/constants";
import { authHelper } from "@utils/helpers";
import { useTrans } from "@utils/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AdminPage: IHomePage<IHomePageProps> = () => {
    const router = useRouter();
    const { profile } = useSelector((states: ReduxStates) => states);
    const trans = useTrans();
    const dispatch = useDispatch();

    useEffect(() => {
        if (authHelper.accessToken()) {
            const fetchData = async () => {
                const userProfile = await fetchUserProfile({ access_token: authHelper.accessToken() });
                if (!userProfile?.data) {
                    router.push({
                        pathname: routes.CLIENT.LOGIN.href,
                    },
                        undefined,
                        { scroll: false })
                } else {
                    dispatch(userProfile);
                }
            };
            fetchData();
        }
    }, [dispatch]
    )

    useEffect(() => {
        if (profile.id) {
            router.push({
                pathname: routes.CLIENT.ADMIN.href,
            },
                undefined,
                { scroll: false });
        }
    }, []);

    return (
        <div className="pages__category bases__padding--horizontal8">
            <div className="components__title d-flex align-items-center bases__padding--top10 gap-3">
                <h4 className="bases__font--16">{trans.admin.title}</h4>
            </div>
        </div>
    );
};

export default AdminPage;
