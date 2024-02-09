import axios from 'axios'

export const baseUrl = "http://localhost:5001/food-delivery-app-8dee1/us-central1/app"

export const validateUserJWTToken = async(token) => {
    try {
        const res =await axios.get(`${baseUrl}/api/users/jwtVerification`,{
            headers:{Authorization:"Divyansh " + token},
        });
        return res.data.data;
    } catch (error) {
        return null;
    }
} 