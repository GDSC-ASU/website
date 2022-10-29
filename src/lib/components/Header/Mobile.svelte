<script lang="ts">
    import MenuIcon from "$lib/ui/MenuIcon.svelte";
    import RouteLink from "$lib/ui/RouteLink.svelte";
    import { page } from "$app/stores";

    $: path = $page.url.pathname;
    $: hashPath = $page.url.hash;

    let showMenu = false;
</script>

<div class="flex justify-between  h-[96px] py-[25px] px-[28px]">
    <img class="block" alt="GDSC Logo" src="/images/gdsc-logo.png" />
    <button on:click={() => (showMenu = !showMenu)}>
        <MenuIcon />
    </button>
</div>

{#if showMenu}
    <div
        class="absolute fadeIn p-[30px] bg-white z-[5] w-full p-[20px] w-[100%] "
    >
        {#key [path, hashPath]}
            <div
                class=" bg-white grid place-items-center text-center uppercase "
            >
                <div class="p-[16px]">
                    <nav on:click={() => (showMenu = !showMenu)}>
                        <RouteLink
                            title="Events"
                            href="#events"
                            _class="block text-[20px] p-[10px]"
                        />
                        <RouteLink
                            title="Our Team"
                            href="#team"
                            _class="block text-[20px] p-[10px]"
                        />
                        <RouteLink
                            title="FAQs"
                            href="#faqs"
                            _class="block text-[20px] p-[10px]"
                        />
                    </nav>
                </div>
            </div>
        {/key}
    </div>
{/if}

<style>
    .fadeIn {
        animation: fadeInMotion 400ms;
    }

    @keyframes fadeInMotion {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
