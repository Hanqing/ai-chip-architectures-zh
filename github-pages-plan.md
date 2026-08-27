# GitHub Pages 镜像发布方案

当前 GitHub 账户为 `Hanqing`，且用户级 Pages 仓库 `Hanqing/hanqing.github.io` 已存在并为公开状态。为避免覆盖该根级个人站点，本项目将使用独立公开仓库 `Hanqing/ai-chip-architectures-zh` 发布，预期镜像地址为：

`https://hanqing.github.io/ai-chip-architectures-zh/`

构建配置将仅在 GitHub Actions 环境下使用 `/ai-chip-architectures-zh/` 作为资源基础路径；Manus 内置部署保持根路径行为不变。GitHub Actions 将使用官方 Pages artifact 部署流程，以便后续对 `main` 分支的推送自动同步。

## 部署排查记录

`gh-pages` 分支已包含首页、404 回退页、构建脚本样式资源以及 `media/` 架构图目录，构建产物中的资源 URL 使用 `/ai-chip-architectures-zh/` 前缀。首次访问目录入口出现 404，而直接访问 `index.html` 可取得标题与资源标签但渲染为空白；下一步将核验浏览器中模块脚本的加载状态和 React 根节点内容，并按结果修正发布路由或构建基址。
