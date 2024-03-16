import { sequelize } from "./connector";
import { Event } from "./types/Event";
import { Member } from "./types/Member";
import { Project } from "./types/Project";

export function initTables() {
	sequelize.sync();
	Event.sync();
	Member.sync();
	Project.sync();
}
