import type Event from "$lib/entities/Event";
import Requests from "./Requests";

export default class EventRequest {
	public static async getAllEvents(): Promise<Event[]> {
		return await Requests.makeRequest("GET", "event", null)
			.then((resp) => resp.json())
			.then((projects) => projects.map((e: Event) => e as Event))
			.catch((err) => {
				console.log(err);
				return [];
			});
	}
	public static async createEvent(body: any) {}
	public static async updateEvent(body: any) {}
	public static async deleteEvent(body: any) {}
}
