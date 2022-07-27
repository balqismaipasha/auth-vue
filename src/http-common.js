import axios from "axios";

export default axios.create({
    baseURL: "https://panel.pps.webuir.com",
    headers: {
        "Content-type": "application/json"
    }
});