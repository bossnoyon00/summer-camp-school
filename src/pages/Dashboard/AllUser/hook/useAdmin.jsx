import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import { useContext } from 'react';
import { AuthContext } from '../../../Home/provider/AuthProvider';

const useAdmin = () => {
    
    return [isAdmin, isAdminLoading]
};

export default useAdmin;