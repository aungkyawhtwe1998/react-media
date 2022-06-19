const BASE_URL = "http://13.214.58.126:3001";
export const getData = async route => {
    const response = await fetch(`${BASE_URL}${route}`);
    const resData = await response.json();
    return resData;
}