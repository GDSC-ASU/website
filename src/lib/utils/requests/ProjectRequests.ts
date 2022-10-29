import type Project from "$lib/models/Project";

export default class ProjectRequests {
    public static async getProjects(): Promise<Project[]> {

        return [
            {
                name: "Project 1",
                description: "bla bla bla",
                imagePath: "/images/yellow-circle.svg",
                altImagePath: "/images/blue-circle.svg",
                link: "https://google.com",
            },
            {
                name: "Project 2",
                description: "bla bla bla",
                imagePath: "/images/yellow-circle.svg",
                altImagePath: "/images/blue-circle.svg",
                link: "https://google.com",
            },
        ];
    }
}
