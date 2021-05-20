$dirs = Get-ChildItem .\ -include build, node_module

foreach ($dir in $dirs) 
{ 
	Write-Host "Removing $dir"
	Remove-Item $dir.FullName -Force -Recurse 
}

$myBuildNumber = $(get-date).ToString("yyyy.MMdd.HHmm");
yarn version --new-version $myBuildNumber;
yarn install
yarn build
git push --force

pause