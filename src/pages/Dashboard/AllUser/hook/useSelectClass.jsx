import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../../Home/provider/AuthProvider';
import useAxios from './useAxios';
const useSelectClass = () => {
    const { user, loading } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
   
    })

    return [cart, refetch]

}
export default useSelectClass;