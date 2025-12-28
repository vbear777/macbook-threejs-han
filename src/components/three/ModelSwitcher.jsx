import { useRef} from "react";
import {PresentationControls} from "@react-three/drei";
import gsap from 'gsap';

import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";
import {useGSAP} from "@gsap/react";
const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
    if(!group) return;

    group.traverse((child) => {
        if(child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
        }
    })
}

const moveGroup = (group, x) => {
    if(!group) return;

    gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

const ModelSwitcher = ({ scale, isMobile }) => {
    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;

    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

    useGSAP(() => {
        if(showLargeMacbook) {
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
            moveGroup(largeMacbookRef.current, 0);

            fadeMeshes(smallMacbookRef.current, 0);
            fadeMeshes(largeMacbookRef.current, 1);
        } else {
            moveGroup(smallMacbookRef.current, 0);
            moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMacbookRef.current, 1);
            fadeMeshes(largeMacbookRef.current, 0);
        }
    }, [scale])

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: {mass:1, tension: 0, friction: 26}
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher;

/*
import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import MacbookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ANIMATION_DURATION = 0.8;
const OFFSET_DISTANCE = 5;

const ModelSwitcher = ({ scale, isMobile }) => {
    const smallMacRef = useRef(null);
    const largeMacRef = useRef(null);

    const showLarge = scale === 0.8 || scale === 0.05;

    useGSAP(() => {
        if (!smallMacRef.current || !largeMacRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { duration: ANIMATION_DURATION, ease: "power2.out" }
            });

            const fadeGroup = (group, opacity) => {
                group.traverse((child) => {
                    if (child.isMesh && child.material) {
                        child.material.transparent = true;
                        tl.to(child.material, { opacity }, 0);
                    }
                });
            };

            if (showLarge) {
                tl.to(smallMacRef.current.position, { x: -OFFSET_DISTANCE }, 0)
                  .to(largeMacRef.current.position, { x: 0 }, 0);

                fadeGroup(smallMacRef.current, 0);
                fadeGroup(largeMacRef.current, 1);
            } else {
                tl.to(smallMacRef.current.position, { x: 0 }, 0)
                  .to(largeMacRef.current.position, { x: -OFFSET_DISTANCE }, 0);

                fadeGroup(smallMacRef.current, 1);
                fadeGroup(largeMacRef.current, 0);
            }
        });

        return () => ctx.revert();
    }, [showLarge]);

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: { mass: 1, tension: 0, friction: 26 }
    };

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacRef} position={[-OFFSET_DISTANCE, 0, 0]}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacRef} position={[0, 0, 0]}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        </>
    );
};

export default ModelSwitcher;
*/