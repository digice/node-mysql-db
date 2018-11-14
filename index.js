/**
 * @package   node-mysql-db
 * @module    main
 * 
 * @summary   Executes queries using the connection
 * @author    Roderic Linguri <linguri@digices.com>
 * @copyright 2018 Digices LLC
 * @license   MIT
 * 
 * @version   0.1.4 : 2018-11-13
 * @since     0.1.3 : 2018-11-13
 * 
 * @example
 node index.js
 */

// MARK: - Local Imports

const connection = require('./connection');
const table = require('./test-table');

// MARK: - Declare Tests

const testConnection = async() => {
  const result = await connection
  .then(db => db.query('SHOW DATABASES;'));
  console.log(JSON.stringify(result, null, 2));
  process.exit();
} // ./testConnection


/**
 * Test Create
 */
const testCreate = async () => {
  const result = await table.createTable();
  console.log(result);
  table.close();
  process.exit();
} // ./testCreate

/**
 * Test Insert
 */
const testInsert = async () => {
  const object = {
    name: 'test_key',
    value: 'Test Value'
  }
  const result = await table.insertObject(object);
  console.log(`result type: ${typeof result}`);
  console.log(JSON.stringify(result, null, 2));
  table.close();
  process.exit();
} // ./testInsert

/**
 * Test Read
 */
const testRead = async () => {
  const result = await table.getObjects();
  console.log(`result type: ${typeof result}`);
  console.log(JSON.stringify(result, null, 2));
  table.close();
  process.exit();
}

// MARK: - Run Tests

testConnection();

// testCreate();

// testInsert();

// testRead();
