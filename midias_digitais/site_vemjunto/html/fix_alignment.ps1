$dir = "."
$files = Get-ChildItem "$dir\*.html"

foreach ($file in $files) {
    $content = [IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)

    $content = $content.Replace('max-w-7xl mx-auto flex h-[calc(100vh-80px)] overflow-hidden', 'w-full flex h-[calc(100vh-80px)] overflow-hidden')
    $content = $content.Replace('max-w-7xl mx-auto flex flex-col md:flex-row min-h-[calc(100vh-80px)]', 'w-full flex flex-col md:flex-row min-h-[calc(100vh-80px)]')
    $content = $content.Replace('flex min-h-[calc(100vh-72px)] max-w-7xl mx-auto relative', 'flex w-full min-h-[calc(100vh-72px)] relative')
    $content = $content.Replace('flex max-w-7xl mx-auto min-h-[1024px]', 'flex w-full min-h-[1024px]')
    $content = $content.Replace('max-w-7xl mx-auto px-margin py-lg grid grid-cols-1 md:grid-cols-12 gap-lg', 'w-full px-margin py-lg grid grid-cols-1 md:grid-cols-12 gap-lg')
    $content = $content.Replace('max-w-7xl mx-auto flex h-[calc(100vh-72px)]', 'w-full flex h-[calc(100vh-72px)]')

    [IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
}

Write-Output "Alinhamento fixado."
