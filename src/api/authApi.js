import axiosClient from "./axiosClient";

const authApi = {
    login: (param) => {
        return axiosClient.post("auth/login", param);
    },
    register: (param) => {
        return axiosClient.post("auth/register", param);
    }
}
export default authApi