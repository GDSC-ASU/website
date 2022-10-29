import type FAQ from "$lib/models/FAQ";

const faqs = [
    {
        question: "Question 1",
        answer: "Answer 1",
    },
    {
        question: "Question 2",
        answer: "Answer 2",
    },
    {
        question: "Question 3",
        answer: "Answer 3",
    },
]

export default class FAQRequests {
    public static async getFAQs(): Promise<FAQ[]> {
        return faqs;
    }
}
