let sum = document.getElementById('sum');
let result = document.getElementById('result');

sum.addEventListener('click',function(){
    let cv = +(document.getElementById('cv').value);
    let depo =+(document.getElementById('depo').value);
    let rait =+(document.getElementById('rait').value);
    let time =+(document.getElementById('time').value);
    result.innerHTML = "";
    console.clear();
    let balance = 0;
    time = Math.floor(time/30);
    if(cv>0 && depo>=0 &&  rait<100  &&  rait > 0 && time>0){
        balance = (cv*Math.pow(1+(rait/100)/12,time)) + depo*findPower(time,rait);
        alert(balance.toFixed(2));
    }else{
        check(cv,depo,rait,time)
        console.log(NaN);
    }
    
})
function check(cv,depo,rait,time){
    if(cv < 0 || cv ==""){ 
        result.innerHTML += `Начальная сумма не может быть пустой или ниже нуля <br>`;
    }
    if(depo < 0 ){ 
        result.innerHTML += `Сумма ежемесячного вклада не может быть пустой или ниже нуля <br>`;
    }
    if(rait <= 0 || rait >100){ 
        result.innerHTML += `Процентная ставка не может быть пустой или ниже нуля или выше нуля <br>`;
    }
    if(time <= 0){ 
        result.innerHTML += `Срок вклада не может быть пустой или ниже 30 дней <br>`;
    }
}
function findPower(t,r){
    let salPower = 0;
    for(i=t;i>0;i--){
      salPower += Math.pow(1+(r/100)/12,i);
    }
    return salPower;
}