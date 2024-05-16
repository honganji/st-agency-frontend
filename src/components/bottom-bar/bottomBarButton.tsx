import { BottomBarButtonProps } from "./types";

function BottomBarButton({currentPath, screen, navigator}:BottomBarButtonProps) {
    const buttonColor = currentPath === screen.path ? "bg-main" : "bg-sub";
    return (
        <div
            className={`py-1 lg:py-2 px-2 cursor-pointer ${buttonColor} text-base md:text-xl lg:text-3xl rounded-b-lg`}
            onClick={() => navigator(screen.path)}>
                {screen.title}
            </div>
    );
}

export default BottomBarButton;
