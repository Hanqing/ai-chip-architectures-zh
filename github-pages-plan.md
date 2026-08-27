# GitHub Pages 镜像发布方案

当前 GitHub 账户为 `Hanqing`，且用户级 Pages 仓库 `Hanqing/hanqing.github.io` 已存在并为公开状态。为避免覆盖该根级个人站点，本项目将使用独立公开仓库 `Hanqing/ai-chip-architectures-zh` 发布，预期镜像地址为：

`https://hanqing.github.io/ai-chip-architectures-zh/`

构建配置将仅在 GitHub Actions 环境下使用 `/ai-chip-architectures-zh/` 作为资源基础路径；Manus 内置部署保持根路径行为不变。GitHub Actions 在每次 `main` 推送后构建静态包，保留 `media/` 图示目录并发布至 `gh-pages` 分支，以便公开镜像自动同步。

## 部署排查记录

`gh-pages` 分支已包含首页、404 回退页、构建脚本样式资源以及 `media/` 架构图目录，构建产物中的资源 URL 使用 `/ai-chip-architectures-zh/` 前缀。首次访问的空白页来自浏览器缓存的旧入口脚本，而非部署分支或路由实现；强制加载最新构建后，项目根地址已可完整渲染首页，内部链接、架构图、侧栏目录与双语控件均使用正确基址。

附加文章验证显示，英文抓取稿的原站导航与来源元数据已在渲染前清理。芯片设计文章的中英文模式均可切换，目录覆盖流程、建模、RTL、验证、仿真、性能、物理设计、制造与启动等完整章节；中文模式中的显著英文小节和数量表述亦已完成本地化。
