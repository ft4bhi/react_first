import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result.rates);
            } catch (error) {
                console.error("Error fetching currency data:", error);
                setError(error.message);
            }
        };

        fetchData();
    }, [currency]);

    console.log(data);
    return { data, error };
}

export default useCurrencyInfo;
