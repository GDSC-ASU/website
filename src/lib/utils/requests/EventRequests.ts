import { Event } from "$lib/data/Event";
export default class EventRequest {
	public static async getAllEvents() {
	  const events = await Event.findAll();
	  return events.map((event) => event.toJSON());
	}
	public static async createEvent(name: string, description:string, link: string, imagePath: string, altImagePath: string) {
  const newEvent = await Event.create({
	name,
	description,
	link,
	imagePath,
	altImagePath
});
	}
public static async updateEvent(id: string,name: string, description:string, link: string, imagePath: string, altImagePath: string){
	const events = await Event.findByPk(id); 
	await events.update({
		name,
		description,
		link,
		imagePath,
		altImagePath
	});
	return events.toJSON();
}
public static async deleteEvent(id: string)
{
	const events = await Event.findByPk(id);
	await events.destroy();
	return{message:'Deleted'}
}}