---
mode: ask
---
当前引用文件为一篇中文博文，文件为markdown 文本格式，文件分为两部分，前面是frontmatter，后面是博客的正文。

我需要对其中的 frontmatter 部分进行修改，要求如下：

1. frontmatter 中的 title 保持不变，我已经修改过了。

2. 根据正文和 title 的内容，生成契合的英文标题 title_en。

3. 将 pubDate 修改为当日日期。

4. 根据正文与标题的内容，生成文章的中文描述description，要求契合内容，且利于 SEO。

5. 根据正文与标题的内容，生成文章的中文 tags 关键词（一些专有的英文单词，则依旧保留英文），要求契合内容，且利于 SEO。

6. 将 draft 的状态修改为 false。

此外，请生成一串字符，我用来修改markdown文件名，文件名由title_en的英文单词组成，用“-”连接，同时以".md"结尾