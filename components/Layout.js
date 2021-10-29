import Navbar from "./Navbar"

const Layout = ({children}) => {
    return (
        <div className="Layout">
            <Navbar />
            <div className="Content">
            {children}
            </div>
        </div>
    )
}

export default Layout
