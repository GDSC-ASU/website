import { sequelize } from "./connector";

export function initTables() {
	sequelize.sync();
}
