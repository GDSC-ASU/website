import type Event from "$lib/models/Event";

const events = [
    {
        name: "Event 1",
        description: "Event 1 description",
        link: "https://google.com",
        imagePath: "/images/logogen.png",
        altImagePath: "",
    },
    {
        name: "Event 2",
        description: "Event 2 description",
        link: "https://google.com",
        imagePath: "/images/logogen.png",
        altImagePath: "",
    },
    {
        name: "Event 3",
        description: "Event 3 description",
        link: "https://google.com",
        imagePath: "/images/logogen.png",
        altImagePath: "",
    },
    {
        name: "Event 4",
        description: "Event 4 description",
        link: "https://google.com",
        imagePath: "/images/logogen.png",
        altImagePath: "",
    },
];


export default class EventRequest {
    public static async getEvents(): Promise<Event[]> {
        return events;
    }
}
