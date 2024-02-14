<script lang="ts">
    import {goto} from "$app/navigation";

    import Google from "$lib/ui/Google.svelte";
</script>

<div class="mx-[30px] h-[100%] pt-[30px] md:mx-[55px] xl:mx-[145px]">
    <div class="flex justify-between">
        <div class="grid h-[450px] w-[100%] place-items-center md:w-[80%] lg:h-auto">
            <div class="w-[100%]">
                <h1 class="text-[19px] font-bold text-grey-2 md:text-[40px]">
                    <Google>&nbsp;Developer Student Clubs</Google>
                </h1>
                <h2 class="my-[30px] text-[16px] text-grey-1 md:w-[700px] md:text-[20px]">
                    Are community groups for college and university students interested in
                    Google developer technologies. Students from all undergraduate or
                    graduate programs with an interest in growing as a developer are
                    welcome. By joining a GDSC, students grow their knowledge in a
                    peer-to-peer learning environment and build solutions for local
                    businesses and their community.
                </h2>
                <a href="https://gdsc.community.dev/" target="_blank">
                    <button
                        class="click mt-[30px] w-[150px] rounded-[8px] bg-yellow p-[5px] font-[500] text-white hover:bg-[#FFD54F]">
                        More Info
                    </button>
                </a>
            </div>
        </div>
        <div class="hidden w-[20%] lg:block">
            <img class="h-[95%] w-full" alt="" src="/images/intro-shape.svg" />
        </div>
    </div>
</div>

<style>
    .click:active {
        transform: scale(-0.95) rotate(180deg);
    }
</style>
