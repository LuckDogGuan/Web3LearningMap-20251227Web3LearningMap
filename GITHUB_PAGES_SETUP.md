# GitHub Pages 部署指南

本项目已配置为可通过GitHub Pages部署。请按照以下步骤进行设置：

## 部署步骤

### 1. 本地构建项目

```bash
# 安装依赖
pnpm install

# 构建生产版本
pnpm build
```

构建完成后，静态文件将位于 `dist/public/` 目录。

### 2. GitHub仓库设置

1. 访问 https://github.com/LuckDogGuan/Web3LearningMap
2. 进入 **Settings** → **Pages**
3. 在 **Build and deployment** 部分：
   - **Source** 选择 `Deploy from a branch`
   - **Branch** 选择 `gh-pages` 分支
   - **Folder** 选择 `/ (root)`
4. 点击 **Save**

### 3. 手动部署到GitHub Pages

#### 方法一：使用gh-pages包（推荐）

```bash
# 安装gh-pages
npm install --save-dev gh-pages

# 添加部署脚本到package.json
# "deploy": "pnpm build && gh-pages -d dist/public"

# 执行部署
pnpm deploy
```

#### 方法二：使用git命令

```bash
# 构建项目
pnpm build

# 创建gh-pages分支（如果不存在）
git checkout --orphan gh-pages

# 清空工作目录
git rm -rf .

# 复制构建文件
cp -r dist/public/* .

# 提交并推送
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# 返回main分支
git checkout main
```

#### 方法三：使用GitHub CLI

```bash
# 确保已安装GitHub CLI
# 构建项目
pnpm build

# 使用GitHub CLI部署
gh repo deploy --dir dist/public --branch gh-pages
```

### 4. 验证部署

部署完成后，您的网站将在以下地址可访问：
- https://luckdogguan.github.io/Web3LearningMap/

## 自动部署（可选）

如果您想要自动部署，可以创建GitHub Actions工作流。在仓库中创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '22'
        cache: 'pnpm'
    
    - name: Install pnpm
      run: npm install -g pnpm
    
    - name: Install dependencies
      run: pnpm install
    
    - name: Build
      run: pnpm build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/public
```

## 故障排除

### 页面无法访问
- 确保GitHub Pages已启用
- 检查分支设置是否正确（应为 `gh-pages`）
- 等待几分钟，GitHub需要时间来部署

### 样式或资源加载失败
- 确保所有资源路径都是相对路径
- 检查 `vite.config.ts` 中的 `base` 配置
- 清除浏览器缓存

### 路由问题
- GitHub Pages不支持客户端路由，需要配置 `404.html` 重定向
- 或在 `vite.config.ts` 中配置 `base: '/Web3LearningMap/'`

## 相关资源

- [GitHub Pages官方文档](https://docs.github.com/en/pages)
- [gh-pages npm包](https://www.npmjs.com/package/gh-pages)
- [Vite部署指南](https://vitejs.dev/guide/static-deploy.html)
