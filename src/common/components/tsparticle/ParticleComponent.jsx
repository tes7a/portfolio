import {loadSlim} from "tsparticles-slim";
import {loadFull} from "tsparticles";
import {useMemo} from "react";
import Particles from "react-tsparticles";

export const ParticleComponent = () => {
    const options = useMemo(() => {
        return {
            fullScreen: {
                enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
                zIndex: 0, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: false, // enables the click event
                        mode: "push", // adds the particles on click
                    },
                    onHover: {
                        enable: true, // enables the hover event
                        mode: "repulse", // make the particles run away from the cursor
                    },
                },
                modes: {
                    push: {
                        quantity: 8, // number of particles to add on click
                    },
                    repulse: {
                        distance: 100, // distance of the particles from the cursor
                    },
                },
            },
            particles: {
                links: {
                    enable: true, // enabling this will make particles linked together
                    distance: 300, // maximum distance for linking the particles
                },
                move: {
                    enable: true, // enabling this will make particles move in the canvas
                    speed: {min: 1, max: 5}, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
                },
                number: {
                    density: {
                        enable: true, value_area: 600
                    },
                    value: 35
                },
                // opacity: {
                //     value: {min: 0.1, max: 0.2}, // using a different opacity, to have some semitransparent effects
                // },
                size: {
                    value: {min: 0.7, max: 3}, // let's randomize the particles size a bit
                },
            },
        };
    }, [])

    const particlesInit = async (engine) => {
        //loadSlim(engine);
       await loadFull(engine);
    }

    return <Particles init={particlesInit} options={options} style={{opacity: 0.5}}/>
}