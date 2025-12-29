import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import ShowCase from "./components/Showcase";

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
            <ShowCase />
        </main>
    )
}

export default App;