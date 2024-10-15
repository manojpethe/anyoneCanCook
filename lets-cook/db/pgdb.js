const { Client } = require('pg');

class PgClient{

    client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'postgres',
        port: 5432, // Default port for PostgreSQL
      });

    connect = async()=>{
        try{
            const result = await this.client.connect();
            return result;
        }catch(err){
            console.error(err);
        }
    }

    close = async()=>{
        try{
            await this.client.end();
        }catch(err){
            console.error(err);
        }
    }
    
    query = async(query)=>{
      try {
        // const query = 'select sign from operators where OPERATOR = \'addition\'';
        const result = await this.client.query(query);
        return result;
      } catch (err) {
        console.error('Error fetching row:', err);
        throw err; // Re-throw the error for handling in calling code
      } finally {
        // await this.client.end();
      }
    
    }

    // getOper = async(operatorString)=>{
    //     try {
    //       const query = `select sign from operators where OPERATOR = '${operatorString}'`;
    //       const result = await this.client.query(query);
      
    //       if (result.rows.length > 0) {
    //         return result.rows[0].sign; // Return the first row (assuming unique ID)
    //       } else {
    //         return null; // No row found with the given ID
    //       }
    //     } catch (err) {
    //       console.error('Error fetching row:', err);
    //       throw err; // Re-throw the error for handling in calling code
    //     } finally {
    //     //   await this.client.end();
    //     }
      
    //   }

    // storeResult = async(output)=>{
    //     try {
    //         const query = `INSERT INTO OUTPUT_STORE (RESULT) VALUES(${output})`;
    //         const result = await this.client.query(query);
        
    //         if (result.rows.length > 0) {
    //           return result.rows; // Return the first row (assuming unique ID)
    //         } else {
    //           return null; // No row found with the given ID
    //         }
    //       } catch (err) {
    //         console.error('Error fetching row:', err);
    //         throw err; // Re-throw the error for handling in calling code
    //       } finally {
    //       //   await this.client.end();
    //       }
    // }

    // getResults = async()=>{
    //     try {
    //         const query = `SELECT * FROM OUTPUT_STORE`;
    //         const result = await this.client.query(query);
        
    //         if (result.rows.length > 0) {
    //           return result.rows; // Return the first row (assuming unique ID)
    //         } else {
    //           return null; // No row found with the given ID
    //         }
    //       } catch (err) {
    //         console.error('Error fetching row:', err);
    //         throw err; // Re-throw the error for handling in calling code
    //       } finally {
    //       //   await this.client.end();
    //       }
    // }

    // insertRows = async()=>{
    //     try {
    //       const query = `INSERT INTO OPERATORS (operator, sign)
    //       VALUES ('addition', '+'), 
    //       ('subtraction','-'),
    //       ('multiplication','*'),
    //       ('division','/')`;
    //       const result = await this.client.query(query);
      
    //       if (result.rows.length > 0) {
    //         return result.rows; // Return the first row (assuming unique ID)
    //       } else {
    //         return null; // No row found with the given ID
    //       }
    //     } catch (err) {
    //       console.error('Error fetching row:', err);
    //       throw err; // Re-throw the error for handling in calling code
    //     } finally {
    //     //   await this.client.end();
    //     }
    //   }

    //   deleteAllRows = async()=>{
    //     try {
    //       const queryOperators = `
    //       DELETE FROM OPERATORS`;
    //       const resultOperators = await this.client.query(queryOperators);
    //       const queryOutputStore = `
    //       DELETE FROM OUTPUT_STORE`;
    //       const resultOutputStore = await this.client.query(queryOutputStore);

    //       return {resultOperators: resultOperators.rows.length||0, resultOutputStore: resultOutputStore.rows.length||0 }
    //     } catch (err) {
    //       console.error('Error fetching row:', err);
    //       throw err; // Re-throw the error for handling in calling code
    //     } finally {
    //     //   await this.client.end();
    //     }
    //   }
}

export default PgClient;
