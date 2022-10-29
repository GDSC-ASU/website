<script lang="ts">
    import { goto } from "$app/navigation";

    import type Event from "$lib/models/Event";
    export let event: Event;

    function openEvent() {
        goto(event.link);
    }

    function changePic() {
        let tmp = event.imagePath;
        event.imagePath = event.altImagePath;
        event.altImagePath = tmp;
        event = { ...event };
    }
</script>

<div class="inline-block w-[414px] mr-[20px] last:mr-0">
    {#if event}
        <div
            on:click={openEvent}
            class="text-center w-[414px] cursor-pointer py-[20px] "
        >
            <img
                alt=""
                class="border-[1px] border-[#000] w-[413.2px] h-[300px]"
                src={event.imagePath}
            />
            <h1 class="font-bold text-[20px]">{event.name}</h1>
            <h2 class="text-[15px]">{event.description}</h2>
        </div>
    {/if}
</div>
