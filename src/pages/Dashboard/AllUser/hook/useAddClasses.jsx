import { useQuery } from "@tanstack/react-query";

const useAddClasses = () => {

    const { data: addClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['addClasses'],
        queryFn: async () => {
            const res = await fetch('https://summer-season.vercel.app/class');
            return res.json();
        }
    })

    return [addClasses, loading, refetch]
}

export default useAddClasses;