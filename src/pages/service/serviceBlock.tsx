import { useState } from "react";
import { ServiceBlockProps } from "./type";

function ServiceBlock({ title }: ServiceBlockProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div>
            <div
                onClick={() => { setIsModalOpen(true) }}
                className="text-black bg-white w-72 h-72 shadow-lg rounded-lg center text-xl"
            >
                {title}
            </div>
            {isModalOpen && (
                <div className="fixed z-10 inset-0 flex items-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div
                        className="fixed inset-0 backdrop-blur-lg bg-gray-500 bg-opacity-30 transition-opacity" aria-hidden="true"
                        onClick={() => { setIsModalOpen(false) }}
                    ></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 h-3/4 w-3/4">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="mt-3 text-center center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                    Modal Title
                                </h3>
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/U7Z9DjskOMk"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ServiceBlock;