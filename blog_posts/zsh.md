---
title: "Pimping Your Terminal with ZSH and Hyper"
date: "2019-08-02"
---

Traditionally, Macs come with a Terminal app that runs Bash. Bash is fine, but it could get better. In this post we'll cover how to install ZSH and Hyper for a more personalized and easy-to-use experience.

Note: macOS Catalina and newer already have ZSH as the default shell instead of Bash.

## Installing ZSH with Homebrew

```
$ brew install zsh
```

That was easy. Now we're able to use ZSH's slightly more convenient features such as autocompletion and automatic cd, but there's a lot more. In my opinion, the most important benefits that ZSH provides is adding plugins and themes, and the easiest way to do that is to install Oh My Zsh.

## Installing Oh My ZSH

```
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

You will be prompted to use ZSH as your default shell. I said "Yes" to this option.

## Customizing ZSH

Now you'll have access to a file located at `~/.zshrc`. This file is how we'll customize ZSH to our liking.

In that file you'll find a line that says:

```bash
ZSH_THEME="robbyrussell"
```

The default theme has been set to `robbyrussell`, which I personally like, but it could use some fine tuning. There are plenty of other themes that come pre-loaded with ZSH. I'm a fan of the simpler themes but one of the fancy ones is called `agnoster`. Let's go ahead and try that out.

NOTE: After you change anything in `~/.zshrc` you have to quit and re-open the terminal or do: `source ~/.zshrc`

You'll notice a lot of question marks everywhere. That's because agnoster uses certain characters that aren't supported in traditional fonts. The font that the default mac terminal uses is "SF Mono" as of this writing.

If we wanna get rid of the question marks, we have to donwload Powerline fonts. You can easily find powerline fonts on the internet. In fact, they're just like downloading and installing any other font on your mac. For example, you can download this [Menlo for Powerline Font](https://github.com/abertsch/Menlo-for-Powerline), double click it and install. After you've installed it, you can go to your terminal settings and change the font to your newly installed font and the question marks should be replaced with meaningful characters.

You can additionally find a list of all the built-in themes [here](https://github.com/robbyrussell/oh-my-zsh/wiki/Themes).

You also may have noticed that the font colors are kinda funky when we use the `agnoster` theme depending on what color scheme your Mac terminal has been set to. You can try to play around with the font colors and background colors for the Mac terminal until you get a combo that works well, but I personally use a seperate terminal app called [Hyper](https://hyper.is).

Install this terminal and open a new window. You may notice that we're back to using Bash, well what was the point of all this crap then? Well, don't worry, we can use ZSH still, we just have to open Hyper preferences and find the line that says

```javascript
shell: "";
```

We need to change this to

```javascript
shell: "zsh";
```

Let's close and open Hyper and we should see everything's back to normal, phew!

## Theming Hyper

Hyper is a really powerful terminal application and it's really easy to theme it. I'd first recommend browsing through some [Hyper themes](https://hyper.is/themes) and installing one you like. It's really simple so I won't explain it here. After that, we can create our very own ZSH theme.

## What's the difference between Hyper themes and ZSH Themes?

It might be a little confusing, so I'll address it here. Hyper is just a terminal application, but ZSH is a shell, aka a program that runs within your terminal window. What comes built-in with macOS (at least up until Catalina) is Terminal.app and Bash. In this tutorial we're switching Terminal to Hyper and Bash to ZSH.

A Hyper theme controls the look and feel of the window (background color, font, etc.), whereas a ZSH theme controls what content is actually displayed.

## Creating your very own ZSH Theme

I personally really like `robbyrussell` but I wanted to make some minor adjustments, so I decided to make my own ZSH theme. Here's how you do that. If you navigate to `~/.oh-my-zsh/custom` you'll notice a folder called `themes`. In this folder, we can create files that end in a `.zsh-theme` extension in order to create themes. So let's create our own theme and call it `my_theme.zsh-theme`

### Creating our prompt

The prompt is the bread and butter of our theme. We can customize the prompt using a variable called `PROMPT`. within your zsh theme file simply add the following line:

```bash
PROMPT="> "
```

Now, let's update our `~/.zshrc` file's contents and restart our terminal window.

```bash
ZSH_THEME="my_theme"
```

OK, that's a start... but this prompt gives us barely any information. Wouldn't you want to know which folder you're in at least? Well let's try:

```bash
PROMPT="%~ » "
```

Much better! The `%~` prompt expansion is what later get's "expanded" into the full directory starting from `~`. I personally don't really care about seeing the _entire_ directory, so I'm going to limit it to the most recent two folders using `%2~`.

### Adding some color

The way we assign colors to text in the shell is kind of weird, so bare with me here. If we write the following line and restart our terminal:

```bash
PROMPT="%{$fg[cyan]%}%2~ » "
```

Cool! We have a cyan prompt! Now, let's start to type something... wait a minute why is _everything_ cyan? This is because we have to reset the color back to the original, or else once we change the color of the text, everything else will be that color too.

```bash
PROMPT="%{$fg[cyan]%}%2~%{$reset_color%} » "
```

Alriiiiight, we're getting somewhere. I personally like my prompt bold, so we can do that by very simply changing to:

```bash
PROMPT="%{$fg_bold[cyan]%}%2~%{$reset_color%} » "
```

We can also change the color of the little prompt indicator.

```bash
PROMPT="%{$fg_bold[cyan]%}%2~ %{$fg_bold[yellow]%}» %{$reset_color%}"
```

Our prompt is getting a little long, so let's split it up into variables.

```bash
local path_string = "%{$fg_bold[cyan]%}%2~%{$reset_color%}"
local indicator = "%{$fg_bold[yellow]%}»%{$reset_color%}"
PROMPT="${path_string} ${indicator} "
```

This makes it a lot easier to read and will also come in handy if we ever wanna switch the order around.

### Creating an RPROMPT

What's an RPROMPT? Well, it's exactly what it sounds like: a prompt that goes on the right hand side! This comes in handy for displaying info about the current git repository or timestamps or other miscellaneous info. If we add the following line to the end of our file and restart the terminal, let's observe what happens:

```bash
RPROMPT="hello"
```

Okay, that's interesting. It just says the word "hello" on the right hand side of the terminal. Not very useful though, so let's try something else:

```bash
RPROMPT='$(git_prompt_info)' # NOTE: Make sure to use single quotes (idk why)
```

This comes built-in with the Oh My Zsh git plugin, but we can customize this too!

```bash
ZSH_THEME_GIT_PROMPT_PREFIX="%{$fg[green]%}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%}"
ZSH_THEME_GIT_PROMPT_DIRTY="%{$fg[red]%} ⬡ "
ZSH_THEME_GIT_PROMPT_CLEAN="%{$fg[green]%} ⬢ "
```

Restart the terminal and voila!

We can even re-arrange the items if we add this additionally:

```bash
git_custom_prompt() {
    local branch=$(current_branch)
    if [ -n "$branch" ]; then
        echo "$(parse_git_dirty)$ZSH_THEME_GIT_PROMPT_PREFIX$branch$ZSH_THEME_GIT_PROMPT_SUFFIX"
    fi
}

RPROMPT='$(git_custom_prompt)'
```

## My personal theme

This is what my final terminal setup looks like:

![Pimped out terminal](https://i.imgur.com/ZVMsDYD.png)

and this is the code for it. Feel free to use it or modify it until it suits your needs 😊

```bash
local ret_status="%{$fg_bold[yellow]%}➜ " # I don't want the arrow to change colors even if the previous command was invalid.
local path_string="%{$fg[cyan]%}%2~%{$reset_color%}" # Only show the last two folders

# ***** GIT STUFF *****

GIT_REBASE="\uE0A0"
GIT_UNPULLED="⇣"
GIT_UNPUSHED="⇡"

colorize() {
  echo "%F{$1}$2%f"
}

git_rebase_check() {
  git_dir=$(git rev-parse --git-dir)

  if test -d "$git_dir/rebase-merge" -o -d "$git_dir/rebase-apply"; then
    echo $GIT_REBASE
  fi
}

git_remote_check() {
  local_commit=$(git rev-parse "@" 2>&1)
  remote_commit=$(git rev-parse "@{u}" 2>&1)
  common_base=$(git merge-base "@" "@{u}" 2>&1) # last common commit

  if [[ $local_commit != $remote_commit ]]; then
    if [[ $common_base == $remote_commit ]]; then
      echo $GIT_UNPUSHED
    elif [[ $common_base == $local_commit ]]; then
      echo $GIT_UNPULLED
    else
      echo $GIT_UNPUSHED $GIT_UNPULLED
    fi
  fi
}


git_symbol() {
  echo "$(git_rebase_check) $(git_remote_check)"
}

git_time_since_commit() {
  if [[ $(git log &> /dev/null | grep -c "^fatal: bad default revision") == 0 ]]; then
    # Get the last commit.
    last_commit=$(git log --pretty=format:'%at' -1 2> /dev/null)
    now=$(date +%s)
    seconds_since_last_commit=$((now - last_commit))

    # Totals
    minutes=$((seconds_since_last_commit / 60))
    hours=$((seconds_since_last_commit / 3600))

    # Sub-hours and sub-minutes
    days=$((seconds_since_last_commit / 86400))
    sub_hours=$((hours % 24))
    sub_minutes=$((minutes % 60))

    if [ $hours -gt 24 ]; then
      echo $(colorize "red" "${days}d")
    elif [ $minutes -gt 60 ]; then
      echo $(colorize "white" "${sub_hours}h${sub_minutes}m")
    else
      echo $(colorize "green" "${minutes}m")
    fi
  fi
}

git_custom_prompt() {
  local branch=$(current_branch)
  if [ -n "$branch" ]; then
    echo "$ZSH_THEME_GIT_PROMPT_PREFIX$(git_symbol) $(colorize 242 $branch) : $(git_time_since_commit) : $(parse_git_dirty)$ZSH_THEME_GIT_PROMPT_SUFFIX"
  fi
}

ZSH_THEME_GIT_PROMPT_PREFIX="%{$fg_bold[white]%}"
ZSH_THEME_GIT_PROMPT_SUFFIX=""
ZSH_THEME_GIT_PROMPT_DIRTY=$(colorize "red" "⬡")
ZSH_THEME_GIT_PROMPT_CLEAN=$(colorize "green" "⬢")

# ***** END GIT STUFF *****

PROMPT='${ret_status} ${path_string} %{$fg_bold[white]%}'
RPROMPT='$(git_custom_prompt)'
```

## Wrapping up

At this point, we've done a good amount of customization, and there's a lot more you can do too! You can look at some other built-in themes you like and cherry pick pieces that you like. All the built-in themes are in `~/.oh-my-zsh/themes`

Also check out some prompt expansions you might find useful [here](http://zsh.sourceforge.net/Doc/Release/Prompt-Expansion.html).
