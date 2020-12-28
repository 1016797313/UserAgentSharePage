# UserAgentSharePage

## 介绍
这是一个用于自动拼接 、管理从 APP 中提取出来的 UserAgent 字符串 (简称 UA) 的工具页面 。

生成的 UA 可用于浏览器 ，使得目标服务器认为是 APP 访问的 ，从而提供更干净的页面 。

这个项目基于 酷安 @长谷川直树 的 UA 提取计划 [酷安](https://www.coolapk.com/feed/19620138?shareKey=NWNlMTdjYmZlODIwNWZlNTk5Yzg~&shareUid=1166187&shareFrom=com.coolapk.market_11.0-beta6) ，也是其计划的补充部分 。

使用的数据由多名网友贡献 ，在此表示感谢 。

由于空闲时间不多 ，很多 UA 未经测试 ，不一定有效 ，

而且本人技术水平有限 ，代码混乱 ，Bug 多多 。

还望大家帮助测试 ，多提意见和建议 ，多谢 。

这个页面使用了 GitHub @YueminHu 的 indexSidebar 控件 [GitHub](https://github.com/YueminHu/indexSidebar) ，在此表示感谢 。
文末和网页代码里包含了此控件使用的 MIT 许可证原文 。

## 帮助
### 使用
#### "基础 UA"

你可以选择模板作为 UA 的主体，包括 :
1.  安卓标准 UA 
2.  各厂定制内核 (腾讯的 TBS (X5) 、阿里的 UCBS (U4)) 
3.  iPhone 
4.  塞班

等等 。

选择 "空白" 将不使用模板 。

选择 "当前" 将获取当前浏览器使用的 UA 作为基础 UA 。

> 带有 "快应用" 、"电脑" 、和 "爬虫" 标签的 UA 是独立的 ，建议单独使用 ，并将基础 UA 设为空白 。

#### "生成模式"
"生成" 将使用基础 UA 和选定的 APP 生成 UA 字符串 ，并发送到 "UA 窗口" ，替换原有内容 。

"追加" 将保留 "UA 窗口" 里原有的内容 ，在后面追加生成的 UA 字符串 。

> 所以 ，你可以先在 "UA 窗口" 里粘贴自己的 UA ，然后 "基础 UA" 设为空白 ，使用 "追加" 模式来直接补充现有的 UA 。

#### 标签筛选/搜索
使用标签和名称来筛选 APP 列表，可以更快的找到目标 APP 。

当使用了标签筛选时，"标签筛选" 按钮将会变绿，以提示当前列表是筛选过的。

#### 导航条
APP 列表右侧是导航条，

当判断访问设备和浏览器报告支持触摸时，这里是滑动条。

如果不支持触摸，那么就是鼠标可点击的链接。

#### "清空选择/列出已选"
顾名思义。。。

> 这里要说一下，有些网站和部分 UA 有冲突，所以没有设置全选功能，也不建议全部使用。

## 添加
通过点击 "+" 按钮 ，进入 "添加项目" 窗口 ，

你可以添加 、管理 、导入 、导出你的自定义 APP UA 数据 。

> 由于目前本人技术水平不能保证稳定性，_不打算_ 支持对自带数据进行自定义修改 。

### UA 基础格式

#### 标准 UA
下面是标准的 WebView UA 的例子:
```
Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv)
 AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.49
 Mobile Safari/537.36
```

有些 APP 使用一种精简版的 UA，这里称作 "短 UA" (标准短):
```
Mozilla/5.0 (Linux; U; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014)
```

大部分的 APP 的 UA 都是以这两种格式作为基础的 。

#### 快应用
快应用 UA 格式如下:
```
hap/1.6/xiaomi com.miui.hybrid/1.6.0.3 cn.cmcc.quickapp/1.1.7
 ({"packageName":"com.miui.quickappCenter","type":"url","extra":
{"scene":"recommend"}})

# 其中:
hap/1.6/xiaomi com.miui.hybrid/1.6.0.3 # 平台，这里是小米的平台。
cn.cmcc.quickapp/1.1.7                 # 应用，中国移动。
com.miui.quickappCenter                # 来自，来源是小米快应用中心。
```

### 选项
#### "标识"
用来区分不同的 UA 条目 ，接受英文字母和数字 。

不建议使用符号。不能和其它条目标识重复 (输入框边框会变为橙色来提示重复) 。

为了便于排序和导航 ，第一个字母应为 APP 名称第一个字的拼音首字母 。
#### "名称"
APP 的显示名称 。
#### "前置" 和 "无缝"
举例:
```
# 这个关键字是前置的

Test/1.0 Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv)
 AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.49
 Mobile Safari/537.36

# 这个关键字不是前置的

Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv)
 AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.49
 Mobile Safari/537.36 Test/1.0

# 所以下面这个 "前后都有"

Test/1.0 Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv)
 AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.49
 Mobile Safari/537.36 Test/2.0

# 这个是无缝的

Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv)
 AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.49
 Mobile Safari/537.36Test/1.0

# 所以下面这个是前置和无缝的

Test/1.0Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv)
 AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.49
 Mobile Safari/537.36
```

拼接时 ，会按如下顺序拼接关键字 :

_[前置]_ _[前置 无缝][前置无缝]_**基础**_[无缝][无 缝]_ _[普通]_
#### 关键字
填写除了基础部分以外的部分 (有用的部分) ，例如上面的 Test/1.0

#### 标签区域
你可以点亮标签来给应用加标签 。

#### "加入"/"确定"
可以将条目暂时加入到临时区域，以便修改 。
> 注意 ，加入到临时区域不会永久保存 ，刷新或者关闭浏览器就会消失 !!!

#### "管理"/"添加"
切换管理模式 ，

在管理模式 ，可以修改和删除自定义的条目 。

> "删除" 按钮只能在管理模式才可使用 。

#### "保存数据"/"导入"/"导出"/"清空存储"
把数据保存到 "网页存储" (localStorage) ，下次刷新会自动加载数据 。
> 只有存到这里，刷新以后，才会在 APP 列表里看到 。

你可以导出你的数据与网友们分享 ，也可以导入其他人的数据使用 。
> 导入数据会合并原有数据，原有数据不会消失。(除非数据太多了，会被挤掉 ...

## indexSidebar 许可信息
```
 MIT License

Copyright (c) 2016 YueminHu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
