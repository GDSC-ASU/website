import type FAQ from "$lib/entities/FAQ";
import Requests from "./Requests";

export default class FAQRequest {
	public static async getAllFAQs(): Promise<FAQ[]> {
		return await Requests.makeRequest("GET", "faq", null)
			.then((resp) => resp.json())
			.then((projects) => projects.map((e: FAQ) => e as FAQ))
			.catch((err) => {
				console.log(err);
				return [];
			});
	}
	public static async createFAQ(body: any) {}
	public static async updateFAQ(body: any) {}
	public static async deleteFAQ(body: any) {}
}
