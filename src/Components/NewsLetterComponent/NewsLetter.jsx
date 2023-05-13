const NewsLetter = () => {
    return (
        <div className="max-w-full m-auto text-white px-4 bg-[#24262b]">
            <div className="mx-auto flex justify-between">
                <div className="w-[50vw] my-4">
                    <h1>Need advice on how to improve your flow?</h1>
                    <p>Sign up to join our newsletter and stay up to date</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row justify-space items-center w-[30vw]">
                        <input
                            type="email"
                            className="p-3 flex w-full rounded-md text-black"
                            placeholder="E-mail"
                        />
                        <button
                            className="bg-[#00df9a] text-white p-3 rounded-md font-medium- w-[15vw] ml-4 my-6 px-6 py-3 border-none">
                            Subscribe
                        </button>
                    </div>
                    <p>We are concerned about the security of your data, Read{" "}
                        <span className="text-[#00df9a]">Privacy Policy</span>
                    </p>
                </div>
                <hr className="my-8 bg-gray-700 border-1 gark:bg-gray-700"/>
            </div>
        </div>
    )
}

export default NewsLetter;
