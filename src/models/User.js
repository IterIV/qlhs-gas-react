export default class User {
  constructor({ id, firstName, lastName, image }) {
    this.id = id || "";
    this.firstName = firstName || "";
    this.lastName = lastName || "";
    this.image = image || "";
  }
}
