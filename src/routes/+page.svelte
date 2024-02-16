<script lang="ts">
	import Events from "$lib/components/Events.svelte";
	import FAQs from "$lib/components/FAQs.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { default as Header } from "$lib/components/Header/Main.svelte";

	import Intro from "$lib/components/Intro.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import Team from "$lib/components/Team.svelte";
	import SectionWrapper from "$lib/ui/SectionWrapper.svelte";
	import type { Load } from "@sveltejs/kit";

	export let data: Load;
</script>

<svelte:head>
	<title>GDSC - ASU</title>
</svelte:head>

<div class="">
	<Header />
	<SectionWrapper id="intro">
		<Intro />
	</SectionWrapper>
	<SectionWrapper id="projects">
		<Projects projects={data.projects} />
	</SectionWrapper>
	<SectionWrapper id="events">
		<Events events={data.events} />
	</SectionWrapper>
	<SectionWrapper id="team">
		<Team team={data.team} years={data.years} />
	</SectionWrapper>
	<SectionWrapper id="faqs">
		<FAQs faqs={data.faqs} />
	</SectionWrapper>
	<SectionWrapper id="footer">
		<Footer />
	</SectionWrapper>
</div>
