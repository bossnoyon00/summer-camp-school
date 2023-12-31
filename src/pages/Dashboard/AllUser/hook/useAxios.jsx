import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Home/provider/AuthProvider';

const axiosSecure = axios.create({
    baseURL: 'https://summer-season.vercel.app/',
});

const useAxios = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();



    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.authorization = `bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logOut, navigate]);

    return [axiosSecure];
};

export default useAxios;