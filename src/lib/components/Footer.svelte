<script lang="ts">
    import Separator from "./Separator.svelte";
    import PhotoLink from "$lib/ui/PhotoLink.svelte";
</script>

<div class="mx-[35px] my-[70px] md:mx-[55px] md:w-auto xl:mx-[145px]">
    <Separator />
    <div class="mt-[70px] hidden md:block">
        <div class="flex justify-between">
            <div>
                <img
                    class=" h-[65px] w-[420px]"
                    width={420}
                    height={65}
                    alt="GDSC - ASU"
                    src="/images/gdsc-logo.png" />
            </div>
            <div class="text-grey-1">
                <h2 class="w-[150px] text-[25px] text-grey-2">Follow Us:</h2>
                <div>
                    <PhotoLink
                        link="https://www.facebook.com/GDSCASU"
                        imagePath="/logos/facebook.png" />
                    <PhotoLink
                        link="https://instagram.com/gdscasu"
                        imagePath="/logos/instagram.png" />
                    <PhotoLink
                        link="https://www.linkedin.com/company/GDSCASU"
                        imagePath="/logos/linkedin.png" />
                    <PhotoLink
                        link="https://github.com/GDSC-ASU"
                        imagePath="/logos/github.png" />
                    <PhotoLink
                        link="https://gdsc.community.dev/applied-science-private-university/"
                        imagePath="/logos/google.png" />
                </div>
            </div>
        </div>
    </div>

    <div class="mt-[35px] block md:hidden">
        <img
            class="h-[45px] w-[290px]"
            width={290}
            height={45}
            alt="GDSC - ASU"
            src="/images/gdsc-logo.png" />
        <div class="pt-[40px] text-grey-1">
            <h2 class="w-[150px] text-[25px] text-grey-2">Follow Us:</h2>
            <div>
                <PhotoLink
                    link="https://www.facebook.com/GDSCASU"
                    imagePath="/logos/facebook.png" />
                <PhotoLink
                    link="https://linkedin.com/company/gdscasu"
                    imagePath="/logos/instagram.png" />
                <PhotoLink
                    link="https://www.linkedin.com/company/GDSCASU"
                    imagePath="/logos/linkedin.png" />
                <PhotoLink
                    link="https://github.com/GDSC-ASU"
                    imagePath="/logos/github.png" />
                <PhotoLink
                    link="https://gdsc.community.dev/applied-science-private-university/"
                    imagePath="/logos/google.png" />
            </div>
        </div>
    </div>
</div>
