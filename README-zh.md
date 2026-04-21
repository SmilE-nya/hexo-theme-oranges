[English](https://github.com/zchengsite/hexo-theme-oranges/blob/master/README.md) | 简体中文

# hexo-theme-oranges

> 一个简单的 hexo 主题

[demo](https://hexo.theme.oranges.zcheng.site/)

## 安装

为了更为便捷的更新主题，建议使用添加 Git 子模块的方法安装，在 hexo 博客项目根目录下执行，会将`oranges`主题 clone 至`themes`文件夹下。

```bash
git submodule add https://github.com/zchengsite/hexo-theme-oranges.git themes/oranges
```

日后更新主题只需要在主题根目录执行`git pull`命令即可。

## 使用

在 hexo 博客项目根目录下找到`_config.yml`文件，修改其中`theme`字段为主题名`oranges`

```yml
theme: oranges
```

复制主题文件夹下的`_config.yml`文件到博客根目录并改名为`_config.oranges.yml`，后续修改主题操作均在`_config.oranges.yml`中进行。

## 配置

<details>
  <summary><b>Tags page</b> (click to show)</summary>

在 hexo 博客项目根目录下执行，在`source`文件夹下生成`tags`文件夹

```bash
hexo new page tags
```

接着修改`tags`文件夹下`index`为以下内容

```markdown
---
title: tags
date: 2019-05-03 12:03:35
type: "tags"
categories:
tags:
---
```

并在配置文件`_config.oranges.yml`修改对应`enable`为`true`，如不想展示，设置为`false`即可

```yml
navbar:
  -
    name: 标签
    enable: true
    path: /tags/
```

</details>

<details>
  <summary><b>Friends page</b> (click to show)</summary>

在 hexo 博客项目根目录下执行，在`source`文件夹下生成`friends`文件夹

```bash
hexo new page friends
```

接着修改`friends`文件夹下`index`为以下内容

```markdown
---
title: tags
date: 2019-05-03 12:03:35
type: "friends"
categories:
tags:
---
```

并在配置文件`_config.oranges.yml`修改对应`enable`为`true`，如不想展示，设置为`false`即可

```yml
navbar:
  -
    name: 朋友
    enable: true
    path: /friends/
```

</details>

<details>
  <summary><b>About me page</b> (click to show)</summary>

在 hexo 博客项目根目录下执行，在`source`文件夹下生成`about`文件夹

```bash
hexo new page about
```

接着修改`about`文件夹下`index`为以下内容

```markdown
---
title: tags
date: 2019-05-03 12:03:35
type: "about"
categories:
tags:
---
```

并在配置文件`_config.oranges.yml`修改对应`enable`为`true`，如不想展示，设置为`false`即可

```yml
navbar:
  -
    name: 关于我
    enable: true
    path: /about/
```

</details>

<details>
  <summary><b>Categories page</b> (click to show)</summary>

在 hexo 博客项目根目录下执行，在`source`文件夹下生成`categories`文件夹

```bash
hexo new page categories
```

接着修改`categories`文件夹下`index`为以下内容

```markdown
---
title: tags
date: 2019-05-03 12:03:35
type: "categories"
categories:
tags:
---
```

并在配置文件`_config.oranges.yml`修改对应`enable`为`true`，如不想展示，设置为`false`即可

```yml
navbar:
  -
    name: 分类
    enable: true
    path: /categories/
```

</details>

<details>
  <summary><b>文章目录 (Catalog)</b> (click to show)</summary>

在配置文件`_config.oranges.yml`下`catalog`修改`enable`为`true`，如不想展示，设置为`false`即可

```yml
catalog:
  enable: true
```

</details>

<details>
  <summary><b>RSS</b> (click to show)</summary>

1.安装`hexo-generator-feed`[官方插件](https://github.com/hexojs/hexo-generator-feed)

```shell
npm install hexo-generator-feed --save
```

2.在博客项目配置文件`_config.yml`(非主题配置文件) 增加：

```yml
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
  content_limit: 140
  content_limit_delim: ' '
  order_by: -date
  icon: icon.png
  autodiscovery: true
  template:
```

3.开启 rss 按钮
在配置文件`_config.oranges.yml`增加页脚项：

```yml
footer:
  social:
    -
      name: rss
      icon: rss
      path: /atom.xml
```

</details>

<details>
  <summary><b>评论系统 (Comment)</b> (click to show)</summary>

1.确保配置文件`_config.oranges.yml`下`comments`->`enable: true`

2.目前支持以下几种评论插件

- [valine](https://valine.js.org/quickstart.html)
- [gitalk](https://github.com/gitalk/gitalk#usage)
- [disqus](https://disqus.com)(需科学上网)

3.如需使用，修改相应评论下`enable: true`

4.查看评论插件官方教程获取相应的字段填入即可使用

以`valine`为例，注册`valine`并获取`appId`&`appKey`填入即可使用

```yml
comments:
  enable: true
  valine:
    # https://valine.js.org/quickstart.html#%E8%8E%B7%E5%8F%96APP-ID-%E5%92%8C-APP-Key
    enable: true
    appId: xxxxxxxx
    appKey: xxxxxxxxx
    placeholder: welcome!
    avatar: retro
```

</details>

<details>
  <summary><b>Google Analytics</b> (click to show)</summary>

[Google Analytics](https://analytics.google.com)
注册 Google 分析账号，在管理/创建媒体资源/选择网站/填写相关信息后得到跟踪 Id，一般格式为 UA-xxxxxxx-x
如之前已有注册账号，在管理/跟踪信息/跟踪代码/找到跟踪 ID，一般格式为 UA-xxxxxxx-x

```yml
gtag:
  enable: true
  gtagkey: UA-xxxxxxx-x
```

</details>

<details>
  <summary><b>PREV & NEXT</b> (click to show)</summary>

文章末尾的上一篇与下一篇功能。

```yml
prevnext:
  enable: true
```

</details>

<details>
  <summary><b>文章图片懒加载 (Lazy image loading)</b> (click to show)</summary>

安装插件[hexo-lazyload-image](https://github.com/Troy-Yang/hexo-lazyload-image)

```bash
npm install hexo-lazyload-image --save
```

项目配置文件`_config.yml`（非主题配置文件）下添加：

```yml
lazyload:
  enable: true
  onlypost: false # optional
  loadingImg: # optional eg ./images/loading.gif
  isSPA: false # optional
```

详情可见[hexo-lazyload-image](https://github.com/Troy-Yang/hexo-lazyload-image)

</details>

<details>
  <summary><b>全文搜索 (search)</b> (click to show)</summary>

  1.安装插件[hexo-generator-search](https://github.com/wzpan/hexo-generator-search)

  ```bash
  npm install hexo-generator-search --save
  ```

  2.项目配置文件`_config.yml`（非主题配置文件）下添加：

  ```yml
  search:
    path: search.xml
    field: post
    content: true
  ```

  详情可见[hexo-generator-search](https://github.com/wzpan/hexo-generator-search)

  3.主题配置文件`_config.yml`下找到`search`，修改`enable`为`true`:

  ```yml
    # 文章搜索
    search:
      enable: true
      placeholder: 搜索...
  ```

</details>

<details>
  <summary><b>文章置顶 (pinned posts)</b> (click to show)</summary>

  1.安装插件[hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top)。

  ```bash
  npm uninstall hexo-generator-index --save
  npm install hexo-generator-index-pin-top --save
  ```

  2.项目配置文件`_config.yml`（非主题配置文件）下添加（如已有请忽略）：

  ```yml
  index_generator:
    path: ''
    per_page: 10
    order_by: -date
  ```

  详情可见[hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top)。

  3.在所需置顶的文章 front-matter 头中添加`top: true`即可：

  ```markdown
  ---
  title: Hello World
  date: 2020-03-11 14:19:04
  top: true
  tags:
  - Welcome
  categories:
  - [Welcome，欢迎]
---
  ```

  4.重启服务后，可在主页文章标题看到置顶图标。

</details>

<details>
  <summary><b>国际化 (i18n)</b> (click to show)</summary>

  现在页面部分元素支持以不同语言显示，通过修改项目配置文件`_config.yml`（非主题配置文件）中的`language`:

  举几个例子：
  
  英文：

  ```yml
  language: en
  ```

  中文：

  ```yml
  language: zh-CN
  ```

  日文：

  ```yml
  language: ja
  ```

  默认值为`en`，可选项在主题下`languages`语言文件中查看，修改为对应文件名即可。
  
</details>

<details>
  <summary><b>主题配色切换</b> (click to show)</summary>

  拉取最新仓库，在配置文件`_config.oranges.yml`中添加或修改`colorSwitch`字段，确保`enable`为`true`:

  ```yml
  colorSwitch:
    enable: true
  ```

重新运行项目，页面右下角会出现切换主题模式的开关。

</details>

<details>
  <summary><b>文章分享</b> (click to show)</summary>

  拉取最新仓库，在配置文件`_config.oranges.yml`中添加或修改`postShare`字段，确保`enable`为`true`:

  ```yml
  postShare:
    enable: true

    twitter:
      enable: true
  ```

重新运行项目，文章页面右下角会出现分享的按钮。

</details>

<details>
  <summary><b>文章加密</b> (click to show)</summary>

  拉取最新仓库代码，安装[hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt) 插件：

  ```bash
  npm install --save hexo-blog-encrypt
  ```

  在你要加密文章头部 Front-matter 中添加 password：

  ```yml
    ---
    title: Hello World!
    date: 2020-09-27 10:42:38
    tags:
      - World
      - Hello
    password: hello
    ---
  ```

  更多可查看[hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt/blob/master/ReadMe.zh.md)

</details>

<details>
  <summary><b>文章字数统计与阅读时长</b> (click to show)</summary>

  在配置文件`_config.oranges.yml`中添加或修改`wordCount`字段：

  ```yml
  wordCount:
    enable: true
    wordsPerMinute: 300  # 每分钟阅读字数，默认300
  ```

  启用后，文章页面会显示字数统计和预计阅读时长。

</details>

<details>
  <summary><b>页面访问量统计</b> (click to show)</summary>

  在配置文件`_config.oranges.yml`中修改`footer.views`字段：

  ```yml
  footer:
    views:
      enable: true
      provider: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
      item:
        -
          enable: true
          id: busuanzi_value_site_pv
          name: 总访问量
          unit: 次
        -
          enable: true
          id: busuanzi_value_site_uv
          name: 访客数
          unit: 人
  ```

  启用后：
  - 页脚会显示站点总访问量和访客数
  - 文章页面会显示单篇文章的阅读量

</details>

## To Do List

- [x] 自定义导航，可灵活配置自己想要的导航✔
- [x] toc 文章目录展示✔
  - [x] 优化超出屏幕部分滚动显示，并自动跟随文章内容滚动`[2020.5.24]`✔
- [x] Fancybox，支持文章内图片友好浏览✔
- [x] 回到页面顶部`[2020.5.4]`✔
- [x] RSS Feed`[2020.5.7]`✔
- [x] 文章页末增加 NEXT & PREV`[2020.5.10]`✔
- [x] 文章标题锚点`[2020.5.3]`✔
- [x] 评论系统`[2020.5.7]`✔
- [x] 分享功能`[2021.8.22]`✔
- [x] 文章字数统计`[2026.4.21]`✔
- [x] 页面访问量统计`[2026.4.21]`✔
- [x] Google 分析`[2020.5.8]`✔
- [x] 文章加密`[2022.3.23]`✔
- [x] 文章置顶`[2020.9.1]`✔
- [x] 全文搜索功能`[2020.8.23]`✔
- [x] 主题配色切换 `[2021.7.10]`✔
- [x] 页面平滑滚动`[2020.5.4]`✔
- [ ] 主题样式可自定义配置
- [x] 国际化（i18n），支持多语言`[2020.9.10]`✔

## End

有问题请提交 Issue，欢迎 Fork。

如果觉得主题还不错，请点击 Star 支持下。

🍻

## License

MIT
