<script lang="ts">
    import { page } from "$app/stores";

    import Intro from "$lib/components/Intro.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import { setLocale, translate } from "$lib/locale";
    import { onMount } from "svelte";

    onMount(() => {
        setLocale($page.params.locale);
    });
</script>

<svelte:head>
    <title>{translate("title.main")}</title>
</svelte:head>

<Intro />
<Projects />
