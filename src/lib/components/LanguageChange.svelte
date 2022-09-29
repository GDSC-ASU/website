<script lang="ts">
    import { browser } from "$app/environment";

    import { translate, getLocales } from "$lib/locale";
    import { onMount } from "svelte";

    let pageLocation: string = "/";

    onMount(() => {
        if (browser) {
            pageLocation = location.pathname;
            let lastSlash = pageLocation.lastIndexOf("/");
            pageLocation = pageLocation.substring(0, lastSlash);
        }
    });
</script>

<div class="" dir={translate("layoutDir")}>
    {translate("common.changeLanguage")}
    {#each getLocales() as locale}
        <a
            class="text-[#1976D2]"
            target="_self"
            href={`${pageLocation}/${locale.symbol}`}>{locale.name}</a
        >
        <div class="last:hidden inline-block">&nbsp;|&nbsp;</div>
    {/each}
</div>
