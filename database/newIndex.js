const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'jamesjamail',
  // password: 'password',
  database: 'jamesjamail'
})

client.connect(() => console.log('connected to postgres db'));

const testDbGet = async (callback) => {
  let query = `COPY test FROM '/Users/jamesjamail/Documents/WebDev/HackReactor/SDC/SDC-Reviews/database/fakeCSV/fakerReviewData.csv' DELIMITER ',' CSV HEADER;`
  await client
    .query(query)
    .then((results) => callback(null, results))
    .catch((err) => callback(err, null))
}

testDbGet((error, results) => console.log("results = ", results));

