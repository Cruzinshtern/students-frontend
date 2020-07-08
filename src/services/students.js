import {Api} from "../api";

export class Students {
  static async getStudents() {
    const response = await Api.get("students");
    return response.json();
  }

  static async addStudent(student) {
    const response = await Api.post("students", student);
    return response.json();
  }

  static async deleteStudent(id) {
    const response = await Api.delete(`students/${id}`);
    return response.json();
  }

  static async editStudent(student) {
    const response = await Api.put("students", student);
    return response.json();
  }
}

export default new Students();
