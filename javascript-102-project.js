class Vichales {
  constructor(id, name, company) {
    this.id = id;
    this.name = name;
    this.company = company;
  }
}

class Car extends Vichales {
  constructor(id, name, company, type) {
    super(id, name, company);
    this.type = type;
  }
}

class plane extends Vichales {
  constructor(id, name, company, type) {
    super(id, name, company);
    this.type = type;
  }
}

class Employee {
  constructor(id, name, barthOfDay) {
    this.id = id;
    this.name = name;
    this.barthOfDay = barthOfDay;
  }
}

class chauffeur extends Employee {
  constructor(id, name, barthOfDay, licenseID) {
    super(id, name, barthOfDay);
    this.licenseID = licenseID;
  }
}

class pilot extends Employee {
  constructor(id, name, barthOfDay, licenseID) {
    super(id, name, barthOfDay);
    this.licenseID = licenseID;
  }
}

class Reservation {
  static array = []
  constructor(reservationDate, employeeId, vehiclesId, reservationID) {
    this.reservationDate = reservationDate;
    this.employeeId = employeeId;
    this.vehiclesId = vehiclesId;
    this.reservationID = reservationID;
    Reservation.presonHasReservation(this)
  }

  static presonHasReservation(a){
    Reservation.array.push(a)
      }

}

const chauffeur1 = new chauffeur("chauffeur1", "Omar", "2003", "12345");
const pilot1 = new pilot("pilot1", "Khalid", "1999", "34566");

let car1 = new Car("car1", "Sonata", "Honda", "gas");
let car2 = new Car("car2", "Rio", "Tesla", "electric");
let car3 = new Car("car3", "Tuseo", "Honda", "gas");

let plane1 = new plane("plane1", "Bigben", "Lala", "gas");
let plane2 = new plane("plane2", "Smallben", "Boba", "gas");




function matchVichaleWithEmployee(employeeId, vichaleId) {
  if (vichaleId.includes("car") && employeeId.includes("chauffeur")) {
    let res = new Reservation("2021-08-31", employeeId, vichaleId, "1");
  } else if (vichaleId.includes("plane") && employeeId.includes("pilot")) {
    let res = new Reservation("2021-08-31", employeeId, vichaleId, "1");
  } else {
    alert("لايمكن للسائق قيادة المركبة");
  }
}

matchVichaleWithEmployee(chauffeur1.id, car1.id)
matchVichaleWithEmployee(pilot1.id, plane1.id)
matchVichaleWithEmployee(pilot1.id, car1.id)

Reservation.array.map((elment) =>{
  console.log(elment.employeeId, elment.reservationDate, elment.reservationID, elment.vehiclesId)
})
