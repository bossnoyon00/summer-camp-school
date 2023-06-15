
import { useContext } from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import { AuthContext } from "../provider/AuthProvider";


const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <progress className='progress w-56'></progress>
    }
    return (
        <div>
          
        </div>
    );
};

export default Home;