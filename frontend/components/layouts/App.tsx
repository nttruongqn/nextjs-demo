import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Loader from '@components/layouts/Loader';
import Modal from '@components/layouts/Modal';


import { useDispatch } from 'react-redux';
import { fetchUserProfile, setLocale, setModal } from '@redux/actions';
import { Col, Row } from 'react-bootstrap';
import Header from './Header';
import Sidebar from './Sidebar';
import { authHelper } from '@utils/helpers';
import { routes } from '@utils/constants';

const App: IAppComponent<IAppComponentProps> = (props) => {
    const { children } = props;
    const router = useRouter();
    const dispatch = useDispatch();

    const notLayoutPages = ['/', '/login', '/register'];
    const [isLayout, setIsLayout] = useState<boolean>(true);

    const [state, setState] = useState<IAppComponentState>({
        reloadKey: 0,
        historyPathname: router.pathname,
    });
    const { reloadKey } = state;
    const { locale, pathname } = router;

    useEffect(() => {
        window.addEventListener('popstate', onBackButtonEvent);

        return () => {
            window.removeEventListener('popstate', onBackButtonEvent);
        };
    }, []);

    useEffect(() => {
        handleScrollToTop();
        setState((prevState) => ({
            ...prevState,
            historyPathname: pathname,
        }));
    }, [pathname]);

    useEffect(() => {
        dispatch(setLocale(locale));
    }, [locale]);

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
        notLayoutPages.includes(router.pathname) ? setIsLayout(false) : setIsLayout(true);
    }, [router.pathname])

    const onBackButtonEvent = () => {
        dispatch(setModal({ isShow: false }));
        handleScrollToTop();
    };

    const handleScrollToTop = () => {
        document.documentElement.style.scrollBehavior = 'auto';
        setTimeout(() => window.scrollTo(0, 0), 5);
    };
    if (!isLayout) {
        return (
            <div key={reloadKey} className="components__app">
                <Loader />
                <Modal />
                {children}
            </div>
        )
    }

    return (
        <div key={reloadKey} className="components__app">
            <Loader />
            <Modal />
            <Row>
                <Col md={2} className='p-0 vh-100 bases__background--black'>
                    <Sidebar />
                </Col>
                <Col md={10} className='p-0'>
                    <Header />
                    {children}
                </Col>
            </Row>
        </div>
    );


};

export default App;
