var button=document.getElementsByClassName('col');
 var head_text=document.getElementById('result-text');
 operand1=0;
 operand2=null;
 operator=null;
    
for(var i=0; i<button.length;i++){
    button[i].addEventListener('click',function(){
var value=this.innerText;

if(value=="+/-"){
    operand1=parseFloat(head_text.innerText);
    var plus_minus=this.getAttribute('data-value');
    head_text.innerHTML=(plus_minus)*operand1;
if(plus_minus==1){
    this.getAttribute('data-value')='-1';
}else{
    this.getAttribute('data-value')='1';
}
}

if(value=='AC'){
    head_text.innerText='';

}else if(value=='+'){
    operand1=parseFloat(head_text.innerText);
    operator='+';
    head_text.innerHTML='';

}else if(value=='-'){
operand1=parseFloat(head_text.innerText);
    operator='-';
    head_text.innerHTML='';

}else if(value=='*'){
operand1=parseFloat(head_text.innerText);
    operator='*';
    head_text.innerHTML='';

}else if(value=='/'){
operand1=parseFloat(head_text.innerText);
    operator='/';
    head_text.innerHTML='';

}else if(value=='%'){
operand1=parseFloat(head_text.innerText);
    operator='%';
    head_text.innerHTML='';

}else if(value=='='){
operand2=parseFloat(head_text.innerText);
if(operator=='%'){
    result=operand2*(operand1/100);
}else{
var result=eval(operand1+" "+operator+" "+operand2);
}
head_text.innerText=result;


}else{
head_text.innerText+=value;

}



    });

}

