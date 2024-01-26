import Select from "@components/commons/Select";
import { setLocale } from "@redux/actions";
import { ReduxStates } from "@redux/reducers";
import { enums } from "@utils/constants";
import { useTrans } from "@utils/hooks";
import Head from "next/head";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";

const Header: IHeaderComponent<IHeaderComponentProps> = () => {
    const [state, setState] = useState<IHeaderComponentState>({
        language: undefined
    });
    const trans = useTrans();
    const dispatch = useDispatch();
    const { language } = state;
    const { profile } = useSelector((states: ReduxStates) => states);
    const handleOnChange = (field: string, value: string | number | null) => {
        setState((prevState) => ({
            ...prevState,
            [field]: value
        }));
    }

    useEffect(() => {
        dispatch(setLocale(language));
    }, [language])

    return (
        <>
            <Head>
                <title>Training Web</title>
                <link rel="icon" type="image/png" href="/favicon.ico" />
            </Head>
            <div className="components__header bases__height50px">
                <div className="d-flex align-items-center justify-content-between h-100">
                    <div className="components__header-left h-100">
                        <div className="components__header-left-icon h-100 bases__padding--horizontal12 d-flex align-items-center">
                            <TfiMenu size={26} />
                        </div>
                    </div>
                    <div className="components__header-right bases__padding--horizontal24 d-flex align-items-center gap-2">
                        <div className="components__header-right-select ">
                            <Select
                                className=""
                                options={[
                                    {
                                        value: enums.LANGUAGE.VIETNAMESE,
                                        label: trans.header.vietnamese,
                                    },
                                    {
                                        value: enums.LANGUAGE.ENGLISH,
                                        label: trans.header.english,
                                    },
                                ]}
                                value={language?.toString() ?? enums.LANGUAGE.VIETNAMESE.toString()}
                                placeholder='Chọn ngôn ngữ'
                                onChange={(value: string) => handleOnChange('language', value)}
                            />
                        </div>
                        <div className="components__header-right-icon">
                            <FaUserCircle size={30} />
                        </div>
                        <div className="components__header-right-text">
                            <span>{profile && trans.header.hi}, {profile?.name}</span>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
