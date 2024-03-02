import { Sequelize } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "$lib/data/gdsc.db",
});
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();
sequelize.sync({});
