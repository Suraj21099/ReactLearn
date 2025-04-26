import React, { useState, useMemo } from "react";
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
       return false;
      }
    }
    return true;
   }
  
   //Function to find the nth prime number
   function findNthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
       count++;
      }
      num++;
    }
    console.log('prime calculated');
    return num - 1;
   }
const Demo = () => {
    const [text, setText] = useState(0);
    const [isDark, setIsDark] = useState(false);
    console.log("rendered:", text);

    const np = useMemo(() => findNthPrime(text), [text]);
    console.log(np);

    return (
        <div className={"m-4 p-2 w-96 h-96 border border-black " +
        (isDark && "bg-gray-900 text-white")}>
            <div>
                <button className="m-10 p-2 bg-green-500"onClick={() => setIsDark(!isDark)}> Toggle</button>
            </div>
            <input type="number"
            value={text}
            className={"border border-black bg-black text-white"}
            onChange={(e) => {
            return setText(e.target.value);
            }}
            />
            <h1>nth Prime : {np}</h1>
        </div>
    )
}
export default Demo;

