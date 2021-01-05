加入("基础",{
	curr: {
		名称: "使用浏览器当前使用的 UA",
		内容: navigator.userAgent
	},
    blank: {
		名称: "不使用模版",
		内容: ""
	},
    baidu: {
		名称: "百度页面优化 UA",
		内容: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1 mission baiduboxapp/3.2.5.10 SearchCraft/3.7.0"
	},
	std: {
		名称: "Android 10 , WebView 88",
		内容: `Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.68 Mobile Safari/537.36`
	},
	short: {
		名称: "Android 10 短 UA",
		内容: `Mozilla/5.0 (Linux; U; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014)`
	},
	ucbs: {
		名称: "Android 10 , 阿里 UCBS 3.22 (69)",
		内容: `Mozilla/5.0 (Linux; U; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.22.1.58 Mobile Safari/537.36 UCBS/3.21.0.175_200831203602`
	},
	tbs: {
		名称: "Android 10 , 腾讯 TBS 4.5 (77)",
		内容: `Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045434 Mobile Safari/537.36`
	},
    wchrome: {
		名称: "Windows 7 , Chrome 模版",
		内容: "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko)"
	},
	wnet: {
		名称: "Windows 7 , .NET 模版",
		内容: "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; Tablet PC 2.0;"
	},
    mchrome: {
		名称: "macOS 10.15 , Chrome 79",
		内容: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"
	},
	symb: {
		名称: "Symbian 3",
		内容: "Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.0 Mobile Safari/533.4 3gpp-gba"
	},
	ios: {
		名称: "iPhone , iOS 13.4",
		内容: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1"
	},
    bbos: {
		名称: "Blackberry OS 10",
		内容: "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+"
	},
	bbtab: {
		名称: "Blackberry Tablet OS 2.1",
		内容: "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0;) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+"
	},
	meego: {
		名称: "MeeGo",
		内容: "Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) Version/8.5.0 NokiaBrowser/8.5.0 Mobile Safari/534.13"
	},
	winphone: {
		名称: "Windows Phone 10 , Edge 14",
		内容: "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263"
	},
	kai: {
		名称: "KaiOS 2.5 , Firefox 48",
		内容: "Mozilla/5.0 (Mobile; LYF/F300B/LYF-F300B-001-01-15-130718-I;Android; rv:48.0) Gecko/48 Firefox/48 KAIOS/2.5"
	},
    bdt7: {
		名称: "Android 10 , 百度 T7 4.5 (76)",
		内容: "Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/76.0.3809.89 Mobile Safari/537.36 T7/12.7"
	},
    bdt7: {
		名称: "Android 10 , 微信 XWeb 2692 (78)",
		内容: "Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.62 XWEB/2692 Mobile Safari/537.36"
	},
    awp: {
		名称: "Android 10 , 搜狗 AWP 2.0 (68)",
		内容: "Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.106 Mobile Safari/537.36 AWP/2.0"
	},
    afox: {
		名称: "Android 10 , Firefox 68",
		内容: "Mozilla/5.0 (Android 10; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0"
	},
	aopr: {
		名称: "Android 10 , 欧朋 12.54",
		内容: "Mozilla/5.0 (Linux; U; Android 10; Pixel 3 XL Build/QPP5.190530.014) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 OPR/12.54.0.5 Mobile Safari/537.36"
	},
});
