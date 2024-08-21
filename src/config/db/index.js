const { Pool } = require("pg");

const pool = new Pool({
  host: "ep-falling-dust-a43klzpf.us-east-1.aws.neon.tech",
  user: "taskGroupDB_owner",
  password: "tDzyGsnwf1u2",
  database: "taskGroupDB",
  port: "5432",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  pool,
};
