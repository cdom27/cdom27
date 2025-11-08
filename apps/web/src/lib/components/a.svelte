<script lang="ts">
    export let href: string;
    export let outbound: boolean | undefined = undefined;
    export let variant: "default" | "simple" = "default";
    export let className: string = "";

    // variant styles
    const style: Record<typeof variant, string> = {
        default:
            "font-bold underline underline-offset-4 hover:decoration-dotted active:decoration-dotted",
        simple: "font-normal",
    };

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
    class={`transition-colors duration-300 ${style[variant]} ${className}`}
>
    <slot />
</a>
