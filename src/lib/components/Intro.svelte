<script lang="ts">
    import { goto } from "$app/navigation";

    import Button from "$lib/ui/Button.svelte";
    import Google from "$lib/ui/Google.svelte";

    function openMoreInfo() {
        goto("https://google.com");
    }
</script>

<div class="h-[100%] pt-[30px] mx-[55px] lg:mx-[145px]">
    <div class="flex justify-between">
        <div class="grid place-items-center w-[80%] h-[500px] xl:h-auto">
            <div class="w-[100%]">
                <h1 class="text-[20px] md:text-[40px] font-bold text-grey-2">
                    <Google>&nbsp;Developer Student Clubs</Google>
                </h1>
                <h2
                    class="text-[14px] md:text-[20px] my-[30px] md:w-[700px] text-grey-1"
                >
                    Are community groups for college and university students
                    interested in Google developer technologies. Students from
                    all undergraduate or graduate programs with an interest in
                    growing as a developer are welcome. By joining a GDSC,
                    students grow their knowledge in a peer-to-peer learning
                    environment and build solutions for local businesses and
                    their community.
                </h2>
                <Button
                    title="More Info"
                    on:click={openMoreInfo}
                    _class="mt-[30px] w-[150px] font-[500] p-[5px]"
                />
            </div>
        </div>
        <div class="w-[20%] hidden xl:block">
            <img class="h-[95%]" alt="" src="/images/intro-shape.svg" />
        </div>
    </div>
</div>
