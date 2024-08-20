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

const getUsers = async (req, res) => {
  const response = await pool.query("select * from courses");
  //console.log(response.rows);
  //res.send("users");
  res.status(200).json(response.rows);
};
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const response = await pool.query(
    "SELECT * FROM users WHERE email = $1 AND password = $2",
    [email, password]
  );
  if (response.rows.length > 0) {
    const user = response.rows[0];
    res.json({ message: "Autenticado/a", user });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
  //console.log(response);
  //res.send("Autenticado");
};

module.exports = {
  getUsers,
  login,
};
