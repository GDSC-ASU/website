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
  //TODO: send one param called Event instead of everything
  const events = await EventRequest.createEvent(
    body.name,
    body.description,
    body.link,
    body.imagePath,
    body.altImagePath
  );
  return new Response(JSON.stringify(body), { status: 200 });
};
export const PUT: RequestHandler = async (event: RequestEvent) => {
  const body = await event.request.json();
    //TODO: send one param called Event instead of everything
  await EventRequest.updateEvent(
    body.id,
    body.name,
    body.description,
    body.link,
    body.imagePath,
    body.altImagePath
  );

  return new Response("Updated", { status: 200 });
};
export const DELETE: RequestHandler = async (event: RequestEvent) => {
  const body = await event.request.json();
  await EventRequest.deleteEvent(body.id);

  return new Response(JSON.stringify(body), { status: 200 });
};
