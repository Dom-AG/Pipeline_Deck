Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Assert-Command([string]$Name) {
  $cmd = Get-Command $Name -ErrorAction SilentlyContinue
  if (-not $cmd) {
    throw "Missing '$Name'. Install Node.js LTS from https://nodejs.org (ensure 'Add to PATH'), then restart your terminal."
  }
}

Assert-Command node
Assert-Command npm

Write-Host "Node: $(node -v)"
Write-Host "npm : $(npm -v)"

npm install
npm run dev



