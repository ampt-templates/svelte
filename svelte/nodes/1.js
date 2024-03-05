

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1b983004.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.7e6a41e6.js","_app/immutable/chunks/singletons.148805ce.js"];
export const stylesheets = [];
export const fonts = [];
