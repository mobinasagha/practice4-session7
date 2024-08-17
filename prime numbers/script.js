function isPrime(number){
    for(let i=2;i*i<=number;i++)if(number%i===0)return "false";
     if(typeof  number !== "number") return "invalid argument";
    else return "true"
    }    
    console.log(isPrime(5));
    console.log(isPrime(14));
    console.log(isPrime("two"));
    