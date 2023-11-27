<script lang="ts">
    import { goto } from "$app/navigation";

    import Google from "$lib/ui/Google.svelte";
</script>

<div class="h-[100%] pt-[30px] mx-[30px] md:mx-[55px] xl:mx-[145px]">
    <div class="flex justify-between">
        <div
            class="grid place-items-center w-[100%] md:w-[80%] h-[450px] lg:h-auto"
        >
            <div class="w-[100%]">
                <h1 class="text-[19px] md:text-[40px] font-bold text-grey-2">
                    <Google>&nbsp;Developer Student Clubs</Google>
                </h1>
                <h2
                    class="text-[16px] md:text-[20px] my-[30px] md:w-[700px] text-grey-1"
                >
                    Are community groups for college and university students
                    interested in Google developer technologies. Students from
                    all undergraduate or graduate programs with an interest in
                    growing as a developer are welcome. By joining a GDSC,
                    students grow their knowledge in a peer-to-peer learning
                    environment and build solutions for local businesses and
                    their community.
                </h2>
                <a href="https://gdsc.community.dev/" target="_blank">
                    <button
                        class="mt-[30px] w-[150px] font-[500] p-[5px] bg-yellow hover:bg-[#FFD54F] rounded-[8px] text-white click"
                    >
                        More Info
                    </button>
                </a>
            </div>
        </div>
        <div class="w-[20%] hidden lg:block">
            <img class="h-[95%] w-full" alt="" src="/images/intro-shape.svg" />
        </div>
    </div>
</div>

<style>
    .click:active {
        transform: scale(-0.95) rotate(180deg);
    }
</style>
