<script lang="ts">
    import { goto } from "$app/navigation";
    import { translate } from "$lib/locale";
    import { onMount } from "svelte";

    onMount(() => {
        goto(`/${translate("symbol")}`);
    });
</script>

<svelte:head>
    <title>{translate("title.main")}</title>
</svelte:head>
