import axios from "axios";

export const getData = async () => {
    try {
        const api_url = process.env.API_URL || "https://jsonplaceholder.typicode.com"; // Use a dummy api if no API_URL is provided
        const response = await axios.get(`${api_url}/users`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}