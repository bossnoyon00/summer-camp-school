import { useQuery } from "@tanstack/react-query";

const usePopularClasses = () => {
// const {loading} = useAuthContext();
const {data: classes = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['addClasses'],
    queryFn: async() => {
        const res = await fetch('https://summer-season.vercel.app/popularClass');
        return res.json();
    }
})

return [classes, loading, refetch]
}

export default usePopularClasses;