import { sequelize } from "./connector";
import { Event } from "./types/Event";
import { FAQ } from "./types/FAQ";
import { Member } from "./types/Member";
import { Project } from "./types/Project";

export function initTables() {
	sequelize.sync();
	Event.sync();
	Member.sync();
	Project.sync();
	FAQ.sync();
}
