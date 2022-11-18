const pool = require('../utils/pool');

module.exports = class Secret {
  id;
  name;
  description;
  createdAt;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.description = row.description;
    this.createdAt = row.createdAt;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM secrets');

    return rows.map((row) => new Secret(row));
  }
};
