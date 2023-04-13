const Response = require('./Response')

async function writeToDatabase (resultList, database) {
  for (let i = 0; i < resultList.length; i++) {
    const response = new Response(resultList[i])

    const street = response.getStreet();
    const coordinates = response.getCoordinates();
    const timezone = response.getTimezone();
    const name = response.getName();
    const location = response.getLocation();
    const login = response.getLogin();
    const dob = response.getDob();
    const registered = response.getRegistered();
    const personId = response.getId()
    const picture = response.getPicture();
    const person = response.data;

    try {
      const streetId = await database.one(
        `INSERT INTO street (number, name)
        VALUES (${street.number}, '${street.name}')
        RETURNING id;`
      );
  
      const coordinatesId = await database.one(
        `INSERT INTO coordinates (latitude, longitude)
        VALUES('${coordinates.latitude}', '${coordinates.longitude}')
        RETURNING id;`
      );
  
      const nameId = await database.one(
        `INSERT INTO name (title, first_name, last_name)
        VALUES('${name.title}', '${name.first}', '${name.last}')
        RETURNING id;`
      );
  
      const timezoneId = await database.one(
        `INSERT INTO timezone (offset_tz, description)
        VALUES('${timezone.offset}', '${timezone.description}')
        RETURNING id;`
      );
  
      const locationId = await database.one(
        `INSERT INTO location (street_id, city, state, country, postcode,
          coordinates_id, timezone_id)
        VALUES(${streetId.id}, '${location.city}', '${location.state}',
          '${location.country}', '${location.postcode}', ${coordinatesId.id},
          ${timezoneId.id})
        RETURNING id;`
      );
  
      const loginId = await database.one(
        `INSERT INTO login (uuid, username, password, salt, md5, sha1, sha256)
        VALUES ('${login.uuid}', '${login.username}', '${login.password}',
          '${login.salt}', '${login.md5}', '${login.sha1}', '${login.sha256}')
        RETURNING id;`
      );
  
      const dobId = await database.one(
        `INSERT INTO dob (date, age)
        VALUES ('${dob.date}', ${dob.age})
        RETURNING id;`
      );
  
      const registeredId = await database.one(
        `INSERT INTO registered (date, age)
        VALUES ('${registered.date}', ${registered.age})
        RETURNING id;`
      );
  
      const personIdId = await database.one(
        `INSERT INTO person_id (name, value)
        VALUES ('${personId.name}', '${personId.value}')
        RETURNING id;`
      );
  
      const pictureId = await database.one(
        `INSERT INTO picture (large, medium, thumbnail)
        VALUES ('${picture.large}', '${picture.medium}', '${picture.thumbnail}')
        RETURNING id;`
      );
  
      await database.one(
        `INSERT INTO person (gender, name_id, location_id, email, login_id, dob_id,
          registered_id, phone, cell, person_id_id, picture_id, nat)
        VALUES ('${person.gender}', ${nameId.id}, ${locationId.id}, '${person.email}',
          ${loginId.id}, ${dobId.id}, ${registeredId.id}, '${person.phone}',
          '${person.cell}', ${personIdId.id}, ${pictureId.id}, '${person.nat}')
        RETURNING true;`
      )

      return `${name.title} ${name.first} ${name.last} has been add to database!`
    } catch (error) {
      return error;
    }
  }
}

module.exports = writeToDatabase;
