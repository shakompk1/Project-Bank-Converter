let sum = document.getElementById('sum');
let result = document.getElementById('result');

sum.addEventListener('click',function(){
    let cv = +(document.getElementById('cv').value);
    let depo =+(document.getElementById('depo').value);
    let rait =+(document.getElementById('rait').value);
    let time =+(document.getElementById('time').value);
    result.innerHTML = ""
    let balance = 0;
    time = Math.floor(time/30)
    if(cv>0 && depo>=0 && rait >0 && time>0){
        balance = (cv*Math.pow(1+(rait/100)/12,time)) + depo*findPower(time,rait)
    }else{
        result.innerHTML = "Error"
        console.log(NaN)
    }
    alert(balance)
})

function findPower(t,r){
    let salPower = 0;
    for(i=t;i>0;i--){
      salPower += Math.pow(1+(r/100)/12,i)
    }
    return salPower
}