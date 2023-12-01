import axiosConfig from "./axiosConfig"

export const apiRedirectURL = async (payload) => {

    const response = await axiosConfig({
        method: "GET",
        url: "/RedirectURL",
    });
    return response
}