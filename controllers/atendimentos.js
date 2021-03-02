module.exports = (app) => {
  app.get("/", (_, res) => res.send("OK"));

  app.post("/atendimentos", (_, res) => res.send("Rota de atendimento"));
};
