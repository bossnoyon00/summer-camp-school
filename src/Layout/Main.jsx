import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";


const Main = () => {
    // const [theme, setTheme] = useState('')

    // const toggleTheme = () => {
    //     theme === '' ? setTheme('light-theme') : setTheme('')
    // }

    // useEffect(() => {
    //     document.body.className = theme;
    // }, [theme])
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;