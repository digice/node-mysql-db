/**
 * @package   node-mysql-db
 * @module    table
 * 
 * @summary   summary
 * @author    Roderic Linguri <linguri@digices.com>
 * @copyright 2018 Digices LLC
 * @license   MIT
 * 
 * @version   0.1.4 : 2018-11-14
 * @since     0.1.4 : 2018-11-14
 */

// MARK: - Node Module Imports

const connection = require('./connection');

// MARK: - Class

class Table {

  /**
   * Constructor
   * @param {String} tableName 
   */
  constructor(tableName) {
    this.tableName = tableName;
    this.createTable = this.createTable.bind(this);
    this.getObjects = this.getObjects.bind(this);
    this.getObjectById = this.getObjectById.bind(this);
  } // ./constructor

  /**
   * Get Objects
   */
  getObjects() {
    const sql = 'SELECT * FROM `' + this.tableName + '`;';
    const result = connection
    .then(db => db.query(sql))
    .then(rows => rows);
    return result;
  } // ./getObjects

  /**
   * Get Object By Id
   * @param {Integer} id 
   */
  getObjectById(id) {
    const sql = 'SELECT * FROM `' + this.tableName + '` WHERE id = \'' + id + '\';';
    const result = connection
    .then(db => db.query(sql))
    .then(rows => rows[0]);
    return result;
  } // ./getObjectById

  insertObject(object) {

    let names = [];
    let values = [];

    for (const key in object) {
      names.push(key);
      values.push(object[key]);
    }

    const namesString = names.join("`, `");
    const valueString = values.join("', '");

    const sql = "INSERT INTO `" + this.tableName + "` (`id`, `" + namesString + "`) VALUES (NULL, '" + valueString + "');";

    const result = connection
    .then(db => db.query(sql))
    .then(response => this.getObjectById(response.insertId));

    return result;

  } // ./insertObject

  close() {
    connection.done();
  }

} // ./table

// MARK: - Exports

module.exports = Table;
