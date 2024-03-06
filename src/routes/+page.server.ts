import EventRequests from "$lib/utils/requests/EventRequests";
import MemberRequest from "$lib/utils/requests/MemberRequests";
import ProjectRequests from "$lib/utils/requests/ProjectRequests";
import FAQRequests from "$lib/utils/requests/FAQRequests";
import type { Load } from "@sveltejs/kit";

export const ssr = true;
export const prerender = true;
export const load: Load = async () => {
	const years = await MemberRequest.getYears();
	return {
		projects: await ProjectRequests.getAllProjects(),
		events: await EventRequests.getAllEvents(),
		team: await MemberRequest.getAllMembers(),
		years: years,
		faqs: await FAQRequests.getFAQs(),
	};
};
