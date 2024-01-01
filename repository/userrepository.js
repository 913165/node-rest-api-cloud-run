const mysql = require("mysql2");
// "34.122.225.210",

const connection = mysql.createConnection({
  host: "34.122.225.210", // your db ip address
  user: "root",
  password: "root123",
  database: "usersdb",
});

connection.connect();

const UserRepository = {
  findAll: function () {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM users", function (err, rows, fields) {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },

  findById: function (id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM users WHERE id = ?",
        [id],
        function (err, rows, fields) {
          if (err) {
            reject(err);
          } else {
            resolve(rows[0]);
          }
        }
      );
    });
  },

  // users table have firstname,lastname,email,age and role
  save: function (user) {
    return new Promise((resolve, reject) => {
      connection.query(
        // users table have firstname,lastname,email,age and role
        "INSERT INTO users (firstname, lastname, email, age, role) VALUES (?, ?, ?, ?,?)",
        [user.firstname, user.lastname, user.email, user.age, user.role],
        function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },

  update: function (user) {
    return new Promise((resolve, reject) => {
      connection.query(
        // users table have firstname,lastname,email,age and role
        "UPDATE users SET firstname = ?, lastname = ?, email = ?, age = ?, role = ? WHERE id = ?",
        [
          user.firstname,
          user.lastname,
          user.email,
          user.age,
          user.role,
          user.id,
        ],
        function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },

  delete: function (id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM users WHERE id = ?",
        [id],
        function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
};

module.exports = UserRepository;

// call and test above

UserRepository.findAll().then((users) => {
  console.log(users);
});
