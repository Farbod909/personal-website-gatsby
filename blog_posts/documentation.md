---
title: "Automatically Generating Python Documentation"
date: "2019-07-16"
---

Let's say you've written some Python code and along the way you realized that other people might want to look at your code or even use it in their own projects. Luckily, you've documented your code using docstrings, right? Well, if you haven't, I'd recommend doing it from the very beginning. Saving it for last will definitely cause you a lot of headaches down the road. So, let's start with documenting our code properly.

## Documenting your code with docstrings

Docstrings are small snippets of text that you use to explain the _why_ and _what_ behind your code. This is different from commenting your code, which is useful for explaining _how_ your code works.

It might be easier to demonstrate this with an example:

```python
def random_number(n):
    """Generates a random int of any length.

    Args:
        n (int): number of digits desired

    Returns:
        int: A random int with n digits
    """

	# Make sure random number range doesn't start at zero.
    range_start = 10 ** (n - 1)
    range_end = (10 ** n) - 1
    return random.randint(range_start, range_end)
```

The comment that comes directly after `def random_number(n):` is called the docstring. As you can see, the first line explains what the function does, but not how it does it. We also want to inform the user what arguments the function accepts and what it returns. In this scenario, the user could be a lot of different people; another developer peer-reviewing your code, someone who is trying to use your function in their own project, or an open-source contributor. This docstring will help that person understand the intent behind your code and speed up the process. Sometimes lack of documentation prevents people from looking at your code altogether.

This is a very simple example, but if you want to learn more about how to document your code better, take a look at [an extensive example](https://sphinxcontrib-napoleon.readthedocs.io/en/latest/example_google.html#example-google).

## Automatically generating HTML files

If you've documented your code with docstrings, you've done the bulk of the work, congrats! 🥳 But we can still make it better.

There exists a python library called Sphinx that will automatically convert your docstrings to HTML files, which can then be published anywhere you want. How cool is that? Cmon, It's kinda cool, no? Well... at least it's useful.

### Setting up Sphinx

Let's first install it.

```
$ pip install Sphinx
```

Then, open your terminal and navigate to the root of your project. Now we can run the following:

```
$ sphinx-quickstart ./docs
```

After you run this, just accept the defaults when prompted. This will create a folder called `docs/` inside your project and fill it with some files we're going to use to document our project. You don't need to know what all these files and folders do, so don't worry. The first file we'll look at is `index.rst`. You can go ahead and open that file with any text editor and it should something like this:

```
Welcome to Hello's documentation!
=================================

.. toctree::
   :maxdepth: 2
   :caption: Contents:



Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
```

The format this file is created in is called [reStructuredText](http://docutils.sourceforge.net/rst.html). Feel free to read up on that, but for our purposes, we don't need to know much to be able to generate our documentation.

Let's test things out:

```
$ cd docs
$ make html
```

The terminal should tell you that `The HTML pages are in _build/html.` We can take a look at that folder in finder or whatever file explorer you have, and we'll notice an `index.html` file. Go ahead and open that file with your web browser. You should see something like this:

![empty index.html](https://i.imgur.com/VVWBUuV.png)

It's empty, but this is our starting point.

### Autogenerating documentation

Okay, so Sphinx is all set up, but how do we actually get to see the documentation from all the docstrings that we wrote show up in this HTML file? Let's go through that.

Let's say your project looks something like this now:

```
my_project/
	src/
		my_code.py
	docs/
		_build/
		_static/
		_templates/
		conf.py
		index.rst
		make.bat
		Makefile
```

Let's open `docs/conf.py` in a text editor and make the following changes:
Instead of

```
extensions = [
]
```

Let's write

```
extensions = ["sphinx.ext.autodoc", "sphinx.ext.coverage", "sphinx.ext.napoleon"]
```

Also, around line 15 we should see something like:

```python
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))
```

Let's replace that with

```python
import os
import sys
sys.path.insert(0, os.path.abspath("../src"))
```

Now let's navigate back to the root of the directory and run the following command:

```
$ sphinx-apidoc -f -o docs/source src
```

Sphinx let's us know that it's created some files:

```
Creating file docs/source/my_code.rst.
Creating file docs/source/modules.rst.
```

Now if we go back to the `docs/` folder and `make html` we should see something along the lines of:

```
**Running Sphinx v2.1.2**
**loading pickled environment...** done
**building [mo]:** targets for 0 po files that are out of date
**building [html]**: targets for 0 source files that are out of date
**updating environment:** [] 0 added, 1 changed, 0 removed
**reading sources...** [100%] source/my_code
**looking for now-outdated files...** none found
**pickling environment...** done
**checking consistency...** **/path/to/proj/docs/source/modules.rst: WARNING: document isn't included in any toctree**
done
**preparing documents...** done
**writing output...** [100%] source/my_code
**generating indices...** genindex py-modindex
**writing additional pages...** search
**copying static files...** done
**copying extra files...** done
**dumping search index in English (code: en) ...** done
**dumping object inventory...** done
**build succeeded, 1 warning.**
```

So it succeeded, that's awesome! But there's a warning.. oh no, what the hell went wrong? Well, if we recall, `index.rst` is the starting point for our documentation. But we haven't referenced any of the autogenerated documentation from within that file. So, let's do that. Open `index.rst` in a text editor and make the following changes:

```
Welcome to Hello's documentation!
=================================

.. toctree::
   :maxdepth: 2
   :caption: Contents:

   source/modules



Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
```

We added `source/modules` to the table of contents. Now, lets navigate to the `docs/` folder and `make html` again.

Now, if we open up `docs/_build/html/index.html` we should see:

![index.html](https://i.imgur.com/sFEGMoC.png)

If we click on `my_code_module`, we'll finally be able to see our docstrings beautified!

![my_code docstring](https://i.imgur.com/Gd4rwR0.png)

Beautiful.

## Summary

At this point we've documented all of our code for developers and users alike to look at, **and** we've also been able to automatically generate HTML documentation for our code so that we may publish it to a website in the future, much like other large and respectable projects like [Django](https://docs.djangoproject.com/en/2.2/) and [pytest](https://docs.pytest.org/en/latest/contents.html). If you look closely, pytest's documentation almost looks exactly like the default theme for the HTML files from this very tutorial!

### Additional Resources

- [Django docs source](https://github.com/django/django/tree/master/docs)
- [Sphinx](http://www.sphinx-doc.org/en/master/)
- [reStructuredText](http://docutils.sourceforge.net/rst.html)
- [Google style guide for Python docstrings](https://github.com/google/styleguide/blob/gh-pages/pyguide.md#38-comments-and-docstrings)
- [Sphinx support for Numpy and Google style docstrings](https://www.sphinx-doc.org/en/master/usage/extensions/napoleon.html)
