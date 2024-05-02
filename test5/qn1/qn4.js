let num1=[1,2,3,4]
let num2=[3,4,5,6]

let res_num=(num1,num2) =>{
    let new_num=[];
    for(let i = 0; i < num1.length; i++){
        for(let j = 0; j < num2.length; j++){
            if(num1[i]===num2[j]){
                new_num.push(num1[i]);
            }
        }
    }
    return new_num;
}

console.log(res_num(num1,num2));
