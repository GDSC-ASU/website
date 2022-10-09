<script lang="ts">
    import Events from "$lib/components/Events.svelte";
    import FAQs from "$lib/components/FAQs.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { default as Header } from "$lib/components/Header/Main.svelte";

    import Intro from "$lib/components/Intro.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Team from "$lib/components/Team.svelte";
    import SectionWrapper from "$lib/ui/SectionWrapper.svelte";
</script>

<svelte:head>
    <title>GDSC - ASU</title>
</svelte:head>

<Header />
<div class="overflow-y-scroll h-[86.2vh]">
    <SectionWrapper id="intro">
        <Intro />
    </SectionWrapper>
    <SectionWrapper id="projects">
        <Projects />
    </SectionWrapper>
    <SectionWrapper id="events">
        <Events />
    </SectionWrapper>
    <SectionWrapper id="team">
        <Team />
    </SectionWrapper>
    <SectionWrapper id="faqs">
        <FAQs />
    </SectionWrapper>
    <Footer />
</div>
