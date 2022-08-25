$(() => {

    const password = $("#password");
    const form = $("form");
    const progressBar = $(".progress-bar");

    if(form) getProgressBar()

    $(password).keypress(function (e) {
      checkPassword($(this).val());
    });

    const passwordStrengthMeter = Object.freeze({
      containsUpperCase: (str) => /[A-Z]/.test(str),
      containsLowerCase: (str) => /[a-z]/.test(str),
      containsNumber: (str) => str.match(".*\\d.*"),
      containsSpecialChars: (str) =>
        /[!@#£$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(str),
      is8Chars: (str) => str.length >= 8,
    });

    function updateStrengthBar(id) {
      // document.querySelector(`#${id}`).className = 'fa fa-check-circle';
      strength++;
    }

    function decreaseStrengthBar(id) {
      // document.querySelector(`#${id}`).className = 'fa fa-check-circle';
      strength--;
    }

    function getProgressBar(strength) {


      // const passwordMeterUI = {
      //   0: setStrengthBar({ currentValue: 0, colour: "danger" }),
      //   1: setStrengthBar({ currentValue: 20, colour: "warning", message: "this password is very weak!", }),
      //   2: setStrengthBar({ currentValue: 40, colour: "info", message: "this password is still weak. consider", }),
      //   3: setStrengthBar({ currentValue: 60, colour: "dark", message: "this password is average", }),
      //   4: setStrengthBar({ currentValue: 80, colour: "success", message: "this password is strong", }),
      //   5: setStrengthBar({ currentValue: 100, colour: "light", message: "this password is excellent", }),
      // };
      // return passwordMeterUI[strength]



      switch (strength) {

        default:
          setStrengthBar({ currentValue: 0, colour: "danger" });
          break;
        case 1:
          setStrengthBar({
            currentValue: 20,
            colour: "danger",
            message: "this password is very weak!",
          })
          break;


        case 2: setStrengthBar({
          colour: "warning",
          currentValue: 40,
          message: "Average",
        })
          break;



        case 3: setStrengthBar({
          colour: 'info',
          currentValue: 60,
          message: 'this password is average'
        })
          break
        case 4: setStrengthBar({
          colour: 'dark',
          currentValue: 80,
          message: 'very strong'
        })
          break

        case 5: setStrengthBar({
          colour: 'success',
          currentValue: 100,
          message: 'Excellent'
        })
          break


      }








      // const criteria = Object.freeze({

      //   0: setStrengthBar({
      //     currentValue: 0,
      //     colour: "danger",
      //   }),

      //   1: setStrengthBar({
      //     currentValue: 20,
      //     colour: "danger",
      //     message: "this password is very weak!",
      //   }),

      //   2: setStrengthBar({
      //     colour: "warning",
      //     currentValue: 40,
      //     message: "Average",
      //   }),

      //   3: setStrengthBar({
      //     colour: 'info',
      //     currentValue: 60,
      //     message: 'this password is average'
      //   }),
      //   4: setStrengthBar({
      //     colour: 'dark',
      //     currentValue: 80,
      //     message: 'very strong'
      //   }),

      //   5: setStrengthBar({
      //     colour: 'success',
      //     currentValue: 100,
      //     message: 'Excellent'
      //   }),


      // });
      // criteria[+strength]


    };

    function checkPassword(password) {
      let strength = 0;
      // passwordStrengthMeter.containsNumber(password)
      //   ? updateStrengthBar('number')
      //   : decreaseStrengthBar('number');
      // passwordStrengthMeter.containsSpecialChars(password)
      //   ? updateStrengthBar('specialChar')
      //   : decreaseStrengthBar('specialChar');
      // passwordStrengthMeter.containsUpperCase(password)
      //   ? updateStrengthBar('uppercase')
      //   : decreaseStrengthBar('uppercase');
      // passwordStrengthMeter.is8Chars(password)
      //   ? updateStrengthBar('minLength')
      //   : decreaseStrengthBar('minLength');
      // passwordStrengthMeter.containsLowerCase(password)
      //   ? updateStrengthBar('lowercase')
      //   : decreaseStrengthBar('lowercase');

      // console.log('strength is', strength)



      if(passwordStrengthMeter.containsNumber(password)) strength++
      if(passwordStrengthMeter.containsSpecialChars(password)) strength++
      if(passwordStrengthMeter.containsUpperCase(password)) strength++
      if(passwordStrengthMeter.is8Chars(password)) strength++
      if(passwordStrengthMeter.containsLowerCase(password)) strength++


    
      // passwordStrengthMeter.containsSpecialChars(password)
      //   ? updateStrengthBar('specialChar')
      //   : decreaseStrengthBar('specialChar');
      // passwordStrengthMeter.containsUpperCase(password)
      //   ? updateStrengthBar('uppercase')
      //   : decreaseStrengthBar('uppercase');
      // passwordStrengthMeter.is8Chars(password)
      //   ? updateStrengthBar('minLength')
      //   : decreaseStrengthBar('minLength');
      // passwordStrengthMeter.containsLowerCase(password)
      //   ? updateStrengthBar('lowercase')
      //   : decreaseStrengthBar('lowercase');

      getProgressBar(strength);
    }

    function setStrengthBar({
      currentValue = 0,
      colour = "danger",
      message = "weak",
    }) {
      progressBar.prop({
        "aria-valuenow": currentValue,
        style: `width: ${currentValue}%`,
        class: `progress-bar bg-${colour}`,
      });

      progressBar.text(`${currentValue}% ${message}`);
    }
  });