import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShowCase from "./components/Showcase";
import Features from "./components/Features";
import Performance from "./components/Performance";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
            <ShowCase />
            <Performance />
            <Features />
            <Footer />
        </main>
    )
}

export default App;