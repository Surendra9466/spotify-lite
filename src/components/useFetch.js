import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useFetch = (url, token) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    axios.defaults.baseURL = 'https://api.spotify.com/v1'

    const fetchApi =  () => {
        axios.get(url, { headers })
            .then(res => {
                const result = res.data;
                setData(result);
                setLoading(false);
            })
    }
    useEffect(() => {
        fetchApi();
    }, []);

    return { loading, data }

}

export default useFetch;