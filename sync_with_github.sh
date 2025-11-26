#!/usr/bin/env bash
set -euo pipefail

REMOTE_NAME=${REMOTE_NAME:-github}
REMOTE_URL=${REMOTE_URL:-https://github.com/Bartosh16/codex-system-message-generAItor.git}
REMOTE_BRANCH=${REMOTE_BRANCH:-main}

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "This script must be executed inside the repository." >&2
  exit 1
fi

if ! git remote | grep -qx "$REMOTE_NAME"; then
  echo "Adding remote '$REMOTE_NAME' -> $REMOTE_URL"
  git remote add "$REMOTE_NAME" "$REMOTE_URL"
else
  echo "Remote '$REMOTE_NAME' already exists; skipping add."
fi

echo "Fetching from $REMOTE_NAME ..."
git fetch "$REMOTE_NAME"

if ! git rev-parse --verify "$REMOTE_NAME/$REMOTE_BRANCH" >/dev/null 2>&1; then
  echo "Remote branch '$REMOTE_BRANCH' was not found on '$REMOTE_NAME'." >&2
  exit 1
fi

echo "Merging $REMOTE_NAME/$REMOTE_BRANCH into the current branch ($(git rev-parse --abbrev-ref HEAD))..."
git merge "$REMOTE_NAME/$REMOTE_BRANCH"
