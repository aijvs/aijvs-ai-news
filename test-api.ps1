# AI 资讯日报 - API 测试脚本

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  测试 AI 资讯 API" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# 测试本地 API
$baseUrl = "http://localhost:5173/api"

$apis = @(
    "36kr",
    "huxiu",
    "ithome",
    "zhihu",
    "github-trending",
    "horizon",
    "hf-papers"
)

foreach ($api in $apis) {
    Write-Host "测试 /api/$api ..." -ForegroundColor Yellow -NoNewline
    try {
        $response = Invoke-RestMethod -Uri "$baseUrl/$api" -Method Get -TimeoutSec 10
        Write-Host " ✓ 成功" -ForegroundColor Green
        Write-Host "  数据条数: $($response.Count)" -ForegroundColor Gray
    } catch {
        Write-Host " ✗ 失败: $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "测试完成！" -ForegroundColor Cyan
