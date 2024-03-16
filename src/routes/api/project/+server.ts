import { Project } from "$lib/db/types/Project";
import ProjectRequest from "$lib/utils/requests/ProjectRequests";
import type { RequestEvent, RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
	const projects = await Project.findAll();
	if (!projects) {
		return new Response("Internal server error", { status: 500 });
	}
	return new Response(JSON.stringify(projects), { status: 200 });
};

export const POST: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	const project = await Project.create(body);

	return new Response(JSON.stringify(body), { status: 200 });
};

export const PUT: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	const project = await Project.findByPk(body.id);
	if (!project) {
		throw new Error("Project not found");
	}
	await project.update(body);

	return new Response("Updated", { status: 200 });
};

export const DELETE: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	const project = await Project.findByPk(body.id);
	if (!project) {
		throw new Error("Project not found");
	}
	await project.destroy();

	return new Response(JSON.stringify(body), { status: 200 });
};
