export const HttpClient = (() => {
    const GET = "GET"
    const POST = "POST"
    const PUT = "PUT"
    const PATCH = "PATCH"
    const DELETE = "DELETE"

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    };

    const get = async (path) => {
        try {
            return await axios.get(`http://localhost:8080${path}`, config)
        } catch (error) {
            console.error("error: ", error);
            throw error;
        }
    }

    const post = (path, data) => {
        try {
            return axios.post(`http://localhost:8080${path}`, data, config)
        } catch (error) {
            console.error("error: ", error);
            throw error;
        }
    }

    const put = (path, data) => {
        try {
            return axios.put(`http://localhost:8080${path}`, data, config)
        } catch (error) {
            console.error("error: ", error);
            throw error;
        }
    }

    const patch = (path, data) => {
        try {
            return axios.patch(`http://localhost:8080${path}`, data, config)
        } catch (error) {
            console.error("error: ", error);
            throw error;
        }
    }

    const deleting = (path) => {
        try {
            return axios.delete(`http://localhost:8080${path}`, config)
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
