<script lang="ts">
    import { goto } from "$app/navigation";

    import Button from "$lib/ui/Button.svelte";
    import Google from "$lib/ui/Google.svelte";

    function openMoreInfo() {
        goto("https://google.com");
    }
</script>

<div class="h-[100%] py-[20px] mx-[30px] md:mx-[40px]">
    <div class="flex justify-between">
        <div class="w-[100%] py-[120px]">
            <h1 class="text-[22px] md:text-[35px] font-bold">
                <Google>&nbsp;Developer Student Clubs (GDSC)</Google>
            </h1>
            <h2 class="text-[20px] mt-[30px] md:w-[700px]">
                Are community groups for college and university students
                interested in Google developer technologies. Students from all
                undergraduate or graduate programs with an interest in growing
                as a developer are welcome. By joining a GDSC, students grow
                their knowledge in a peer-to-peer learning environment and build
                solutions for local businesses and their community.
            </h2>
            <Button
                title="More Info"
                on:click={openMoreInfo}
                _class="mt-[30px] w-[150px] font-[500] p-[5px]"
            />
        </div>
        <div>
            <img
                class="hidden md:block h-[100%]"
                alt=""
                src="/images/intro-side.png"
            />
        </div>
    </div>
</div>
