import notFoundIcon from "../assets/icons/not-found.gif"
const ErrorPage = () => {
    return (
        <div className="ErrorPage flex space-evenly">
            <img src={notFoundIcon} alt="Sorry, page not found :(" className="block m-0"/> 
        </div>
    )
}

export default ErrorPage