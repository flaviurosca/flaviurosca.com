import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@chakra-ui/react";

const ParticlesBg = () => {
  const [init, setInit] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      style: {
        position: "absolute",
        height: "100vh",
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "grab",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          grab: {
            distance: 400,
            links: {
              opacity: 0.5,
            },
            link_linked: {
              opacity: 0.5,
            },
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
          bubble: {
            distance: 200,
            size: 10,
            duration: 2,
            opacity: 0.3,
            speed: 3,
          },
        },
      },
      particles: {
        color: {
          value: theme.colors.light,
        },
        links: {
          color: theme.colors.light,
          distance: 200,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: 5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 90,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        stroke: {
          color: theme.colors.dark,
          width: 5,
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [theme.colors.dark, theme.colors.light]
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};

export default ParticlesBg;
