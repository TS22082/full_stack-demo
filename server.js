const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./views"));

const apiRoutes = require("./controllers/api-routes");
app.use("/api", apiRoutes);

const htmlRoutes = require("./controllers/html-routes");
app.use("/", htmlRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`);
  });
});
