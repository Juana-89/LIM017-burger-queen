import { useState } from 'react';

export const useLogin = (initialLogin, validateLogin) => {
    const [login, setLogin] = useState(initialLogin);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponde] = useState(null);

    const handleChange1 = (e) => {
        const { email, value} = e.target;

            setLogin({
                ...login,
                [email]: value,

            })
        }
            const handleBlur = (e) => {
                handleChange1(e);
                setErrors(validateLogin(login));
            }

            return { login, errors, loading, response, handleBlur, handleChange1}
            }