<script lang="ts">
    import A from "$lib/components/a.svelte";

    import ArrowSquareOut from "$lib/icons/arrow-square-out.svelte";
    import flowerl from "$lib/illustrations/flower-main-l.svg";
    import flowerr from "$lib/illustrations/flower-main-r.svg";
    import flower1 from "$lib/illustrations/flower-1.svg";

    $: projects = [
        {
            title: "Unearth",
            href: "https://unearth.news",
            imgSrc: flower1,
            description: "An ai-native news analysis platform.",
            tech: "Typescript, React, Express, PostgreSQL, Vertex AI SDK, Google Cloud Platform, Docker, GitHub Actions",
        },
        {
            title: "OpenArt",
            href: "https://openart.work",
            imgSrc: flower1,
            description: "A standardized REST API for public domain art.",
            tech: "Typescript, React, Express, PostgreSQL, Google Cloud Platform, Docker, GitHub Actions",
        },
        {
            title: "Colony",
            href: "https://colony.money",
            imgSrc: flower1,
            description: "A bookkeeping app for resellers.",
            tech: "Java, Typescript, React, Spring, PostgreSQL, AWS, EC2, S3, GitHub Actions",
        },
    ];
</script>

<svelte:head>
    <title>Cristian Dominguez</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="flex flex-col gap-40 p-4">
    <section>
        <h1 class="font-display text-4xl">
            Hello, I’m Cristian &mdash; I’m a Software Engineer
        </h1>

        <img
            src={flowerl}
            alt="An illustrated flower silhouette"
            class="mx-auto my-16"
        />

        <p>
            I’m mostly <span class="italic font-semibold"
                >Typescript-adjacent</span
            >
            with a professional toolkit involving
            <span class="font-semibold">Java, React, Node, and PostgreSQL</span
            >.
        </p>
        <p class="py-3">
            On the side, I’ve been messing around with C and Go while hunting
            down the best matcha in <span class="font-semibold"
                >San Diego, CA</span
            >.
        </p>
        <p>
            I’m big on clean abstractions, strong typing, and finding tech that
            just
            <span class="italic">feels right</span>.
        </p>

        <img
            src={flowerr}
            alt="An illustrated flower silhouette"
            class="mx-auto my-16"
        />

        <p>
            Connect With Me:
            <A
                href="https://linkedin.com/in/cdom27"
                className="hover:text-sky-600 active:text-sky-600"
            >
                Linkedin
            </A>,
            <A
                href="https://github.com/cdom27"
                className="hover:text-indigo-600 active:text-indigo-600"
            >
                GitHub
            </A>,
            <A
                href="mailto:cdom27@outlook.com"
                className="hover:text-rose-600 active:text-rose-600"
            >
                Email
            </A>,
            <A
                href="/cristian-dominguez-resume.pdf"
                className="hover:text-emerald-600 active:text-emerald-600"
                outbound
            >
                Resume
            </A>
        </p>
    </section>

    <section class="flex flex-col gap-16">
        <h2 class="font-display text-3xl">Programming</h2>

        <ul class="grid grid-cols-1 gap-10">
            {#each projects as p}
                <li>
                    <A
                        href={p.href}
                        className="group flex flex-col p-6 gap-6 border-2 border-fg-dark-500"
                        variant="simple"
                    >
                        <h3
                            class="flex items-center mx-auto gap-2 font-normal font-display text-2xl underline underline-offset-4"
                        >
                            <span>{p.title}</span><ArrowSquareOut
                                className="size-6 stroke-fg-dark-500 border-none"
                            />
                        </h3>
                        <img
                            src={p.imgSrc}
                            alt="A silhouette of a flower with two leaves at the stem"
                            class="max-h-35"
                        />
                        <p class="font-semibold">{p.description}</p>
                        <p class="font-medium italic">{p.tech}</p>
                    </A>
                </li>
            {/each}
        </ul>
    </section>
</main>
