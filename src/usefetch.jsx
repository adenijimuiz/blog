import React, { useEffect, useState } from 'react'

export const Usefetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      const abortCont = new AbortController();

      setTimeout(() => {
        //don't use the setTimeout in real applications we are using it here because we are fetching in localhost
        fetch(url, {signal: abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw new Error("could not fetch data");
          }
          // console.log(res)
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          // console.log(err.message)//instead of the console it is in the setError state
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          }else {
            setError(err.message);
            setIsPending(false);
          }
        })
      }, 3000);

      return () => abortCont.abort();
    }, [url])

    return{
      data, isPending, error
    }
}

