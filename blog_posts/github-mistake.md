---
title: "Erasing Commits from Github, Quick & Dirty"
date: "2019-07-18"
---

It happens to all of us, you push code to github on mistake and you think you're doomed forever. Surely there's no going back; the internet is a permanent place. Wrong, you can sneakily delete your most recent commits as long as the project you're working on is personal and there aren't any huge consequences for other developers working on the same project.

Don't do this unless you're sure it will have no consequences for others maintaining the project:

```
$ git reset --soft HEAD~1
```

This will delete your most recent commit locally but keep the working directory exactly the same. You can also delete more than just the most recent commit.

```
$ git reset --soft HEAD~2
```

That'll delete the two most recent commits.

If you want to also erase the changes from your local directory:

```
$ git reset --hard HEAD~1
```

If you also want to erase your mistake from Github, do the following:

```
git push -f origin master
```

You're back to square zero. You're welcome.