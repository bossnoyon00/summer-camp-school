
// import { useContext } from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
// import { AuthContext } from "../provider/AuthProvider";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import AnotherPart from "../SectionExtra/AnotherPart";
import SectionExtra from "../SectionExtra/SectionExtra";


const Home = () => {
    // const { loading } = useContext(AuthContext);
    // if (loading) {
    //     return <progress className='progress w-56'></progress>
    // }
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <SectionExtra></SectionExtra>
            <AnotherPart></AnotherPart>
        </div>
    );
};

export default Home;