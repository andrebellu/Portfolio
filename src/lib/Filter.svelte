<script>
  import { term } from "../store.js";
  let val = "";

  $: term.set(val);
</script>

<main>
  <input
    bind:value={val}
    class="bg-transparent focus:ring-2 focus:ring-glitch focus:outline-none
    appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-full py-2 pl-10 ring-1 shadow-sm m-2"
    type="text"
    aria-label="Filter projects"
    placeholder="Filter projects..."
  />
</main>
