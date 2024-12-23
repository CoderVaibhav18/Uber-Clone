const captainModel = require("../models/captain");

const createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  // Check required fields
  if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
    throw new Error("All fields are required");
  }

  // Create and save captain
  const captain = await captainModel.create({
    fullname: { firstname, lastname },
    email,
    password,
    vehicle: { color, plate, capacity, vehicleType },
  });

  return captain;
};

module.exports = {
  createCaptain,
}
