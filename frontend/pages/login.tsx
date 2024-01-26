import { LoginForm } from '@components/index';

import { ILoginPageProps, ILoginPage } from '@interfaces/pages/login';
import { ReduxStates } from '@redux/reducers';
import { routes } from '@utils/constants';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const LoginPage: ILoginPage<ILoginPageProps> = () => {
    const { profile } = useSelector((states: ReduxStates) => states);
    const router = useRouter();
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
        <div className="pages__login vh-100 d-flex justify-content-center align-items-center">
            <div className="pages__login-wapper border flex flex-col align-items-center justify-content-center">
                <h4 className='text-center bases__padding--vertical10 text-white'>Login</h4>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
