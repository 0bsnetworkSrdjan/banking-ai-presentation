Merge-safety backup (created before pull / merge with colleague)

What is here: a copy of the main app sources and config as they were when this folder was created.

Restore a single file (example):
  cp merge-backup-local-20260420-164711/src/slides.js src/slides.js

Restore all src tree (overwrite project — only do this if you intentionally want to roll back):
  cp -R merge-backup-local-20260420-164711/src/* src/

After a bad merge, compare first:
  git diff --no-index merge-backup-local-20260420-164711/src/slides.js src/slides.js

You can delete this folder once you are happy with git history, or add
  merge-backup-local-*/
to .gitignore if you want to keep backups locally without committing them.
