import { TitleProps } from "./type"

function Title({title}: TitleProps) {
    return (
        <div className="center h-screen text-base md:text-xl lg:text-3xl">
            {title}
        </div>
    );
}

export default Title;
