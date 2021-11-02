import Navbar from "./Navbar"

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <main className="container py-4">
                {children}
            </main>
            <footer className="bg-dark text-light text-center">
                <div className="container p-2">
                    <p className="pt-2">&copy; 2021 Carlos Espinosa Portfolio</p>
                </div>
            </footer>
        </>
    )
}

export default Layout
