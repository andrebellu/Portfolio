<script>
    import { term } from "../store.js";
    let val = "";

    $: term.set(val);
</script>

<main>

    <select
        bind:value={val}
        class="bg-transparent focus:ring-2 focus:ring-glitch focus:outline-none
    appearance-none text-sm text-slate-900 placeholder-slate-400 rounded-full py-2 px-5 ring-1 shadow-sm m-2 text-center w-15"
        aria-label="Filter projects"
        selected="all"
    >
        <option value="">All </option>
        <option value="java">Java</option>
        <option value="svelte">Svelte</option>
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="processing">Processing</option>
        <option value="arduino">Arduino</option>
    </select>
    
</main>
