$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $PSScriptRoot
$ReleaseDir = Join-Path $ProjectRoot "dist"
$OutputFile = Join-Path $ReleaseDir "SHA256SUMS.txt"

if (-not (Test-Path -LiteralPath $ReleaseDir -PathType Container)) {
    throw "Missing dist directory."
}

$ReleaseFiles = Get-ChildItem -LiteralPath $ReleaseDir -File |
    Where-Object { $_.Name -ne "SHA256SUMS.txt" } |
    Sort-Object Name

if ($ReleaseFiles.Count -eq 0) {
    throw "No release files found in dist/."
}

$Lines = foreach ($ReleaseFile in $ReleaseFiles) {
    $Hash = (Get-FileHash -LiteralPath $ReleaseFile.FullName -Algorithm SHA256).Hash.ToLowerInvariant()
    "$Hash  $($ReleaseFile.Name)"
}

$Lines | Set-Content -LiteralPath $OutputFile -Encoding ascii
Write-Host "Created $OutputFile"
