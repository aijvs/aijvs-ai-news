# AI 资讯日报 - 快速部署脚本
# 运行此脚本前，请确保已安装 Node.js 20+

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  AI 资讯日报 - 部署脚本" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# 检查 Node.js 版本
Write-Host "[1/6] 检查 Node.js 版本..." -ForegroundColor Yellow
$nodeVersion = node --version 2>&1 | Out-String
Write-Host "Node.js 版本: $nodeVersion" -ForegroundColor Green

# 检查 pnpm 是否安装
Write-Host ""
Write-Host "[2/6] 检查 pnpm 是否安装..." -ForegroundColor Yellow
$pnpmExists = Get-Command pnpm -ErrorAction SilentlyContinue
if (-not $pnpmExists) {
    Write-Host "pnpm 未安装，正在安装..." -ForegroundColor Yellow
    npm install -g pnpm
    Write-Host "pnpm 安装完成" -ForegroundColor Green
} else {
    $pnpmVersion = pnpm --version 2>&1 | Out-String
    Write-Host "pnpm 已安装: $pnpmVersion" -ForegroundColor Green
}

# 安装依赖
Write-Host ""
Write-Host "[3/6] 安装项目依赖..." -ForegroundColor Yellow
pnpm install
Write-Host "依赖安装完成" -ForegroundColor Green

# 启动开发服务器
Write-Host ""
Write-Host "[4/6] 启动开发服务器..." -ForegroundColor Yellow
Write-Host "访问 http://localhost:5173 查看效果" -ForegroundColor Cyan
Write-Host "按 Ctrl+C 停止服务器" -ForegroundColor Yellow
Write-Host ""
pnpm dev

# 注意：后续步骤需要手动执行
Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  后续步骤" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "[5/6] 推送到 GitHub" -ForegroundColor Yellow
Write-Host "git init" -ForegroundColor White
Write-Host "git add ." -ForegroundColor White
Write-Host "git commit -m 'feat: 初始化 AI 资讯日报项目'" -ForegroundColor White
Write-Host "git remote add origin https://github.com/aijvs/aijvs-ai-news.git" -ForegroundColor White
Write-Host "git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "[6/6] 部署到 Cloudflare Pages" -ForegroundColor Yellow
Write-Host "请查看 DEPLOYMENT-GUIDE.md 获取详细步骤" -ForegroundColor White
Write-Host ""
