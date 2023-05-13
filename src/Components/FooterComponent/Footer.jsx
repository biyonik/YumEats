import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare} from "react-icons/all";

const Footer = () => {
    return (
        <div className="max-w-full m-auto px-4 py-2 bg-[#24262b]">
            <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-800">
                <div className="lg:col-span-1">
                    <h1 className="w-full text-3xl font-bold text-orange-700">YumEats</h1>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque consequatur corporis
                        dolor doloremque ex fugiat illo illum in itaque magnam minima neque porro, provident
                        reprehenderit saepe vero voluptas voluptate. Corporis debitis neque perferendis quibusdam
                        quisquam quod quos ut velit voluptas? Eligendi, natus quos? Doloremque excepturi iusto
                        necessitatibus nostrum optio.
                    </p>
                    <div className="flex justify-between md:w-[75%] my-6">
                        <FaFacebookSquare size={30} className="text-3xl text-gray-400 hover:text-gray-300 cursor-pointer"/>
                        <FaTwitterSquare size={30} className="text-3xl text-gray-400 hover:text-gray-300 cursor-pointer"/>
                        <FaInstagramSquare size={30} className="text-3xl text-gray-400 hover:text-gray-300 cursor-pointer"/>
                        <FaDribbbleSquare size={30} className="text-3xl text-gray-400 hover:text-gray-300 cursor-pointer"/>
                        <FaGithubSquare size={30} className="text-3xl text-gray-400 hover:text-gray-300 cursor-pointer"/>
                    </div>
                </div>
                <div className="lg:col-span-2 flex justify-between mt-6">
                    <div>
                        <h6 className="font-medium text-[#9b9b9b]">Location</h6>
                        <ul>
                            <li className="py-2 text-sm text-white">New York</li>
                            <li className="py-2 text-sm text-white">USA</li>
                            <li className="py-2 text-sm text-white">India</li>
                            <li className="py-2 text-sm text-white">Canada</li>
                            <li className="py-2 text-sm text-white">Istanbul</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
