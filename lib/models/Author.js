const pool = require('../utils/pool');

class Author {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.dob = row.dob;
    this.pob = row.pob;
    this.books = row.books;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from authors');
    return rows.map((authorRow) => new Author(authorRow));
  }

  static async getById(id) {
    const { rows } = await pool.query(`
    SELECT authors.*,
      COALESCE (
        json_agg(to_jsonb(books))
        FILTER (where books.id IS NOT NULL), '[]')
        AS books
      FROM authors
        LEFT JOIN joinTable
            ON authors.id = joinTable.author_id
          LEFT JOIN books ON books.id = joinTable.book_id
          WHERE authors.id = $1
          GROUP BY authors.id
      `, [id]);
    return new Author(rows[0]);
  }
}

module.exports = Author;
