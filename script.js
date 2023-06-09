// Question 1
let ans1 = document.getElementById("ans1")

function calculate(num1, num2){
    return num1 * num2
}

function displayDate(name, age){
    console.log(`${name} : age is ${age}`)
    ans1.innerHTML = ` ${name} : age is ${age} `
}

displayDate("Nitin", calculate(19,1));


// Question 2 

let ans2 = document.getElementById("ans2")

setTimeout(()=>{
    console.log("1")
    ans2.innerHTML = "1 <br>"
    setTimeout(()=>{
        console.log("2")
        ans2.innerHTML = ans2.innerHTML+ "2 <br>"
        setTimeout(()=>{
            console.log("3");
            ans2.innerHTML = ans2.innerHTML + "3 <br>"
            setTimeout(()=>{
                console.log("4");
                ans2.innerHTML = ans2.innerHTML + "4 <br>"
                setTimeout(()=>{
                    console.log("5");
                    ans2.innerHTML = ans2.innerHTML + "5 <br>"
                    setTimeout(()=>{
                        console.log("6");
                        ans2.innerHTML = ans2.innerHTML+ "6 <br>"
                        setTimeout(()=>{
                            console.log("7")
                            ans2.innerHTML = ans2.innerHTML + "7 <br>"
                        },7000)
                    },6000)
                },5000)
            },4000)
        },3000)
    },2000)
},1000)



// Question 3 
let ans3 = document.getElementById("ans3")
function promiseChain(alpha, timeout){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log(alpha);
            ans3.innerHTML = ans3.innerHTML + alpha + "<br>"

            res("This promise is resolved !!!....")
        },timeout);
    })
}

function visible(){
    promiseChain("1",1000)
    .then(()=>promiseChain("2", 2000))
    .then(()=>promiseChain("3", 3000))
    .then(()=>promiseChain("4", 4000))
    .then(()=>promiseChain("5", 5000))
    .then(()=>promiseChain("6", 6000))
    .then(()=>promiseChain("7", 7000))
}

visible();


// Question 4
let ans4 = document.getElementById("ans4")
let variable = true 

function promiseFun(){
    return new Promise((resolve,reject)=>{
        if(variable === true){
            resolve("Promise resolve succesfully....")
        }
        else{
            reject(Error("Promise rejected !!!"))
        }
    })
}

promiseFun(variable).then((data)=>{
    console.log(data)
    ans4.innerHTML = data
}).catch((err)=>{
    console.log(err)
})



// Question 5
let ans5 = document.getElementById("ans5")
function divide(num1, num2, callback) {
    let output = num1 / num2;
    callback(output);
    }
          
    function division(output) {
    console.log('The result is: ' + output);
    ans5.innerHTML = " This result is " + output
    }
          
divide(100, 100,  division);


// Question 6











function mypromise(num ){
    return new Promise((resolve, reject)=>{
        if(num%2 === 0){
            resolve("This is even")
        }
        else{
            rej("This is Odd")
        }
    })
}


const mypromise1 = new Promise((resolve, reject)=>{
    if(true){
        resolve("hi EAC _01")
    }
    else{
        reject("Soryy !!!!")
    }
})

Promise.all([mypromise(20), mypromise1]).then((data)=>{
    console.log(data)
}).catch((data)=>{
    console.log(data)
})









function display(alpha, timeout){
    setTimeout(()=>{
        console.log(alpha);
    },timeout);
}


function visible1(){
    display("A", 2000);
    display("E", 4000);
    display("I", 1000);
    display("O", 2000);
    display("U", 5000);
}

visible1();








