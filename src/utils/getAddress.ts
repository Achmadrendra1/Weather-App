import axios from "axios";

export async function getAddress(latitude: any, longitude: any) {
  try {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`;

    const response = await axios.get(apiUrl);

    return response.data
    
  } catch (error: any) {
    console.error("Terjadi kesalahan:", error.message);
  }
}
