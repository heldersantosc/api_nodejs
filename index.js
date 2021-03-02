const customExpress = require("./config/customExpress");

const app = customExpress();

app.listen(3003, () => {
  console.log("Servidor rodando");
});
