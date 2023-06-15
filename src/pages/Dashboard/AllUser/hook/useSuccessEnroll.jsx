import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios'
import { useContext } from 'react';
import { AuthContext } from '../../../Home/provider/AuthProvider';

const useSuccessEnroll = () => {
    const { user, loading } = useContext(AuthContext)
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxios();
    const { refetch, data: enrolledClass = [] } = useQuery({
        queryKey: ['enrolledClass', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure(`/enrolledClass?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [enrolledClass, refetch]

}
export default useSuccessEnroll;