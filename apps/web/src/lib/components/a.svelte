<script lang="ts">
    export let href: string;
    export let outbound: boolean | undefined = undefined;
    export let cn: string = "";

    // detect non http hrefs (mailto:, tel:)
    function isHttpLink(href: string): boolean {
        return href.startsWith("http://") || href.startsWith("https://");
    }

    // detect outbound links
    $: isExternal =
        outbound ??
        (typeof window !== "undefined" &&
            isHttpLink(href) &&
            new URL(href, location.origin).host !== location.host);

    $: target = isExternal ? "_blank" : undefined;
    $: rel = isExternal ? "noopener noreferrer" : undefined;
    $: preload = !isExternal ? "hover" : undefined;
</script>

<a
    {href}
    {target}
    {rel}
    {...!isExternal && isHttpLink(href)
        ? { "data-sveltekit-preload-data": preload }
        : {}}
    class={`font-bold underline underline-offset-4 hover:decoration-dotted active:decoration-dotted transition-colors duration-300 ${cn}`}
>
    <slot />
</a>
