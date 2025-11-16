const CeleciusInput  = document.querySelector('#Celecius');
const FarenheitInput = document.querySelector('#Farenheit');
const KelvinInput    = document.querySelector('#Kelvin');

    function calculateTemp(event) {
    const tempValue = +event.target.value ;
    // console.log(event)
    // console.log(event.target.value)
    switch (event.target.name) {
        case "Celecius":
          FarenheitInput.value = ((9/5 * tempValue)  + 32).toFixed(2) ;
          KelvinInput.value    = (273.32 + tempValue).toFixed(2) ;
            break;
        case "Farenheit":
          CeleciusInput.value  = ((tempValue - 32) * 5/9).toFixed(2);
          KelvinInput.value    = ((tempValue - 32)*5/9 +273.32).toFixed(2) ;
         break ;
        case "Kelvin":
          CeleciusInput.value  = (tempValue - 273.32).toFixed(2);
          FarenheitInput.value = ((tempValue-273.32)*9/5 + 32).toFixed(2);
    }

}

