<script>
    import Animate from "../../lib/Animate.svelte";
</script>

<main>
    <Animate>
        <div class="flex md:flex-row flex-col justify-center items-center h-screen">
            <div class="m-5 text-center">
                <h1 class="text-4xl text-glitch">WHOAMI</h1>
                <p>
                    <!-- svelte-ignore security-anchor-rel-noreferrer -->
                    I am a student of the IT course at the <a
                        href="https://www.iiscastelli.edu.it/pager.aspx?page=mainpage"
                        target="_blank">Itis Castelli</a
                    > in Brescia. I am currently in the last year of the course.
                    I am passionate about programming and I am always looking for
                    new challenges.
                </p>
            </div>

            <div class="m-5 text-center">
                <h1 class="text-4xl text-glitch">SKILLS</h1>
                <p>
                    I'm still studying so i don't have any skills yet, but i
                    know a little bit of PYTHON, JAVA, some JS and HTML/CSS.
                    This Porfolio is made with Svelte, a framework that i'm
                    trying to learn. <br> Every advice is welcome!
                </p>
            </div>
        </div>
    </Animate>
</main>
