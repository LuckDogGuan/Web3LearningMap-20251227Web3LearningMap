# 部署到 GitHub Pages 指南

您的项目已经构建完成，静态文件位于 `dist/public` 目录中。

请按照以下步骤将这些文件部署到 GitHub Pages：

1.  **打开终端** (PowerShell 或 CMD)。
2.  **进入构建目录**：
    ```powershell
    cd e:\BaiduNetdiskDownload\web3\web3Learn\Web3LearningMap\dist\public
    ```
3.  **初始化 Git 并提交**：
    ```powershell
    git init
    git add -A
    git commit -m "deploy"
    ```
4.  **推送到 GitHub**：
    (请确保您有权限推送到该仓库)
    ```powershell
    git push -f https://github.com/LuckDogGuan/Web3LearningMap.git master:gh-pages
    ```

**注意**：
- 上述命令会将 `dist/public` 目录的内容强制推送到远程仓库的 `gh-pages` 分支。
- 推送成功后，请在 GitHub 仓库的 **Settings -> Pages** 中，确保 Source 设置为 `Deploy from a branch`，并且 Branch 选择 `gh-pages` / `/(root)`。
- 您的网站访问地址应该是：`https://luckdogguan.github.io/Web3LearningMap/`

## 自动部署脚本 (可选)

您可以直接运行以下 PowerShell 命令来自动执行上述步骤（请先确保您已登录 GitHub）：

```powershell
cd e:\BaiduNetdiskDownload\web3\web3Learn\Web3LearningMap\dist\public
git init
git add -A
git commit -m "deploy"
git push -f https://github.com/LuckDogGuan/Web3LearningMap.git master:gh-pages
```
