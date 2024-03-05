export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.e27aa244.js","app":"_app/immutable/entry/app.5cc059f8.js","imports":["_app/immutable/entry/start.e27aa244.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.148805ce.js","_app/immutable/entry/app.5cc059f8.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.7e6a41e6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
