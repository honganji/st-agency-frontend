import Title from "../components/title";
import ServiceBlock from "./serviceBlock";

function Service() {
    return (
        <div className="flex flex-col h-screen">
            <Title title={"Service"}/>
            <div className="flex-grow flex items-center justify-center space-x-16">
                <ServiceBlock title="housing support" />
                <ServiceBlock title="school" />
                <ServiceBlock title="job hunting" />
            </div>
        </div>
    );
}

export default Service;
