<script>
    import Animate from "../lib/Animate.svelte";
    import Clock from "../lib/Clock.svelte";
</script>

<main>
    <Animate>
        <div class="navbar flex justify-end px-1">
            <Clock />
        </div>

        <div
            class="flex justify-center items-center flex-col lg:h-[calc(100vh-100px)] h-[calc(100vh-100px)] text-center px-1"
        >
            <div class="greetings">
                <h1 class="text-4xl">Hello, I'm Andrea</h1>
                <h2 class="text-2xl">IT student</h2>
            </div>

            <div class="flex flex-row justify-between">
                <div class="px-2">
                    <a class="text-2xl glitch nav" href="/about">About me</a>
                </div>

                <div class="px-2">
                    <a class="text-2xl glitch nav" href="/projects"
                        >Project Showcase</a
                    >
                </div>

                <div class="px-2">
                    <a class="text-2xl glitch nav" href="/contacts">Contacts</a>
                </div>
            </div>
        </div>
    </Animate>
</main>
