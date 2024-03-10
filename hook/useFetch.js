import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";
// const rapidApiKey = process.env.RAPID_API_KEY;

// console.log(rapidApiKey);

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': //'221fb21206msha9cd1c79a88ee00p18f508jsnb1f384e28442',
       '2f72600075msh2848da441bb7d8ap1722d5jsnd1cf0c178f21',
      
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };


  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.request(options);
  //     setData(response.data.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     if (error.response && error.response.status === 403) {
  //       // Handle 403 Forbidden error
  //       console.log("Access forbidden. Check your permissions or credentials.");
  //     } else {
  //       setError(error);
  //       console.log(error);
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  
  

  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};
export default useFetch;
