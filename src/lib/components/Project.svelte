<script lang="ts">
    import { goto } from "$app/navigation";

    import type Project from "$lib/models/Project";
    export let project: Project;

    function openProject() {
        goto(project.link);
    }

    function changePic() {
        let tmp = project.imagePath;
        project.imagePath = project.altImagePath;
        project.altImagePath = tmp;
        project = { ...project };
    }
</script>

{#if project}
    <div
        on:click={openProject}
        on:mouseenter={changePic}
        on:mouseleave={changePic}
        class="text-center cursor-pointer w-[414px] py-[20px]"
    >
        <img
            alt=""
            class="border-[1px] border-[#000] w-[413.2px] h-[300px]"
            src={project.imagePath}
        />
        <h1 class="font-bold text-[20px]">{project.name}</h1>
        <h2 class="text-[15px]">{project.description}</h2>
    </div>
{/if}
