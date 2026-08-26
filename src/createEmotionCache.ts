import createCache from "@emotion/cache";

// Shared cache config so client and server produce matching class names.
// `prepend: true` makes sure MUI's generated styles load before any other
// stylesheet, so component sx overrides (and our theme) always win.
export default function createEmotionCache() {
    return createCache({ key: "css", prepend: true });
}
