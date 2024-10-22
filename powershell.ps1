# Connect to Azure account
Connect-AzAccount

# Define variablesc
$resourceGroupName = "example-resources"
$storageAccountName = "examplestorageacct"
$location = "West Europe"

# Create resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName "Standard_LRS" `
                     -Kind "StorageV2"