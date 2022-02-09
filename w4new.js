
function checkInputs(){  
  var username=document.myForm.name.value;  
  var email=document.myForm.email.value;  
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();

  
  if (username==null || username==""){  
    $element.innerHTML = "Name can't be blank";
        return false;  
    }else { 
      return true;
  }

}

function removeBlank(el) {
 const value = el.target.value.trim();
 el.target.value = value;
}
   
      
function validateemail()  {  
      var emailError = document.getElementById('email.error');
      var x=document.myForm.email.value;  
      var atposition=x.indexOf("@");  
      var dotposition=x.lastIndexOf(".");  
      if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        emailError.innerHTML = "Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition;
        return false;  
        }  
      }

      function requiredInput($el)
      {
        const $element = document.getElementById($el+'.error');
        const $value = document.getElementById($el).value.length;

        if($value < 1){

            $element.innerHTML = 'This input is required';
            return false;
        }else{
          $element.innerHTML = '';
          return true;
        }
      }

      function minInput(e, $length, $el)
      {
        const $value = e.target.value.length;
        const $element = document.getElementById($el+'.error');

        if($value < $length){

            $element.innerHTML = 'The value must be more than ' + $length;
        }else{
          $element.innerHTML = '';
        }
      }

      function minWords(e, $length, $el){
        const $value = e.target.value.split(' ');
        const $element = document.getElementById($el+'.error');
        if($value.length < $length){

          $element.innerHTML = 'The words must be more than ' + $length;

        }else{

          $element.innerHTML = '';
        }
      }


      function validate(e)
      {
        const inputs = ['username', 'email', 'location', 'desc'];
        for(let i = 0; i < inputs.length; i++){

              if(!requiredInput(inputs[i])) 
                return  $element.innerHTML = "Please selcet one Item from the list";

        }

          }
