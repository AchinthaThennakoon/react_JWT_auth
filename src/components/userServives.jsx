import axios from "axios";

const USERS_REST_API_URL = "http://localhost:8080/api/users";

class UserServices {
  postUsers() {
    axios.post(USERS_REST_API_URL);
  }
}

export default new UserServices();
