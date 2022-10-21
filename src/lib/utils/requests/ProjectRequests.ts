import type Project from "$lib/models/Project";

export default class ProjectRequests {
    public static async getProjects(): Promise<Project[]> {

        return [
            {
                name: "something",
                description: "something something dark side GG fam",
                imagePath: "/images/red-circle.svg",
                altImagePath: "/images/blue-circle.svg",
                link: "https://google.com",
            },
            {
                name: "something",
                description: "something something dark side GG fam",
                imagePath: "/images/blue-circle.svg",
                altImagePath: "/images/red-circle.svg",
                link: "https://google.com",
            },
            {
                name: "something",
                description: "something something dark side GG fam",
                imagePath: "/images/green-circle.svg",
                altImagePath: "/images/blue-circle.svg",
                link: "https://google.com",
            },
            {
                name: "something",
                description: "something something dark side GG fam",
                imagePath: "/images/yellow-circle.svg",
                altImagePath: "/images/blue-circle.svg",
                link: "https://google.com",
            },
            {
                name: "something",
                description: "something something dark side GG fam",
                imagePath: "/images/red-circle.svg",
                altImagePath: "/images/blue-circle.svg",
                link: "https://google.com",
            },
        ];
    }
}
