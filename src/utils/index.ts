import axios, { AxiosRequestConfig } from "axios";

// note: not used, but could be used with GET with params
export async function getData(url: string, params?: AxiosRequestConfig) {
  try {
    const res = await axios.get(url, params);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error, `error - getData in ${url} route`);
  }
}

export async function getAllData(url: string) {
  try {
    const res = await axios.get(url);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error, `error - getAllData in ${url} route`);

    if (axios.isAxiosError(error)) {
      return {
        data: "API request failed! Did you remember to `npm run dev` the backend app?",
      };
    }
  }
}
