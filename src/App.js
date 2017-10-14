import React, { Component } from "react";
import BountyCard from "./BountyCard.js";
import BountyTitle from "./BountyTitle.js";
import Particles from "react-particles-js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 20,
                density: {
                  enable: true,
                  value_area: 700
                }
              },
              color: {
                value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 15
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1.5,
                  opacity_min: 0.15,
                  sync: false
                }
              },
              size: {
                value: 2.5,
                random: false,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 0.15,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 110,
                color: "#33b1f8",
                opacity: 0.25,
                width: 1
              },
              move: {
                enable: true,
                speed: 1.6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse"
                },
                onclick: {
                  enable: false,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            }
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        />
        <BountyTitle />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly"
          }}
        >
          <BountyCard />
          <BountyCard />
          <BountyCard />
        </div>
      </div>
    );
  }
}

export default App;
