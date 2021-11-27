import React, {useState} from 'react'
import Timer from './Timer'

const TimerContainer = () => {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() =>setDisplay(!display)}>Swich Timer</button>
            { display && <Timer /> }
        </div>
    )
}

export default TimerContainer
