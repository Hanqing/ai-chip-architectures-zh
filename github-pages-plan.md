# GitHub Pages 镜像发布方案

当前 GitHub 账户为 `Hanqing`，且用户级 Pages 仓库 `Hanqing/hanqing.github.io` 已存在并为公开状态。为避免覆盖该根级个人站点，本项目将使用独立公开仓库 `Hanqing/ai-chip-architectures-zh` 发布，预期镜像地址为：

`https://hanqing.github.io/ai-chip-architectures-zh/`

构建配置将仅在 GitHub Actions 环境下使用 `/ai-chip-architectures-zh/` 作为资源基础路径；Manus 内置部署保持根路径行为不变。GitHub Actions 将使用官方 Pages artifact 部署流程，以便后续对 `main` 分支的推送自动同步。
