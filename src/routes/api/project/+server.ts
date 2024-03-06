import ProjectRequest from "$lib/utils/requests/ProjectRequests";
import type { RequestEvent, RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
	const projects = await ProjectRequest.getAllProjects();
	if (!projects) {
		return new Response("Internal server error", { status: 500 });
	}
	return new Response(JSON.stringify(projects), { status: 200 });
};

export const POST: RequestHandler = async (project: RequestEvent) => {
	const body = await project.request.json();
	await ProjectRequest.createProject(body);

	return new Response(JSON.stringify(body), { status: 200 });
};

export const PUT: RequestHandler = async (project: RequestEvent) => {
	const body = await project.request.json();
	await ProjectRequest.updateProject(body);

	return new Response("Updated", { status: 200 });
};

export const DELETE: RequestHandler = async (project: RequestEvent) => {
	const body = await project.request.json();
	await ProjectRequest.deleteProject(body);

	return new Response(JSON.stringify(body), { status: 200 });
};
