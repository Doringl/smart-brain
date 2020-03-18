const particlesOptions = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: " #3CA9D1",
          blur: 4
        }
      },
      number: {
        value: 40
      },
      size: {
        value: 4
      }
    },
    interactivity: {
      events: {
          onhover: {
              enable: true,
              mode: "repulse"
          }
      }
    }
  }

  export default particlesOptions;