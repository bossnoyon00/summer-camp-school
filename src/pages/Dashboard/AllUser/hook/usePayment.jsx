import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../../Home/provider/AuthProvider';
import useAxios from './useAxios';
const usePayment = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxios();
    const { refetch, data: paymentHistory = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/studentsPaymentsHistory?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [paymentHistory,  refetch]

}
export default usePayment;