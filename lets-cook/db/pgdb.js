import pg from 'pg'
const { Client } = pg

class Postgres {
  // client = new Client({
  //   user: 'postgres',
  //   host: 'localhost',
  //   database: 'mydb',
  //   password: 'postgres',
  //   port: 5432, // Default port for PostgreSQL
  // });

  client = new Client({
    user: 'manojpethe',
    host: 'ep-red-truth-541163.ap-southeast-1.aws.neon.tech',
    database: 'matrixdb',
    password: 'hm1Pyisrkgd3',
    port: 5432, // Default port for PostgreSQL
    ssl: {
      require: true,
    },
  });

  query = async (query) => {
    try {
      await this.client.connect();
      const result = await this.client.query(query);
      await this.client.end();
      return result;
    } catch (err) {
      console.error('Error:', err);
      throw err; // Re-throw the error for handling in calling code
    } finally {
      await this.client.end();
    }
  }
}

export default Postgres