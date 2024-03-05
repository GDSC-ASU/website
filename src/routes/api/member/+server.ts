import MemberRequest from "$lib/utils/requests/MemberRequests";
import type { RequestEvent, RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
	const members = await MemberRequest.getAllMembers();
	if (!members) {
		return new Response("Internal server error", { status: 500 });
	}
	return new Response(JSON.stringify(members), { status: 200 });
};

export const POST: RequestHandler = async (member: RequestEvent) => {
	const body = await member.request.json();
	await MemberRequest.createMember(body);

	return new Response(JSON.stringify(body), { status: 200 });
};

export const PUT: RequestHandler = async (member: RequestEvent) => {
	const body = await member.request.json();
	await MemberRequest.updateMember(body);

	return new Response("Updated", { status: 200 });
};

export const DELETE: RequestHandler = async (member: RequestEvent) => {
	const body = await member.request.json();
	await MemberRequest.deleteMember(body);

	return new Response(JSON.stringify(body), { status: 200 });
};
