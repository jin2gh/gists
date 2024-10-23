# !/bin/sh
# OLD_NAME 需要修改的用户名
# OLD_EMAIL 需要修改的邮箱
# NEW_NAME 新的用户名
# NEW_EMAIL 新的邮箱

git filter-branch --env-filter '

OLD_NAME=""
OLD_EMAIL=""
NEW_NAME=""
NEW_EMAIL=""

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]

then

    export GIT_COMMITTER_NAME="$NEW_NAME"
    export GIT_COMMITTER_EMAIL="$NEW_EMAIL"

fi

if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]

then

    export GIT_AUTHOR_NAME="$NEW_NAME"
    export GIT_AUTHOR_EMAIL="$NEW_EMAIL"

fi
' --tag-name-filter cat -- --branches --tags