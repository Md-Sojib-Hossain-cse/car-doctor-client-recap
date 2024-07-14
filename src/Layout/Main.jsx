import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-6xl mx-auto min-h-[calc(100vh-300px)] md:min-h-[calc(100vh-356px)] lg:min-h-[calc(100vh-358px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;