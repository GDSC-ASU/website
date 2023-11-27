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
    <a
        target="_blank"
        rel="noreferrer"
        href={project.link}
        class="text-center cursor-pointer w-[350px] py-[20px] md:mx-[30px]"
    >
        <div
            on:mouseenter={changePic}
            on:mouseleave={changePic}
            class="grid place-items-center"
        >
            <img
                alt=""
                class="border-[1px] border-[#000] w-[288px] md:w-[300px] h-[300px]"
                width={300}
                height={300}
                src={project.imagePath}
            />
            <h1 class="font-bold text-[20px]">{project.name}</h1>
            <h2 class="text-[15px]">{project.description}</h2>
        </div>
    </a>
{/if}
