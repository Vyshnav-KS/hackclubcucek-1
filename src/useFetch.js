import {useState, useEffect} from 'react';

const useFetch = (url, out_data) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState({error: false, msg: ""});

    useEffect(() =>{
        const abortCont = new AbortController();
        fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(out_data),
                signal: abortCont.signal
            })
            .then(res => {
                if (!res.ok) {
                    console.log("useFetch::could not fetch data");
                    abortCont.abort();
                    throw Error("Could not fetch data");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
                setError({error: false, msg:""});
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log("Aborting.....");
                } else {
                    setLoading(false);
                    setError({error: true, msg: err.message});
                }
            });
        return () => abortCont.abort();
    }, [url, out_data]);
    return {data, isLoading, error};
}

export default useFetch;
