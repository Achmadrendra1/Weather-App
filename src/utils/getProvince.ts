import axios from "axios";

export const getProvince = async () => {
  const data = await axios.get("/api/province");
  return data.data
};
