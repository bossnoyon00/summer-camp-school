import { useQuery } from "@tanstack/react-query";

const useAddInstructor = () => {
const {data: instructors = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['instructors'],
    queryFn: async() => {
        const res = await fetch('https://summer-season.vercel.app/instructors');
        return res.json();
    }
})

return [instructors, loading, refetch]
}

export default useAddInstructor;