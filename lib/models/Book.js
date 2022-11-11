const pool = require('../utils/pool');

class Book {
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from books');
    return rows.map((bookRow) => new Book(bookRow));
  }

  static async getById(id) {
    const { rows } = await pool.query(`
    SELECT books.*,
      COALESCE (
        json_agg(to_jsonb(authors))
        FILTER (WHERE authors.id IS NOT NULL), '[]')
        AS authors
      FROM books
        LEFT JOIN joinTable
          ON books.id = joinTable.book_id
        LEFT JOIN authors ON authors.id = joinTable.author_id
        WHERE books.id = $1
        GROUP BY books.id;
    `, [id]);
    return rows.map((bookRow) => new Book(bookRow));
  }
}

module.exports = Book;
