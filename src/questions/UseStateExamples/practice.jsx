import { useState } from "react";


export default function UseSateExamples(){
    const [increment, setIncrement] = useState(0);
     const [increment1, setIncrement1] = useState(0);
    const handleIncrement = () => {
        setIncrement1(increment1 + 1);
               setIncrement1(increment1 + 1);
                      setIncrement1(increment1 + 1);
    };
const handleIncrementwithMultiple = () => {
        setIncrement(increment=>increment + 1);
               setIncrement(increment=>increment + 1);
                      setIncrement(increment=>increment + 1);
    };

    return(
        <div>
            <div>
            <button onClick={handleIncrement}>
                Increment
            </button>
            <p>Current Value: {increment1}</p>
            </div>
            <div>
                 <button onClick={handleIncrementwithMultiple}>
                Increment
            </button>
            <p>Current Value: {increment}</p>
            </div>

        </div>
    )
}