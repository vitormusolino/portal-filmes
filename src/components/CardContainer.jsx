export default function CardContainer({titulo, children}) {
    return(
        <>      
                <h1 className="font-bold text-2xl text-start px-5">{titulo}</h1>
                <div className="flex flex-col flex-wrap justify-center items-center mt-5 overflow-x-auto scroll-style">
                    <div className="flex mb-5">
                        {children}
                    </div>
                </div>
        </>
    )
}