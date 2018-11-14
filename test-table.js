/**
 * @package   node-mysql-db
 * @module    test-table
 * 
 * @summary   Example implementation of a table class
 * @author    Roderic Linguri <linguri@digices.com>
 * @copyright 2018 Digices LLC
 * @license   MIT
 * 
 * @version   0.1.4 : 2018-11-14
 * @since     0.1.4 : 2018-11-14
 */

// MARK: - Local Imports

const Connection = require('./connection');
const Table = require('./table');

// MARK: - Declare constants

const tableName = 'test';

// MARK: - Class

class TestTable extends Table {

  /**
   * Constructor
   */
  constructor() {
    super(tableName);
  } // ./constructor

  /**
   * Create Table
   * This is included in the extended class because 
   * the SQL statement to create a table is 
   * specific to-- and unique for-- each table
   */
  createTable() {
    const sql = 'CREATE TABLE `' + tableName + '` ( `id` INT(10) NOT NULL AUTO_INCREMENT , `name` VARCHAR(31) NOT NULL , `value` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`), UNIQUE (`name`)) ENGINE = InnoDB;';
    const result = Connection
    .then(db => db.query(sql))
    .then(response => response.affectedRows);
    return result;
  } // ./createTable

} // ./TestTable

// MARK: - Exports

const instance = new TestTable();

module.exports = instance;
