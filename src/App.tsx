import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";

const Layout = () => {
    return (
        <div className="App flex flex-col min-h-screen bg-zinc-950">
            <Navbar />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/terms" element={<Terms />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
