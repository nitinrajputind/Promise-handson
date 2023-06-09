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
let ans6 = document.getElementById("ans6")

setTimeout(()=>{
    console.log("1")
    ans6.innerHTML = "1 <br>"
    setTimeout(()=>{
        console.log("2")
        ans6.innerHTML = ans6.innerHTML+ "2 <br>"
        setTimeout(()=>{
            console.log("3");
            ans6.innerHTML = ans6.innerHTML + "3 <br>"
            setTimeout(()=>{
                console.log("4");
                ans6.innerHTML = ans6.innerHTML + "4 <br>"
                setTimeout(()=>{
                    console.log("5");
                    ans6.innerHTML = ans6.innerHTML + "5 <br>"
                    setTimeout(()=>{
                        console.log("6");
                        ans6.innerHTML = ans6.innerHTML+ "6 <br>"
                        setTimeout(()=>{
                            console.log("7")
                            ans6.innerHTML = ans6.innerHTML + "7 <br>"
                        },7000)
                    },6000)
                },5000)
            },4000)
        },3000)
    },2000)
},1000)





// Question 7
let ans7 = document.getElementById("ans7")
function findSum(num1,num2){
    let pr = new Promise(function(res,rej){
        setTimeout(function(){
            let sum = num1 + num2;
            if(isNaN(sum))
            {
                rej("Try Again! Enter a valid number");
            }
            else
            {
                res(sum);
            }
        }, 2000)
    })
    return pr;
}

findSum(26,23).then(function(ans){
    console.log("Sum =", ans);
    ans7.innerHTML = "Sum = " + ans
}).catch(function(err){
    console.log(err);
})







// question 8
let ans8 = document.getElementById("ans8")
function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => resolve('Data received!'), 2000);
    });
  }
  
  async function printData() {
    console.log("Fetching data...");
    ans8.innerHTML = "Fetching data....." + "<br>"
    const data = await fetchData();
    console.log(data);
    ans8.innerHTML = ans8.innerHTML + data
  }
  
printData();



// Question 9
let ans9 = document.getElementById("ans9")
function mypromise(num ){
    return new Promise((resolve, reject)=>{
        if(num%2 === 0){
            resolve("This is even ")
        }
        else{
            rej("This is Odd ")
        }
    })
}

const mypromise1 = new Promise((resolve, reject)=>{
    if(true){
        resolve(" hi EAC _01 ")
    }
    else{
        reject(" Soryy !!!! ")
    }
})

Promise.all([mypromise(20), mypromise1]).then((data)=>{
    console.log(data)
    ans9.innerHTML = data
}).catch((data)=>{
    console.log(data)
    ans9.innerHTML = data
})








