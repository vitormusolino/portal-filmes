export default function CardContainer({titulo, children}) {
    return(
        <div className="flex flex-col justify-center items-center mt-5">
            <h1 className="font-bold text-2xl">{titulo}</h1>
            <div className="flex flex-wrap justify-center">
                {children}
            </div>
        </div>
    )
}