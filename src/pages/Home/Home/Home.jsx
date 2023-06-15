
import { useContext } from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import { AuthContext } from "../provider/AuthProvider";
import PopularInstructor from "../PopularInstructor/PopularInstructor";


const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <progress className='progress w-56'></progress>
    }
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;