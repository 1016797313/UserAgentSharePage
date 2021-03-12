var data = [
  ["I","./index.html",21031120],
  ["L","./数据列表.js",2],
  ["B","./基础_良良.js",21031013],
  ["A","./UA_良良.js",21031013],
  ["C","./电脑_良良.js",20102715],
  ["Q","./快应用_良良.js",20102715],
  ["S","./爬虫_良良.js",21010715],
  ["T","./indexSidebar.js",2],
  ["O","../favicon.ico",2],
  ["D","./",21031120],
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    data.map( d => {
      caches.open(`${d[0]}_${d[2]}`).then( cache => {
        return cache.add(d[1]);
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
            if (cacheName.slice(0,1) == d[0] && parseInt(cacheName.slice(2)) < d[2]) {
              return caches.delete(cacheName);
            }
          });
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event);
  event.respondWith(caches.match(event.request).then( response => {
	console.log(response);
	if(response) {
	  data.map ( d => {
		if ('.' + /\/+\w+\.+\w+$/.exec(event.request.url) == d[1]) {
          caches.open(`${d[0]}_${d[2]}`).then( cache => {
            cache.put(event.request, response);
          });
        }
      });
      return response.clone();
	}
	return response.clone();
  }).catch( e => {
	console.log(e);
    return caches.match(event.request);
  }));
});

