<script lang="ts">
  import type Member from "$lib/models/Member";
  export let member: Member;
</script>

{#if member}
  <div
    class="text-center w-[200px] my-[30px] md:mx-[40px] grid place-items-center"
  >
    <img
      alt=""
      class="rounded-[100%]"
      height={273}
      width={273}
      src={member.pfp_link}
    />
    <h1 class="font-bold text-[20px]">{member.name}</h1>
    <h2 class="text-[15px]">{member.role}</h2>
    <button
      class="mt-[20px] p-[10px] bg-[#0086F8] text-[#fff] hover:bg-[#fff] border-[#0086F8] border-[2px]  hover:text-[#0086F8] font-bold click rounded-[8px]"
      >
      <a href="{member.profile_link}" target="_blank">
        View Profile</a>
    </button>
  </div>
{/if}

<style>
  .click:active {
    transform: scale(-0.95) rotate(180deg);
  }
</style>
