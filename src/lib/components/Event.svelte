<script lang="ts">
    import {goto} from "$app/navigation";

    import type Event from "$lib/models/Event";
    export let event: Event;

    function changePic() {
        let tmp = event.imagePath;
        event.imagePath = event.altImagePath;
        event.altImagePath = tmp;
        event = {...event};
    }
</script>

{#if event}
    <a
        target="_blank"
        rel="noreferrer"
        href={event.link}
        class="w-[350px] cursor-pointer py-[20px] text-center md:mx-[30px]">
        <div class="grid place-items-center">
            <img
                alt=""
                class="h-[300px] w-[280px] border-[1px] border-[#000] md:w-[300px]"
                width={300}
                height={300}
                src={event.imagePath} />
            <h1 class="text-[20px] font-bold">{event.name}</h1>
            <h2 class="text-[15px]">{event.description}</h2>
        </div>
    </a>
{/if}
