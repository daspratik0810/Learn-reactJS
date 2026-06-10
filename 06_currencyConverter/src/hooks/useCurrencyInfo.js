import { useEffect, useState } from "react";
function useCurrencyInfo() {
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_7HThMinm3Ffa4Zb3CU8fmV1XnAsKyn5PnEU4y6CY"
    )
      .then((res) => res.json())
      .then((res) => setData(res?.data )) //als owe can use res.data || {} so that the app wont cross when api is not fetch
      .catch(() => setData({}));
  }, []);

  return data;
}

export default useCurrencyInfo;
