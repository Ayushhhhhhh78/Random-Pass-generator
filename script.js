//storing the data **********************start*********************

//selects *start*
const inputs = document.querySelectorAll('input');
const pass_len = document.querySelector('.range span');
let btn = document.getElementById('btn');
const pass_box = document.querySelector('.key .pass');
let x=1;
const pass = document.getElementById('txt');
const copyBtn = document.querySelector('.copy');
//selects *end*

//storing users password demand *start*
sessionStorage.setItem('len', 6);

inputs[0].addEventListener('change', () => {
    sessionStorage.setItem('len', inputs[0].value);
    pass_len.innerHTML = `Password Length : ${inputs[0].value}`;
})
//storing users password demand *start*

//storing the data **********************end*********************



//pass generating ********************start************************************

//storing pass chracters *start*
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lower = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '1234567890';
let special = `
~!@#$%^&*()_+-={[}]:;<>?/|\
`;

//storing pass chracters *end*

const getRandomData = data => {
    return data[Math.floor(Math. random() * (data.length - 0) + 0)]
}

btn.addEventListener(
    'click',
    () => {
        let password = '';

        while(x<16){
            if(inputs[1].checked){
                password += getRandomData(upper);
            }

            if(password.length == sessionStorage.getItem('len')){
                sessionStorage.setItem('pass', password);
                break;
            }

            if(inputs[2].checked){
                password += getRandomData(lower);
            }

            if(password.length == sessionStorage.getItem('len')){
                sessionStorage.setItem('pass', password);
                break;
            }
             
            if(inputs[3].checked){
                password += getRandomData(numbers);
            }
        
            if(password.length == sessionStorage.getItem('len')){
                sessionStorage.setItem('pass', password);
                break;
            }
            
            if(inputs[4].checked){
                password += getRandomData(special);
            }
        
            if(password.length == sessionStorage.getItem('len')){
                sessionStorage.setItem('pass', password);
                break;
            }
        }

        //getting final pass *start*
        let final_arr = sessionStorage.getItem('pass').split('');
        let checkArr = [];
        let ran;
        let final_pass_arr = [];

        for(let i = 0; i<final_arr.length; i++){
            ran = Math.floor(Math.random() * (final_arr.length - 0) + 0);
            
            let check = checkArr.includes(ran);
            if(check == false){
                checkArr.push(ran);
                final_pass_arr.push(final_arr[ran]);
            }else i--;
        }

        let final_pass='';
        for(let j = 0; j < final_pass_arr.length; j++){
            final_pass += final_pass_arr[j];
        }
        pass_box.style.cssText = "color:#000";
        pass.value = final_pass;
        //getting final pass *end*
    }
)

//making main password *start*
copyBtn.addEventListener('click', () => {
    pass.select()
    document.execCommand('copy');
    alert('Password Copied !!');
})
//making main password *end*

//pass generating *********************end********************************



