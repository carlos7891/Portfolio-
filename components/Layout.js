import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({children}) => {
    return (
        <div className="" >
            <Navbar />
            <main className="container py-4">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
