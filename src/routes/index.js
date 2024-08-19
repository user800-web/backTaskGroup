const { Router } = require("express"); //importar función Router desde el módulo llamado express
const router = Router();

const { getUsers, login } = require("../controllers/index.controller");

router.get("/users", getUsers);
router.post("/", login);

module.exports = router;
