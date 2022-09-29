<script lang="ts">
    import Desktop from "$lib/components/Header/Desktop.svelte";
    import Separator from "../Separator.svelte";
    import Mobile from "./Mobile.svelte";
</script>

<div class="fixed z-[50] bg-white">
    <div class="hidden md:block">
        <Desktop />
    </div>

    <div class="block md:hidden">
        <Mobile />
    </div>

    <Separator />
</div>
