//Mostly API data callings come with string format, it loks like an JSONobj but when we call and fetch, then it comes in strings
//we can also do typeOf and see that it is string, so we need to handle the API calling,ie, convert the incoming data into JSON
//By default in React, there is a React Query which bydefault handles API. 
// React Query is a JavaScript library designed to simplify the complex task of data fetching and caching in React applications 

import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;