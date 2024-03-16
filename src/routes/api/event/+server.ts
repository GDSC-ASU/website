import { Event } from "$lib/db/types/Event";
import EventRequest from "$lib/utils/requests/EventRequests";
import type { RequestEvent, RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
	const events = await Event.findAll();
	if (!events) {
		return new Response("Internal server error", { status: 500 });
	}
	return new Response(JSON.stringify(events), { status: 200 });
};

export const POST: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	await Event.create(body);
	return new Response(JSON.stringify(body), { status: 200 });
};

export const PUT: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	const _event = await Event.findByPk(body.id);
	if (!_event) {
		throw new Error("Event not found");
	}
	await _event.update(body);
	await EventRequest.updateEvent(body);

	return new Response("Updated", { status: 200 });
};

export const DELETE: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	const _event = await Event.findByPk(body.id);
	if (!_event) {
		throw new Error("Event not found");
	}
	await _event.destroy();

	return new Response(JSON.stringify(body), { status: 200 });
};
