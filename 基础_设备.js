Object.assign(uaData.device,{
	opr11pp: {
		desp: "Oppo R11 Plus | 9",
		base: "std",
		type: "Linux",
		string: "Android 9; OPPO R11 Plus Build/PKQ1.190414.001",
		vendor: "Oppo",
		modal: "R11 Plus",
		wkver: "537.36",
		aver: [9,28]
	},
	min3p: {
		desp: "小米 Note 3 | 9",
		base: "std",
		type: "Linux",
		string: "Android 9; Mi Note 3 Build/PKQ1.181007.001",
		vendor: "Xiaomi",
		modal: "Mi Note 3",
		wkver: "537.36",
		aver: [9,28]
	},
	hmik305q: {
		desp: "红米 K30 5G | 10",
		base: "std",
		type: "Linux",
		string: "Android 10; Redmi K30 5G; Build/QKQ1.191222.002",
		vendor: "Xiaomi",
		modal: "Redmi K30 5G",
		wkver: "537.36",
		aver: [10,29]
	},
	lenz5prgtq: {
		desp: "联想 Z5 Pro GT | 10",
		base: "std",
		type: "Linux",
		string: "Android 10; Lenovo L78032 Build/QQ3A.200805.001",
		vendor: "Lenovo",
		modal: "Z5 Pro GT",
		wkver: "537.36",
		aver: [10,29]
	},
	mi6o: {
		desp: "小米 6 | 8",
		base: "std",
		type: "Linux",
		string: "Android 8.0; MI 6 Build/OPR1.170623.027",
		vendor: "Xiaomi",
		modal: "Mi 6",
		wkver: "537.36",
		aver: [8,26]
	},
	mi10prq: {
		desp: "小米 10 Pro | 10",
		base: "std",
		type: "Linux",
		string: "Android 10; Mi 10 Pro Build/QKQ1.191117.002",
		vendor: "Xiaomi",
		modal: "Mi 10 Pro",
		wkver: "537.36",
		aver: [10,29]
	},
	hwmlan: {
		desp: "华为麦芒 5 | 7",
		base: "std",
		type: "Linux",
		string: "Android 7.0; HUAWEI MLA-AL10 Build/HUAWEIMLA-AL10",
		vendor: "Huawei",
		modal: "MLA-AL10",
		wkver: "537.36",
		aver: [7,24]
	},
	mzu16sq: {
		desp: "魅族 16s | 10",
		base: "std",
		type: "Linux",
		string: "Android 10; 16s Build/QKQ1.191222.002",
		vendor: "Meizu",
		modal: "16s",
		wkver: "537.36",
		aver: [10,29]
	},
	mzu17prq: {
		desp: "魅族 17 Pro | 10",
		base: "std",
		type: "Linux",
		string: "Android 10; meizu 17 Pro Build/QKQ1.200127.002",
		vendor: "Meizu",
		modal: "17 Pro",
		wkver: "537.36",
		aver: [10,29]
	},
	goopx3xlq: {
		desp: "Google Pixel 3 XL | 10",
		base: "std",
		type: "Linux",
		string: "Android 10; Pixel 3 XL Build/QPP5.190530.014",
		vendor: "Google",
		modal: "Pixel 3 XL",
		wkver: "537.36",
		aver: [10,29]
	},
	goon4k: {
		desp: "Google Nexus 4 | 4.4.2",
		base: "std",
		type: "Linux",
		string: "Android 4.4.4; Nexus 4 Build/KOT49H",
		vendor: "Google",
		modal: "Nexus 5",
		wkver: "537.36",
		aver: [4.4,19]
	},
	vivX4prdl: {
		desp: "Vivo X5 Pro D | 5",
		base: "std",
		type: "Linux",
		string: "Android 5.0.2; vivo X5Pro D Build/LRX21M",
		vendor: "Vivo",
		modal: "X5Pro D",
		wkver: "537.36",
		aver: [5,21]
	},
	apliph13: {
		desp: "iPhone 7+ | iOS 13.4",
		base: "ios",
		type: "iPhone",
		string: "CPU iPhone OS 13_4 like Mac OS X",
		vendor: "Apple",
		modal: "iPhone 7",
		wkver: "605.1.15",
		aver: [13,"15E148"]
	},
	nkan8sy: {
		desp: "诺基亚 N8-00 | Symbian 3",
		base: "symb",
		type: "Symbian/3",
		string: "Series60/5.2 NokiaN8-00/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ",
		vendor: "Nokia",
		modal: "N8-00",
		wkver: "533.4",
		aver: [3,5.2]
	},
	amzk449: {
		desp: "Kindle 449",
		base: "kindle",
		type: "X11",
		string: "Linux armv7l like Android; zh-cn",
		vendor: "Amazon",
		modal: "Kindle 449",
		wkver: "533.2+",
		aver: ["3.0+","5.0"] // [kindle] Kindle 系统版本 / Version 字段
	},
});
Object.assign(uaData.base,{
	std: {
		text: "标准",
		type: "wv",
		content: `%mz# (%wv#) %cpc# Version/4.0 Chrome/88.0.4324.68 Mobile %sf#`
	},
	short: {
		text: "标准短",
		type: "wv",
		content: `%mz# (%u#)`
	},
	tbs: {
		text: "腾讯 TBS",
		type: "wv",
		content: `%mz#  (%wv#) %cpc# Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045434 Mobile %sf#`
	},
	ucbs: {
		text: "阿里 UCBS",
		type: "wv",
		content: `%mz#  (%u#) %cpc# Version/4.0 Chrome/69.0.3497.100 UWS/3.22.1.58 Mobile %sf# UCBS/3.21.0.169_200731162109`
	},
	ios: {
		text: "iOS",
		type: "ios",
		dev: "apliph13",
		content: "%mz#  (%p#) %cpc# Version/%aver# Mobile/%kver# %sf#"
	},
	bbos: {
		text: "黑莓",
		type: "bbos",
		dev: "bbrz3010",
		content: "%mz#  (%p#) %cpc# Version/%kver# Mobile %sf#"
	},
	btos: {
		text: "黑莓平板",
		type: "btos",
		dev: "bbpbt21",
		content: "%mz#  (%u#) %cpc# Version/%kver# %sf#"
	},
	mgo: {
		text: "MeeGo",
		type: "mee",
		dev: "nkan9mgo",
		content: "%mz#  (%p#) %cpc# Version/%kver# NokiaBrowser/%kver# Mobile %sf#"
	},
	symb: {
		text: "塞班",
		type: "symb",
		dev: "nkan8sy",
		content: "%mz#  (%p#) %cpc# NokiaBrowser/7.3.0 Mobile %sf# 3gpp-gba"
	},
	wpedg: {
		text: "WP Edge",
		type: "wp",
		dev: "nkalm5208",
		content: "%mz#  (%p#) %cpc# Chrome/46.0.2486.0 Mobile %sf# Edge/%kver#"
	},
	kai: {
		text: "KaiOS",
		type: "kai",
		dev: "nka81104gkai",
		content: "%mz#  (%p#) Gecko/%kver# Firefox/%kver# KAIOS/%aver#"
	},
	xweb: {
		text: "微信 XWeb",
		type: "wv",
		content: "%mz#  (%wv#) %cpc# Version/4.0 Chrome/78.0.3904.62 XWEB/2691 MMWEBSDK/200901 Mobile %sf#"
	},
	t7: {
		text: "百度 T7",
		type: "wv",
		content: "%mz#  (%wv#) %cpc# Version/4.0 Chrome/76.0.3809.89 Mobile %sf# T7/11.25"
	},
	awp: {
		text: "搜狗 AWP",
		type: "wv",
		content: "%mz# (%wv#) %cpc# Version/4.0 Chrome/68.0.3440.106 Mobile %sf# AWP/2.0"
	},
	fox: {
		text: "Firefox",
		type: "wv",
		content: "%mz#  (Android %aver#; Mobile; rv:68.0) Gecko/68.0 Firefox/68.0"
	},
	opr: {
		text: "欧朋",
		type: "wv",
		content: "%mz# (%u#) %cpc# Version/4.0 OPR/12.54.0.5 Mobile %sf#"
	},
	ttwv: {
		text: "头条",
		type: "wv",
		content: "%mz# (%wv#) %cpc# Version/4.0 Chrome/75.0.3770.156 Mobile %sf# TTWebView/0751130008003"
	},
	xwalk: {
		text: "Crosswalk",
		type: "wv",
		content: "%mz# (%wv#) %cpc# Version/4.0 Crosswalk/23.53.589.4 Chrome/53.0.2785.143 Mobile %sf#"
	},
	kindle: {
		text: "Kindle",
		type: "kindle",
		dev:"amzk449",
		content: "%mz# (%u#) %cpc# Version/%kver# %sf# Kindle/%aver#"
	},
	slik: {
		text: "Amazon Silk",
		type: "silk",
		dev: "amzkfh89k",
		content: `%mz# (%u#) %cpc# Silk/%kver# like Chrome/44.0.2403.63 Mobile %sf# Silk-Accelerated=true`
	},
	macchr: {
		text: "mac Chr",
		type: "pc",
		content: "%mz# (Macintosh; Intel Mac OS X 10_15_2) %cpc# Chrome/79.0.3945.130 %sf#"
	},
	win7chr: {
		text: "Win7 Chr",
		type: "pc",
		content: "%mz# (Windows NT 6.1) %cpc#"
	},
	win10chr: {
		text: "Win10 Chr",
		type: "pc",
		content: "%mz# (Windows NT 10.0) %cpc#"
	},
	win7net: {
		text: "Win7 .NET",
		type: "pc",
		content: "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; Tablet PC 2.0;"
	},
	linchr: {
		text: "Lin Chr",
		type: "pc",
		content: "%mz# (X11; Linux x86_64) %cpc# Chrome/85.0.4183.121 %sf#",
	},
	blank: {
		text: "空白",
		type: "blank",
		content: "",
	},
	curr: {
		text: "当前",
		type: "blank",
		content: navigator.userAgent
	}
});
