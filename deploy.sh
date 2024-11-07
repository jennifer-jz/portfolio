#!/bin/bash

# Set your environmental variables here
# REACT_APP_DICT_SERVER_URL=https://localhost:5001/api/Dict
# REACT_APP_DBACCESS_HOSTNAME=https://localhost:5001

#!/bin/bash

# Define variables
projectName="portfolio"
localPublishDir="./dist"         # Local directory to publish the API project
remoteUser="jesczhao"          # SSH user on the Azure VM
remoteHost="20.196.200.90"       # Public IP or hostname of the Azure VM
remoteDir="/home/jesczhao/upload/www"  # Target folder on the Azure VM
timestamp=$(date +'%Y%m%d%H%M%S')
zipFileName="$projectName-$timestamp.zip"
zipFilePath="./build_history/$zipFileName"

# Publish the .NET Core API project locally
npm run build

# zip release folder
7z a -tzip "$zipFilePath" "$localPublishDir"

# Check if SSH agent is running
#if [ -z "$SSH_AUTH_SOCK" ]; then
    echo "SSH agent is not running. Starting SSH agent..."
    eval "$(ssh-agent -s)"
    ssh-add ~/CL-Web-Server_key-chmod.pem
#fi

# Use scp to copy the published files to the Azure VM
scp "$zipFilePath" "$remoteUser@$remoteHost:$remoteDir"