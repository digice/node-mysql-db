/**
 * @package   node-mysql-db
 * @module    main
 * 
 * @summary   Executes queries using the connection
 * @author    Roderic Linguri <linguri@digices.com>
 * @copyright 2018 Digices LLC
 * @license   MIT
 * 
 * @version   0.1.2 : 2018-11-13
 * @since     0.1.2 : 2018-11-13
 * 
 * @example
 node index.js
 */

// MARK: - Local Imports

const connection = require('./connection');

// MARK: - Declare Tests

const testConnection = async() => {
  const result = await connection
  .then(db => db.query('SHOW DATABASES;'));
  console.log(JSON.stringify(result, null, 2));
  process.exit();
} // ./testConnection

// MARK: - Run Tests

testConnection();
