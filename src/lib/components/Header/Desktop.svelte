<script lang="ts">
    import {page} from "$app/stores";

    import RouteLink from "$lib/ui/RouteLink.svelte";
    import Separator from "../Separator.svelte";
</script>

<div
    class="mx-[30px] mb-[10px] flex items-start justify-between pb-[15px] pt-[25px] md:mx-[45px] xl:mx-[145px]">
    <div class="">
        <img
            class="block h-[48px] w-[324px] lg:h-[65px] lg:w-[420px]"
            width={420}
            height={65}
            alt="GDSC - ASU"
            src="/images/gdsc-logo.png" />
    </div>
    <div class="">
        {#key [$page.url.hash, $page.url.pathname]}
            <div class="px-[7px] pt-[24px] text-sm font-[400] uppercase lg:text-base">
                <nav>
                    <RouteLink title="Events" href="#events" _class="pr-[25px]" />
                    <RouteLink title="Our Team" href="#team" _class="pr-[25px]" />
                    <RouteLink title="FAQs" href="#faqs" _class="pr-[25px]" />
                    <RouteLink title="Follow US" href="#footer" _class="lg:pr-[25px]" />
                </nav>
            </div>
        {/key}
    </div>
</div>
<div class="mx-[30px] md:mx-[45px] xl:mx-[145px]">
    <Separator />
</div>
