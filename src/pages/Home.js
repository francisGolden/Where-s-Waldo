const Home = () => {
    return (
        
        <div className="flex flex-col justify-center items-center text-black 
        font-bold h-screen gap-5 p-5 bg-neutral-200">
            <div className="flex flex-col justify-start items-center
            w-96 h-fit rounded-xl shadow-md p-4 border-t-4 border-indigo-500
            bg-white gap-4">
                <h1 className="text-3xl">Nintendo 64</h1>
                <img className="" alt="" src="n64.jpg"></img>
                <button className="flex bg-blue-500  rounded px-5 p-1 text-xl 
                hover:animate-pulse">Play</button>
            </div>

            <div className="flex flex-row justify-center items-center">
                
            </div>
            
        </div>
    )
}

export default Home;