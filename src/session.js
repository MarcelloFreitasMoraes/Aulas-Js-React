import { useEffect, useState } from "react"
import './App.css';

function Session() {
    const [value, setValue] = useState()

    useEffect(() => {
        const number = sessionStorage.getItem('numero')
        setValue(number * 10)
    }, [])

    return (
        <div>
            valor : {value}
        </div>
    )
}

export default Session