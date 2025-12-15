<script lang="ts">
    import Daisy from "$lib/illustrations/daisy.svelte";
    import Tulip from "$lib/illustrations/tulip.svelte";
    import Poppy from "$lib/illustrations/poppy.svelte";

    $: projects = [
        {
            title: "Unearth",
            href: "https://unearth.news",
            thumb: Daisy,
            description: "An ai-native news analysis platform.",
            tech: "Typescript, React, Express, PostgreSQL, Vertex AI SDK, Google Cloud Platform, Docker, GitHub Actions",
        },
        {
            title: "Open Artwork",
            href: "https://openart.work",
            thumb: Tulip,
            description:
                "A standardized REST API for public domain art metadata.",
            tech: "Typescript, React, Express, PostgreSQL, Google Cloud Platform, Docker, GitHub Actions",
        },
        {
            title: "Aura",
            href: "https://aura.swe.cd",
            thumb: Tulip,
            description:
                "Generate a personalized reading based on your reading habits",
            tech: "Bun, Typescript, Svelte, Hono",
        },
    ];
</script>

<svelte:head>
    <title>Cristian Dominguez</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- <svelte:component
    this={p.thumb}
    className="max-h-40 my-3 fill-fg-dark-500"
/> -->

<main class="bg-content-100 text-content-500">
    <h1>hello</h1>
</main>
