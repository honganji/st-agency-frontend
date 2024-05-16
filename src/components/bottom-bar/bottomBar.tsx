import { useNavigate, useLocation } from "react-router-dom";
import { screens } from "../../constant/const";
import BottomBarButton from "./bottomBarButton";

function BottomBar() {
    const navigator = useNavigate();
    const location = useLocation();

    return (
        <div className="fixed inset-x-0 bottom-0 text-white flex items-center flex-row justify-center w-screen bg-sub">
            <div className="px-5 flex items-center justify-between flex-col">
                <div className="flex items-center space-x-4 bg-sub">
                    {
                        screens.map((screen, index) => (
                            <BottomBarButton
                                key={index}
                                screen={screen}
                                navigator={navigator}
                                currentPath={location.pathname}
                            />
                        ))
                    }
                </div>
                <div className="pb-2 w-screen bg-sub"></div>
            </div>
        </div>
        
    );
}

export default BottomBar;
