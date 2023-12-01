import {useLayoutEffect, useState} from 'react'
import axios from "../api"

function usePriorFetch(URL) {
    const [data, setData] = useState(null);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useLayoutEffect(() => {
        axios(URL)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [URL])

    return [data, isloading, error]
}

export default usePriorFetch