const  Pool = require('pg').Pool;
const pg_conn = new Pool({
  user: 'ljpucmwpddnydn',
  host: 'ec2-23-23-182-238.compute-1.amazonaws.com',
  database: 'd1s3darb6e89po',
  password: '415e32f888742cd09d9cb9237dd031097490b456a365e06ac53b5c12d0adf657',
  port: 5432,
  ssl:{
    rejectUnauthorized: false
  },
});
module.exports = pg_conn;