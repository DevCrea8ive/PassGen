    //Define All inputs
    var Pinput = document.getElementById("Pinput");
    var val = document.getElementById("nUm-val");
    var passV = document.querySelector("#Value");
    
let text = window.getSelection();
    

    /*Now we will create a function to hold
     the input so that
      when it is Clicked the val varible
     we defined will automatically count*/

     function count() {
         val.innerText = Pinput.value;
     }
     /*it will only count at the end of 
    the drag so let's make it ondrag using setInterval*/
    setInterval(count, 10);

    //now let make our function for the Password Generator
    function generatePass() {
        var pass = '';
        var num = Pinput.value;

        var sym = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                    'abcdefghijklmnopqrstuvwxyz' + '0123456789@#$()*%^&![]{}-_?\/.,`=~';

                    for (i = 1; i <= num; i++) {
                        var randInd = Math.floor(Math.random() * sym.length + 1);

                        pass += sym.charAt(randInd);
                    }
                    return pass;
                    }
    // we are done with the function now let's create another to hold varible passV

    function Gen() {
        
        passV.innerHTML = generatePass();
        passV.value = passV.textContent;
    }
    copy=()=> {
        passV.textContent;
        passV.select();
        document.execCommand("copy");
        swal({
	title: "Copied!",
	icon: "success",
});
    }
    var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    showModal = () => {
        modal.classList.toggle("show-modal");
    }

    closeModal = (event) => {
        if(event.target == modal){
            showModal();
        }
    }
    trigger.addEventListener('click', showModal);
    window.addEventListener('click', closeModal);
    closeButton.addEventListener('click', showModal);
