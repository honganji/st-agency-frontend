import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { paths } from "../../const";

function BottomBar() {
    const mainColor = "#240750";
    const subColor = "gray";
    const navigator = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
        console.log(paths[1]);
    }, [location])
    return (
        <div className="fixed inset-x-0 bottom-0 text-white flex items-center flex-row justify-center w-screen" style={{backgroundColor: subColor}}>
            <div className="px-5 flex items-center justify-between flex-col">
                <div className="flex items-center space-x-4" style={{backgroundColor: subColor}}>
                    <div className="py-2 px-2 cursor-pointer" style={{backgroundColor: location.pathname === ("/" + paths[0]) ? mainColor : subColor}} onClick={() => navigator(paths[0])}>Home</div>
                    <div className="py-2 px-2 cursor-pointer" style={{backgroundColor: location.pathname === ("/" + paths[1]) ? mainColor : subColor}} onClick={() => navigator(paths[1])}>Page1</div>
                    <div className="py-2 px-2 cursor-pointer" style={{backgroundColor: location.pathname === ("/" + paths[2]) ? mainColor : subColor}} onClick={() => navigator(paths[2])}>Page2</div>
                </div>
                <div className="pb-2 w-screen" style={{backgroundColor: subColor}}></div>
            </div>
        </div>
        
    );
}

export default BottomBar;
