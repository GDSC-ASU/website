import EventRequest from "$lib/utils/requests/EventRequests";
import type { RequestEvent, RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
	const events = await EventRequest.getAllEvents();
	if (!events) {
		return new Response("Internal server error", { status: 500 });
	}
	return new Response(JSON.stringify(events), { status: 200 });
};

export const POST: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	await EventRequest.createEvent(body);

	return new Response(JSON.stringify(body), { status: 200 });
};

export const PUT: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	await EventRequest.updateEvent(body);

	return new Response("Updated", { status: 200 });
};

export const DELETE: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	await EventRequest.deleteEvent(body);

	return new Response(JSON.stringify(body), { status: 200 });
};
