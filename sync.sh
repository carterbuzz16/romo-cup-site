#!/usr/bin/env bash
set -euo pipefail

msg="${1:-update}"
branch="$(git rev-parse --abbrev-ref HEAD)"

if [[ -n "$(git status --porcelain)" ]]; then
  git add -A
  git commit -m "$msg"
else
  echo "No local changes to commit."
fi

git push -u origin "$branch"
