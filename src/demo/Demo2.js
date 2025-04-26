import { useRef, useState } from "react";

const Demo2 = () => {
    const [y, setY] = useState(10);
    let x = 10;
    const z = useRef(0);

    console.log('rendered again');
    return (
        <div className={"m-4 p-2 w-96 h-96 border border-black bg-slate-50"}>
            <div>
                <button className="m-4 p-2 border border-blue-500" onClick={() => {
                    x = x+1;
                    console.log('x :'+x);
                }}>Increase x</button>
                <h1>Let - {x}</h1>
            </div>
            <div>
                <button className="m-4 p-2 border border-blue-500" onClick={() => {
                   setY(y+1);
                   console.log('y :'+y);
                }}>Increase Y</button>
                <h1>state - {y}</h1>
            </div>
            <div>
                <button className="m-4 p-2 border border-blue-500"
                onClick={() => {
                    z.current = z.current + 1;
                    console.log(z);
                }}>
                    Increase Z
                </button>
                <h1>state :{z.current}</h1>
            </div>
            {/* <div>
                <button className="m-4 p-2 border border-blue-500" onClick={() => {
                }}>Increase Z</button>
                <h1>Ref - {z}</h1>
            </div> */}
        </div>
    )
}
export default Demo2;