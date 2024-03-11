import { Project } from "$lib/data/Project";

export default class ProjectRequest {
	public static async getAllProjects() {
		const projects = await Project.findAll();
		return projects.map((project) => project.toJSON());
	}
	public static async createProject(body: any) {
		const project = await Project.create(body);
		return project;
	}
	public static async updateProject(body: any) {
		const project = await Project.findByPk(body.id);
		if (!project) {
			throw new Error("Project not found");
		}
		await project.update(body);
		return project.toJSON();
	}
	public static async deleteProject(body: any) {
		const project = await Project.findByPk(body.id);
		if (!project) {
			throw new Error("Project not found");
		}
		await project.destroy();
		return { message: "Deleted" };
	}
}
