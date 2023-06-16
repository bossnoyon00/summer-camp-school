
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../Home/provider/AuthProvider';
import useAxios from './useAxios';

const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        // enabled: !loading,
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            // console.log('is instructor', res)
            return res.data.instructor
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;