var data = [
	["I","index.html",21021918],
	["L","数据列表.js",1],
	["B","基础_良良.js",21010917],
	["A","UA_良良.js",21020616],
	["C","电脑_良良.js",20102715],
	["Q","快应用_良良.js",20102715],
	["S","爬虫_良良.js",21010715],
	["T","indexSidebar.js",2],
];

self.addEventListener('install', function(event) {
  event.waitUntil(
	data.forEach( d => {
		caches.open(`${d[0]}_${d[2]}`).then( cache => {
			return cache.add('./' + d[1]);
		});
	})
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then( cacheNames => {
      return Promise.all(
        cacheNames.map( cacheName => {
			data.map( d => {
				if (cacheName.slice(0,1) == d[0]) && (parseInt(cacheName.slice(2)) < d[2]) {
					return caches.delete(cacheName);
				}
			});
        });
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).catch( () => {
    return fetch(event.request);
  }).then( response => {
	data.map ( d => {
		if ('.' + /\/+\w+\.+\w+$/.exec(event.request.url) == d[1]) {
			caches.open(`${d[0]}_${d[2]}`).then( cache => {
				cache.put(event.request, response);
			});
		}
	});
    return response.clone();
  }));
});
