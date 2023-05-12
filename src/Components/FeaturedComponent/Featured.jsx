import {useState} from "react";
import {sliders} from "./sliderItems.js";
import {BsChevronCompactLeft, BsChevronCompactRight, RxDotFilled} from "react-icons/all";

const Featured = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="max-w-[1520] h-[500px] w-full py-4 px-4 relative group">
            <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                 style={{
                     backgroundImage: `url(${sliders[currentIndex].url})`,
                 }}
            >
                <BsChevronCompactLeft
                    onClick={() => setCurrentIndex((prevState) => prevState > 0 ? prevState - 1 : sliders.length - 1)}
                    className="hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-[-50%] left-5 text-4xl rounded-full p-2 bg-orange-700 text-white cursor-pointer"/>
                <BsChevronCompactRight
                    onClick={() => setCurrentIndex((prevState) => prevState < sliders.length - 1 ? prevState + 1 : 0)}
                    className="hidden group-hover:block absolute top-1/2 -translate-x-0 translate-y-[-50%] right-5 text-4xl rounded-full p-2 bg-orange-700 text-white cursor-pointer" />
            </div>
            <div className="flex top-4 justify-center py-2">
                {sliders.map((item, index) => (
                    <div
                        className="text-2xl cursor-pointer"
                        key={index} onClick={() => setCurrentIndex(index)}>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Featured;
