import axios from "axios";

export const getData = async () => {
    try {
        const api_url = "http://api:8000"; // Use a dummy api if no API_URL is provided
        const response = await axios.get(`${api_url}/api/quiz`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}