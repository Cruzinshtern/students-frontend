export class Api {
  options = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  serverURL = "http://localhost:3004";
  constructor(options = {}) {
    this.options = {
      ...this.options,
      ...options
    }
  }

  request(endpoint) {
    return fetch(`${this.serverURL}/${endpoint}`, this.options)
  }

  static get(endpoint) {
    const api = new Api();
    return api.request(endpoint);
  }

  static post(endpoint, data) {
    const api = new Api({
      method: "POST",
      body: JSON.stringify(data)
    });
    return api.request(endpoint);
  }

  static put(endpoint, data) {
    const api = new Api({
      method: "PUT",
      body: JSON.stringify(data)
    });
    return api.request(endpoint);
  }

  static delete(endpoint, data) {
    const api = new Api({
      method: "DELETE",
    });
    return api.request(endpoint);
  }
}
