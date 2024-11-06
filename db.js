const { Client } = require("pg");

const client = new Client({
  connectionString:
    process.env_DATABASE_URL || "postgres://localhost:5432/acme_talent_agency",
});

const createTables = async () => {
  try {
    await client.query(`
        DROP TABLE IF EXIST customers;
        DROP TABLE IF EXIST restaurants;
        DROP TABLE IF EXIST reservations;

        CREATE TABLE customers (
        id UUID PRIMARY KEY,
        name VARCHAR(255) NOT NULL
        );

        CREATE TABLE restaurants (
        id UUID PRIMARY KEY,
        name VARCHAR(255) NOT NULL
        );

        CREATE TBALE reservations (
        id UUID PRIMARY KEY,
        date DATE NOT NULL,
        party_count INTEGER NOT NULL,
        restaurant_id UUID REFERENCES restaurant(id) ON DELTE CASCADE,
        customer_id UUID REFERENCES customer(id) ON DELETE CASCADE
        );
        `);
  } catch (error) {}
};
// Fetch all customers
const fetchCustomers = async () => {
  try {
    const result = await client.query(SELECT * FROMcustomers);
    return result.rows;
  } catch (error) {}

  // Fetch all restaurants
  const fecthrestaurants = async () => {
    try {
      const result = await client.query(SELECT * FROMrestaurants);
      return result.rows;
    } catch (error) {}
  };
};
//Fetch all reservations
const fetchReservations = async () => {
  try {
    const result = await client.query(SELECT * FROMreservations);
    return result.rows;
  } catch (error) {}
};
// Create a new customer
const createCustomer = async () => {};

module.exports = {
  client,
  createTables,
  fetchCustomers,
  fetchReservations,
  fecthrestaurants,
};
