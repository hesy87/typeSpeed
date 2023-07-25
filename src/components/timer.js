import { useContext,useState } from "react"
import { dataContext } from "../context/data-context"
const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const getTime = () => {
        const time = Date.now();
        setSeconds(Math.floor((time / 1000) % 60));
    };
    getTime()
    console.log(seconds);
    const ctx = useContext(dataContext)
    const Action = ctx.showResult
}


export default Timer