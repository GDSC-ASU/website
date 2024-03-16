import type Project from "$lib/entities/Project";
import Requests from "./Requests";

export default class ProjectRequest {
	public static async getAllProjects(): Promise<Project[]> {
		return await Requests.makeRequest("GET", "project", null)
			.then((resp) => resp.json())
			.then((projects) => projects.map((p: Project) => p as Project))
			.catch((err) => {
				console.log(err);
				return [];
			});
	}
	public static async createProject(body: any) {}
	public static async updateProject(body: any) {}
	public static async deleteProject(body: any) {}
}
