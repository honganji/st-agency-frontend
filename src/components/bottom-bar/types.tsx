import { NavigateFunction } from "react-router-dom";
import { screenInfo } from "../../constant/type";

export type BottomBarButtonProps = {
    screen: screenInfo
    navigator: NavigateFunction;
    currentPath: string;
}
