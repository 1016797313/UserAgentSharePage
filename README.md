# UserAgentSharePage

## 介绍
这是一个用于自动拼接/管理从 APP 中提取出来的 UserAgent 字符串 (简称 UA) 的工具页面 。  
生成的 UA 可用于浏览器 ，使得目标服务器认为是 APP 访问的 ，从而提供更干净的页面 。  
> 2021-03-17 新版本 5.1 ，旧版本在[这里](https://lemon399.gitee.io/user-agent-share-page/index.old.html)

这个项目基于 酷安 @长谷川直树 的 UA 提取计划 [酷安](https://www.coolapk.com/feed/19620138?shareKey=NWNlMTdjYmZlODIwNWZlNTk5Yzg~&shareUid=1166187&shareFrom=com.coolapk.market_11.0-beta6) ，也是其计划的补充部分 。

这个项目使用的数据包含多名网友的无私贡献 ，在此表示感谢😄  

所有 UA 按**原样**提供，所以，  
很多 UA 可能本身不会带来**任何效果**。  
有些 UA 可能还会带来**副作用**。  
因此，具体情况以实际效果为准。  

我们没有时间和精力对所有 UA 进行测试。  
也无法作任何保证，抱歉😭。

对于已知的 UA 与网站之间的任何问题，UA 窗口中内置了检查区  
由于目标网站在不断更新，很有可能会封杀 UA 的效果，请大家积极跟进，报告。

网页方面，由于本人技术水平有限 ，代码混乱 ，Bug 多多 。  
以上，还望大家帮助测试 ，多提意见和建议 ，多谢 。

> 目前，对于 Android 10 以下的夜间模式，适配了以下浏览器。  
>> Via / X / 荟萃 / 雨见 / Pure / Milk / 米侠  
   Alook / Mint / 鲨鱼 / B / UC Turbo / 夸克  
   神奇 / π / e 浏览器 / UC  

> 无法适配以下浏览器，因为其夜间模式可能是内核层面的，检测不到注入。  
>> Oppo / 华为 / 三星 / 360 / 极速 / 搜狗 / 搜狗极速  

> 无法适配以下浏览器，其 CSS 注入标签没有标识符，无法分辨。  
>> 灯塔 / VC / 桔子  

> 无法适配 Soul 浏览器，其原理是 APP 层面将 白色 和 亮灰 反色。  
> 无法适配 Lit 浏览器，其原理可能是 APP 层面加黑白滤镜。  

> Milk 浏览器在打开时会弹出 1 个错误，不会影响使用。  
错误来自注入的脚本。无法修复。详细信息:  
>> Uncaught ReferenceError: copyListener is not defined  
    at \<anonymous\>:1:38  
\
document.removeEventListener('copy', copyListener, true);


这个页面使用了 GitHub @YueminHu 的 indexSidebar 控件 [GitHub](https://github.com/YueminHu/indexSidebar) ，在此表示感谢 。  
文末和 LICENSE 文件里包含了此控件使用的 MIT 许可证原文 。

## 帮助
### 使用
#### "基础 UA"

你可以选择模板作为 UA 的主体，包括 :  

1.  安卓标准 UA  
2.  腾讯的 TBS (X5 内核)  
3.  其它系统，如: iPhone / Windows Phone (WP) / 塞班  

等等  

选择 "空白" 将不使用模板 。  
选择 "当前" 将获取当前浏览器使用的 UA 作为基础 UA 。  
> 带有 "快应用" 、"电脑" 、和 "爬虫" 标签的 UA 是独立的 ，建议单独使用 ，并将基础 UA 设为空白 。

#### "生成模式"
"生成" 将使用基础 UA 和选定的 APP 生成 UA 字符串 ，并发送到 "UA 窗口" 替换原有内容 。  
"追加" 将保留 "UA 窗口" 里原有的内容 ，在后面追加生成的 UA 字符串 。  
> 所以 ，你可以先在 "UA 窗口" 里粘贴自己的 UA ，  
然后将 "基础 UA" 设为空白 ，使用 "追加" 模式来直接补充现有的 UA 。

#### 标签筛选/搜索
使用标签和名称来筛选 APP 列表，可以更快的找到目标 APP 。  
当使用了标签筛选时，"标签筛选" 按钮将会变绿，以提示当前列表是筛选过的。

#### 导航条
APP 列表右侧是导航条，  
当判断访问设备和浏览器报告支持触摸时，这里是滑动条。  
如果不支持触摸，那么就是鼠标可点击的链接。

#### "清空选择/列出已选"
用于方便清空和管理选中的 APP 。
> 这里要说一下，有些网站和部分 UA 有冲突，  
所以没有设置全选功能，也不建议全部使用。

### 窗口相关

除了 **文本框** **输入框** **检查区** 以外，拖动任何部分都可以移动窗口。  
点击窗口任意部分可提升窗口。

> 一些带 **下滑刷新** 功能的浏览器会对窗口移动造成影响，目前无法修复。

## 添加
通过点击 "+" 按钮 ，打开或关闭 "添加项目" 窗口 。  
你可以添加 、管理 、导入 、导出你的自定义 APP UA 数据 。

### UA 基础格式

#### 标准 UA
下面是标准的 WebView UA 的例子:
> Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.37 Mobile Safari/537.36

有些 APP 使用一种精简版的 UA，这里称作 "短 UA" :
> Mozilla/5.0 (Linux; U; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014)

大部分的 APP 的 UA 都是以这两种格式作为基础的 。

#### 快应用
快应用 UA 格式如下:
> hap/1.6/xiaomi com.miui.hybrid/1.6.0.3 cn.cmcc.quickapp/1.1.7 ({"packageName":"com.miui.quickappCenter","type":"url","extra":{"scene":"recommend"}})

```
# 其中:
hap/1.6/xiaomi com.miui.hybrid/1.6.0.3 # 平台，这里是小米的平台。
cn.cmcc.quickapp/1.1.7                 # 应用，中国移动。
com.miui.quickappCenter                # 来自，来源是小米快应用中心。
```

### 选项
#### "标识"
用来区分不同的 UA 条目 ，接受英文字母和数字 。  
_不建议_ 使用符号。_不能_ 和其它条目标识重复 (输入框边框会变为**橙色**来提示重复) 。

为了便于排序和导航 ，第一个字母应为 APP 名称第一个字的拼音首字母 。  
#### "名称"
APP 的显示名称 。
#### "前置" 和 "无缝"
举例:  
>**前置:是 无缝:不是**  
> **Test/1.0** Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.37 Mobile Safari/537.36  
>**前置:不是 无缝:不是**  
> Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.37 Mobile Safari/537.36 **Test/1.0**  
>**"前后都有" 无缝:不是**  
> **Test/1.0** Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.37 Mobile Safari/537.36 **Test/2.0**  
>**前置:不是 无缝:是**  
> Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.37 Mobile Safari/537.36**Test/1.0**  
>**前置:是 无缝:是**  
> **Test/1.0**Mozilla/5.0 (Linux; Android 10; zh-cn; Pixel 3 XL Build/QPP5.190530.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.37 Mobile Safari/537.36  

拼接时 ，会按如下顺序拼接关键字 :  
> _[前置]_ _[前置 无缝][前置无缝]_**基础**_[无缝][无 缝]_ _[普通]_

#### 关键字
填写除了基础部分以外的部分 (有用的部分) ，例如上面的 **Test/1.0**

#### 标签区域
你可以点亮标签来给应用加标签 。

#### "加入"/"确定"
可以将条目暂时加入到临时区域，以便修改 。
> 注意 ，加入到临时区域不会永久保存 ，刷新或者关闭浏览器就会消失 !!!  
现在，加入或修改数据以后，"保存数据" 按钮将变为**橙色**提示未保存 !

#### "管理"/"添加"
切换管理模式 ，  
在管理模式 ，可以修改和删除 UA 条目 。
> "删除" 按钮只能在管理模式才可使用 。  
管理模式下拉框中，开头带 * 的是**自带数据**。  
你可以修改并保存它们，但**无法**删除它们。  
修改以后，它们将变为自定义数据。  
并且以后不会跟随自带数据更新，除非删除修改过的条目。  

#### 编辑预览
点击关闭按钮旁边 "预览" 按钮，可以打开 "编辑预览" 窗口。  
在添加或修改 UA 条目时，实时显示拼接效果，方便修改关键字。  

编辑预览只在 "APP" 和 "快应用" 有效，标签有自己的预览 (在 "名称" 后面)  

> 在打开 "TBS" "短 UA" "电脑" 标签时，预览中的基础 UA 将会变化。  
但实际拼接效果，仍要以用户选择的基础 UA 为准。  

#### "保存数据"/"导入"/"导出"/"清空存储"
把数据保存到 "网页存储" (localStorage) ，下次刷新会自动加载数据 。
> 只有存到这里，刷新以后，才会在 APP 列表里看到 。

你可以导出你的数据与其他人分享 ，也可以导入其他人的数据使用 。
> 导入数据会合并原有数据，原有数据不会消失。(除非数据太多了，会被挤掉 ...

### 设置
#### 主题

主题，实际上是一堆 CSS 变量，修改会被保存到 "网页存储" ，并在网页启动时载入。  
使用的 CSS 变量如下 ，未标注的类型都是 [**CSS color 值**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color) :

|     变量     |            意义         |
|-------------|-------------------------|
| --theme-color-a | 主题前景色，主色调 |
| --theme-color-b | 主题背景色，副色调 |
| --theme-color-c | 反色前景色：在主色调作为<br>背景色时的文字颜色 |
| --theme-color-d | 单选框，复选框，文本框背景色 |
| --theme-color-e | 单选框，复选框 <br>未选中时的边框颜色 |
| --theme-color-f | 网页背景色 |
| --theme-color-g | (电脑) 导航条链接聚焦颜色 |
| --theme-color-h | (电脑) 键盘导航时，<br>单选框，复选框的<br>聚焦提示颜色 |
| --theme-color-i | 按钮点击时的变色 |
| --theme-color-j | 加载屏幕，<br>未打开 Javascript 屏幕，<br>搜索结果为空界面<br>的文字颜色，以及<br>设置页面选框边框颜色 |
| --theme-color-close | 窗口关闭按钮背景色 |
| --theme-color-prev | 窗口预览按钮背景色 |
| --theme-color-top | 窗口置顶按钮背景色 |
| --theme-color-top-enable | 窗口置顶按钮激活时背景色 |
| --theme-color-close-text | 窗口标题栏按钮文字颜色 |
| --input-check-ready | 输入框边框线，常态颜色 |
| --input-check-ok | 输入框边框线，检查成功颜色 |
| --input-check-err | 输入框边框线，检查失败颜色 |
| --input-check-null | 输入框边框线，内容为空颜色 |
| --data-need-save | "保存数据" 按钮，提示未保存时的背景色 |
| --tag-filtered | "标签筛选" 按钮，提示开启筛选时的背景色 |
| --prvw-key | 编辑预览: 关键字颜色，<br>快应用 应用字段 颜色 |
| --prvw-plat | 编辑预览: 快应用 平台字段 颜色 |
| --prvw-from | 编辑预览: 快应用 来自字段 颜色 |
| --shadow-big | [**box-shadow 格式**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow) 区块，窗口，下拉框 阴影参数 |
| --shadow-small | [**box-shadow 格式**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow) 标签，按钮组 阴影参数 |

> 主题数据不会校验，如果输入格式错误，导致颜色错乱的，**后果自负**

#### 离线缓存
##### 介绍
<details>
  <summary> 🤔 ... </summary>
  <pre>
从 5.0 Beta 9 ( 2021 年 2 月 19 日 ) 开始，支持了使用 Service Worker 缓存文件的功能，以便离线使用。  
当时的设置是，只要浏览器支持，后台就自动安装服务，并缓存文件。  
但后来发现，某些时候更新缓存有问题 ( 比如新版本上线一周了，浏览器打开还是老版本 ... )  
并且感觉偷偷摸摸就在用户浏览器安装一个服务终归不是很好 :<   
于是在 5.1 Beta 2 ( 2021 年 3 月 20 日 ) 改为，  
没有安装服务的用户，打开时弹出一个 Taost ，点击才会安装。  
后来又考虑到 不想安装服务的用户 每次打开时下面都要闪一次 ，很烦 :<   
而且早前已经 被安装 但 不需要 的用户， 卸又卸不掉，清又清不了，更烦 :<<<   
于是乎，5.1 Beta 3 弄了界面。想装就装，不想装就卸，缓存也能清理，舒服了 :)  
  </pre>
</details>

离线缓存服务是安装在浏览器里的脚本，负责:
1. 缓存页面和数据
2. 在页面和数据更新的时候，替换更新缓存数据
3. 在离线的时候，把缓存数据发给浏览器使用

这个脚本只会在本域名 (lemon399.gitee.io) 跑，不会影响其它网站。

##### 状态

目前，页面会显示 4 种状态 :  
**未安装** 表明未安装或者卸载了服务。  
**已安装** 表明已经安装了服务，并且运行良好。  
**正在安装** 或 **等待安装** 两种情况:
1. 刚刚安装，需要刷新才能运行
2. 页面有更新，新版服务安装了，但老版服务需要关闭页面才能停止运行。

##### 缓存

一旦服务跑起来了，就会把数据存到缓存里。  
并每次打开网站时都会检查缓存。  
你可以清理缓存以便同步最新页面和数据。  

> 由于接口限制，目前无法显示缓存文件大小。

> 注意，清理缓存不会卸载服务，卸载服务也不会清除缓存。

### 参数
从 5.1 Beta 6 开始，可使用 URL POST 参数控制一些设置。  
例如，https://lemon399.gitee.io/user-agent-share-page/?flag=0&base=7  

<table>
    <tr><th>参数</th><th>值</th><th>意义</th></tr>
    <tr><td>base</td><td>1 ~ 8</td>
    <td>控制默认选中的基础 UA<br/>1 2 3 4<br/>5 6 7 8<br/><i>默认值为 1</i></td></tr>
    <tr><td>flag</td><td>小写字母或符号</td><td>控制 '数字' 开头的条目 的表头标识<br/><i>默认为 #</i></td></tr>
    <tr><td rowspan="3">dark</td><td>0</td><td>强制使用亮色主题</td></tr>
    <tr><td>1</td><td>强制使用暗色主题</td></tr>
    <tr><td>2</td><td><i>默认</i> 自动匹配主题</td></tr>
</table>

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
