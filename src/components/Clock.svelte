<script>
  import { onMount } from "svelte";

  let time = new Date();
  $: hours = time.getHours();
  $: minutes = time.getMinutes();
  $: seconds = time.getSeconds();

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date();
    }, 1000);
  });
</script>

<main>
  <span class="countdown font-mono text-2xl text-glitch opacity-60">
    <span style="--value:{hours};" />h
    <span style="--value:{minutes};" />m
    <span style="--value:{seconds};" />s
  </span>
</main>
