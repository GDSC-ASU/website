import { Member } from "$lib/db/types/Member";
import MemberRequest from "$lib/utils/requests/MemberRequests";
import type { RequestEvent, RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
	const members = await Member.findAll();
	if (!members) {
		return new Response("Internal server error", { status: 500 });
	}
	return new Response(JSON.stringify(members), { status: 200 });
};

export const POST: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	const member = await Member.create(body);

	return new Response(JSON.stringify(member), { status: 200 });
};

export const PUT: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	const member = await Member.findByPk(body.id);
	if (!member) {
		throw new Error("Member not found");
	}
	await member.update(body);

	return new Response("Updated", { status: 200 });
};

export const DELETE: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	const member = await Member.findByPk(body.id);
	if (!member) {
		throw new Error("Member not found");
	}
	await member.destroy();

	return new Response(JSON.stringify(body), { status: 200 });
};
