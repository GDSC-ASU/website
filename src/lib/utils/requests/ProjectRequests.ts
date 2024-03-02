import type Project from "$lib/models/Project";

const projects = [
	{
		name: "Project 1",
		description: "Project 1 Description",
		imagePath: "/images/logogen.png",
		altImagePath: "/images/logogen.png",
		link: "https://google.com",
	},
	{
		name: "Project 2",
		description: "Project 2 Description",
		imagePath: "/images/logogen.png",
		altImagePath: "/images/logogen.png",
		link: "https://google.com",
	},
	{
		name: "Project 3",
		description: "Project 3 Description",
		imagePath: "/images/logogen.png",
		altImagePath: "/images/logogen.png",
		link: "https://google.com",
	},
	{
		name: "Project 4",
		description: "Project 4 Description",
		imagePath: "/images/logogen.png",
		altImagePath: "/images/logogen.png",
		link: "https://google.com",
	},
];

export default class ProjectRequests {
	public static async getProjects(): Promise<Project[]> {
		return projects;
	}
}
