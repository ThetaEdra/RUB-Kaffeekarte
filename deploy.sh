#!/bin/bash
read -p 'Username: ' v_user
read -sp 'Password: ' v_pass
lftp -c "set ftp:ssl-allow yes; open -u $v_user,$v_pass homepages.rub.de; mirror -Rev $(pwd) ./coffee  --ignore-time --parallel=10 --exclude-glob .git* --exclude .git/"
