import { useRouter } from 'next/router';

import { Button } from '@components/index';

import { useSelector, useDispatch } from 'react-redux';
import { ReduxStates } from '@redux/reducers';
import { setLocale } from '@redux/actions';

import { useTrans } from '@utils/hooks';
import { routes } from '@utils/constants';

import { IHomePageProps, IHomePage } from '@interfaces/pages/home';

const HomePage: IHomePage<IHomePageProps> = () => {
    const trans = useTrans();
    const router = useRouter();
    const dispatch = useDispatch();
    const { locale } = useSelector((states: ReduxStates) => states);


    const changeLanguage = (lang: string) => {
        dispatch(setLocale(lang));
    };
    return (
        <div className="pages__home container">
            <div>{trans.home.title}</div>
            <div>Current locale: {locale}</div>
            <Button className="mb-3" buttonText="Change Japanese" onClick={() => changeLanguage('jp')} />
            <Button className="mb-3" buttonText="Change English" onClick={() => changeLanguage('en')} />
            <Button
                onClick={() =>
                    router.push(
                        {
                            pathname: routes.CLIENT.LOGIN.href,
                        },
                        undefined,
                        { scroll: false },
                    )
                }
                buttonText="Redirect Login"
            />
        </div>
    );
};

export default HomePage;
