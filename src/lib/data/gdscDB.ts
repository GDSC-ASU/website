import { Sequelize } from "sequelize-typescript";
import { Event } from "$lib/data/Event";
const sqliteFilePath = import.meta.env.VITE_SQLITE_FILE_PATH;

export const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: sqliteFilePath,
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

export function syncDatabase() {
	sequelize.sync();
	Event.sync();
}

export default sequelize;
