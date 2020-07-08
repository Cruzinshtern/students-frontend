import {Api} from "../api";

export class Auth {
  static async isValid() {
    const response = await Api.get("auth");
    return response.json();
  }

  static async login(creds) {
    const response = await Api.post("login", creds);
    return response.json();
  }

  static async logout() {
    const response = await Api.post("logout");
    return response.json();
  }
}

export default new Auth();
