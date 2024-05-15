function BottomBar() {
    const mainColor = "#240750";
    const subColor = "gray";
    return (
        <div className="fixed inset-x-0 bottom-0 text-white flex items-center flex-row justify-center w-screen" style={{backgroundColor: subColor}}>
            <div className="px-5 flex items-center justify-between flex-col">
                <div className="flex items-center space-x-4" style={{backgroundColor: subColor}}>
                    <div className="py-2 px-2 rounded" style={{backgroundColor: mainColor}}>Home</div>
                    <div className="py-2 px-2 rounded" style={{backgroundColor: subColor}}>Page1</div>
                    <div className="py-2 px-2 rounded" style={{backgroundColor: subColor}}>Page2</div>
                </div>
                <div className="pb-2 w-screen" style={{backgroundColor: subColor}}></div>
            </div>
        </div>
        
    );
}

export default BottomBar;
