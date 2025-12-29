import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
    const isLaptop = useMediaQuery({ query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(!isLaptop) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: '+=200%',
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                })
                .to('.content', {
                    opacity: 1,
                    y: 0,
                    ease: 'power1.in'
                })
        }
    }, [isLaptop])

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" alt="apple mask logo" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>
                            Great Chip
                        </h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing {""}
                                <span className="text-white">
                                    M4, The Next Gen
                                </span>
                                . M4 technology
                            </p>
                            <p>
                                Designed for the future, Apple M4 provides a faster, smarter, 
                                and more efficient computing experience for both professionals and everyday users.
                            </p>
                            <p>
                                With cutting-edge fabrication technology, Apple M4 runs complex applications with incredible responsiveness 
                                while maintaining outstanding battery life. Its more powerful GPU enables smooth and realistic graphics.
                            </p>
                            <p className="text-primary">
                                Learn More
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>3x faster</h3>
                            <p>Rendering performance than M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>1.5x faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowCase;