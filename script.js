const form=document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    
    if(height=='' || height<0 || isNaN(height)){
        result.innerHTML=`!Enter valid Height`
    }

   else if(weight=='' || weight<0 || isNaN(weight)){
        result.innerHTML=`!Enter valid Weight`
    }
    else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    const result=document.querySelector('#result')
    result.innerHTML=`<span>BMI: ${bmi}</span>`
    
   if(bmi<18.6){
 result.innerHTML+=`<p>Underweight<\p>`
   }
   else if(bmi>=18.6 && bmi<=24.9){
 result.innerHTML+=`<p>Normal<\p>`
   }
   else{
     result.innerHTML+=`<p>Overweight<\p>`
   }









    }








    })


