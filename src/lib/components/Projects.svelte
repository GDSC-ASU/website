<script lang="ts">
    import { default as ProjectV } from "./Project.svelte";
    import type Project from "$lib/models/Project";
    import { onMount } from "svelte";
    import ProjectRequests from "$lib/utils/requests/ProjectRequests";

    let projects: Project[];

    onMount(async () => {
        projects = await ProjectRequests.getProjects();
    });
</script>

{#if projects}
    <div class="h-[100%] p-[45px]">
        <h1 class="pb-[45px] font-bold text-[35px] text-grey-2">Projects</h1>
        <!-- <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"> -->
        <div class="flex flex-wrap justify-between">
            {#each projects as project}
                <ProjectV {project} />
            {/each}
        </div>
    </div>
{/if}
