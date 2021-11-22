;(function(){
	var emitter = {
		events: {},
		trigger (event, data) {
			var handlers = this.events[event];
			if(!handlers)return;
			handlers.forEach((fn) => {
				fn(data)
			})
		},
		subscribe (event, fn) {
			(this.events[event]) || (this.events[event] = []);
			this.events[event].push(fn);
		}
    };
    function hide() {
      let indicator = document.querySelector('.indicator'),
          out = function() {indicator.classList.add('none')};
          indicator.style.opacity = '0';
          setTimeout(out,500);
    }
	emitter.subscribe('fingerLand', (data) => {
		var indicator = document.querySelector('.indicator');
		if (data) {
			var content = data.innerHTML;
			indicator.classList.remove("none");
			indicator.innerHTML = content;
			indicator.style.opacity = '1';
			indicator.style.top = data.getBoundingClientRect().top + 'px';
		} else {
            hide();
		}
	});
	emitter.subscribe('fingerLand', (elem) => {
		if (elem) {
			if (elem.innerHTML.length == 1) {
				var content = elem.innerHTML, scrolledElem = document.querySelector(`#app_container > div[id="i${content}"]`);
				scrolledElem.scrollIntoView();
			}
		}
	});
	emitter.subscribe('fingerOff', hide);

	window.IndexSidebar = function IndexSidebar(options) {
		this.init(options);
	};
	IndexSidebar.prototype = {
		constructor: IndexSidebar,
		init (options) {
			var options = options || {};
			var defaultOptions = {
				indices: uaData.index,
				mounted: document.body
			}
			for (var k in defaultOptions) {
				if(!options.hasOwnProperty(k)){
					options[k] = defaultOptions[k]
				}
			}
			var sidebarNode = document.createElement('div');
			options.indices.split('').forEach((elem, index) => {
				var indexNode = document.createElement('div');
				indexNode.innerHTML = elem;
				sidebarNode.appendChild(indexNode);
			})
			var indicator = document.createElement('div');
			indicator.classList.add('indicator');
			indicator.classList.add('none')
			sidebarNode.appendChild(indicator)
			sidebarNode.classList.add('sideBar');
			options.mounted.appendChild(sidebarNode);
			this.unitHeight = sidebarNode.firstElementChild.getBoundingClientRect().height;
			this.nodeList = sidebarNode.childNodes;
			this.touchStart = {
				x:null,
				y:null
			};
			this.startElem = null;
			sidebarNode.addEventListener('touchstart', (e) => {
				this.touchstart(e);
			});
			sidebarNode.addEventListener('touchmove', (e) => {
				e.preventDefault();
				this.touchmove(e);
			},{passive: false});
			sidebarNode.addEventListener('touchend', (e) => {
				this.touchend(e);
			});
		},
		touchstart (e) {
			this.touchStart.x = e.touches[0].clientX;
			this.touchStart.y = e.touches[0].clientY;
			this.startElem = {
				node: e.srcElement,
				top: e.srcElement.getBoundingClientRect().top,
				bottom: e.srcElement.getBoundingClientRect().bottom,
				getIndex () {
					var parent = this.node.parentNode, siblings = parent.childNodes, siblingsCount = siblings.length;
					for (var i = 0; i < siblingsCount; i ++) {
						if(siblings[i] === this.node)this.index = i;
					}
				},
				index: null
			};
			this.startElem.getIndex();
			emitter.trigger('fingerLand', e.srcElement)
		},
		touchmove (e) {
			var deltaY = (e.touches[0].pageY - this.touchStart.y);
			if (deltaY > this.startElem.bottom - this.touchStart.y) {
				var margin = this.startElem.bottom - this.touchStart.y;
				deltaY -= margin;
				var currentNodeIndex = ~~(deltaY / this.unitHeight) + 1;
				if (this.nodeIndex !== currentNodeIndex) {
					this.nodeIndex = currentNodeIndex;
					var currentNode = this.nodeList[this.startElem.index + currentNodeIndex]
					emitter.trigger('fingerLand', currentNode);
				}
			} else if (deltaY < this.startElem.top - this.touchStart.y) {
				var margin = this.touchStart.y - this.startElem.top;
				deltaY += margin;
				var currentNodeIndex = Math.abs(~~(deltaY / this.unitHeight)) + 1;
				if (this.nodeIndex !== currentNodeIndex) {
					this.nodeIndex = currentNodeIndex;
					var currentNode = this.nodeList[this.startElem.index - currentNodeIndex]
					emitter.trigger('fingerLand', currentNode);
				}
			} else {
				var currentNodeIndex = 0;
				if (this.nodeIndex !== currentNodeIndex) {
					this.nodeIndex = currentNodeIndex;
					var currentNode = this.nodeList[this.startElem.index]
					emitter.trigger('fingerLand', currentNode);
				}
			}
		},
		touchend (e) {
			this.touchStart.x = this.touchStart.y = this.startElem = null;
			emitter.trigger('fingerOff')
		}
	}
})();
