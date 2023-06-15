import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import useAxios from './useAxios';
import { AuthContext } from '../../../Home/provider/AuthProvider';


const useCLasses = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxios();

    const { refetch, data: instructorMyClass = [] } = useQuery({
        queryKey: ['instructorMyClass', user?.email],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),

        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure.get(`/instructorMyClass?email=${user?.email}`)
                console.log('res from axios', res)
                return res.data;
            }
        },
    })

    return [instructorMyClass, refetch]
}

export default useCLasses;