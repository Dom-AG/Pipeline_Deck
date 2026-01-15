param(
  [Parameter(Mandatory = $false)]
  [string]$SlidesDir = "slides",

  [Parameter(Mandatory = $false)]
  [string]$ConfigPath = "deck.config.js"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $SlidesDir)) {
  throw "Slides directory not found: $SlidesDir"
}
if (-not (Test-Path -LiteralPath $ConfigPath)) {
  throw "Config file not found: $ConfigPath"
}

$files =
  Get-ChildItem -LiteralPath $SlidesDir -File |
  Where-Object { $_.Name -match '^slide-\d+\.(png|jpg|jpeg|webp)$' }

if (-not $files) {
  throw "No slide images found in '$SlidesDir' matching slide-<n>.(png|jpg|jpeg|webp)"
}

$max = ($files | ForEach-Object {
  if ($_.Name -match '^slide-(\d+)\.') { [int]$Matches[1] }
} | Measure-Object -Maximum).Maximum

$content = Get-Content -LiteralPath $ConfigPath -Raw

if ($content -notmatch 'SLIDE_COUNT\s*:\s*\d+') {
  throw "Could not find 'SLIDE_COUNT: <number>' in $ConfigPath"
}

$updated = [regex]::Replace($content, 'SLIDE_COUNT\s*:\s*\d+', "SLIDE_COUNT: $max", 1)
Set-Content -LiteralPath $ConfigPath -Value $updated -Encoding UTF8

Write-Host "Updated SLIDE_COUNT to $max in $ConfigPath"



