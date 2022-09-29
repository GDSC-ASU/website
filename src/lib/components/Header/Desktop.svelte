<script lang="ts">
    import { page } from "$app/stores";

    import { translate } from "$lib/locale";
    import RouteLink from "$lib/ui/RouteLink.svelte";
</script>

<div
    dir={translate("layoutDir")}
    class="flex justify-between  h-[96px] py-[15px] mb-[10px] px-[45px]"
>
    <img
        class="block"
        alt={translate("title.main")}
        src="/images/gdsc-logo.png"
    />
    {#key [$page.url.hash, $page.url.pathname]}
        <div class="font-[400] uppercase pt-[24px]  px-[7px] ">
            <nav>
                <RouteLink
                    title={translate("links.events")}
                    href="#events"
                    _class="ltr:pl-[25px] rtl:pr-[25px] "
                />
                <RouteLink
                    title={translate("links.team")}
                    href="#team"
                    _class="ltr:pl-[25px] rtl:pr-[25px] "
                />
                <RouteLink
                    title={translate("links.contact")}
                    href="#contact"
                    _class="ltr:pl-[25px] rtl:pr-[25px] "
                />
            </nav>
        </div>
    {/key}
</div>
