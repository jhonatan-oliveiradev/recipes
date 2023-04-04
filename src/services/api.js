import axios from "axios";

/*
 rodar com IPv4: json-server --watch -d 180 --host 10.0.0.139 db.json
*/

const api = axios.create({
	baseURL: "http://10.0.0.139:3000",
});

export default api;
