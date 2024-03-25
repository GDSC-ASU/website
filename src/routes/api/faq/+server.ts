import { FAQ } from "$lib/db/types/FAQ";
import FAQRequest from "$lib/utils/requests/FAQRequests";
import type { RequestEvent, RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
	const faqs = await FAQ.findAll();
	if (!faqs) {
		return new Response("Internal server error", { status: 500 });
	}
	return new Response(JSON.stringify(faqs), { status: 200 });
};

export const POST: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	const faqs = await FAQ.create(body);

	return new Response(JSON.stringify(body), { status: 200 });
};

export const PUT: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	const faq = await FAQ.findByPk(body.id);
	if (!faq) {
		throw new Error("FAQ not found");
	}
	await faq.update(body);

	return new Response("Updated", { status: 200 });
};

export const DELETE: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.json();
	const faq = await FAQ.findByPk(body.id);
	if (!faq) {
		throw new Error("FAQ not found");
	}
	await faq.destroy();

	return new Response(JSON.stringify(body), { status: 200 });
};
