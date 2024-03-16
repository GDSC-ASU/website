import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: import.meta.env.VITE_SQLITE_FILE_PATH,
});

export async function openConnection() {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

export function closeConnection() {
	sequelize.close();
}
