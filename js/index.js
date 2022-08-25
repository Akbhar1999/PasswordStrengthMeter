// import * as utils from "./utils"
// alert('x')

$(()=> {


    const password = $('#password');
    const form = $('form');
    const  progressBar = $('.progress-bar')
    let strength = 0

    if (form) {
        // $('.progress-bar').prop('aria-valuenow', currentValue)
        // $('.progress-bar').prop('style',  `width: ${currentValue}%`)
        progressBar.prop({
            'aria-valuenow': 0,
            'style' : `width: 0%`,
        });
        $('.progress-bar').text(`0%`)


        // alert($('.progress-bar').prop('aria-valuenow'))
        
    } 

    // aria-valuenow

    $(password).keypress(function (e) { 

        checkPassword($(this).val()) 
    });

    const validation = Object.freeze({
        containsUpperCase: (str) => /[A-Z]/.test(str),
        containsLowerCase: (str) => /[a-z]/.test(str),
        containsNumber: (str) => str.match('.*\\d.*'),
        containsSpecialChars: (str) =>
          /[!@#£$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(str),
        is8Chars: (str) => str.length >= 8,
      });

      function updateStrengthBar (id){
        // document.querySelector(`#${id}`).className = 'fa fa-check-circle';
        strength++;
      };

      function decreaseStrengthBar (id){
        // document.querySelector(`#${id}`).className = 'fa fa-check-circle';
        strength--;
      };

      const pm = (strength) => Object.freeze({
        1: setStrengthBar({
            colour: 'danger',
            currentValue: 20,
            message: 'this password is very weak!'
        })
    })

    function checkPassword(password) {

        validation.containsNumber(password)
            ? updateStrengthBar('number')
            : decreaseStrengthBar('number');

            pm(strength)

        // switch (strength) {
        //     case 1:
        //         setStrengthBar({
        //             colour: 'danger',
        //             currentValue: 20,
        //             message: 'this password is very weak!'
        //         })
        //         break;


        //     case 2:
        //         setStrengthBar({
        //             colour: 'info',
        //             currentValue: 40,
        //             message: 'this password is ok!'
        //         })
        //         break;



        // }


    }

    

    function setStrengthBar({currentValue = 23, colour = 'danger', message='weak'}){
        progressBar.prop({
            'aria-valuenow': currentValue,
            'style': `width: ${currentValue}%`,
            'class': `progress-bar bg-${colour}`
            
        });

        progressBar.text(`${currentValue}% ${message}`)


    }
});
