import EventRequest from "$lib/utils/requests/EventRequests";
import MemberRequest from "$lib/utils/requests/MemberRequests";
import ProjectRequests from "$lib/utils/requests/ProjectRequests";
import FAQRequests from "$lib/utils/requests/FAQRequests";
import type { Load } from "@sveltejs/kit";

export const ssr = true;
export const prerender = true;

export const load: Load = async () => {
	const years = await MemberRequest.getYears();
	return {
		projects: await ProjectRequests.getProjects(),
		events: await EventRequest.getEvents(),
		team: await MemberRequest.getMembers(years[years.length - 1]),
		years: years,
		faqs: await FAQRequests.getFAQs(),
	};
};
