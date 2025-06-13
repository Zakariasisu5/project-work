import axios feom "axios";
const API_URL = "https://app.wewantwaste.co.uk/api/skip/byLocation?postcode=NN208";
export const fetchSkipData = async () => {
  try {
      const response = await axios.get(APT_URL);
      return response.data;
      } catch (error){
        console.error("Error fetching skip data:", error);
        return [] ;
      }
};
