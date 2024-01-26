import { createRef, useState } from 'react';

import Validator from '@components/commons/Validator';
import Input from '@components/commons/Input';
import Select from '@components/commons/Select';
import Button from '@components/commons/Button';

import { useDispatch } from 'react-redux';
import { fetchLogin, setModal } from '@redux/actions';

import { useTrans } from '@utils/hooks';
import { validateHelper } from '@utils/helpers';
import { enums, routes } from '@utils/constants';
import { AUTHENTICATION_FAIL_CODE, SUCCESS_CODE } from '@utils/constants/http';
import { useRouter } from 'next/router';

const LoginForm: ILoginComponent<ILoginComponentProps> = () => {
    const trans = useTrans();
    const dispatch = useDispatch();
    const router = useRouter();
    const [state, setState] = useState<ILoginComponentState>({
        email: '',
        password: '',
        role: undefined,
    });
    const { email, password, role } = state;
    const emailValidatorRef = createRef<IValidatorComponentHandle>();
    const passwordValidatorRef = createRef<IValidatorComponentHandle>();

    const submitForm = async () => {
        let isValidate = true;

        emailValidatorRef?.current?.onValidateMessage('');
        if (validateHelper.isEmpty(email ?? '')) {
            emailValidatorRef?.current?.onValidateMessage('Empty');
            isValidate = false;
        } else if (!validateHelper.isEmail(email ?? '')) {
            emailValidatorRef?.current?.onValidateMessage('Email Invalid');
            isValidate = false;
        }

        passwordValidatorRef?.current?.onValidateMessage('');
        if (validateHelper.isEmpty(password ?? '')) {
            passwordValidatorRef?.current?.onValidateMessage('Empty');
            isValidate = false;
        } else if ((password ?? '').length < 8) {
            passwordValidatorRef?.current?.onValidateMessage('Password Invalid');
            isValidate = false;
        }

        if (isValidate) {
            dispatch(
                await fetchLogin({ email, password }, (res) => {
                    res?.code === AUTHENTICATION_FAIL_CODE &&
                        dispatch(
                            setModal({
                                isShow: true,
                                title: "Thông báo",
                                content: (
                                    <div>
                                        {res?.message}
                                    </div>
                                ),
                                buttonText: trans.common.ok,
                            }),
                        );
                    res?.code === SUCCESS_CODE && router.push(
                        {
                            pathname: routes.CLIENT.ADMIN.href,
                        },
                        undefined,
                        { scroll: false },
                    )

                }),
            );
        }
    };

    const handleOnChange = (field: string, value: string | number | null) => {
        setState((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    return (
        <div>
            <div className="components__login border">
                <div className="mb-3">
                    <Validator ref={emailValidatorRef}>
                        <Input
                            name="email"
                            type="text"
                            value={email}
                            placeholder="Enter email"
                            onChange={(value: string) => handleOnChange('email', value)}
                        />
                    </Validator>
                </div>
                <div className="mb-3">
                    <Validator ref={passwordValidatorRef}>
                        <Input
                            name="email"
                            type="password"
                            value={password}
                            placeholder="Enter password"
                            onChange={(value: string) => handleOnChange('password', value)}
                        />
                    </Validator>
                </div>
                <div className="mb-3">
                    <Select
                        options={[
                            {
                                value: enums.ROLE.ADMIN.toString(),
                                label: 'Admin',
                            },
                            {
                                value: enums.ROLE.MOD.toString(),
                                label: 'Mod',
                            },
                        ]}
                        value={role?.toString() ?? enums.ROLE.ADMIN.toString()}
                        onChange={(value: string) => handleOnChange('role', parseInt(value))}
                    />
                </div>
                <Button className='bases__background--gray' onClick={() => submitForm()} buttonText="Login" />
            </div>
        </div>
    );
};

export default LoginForm;
