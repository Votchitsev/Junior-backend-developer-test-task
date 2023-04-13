class Response {
  constructor (data) {
    this.data = data;
  }

  getName () {
    return this.data.name;
  }

  getLocation () {
    const data = this.data.location;

    delete data.street;
    delete data.coordinates
    delete data.timezone

    return data;
  }

  getStreet () {
    return this.data.location.street;
  }

  getCoordinates () {
    return this.data.location.coordinates;
  }

  getTimezone () {
    return this.data.location.timezone;
  }

  getLogin () {
    return this.data.login;
  }

  getDob () {
    return this.data.dob;
  }

  getRegistered () {
    return this.data.registered;
  }

  getId () {
    return this.data.id;
  }

  getPicture () {
    return this.data.picture;
  }

  getNat () {
    return this.data.nat;
  }
}

module.exports = Response;
