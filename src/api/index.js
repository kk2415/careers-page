export const HttpClient = (() => {
    const GET = "GET"
    const POST = "POST"
    const PUT = "PUT"
    const PATCH = "PATCH"
    const DELETE = "DELETE"
    const API_URL = import.meta.env.VITE_API_URL

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    };

    const get = async (path) => {
        try {
            return await axios.get(`${API_URL}${path}`, config)
        } catch (error) {
            console.error("error: ", error);
            throw error;
        }
    }

    const post = (path, data) => {
        try {
            return axios.post(`${API_URL}${path}`, data, config)
        } catch (error) {
            console.error("error: ", error);
            throw error;
        }
    }

    const put = (path, data) => {
        try {
            return axios.put(`${API_URL}${path}`, data, config)
        } catch (error) {
            console.error("error: ", error);
            throw error;
        }
    }

    const patch = (path, data) => {
        try {
            return axios.patch(`${API_URL}${path}`, data, config)
        } catch (error) {
            console.error("error: ", error);
            throw error;
        }
    }

    const deleting = (path) => {
        try {
            return axios.delete(`${API_URL}${path}`, config)
        } catch (error) {
            console.error("error: ", error);
            throw error;
        }
    }

    return {
        get: get,
        post: post,
        put: put,
        patch: patch,
        delete: deleting,
    };
})();
