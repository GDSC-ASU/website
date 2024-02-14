<script lang="ts">
    import {goto} from "$app/navigation";

    import type Project from "$lib/models/Project";
    export let project: Project;

    function openProject() {
        goto(project.link);
    }

    function changePic() {
        let tmp = project.imagePath;
        project.imagePath = project.altImagePath;
        project.altImagePath = tmp;
        project = {...project};
    }
</script>

{#if project}
    <a
        target="_blank"
        rel="noreferrer"
        href={project.link}
        class="w-[350px] cursor-pointer py-[20px] text-center md:mx-[30px]">
        <div
            on:mouseenter={changePic}
            on:mouseleave={changePic}
            class="grid place-items-center">
            <img
                alt=""
                class="h-[300px] w-[288px] border-[1px] border-[#000] md:w-[300px]"
                width={300}
                height={300}
                src={project.imagePath} />
            <h1 class="text-[20px] font-bold">{project.name}</h1>
            <h2 class="text-[15px]">{project.description}</h2>
        </div>
    </a>
{/if}
