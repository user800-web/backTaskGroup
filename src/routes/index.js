const { Router } = require("express"); //importar función Router desde el módulo llamado express
const router = Router();

const { login } = require("../controllers/auth.controller");
const { getUsers } = require("../controllers/user.controller");

router.get("/api/users", getUsers);
router.post("/api/login", login);

module.exports = router;
