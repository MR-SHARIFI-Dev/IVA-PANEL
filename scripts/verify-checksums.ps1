param(
    [Parameter(Mandatory = $false)]
    [string]$ChecksumFile = "SHA256SUMS.txt"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $ChecksumFile -PathType Leaf)) {
    throw "Checksum file not found: $ChecksumFile"
}

$BaseDirectory = Split-Path -Parent (Resolve-Path -LiteralPath $ChecksumFile)
$Failed = $false

foreach ($Line in Get-Content -LiteralPath $ChecksumFile) {
    if ([string]::IsNullOrWhiteSpace($Line)) { continue }
    if ($Line -notmatch '^([0-9a-fA-F]{64})\s{2}(.+)$') {
        Write-Error "Invalid checksum line: $Line"
        $Failed = $true
        continue
    }

    $Expected = $Matches[1].ToLowerInvariant()
    $Name = $Matches[2]
    $Target = Join-Path $BaseDirectory $Name

    if (-not (Test-Path -LiteralPath $Target -PathType Leaf)) {
        Write-Error "Missing file: $Name"
        $Failed = $true
        continue
    }

    $Actual = (Get-FileHash -LiteralPath $Target -Algorithm SHA256).Hash.ToLowerInvariant()
    if ($Actual -ne $Expected) {
        Write-Error "FAILED: $Name"
        $Failed = $true
    } else {
        Write-Host "OK: $Name"
    }
}

if ($Failed) { exit 1 }
