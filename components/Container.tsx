// Interfaces
import IContainer from "../interfaces/IContainer"

const Container = ({children, classes}: IContainer) => {
    return (
        <div className={`mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 max-w-screen-xl ${classes}`}>{children}</div>
    )
}

export default Container