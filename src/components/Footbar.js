const Footbar = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <a href="https://github.com/francisGolden" rel="noreferrer" 
            target="_blank" className="text-3xl
            text-gray-800 hover:animate-pulse text-center">
            francisGolden <br></br>is the creator of this app
            </a>
            
            <h2 className="text-xl text-center">The picture used was created by&nbsp;
            <a href="https://pierreroussel.artstation.com/" 
            rel="noreferrer" target="_blank">Pierre Roussel</a>
            </h2>
        </div>
    )
}

export default Footbar;