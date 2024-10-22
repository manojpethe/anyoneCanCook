import pg from 'pg'
const { Client } = pg

// postgresql://manojpethe:hm1Pyisrkgd3@ep-red-truth-541163.ap-southeast-1.aws.neon.tech/matrixdb?sslmode=require

class Postgres {
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

const main = async () => {
  const client = new Postgres();
  const result = await client.query(`select * from current_date`);
  console.log(result);
}

main();