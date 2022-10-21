<script lang="ts">
    import { page } from "$app/stores";

    import RouteLink from "$lib/ui/RouteLink.svelte";
</script>

<div class="flex justify-between  h-[10vh] py-[15px] mb-[10px] px-[45px]">
    <img class="block" alt="GDSC - ASU" src="/images/gdsc-logo.png" />
    {#key [$page.url.hash, $page.url.pathname]}
        <div class="font-[400] uppercase pt-[24px] px-[7px] ">
            <nav>
                <RouteLink title="Events" href="#events" _class="pr-[25px] " />
                <RouteLink title="Our Team" href="#team" _class="pr-[25px] " />
                <RouteLink title="Contact Us" href="#contact" _class="" />
            </nav>
        </div>
    {/key}
</div>
