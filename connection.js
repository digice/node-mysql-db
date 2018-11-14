/**
 * @package   node-mysql-db
 * @module    connection
 * 
 * @summary   Connects to the MySQL database at localhost:3306
 * @author    Roderic Linguri <linguri@digices.com>
 * @copyright 2018 Digices LLC
 * @license   MIT
 * 
 * @version   0.1.2 : 2018-11-13
 * @since     0.1.2 : 2018-11-13
 */

// MARK: - Node Module Imports

const mysql = require('promise-mysql');

// MARK: - Create Connection

const connection = mysql.createConnection({
  host: 'localhost',
  database: '<#dbname#>',
  user: '<#dbuser#>',
  password: '<#dbpass#>',
  insecureAuth: true
});

// MARK: - Exports

module.exports = connection;
