import { Event } from "$lib/db/types/Event";

export default class EventRequest {
	public static async getAllEvents() {
		const events = await Event.findAll();
		return events.map((event) => event.toJSON());
	}
	public static async createEvent(body: any) {
		const event = await Event.create(body);
		return event;
	}
	public static async updateEvent(body: any) {
		const event = await Event.findByPk(body.id);
		if (!event) {
			throw new Error("Event not found");
		}
		await event.update(body);
		return event.toJSON();
	}
	public static async deleteEvent(body: any) {
		const event = await Event.findByPk(body.id);
		if (!event) {
			throw new Error("Event not found");
		}
		await event.destroy();
		return { message: "Deleted" };
	}
}
