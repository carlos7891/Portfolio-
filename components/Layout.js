import Navbar from "./Navbar"

const Layout = ({children}) => {
    return (
        <div >
            <Navbar />
            <main className="container py-4">
                {children}
            </main>
            <footer className="bg-dark text-light text-center footer">
                <div className="container p-2">
                    <p className="pt-2">&copy; 2021 Carlos Espinosa Portfolio</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
