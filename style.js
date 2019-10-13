     // query selector find and selects object
      // this is called query'ing the DOM
      const room = document.querySelector('body')
      const lightswitch = document.querySelector('#lightswitch')
      
      function flickTheSwitch() {
        room.classList.toggle('dark')
      }
      lightswitch.addEventListener("click", flickTheSwitch)

      