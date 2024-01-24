import axios from "axios";

export async function getAddress(latitude: any, longitude: any) {
  try {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`;

    const response = await axios.get(apiUrl);

    return response.data

    if (response.data && response.data.address && response.data.address.city_district) {
      const province = response.data.address.city_district;
      console.log(`Provinsi: ${province}`);
    } else {
      console.log("Tidak dapat menemukan provinsi.");
    }
  } catch (error: any) {
    console.error("Terjadi kesalahan:", error.message);
  }
}
