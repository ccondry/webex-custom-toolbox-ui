#!/bin/sh
echo "removing webex-custom-toolbox-ui website files..."
rm -rf /var/www/toolbox/webex-custom/*
if [ $? -eq 0 ]; then
  echo "successfully removed webex-custom-toolbox-ui website files."
else
  echo "failed to remove webex-custom-toolbox-ui website files."
fi
