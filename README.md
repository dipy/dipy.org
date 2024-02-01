# DIPY.ORG

## Background

This site makes use of [Sphinx](https://www.sphinx-doc.org/en/stable/) and was built upon [Bootstrap](https://getbootstrap.com) via the [GRG Sphinx theme](https://github.com/GRG-Projects/grg-sphinx-theme) and [PYData Sphinx Theme](https://pydata-sphinx-theme.readthedocs.io/en/latest/).
We use Github Action to deploy the website and Github Page to host the [website](https://dipy.github.io/dipy.org/).

## Index

- `_static`: Contains all assets (images, CSS, JS) for Sphinx to look at.
- `_templates`: Contains html layout for custom Sphinx design.
- `_build`: Contains the generated documentation.
- `sphinxext`: Sphinx custom plugins.
- `posts`: Contains all blog posts.
- `context`: Contains the homepage content description

## Testing Locally: Doc generation steps:

### Installing requirements

To set up your computer to run this site locally, you need to install the various Python packages in the [requirements.txt](requirements.txt) at the top level of this repository.

```bash
$ pip install -U -r requirements.txt
```

### Generate all the Documentation

#### Under Linux and OSX

```bash
$ make -C . clean && make -C . html
```

#### Under Windows

```bash
$ ./make.bat clean
$ ./make.bat html
```

This will build a collection of html pages under `_build/html` and you can open the `index.html` using your browser of choice.

## Creating a PR

When you are happy with any changes you have made to the website.
We recommend building the website and making sure that everything is building fine.
You should see no warnings for the build.

Once you are sure everything is in order, you can send a PR to this repository.
If you are unfamiliar with this, please see this guide from [GitHub.](https://help.github.com/articles/about-pull-requests/)

## PR Review

When a PR is opened, Github Action will create a preview of any content or style changes.

This must pass before the PR will be merged, furthermore, one review is required before a PR can be merged as well.

## Creating a Blog Post

Blog posts can be added by creating a new text file in the `posts/<current year>` directory.
The filename must use the following naming convention `YEAR-MONTH-DAY-title.{ext}` and be written in one of the following formats:

- [RST](https://www.sphinx-doc.org/en/stable/rest.html) formatted text, `ext=rst`,
- [Jupyter notebook](https://jupyter.org/), `ext=ipynb`; (notebooks are converted to RST using the [nbsphinx](https://nbsphinx.readthedocs.io) extension)
- [MD](https://www.markdownguide.org/cheat-sheet/) formatted text, `ext=md`,

Please also see the [ABlog documentation](https://ablog.readthedocs.io/) for more information.

### RST

If you write your post in RST formatted text, each file must also contain the following header for Sphinx via [Ablog](https://github.com/sunpy/ablog) to parse the post properly:

```rst
.. post:: <Date>
   :author: <Name>
   :tags: <Tag list with commas>
   :category: <One of the below>

<Title>
=========

```

or

```rst
:blogpost: true
:date: <Date>
:author: <Name>
:category: <One of the below>

<Title>
=========

```

### Jupyter Notebook

When writing posts as Jupyter notebooks, the first cell should be a Markdown cell with the title as a top-level heading (i.e. using a single `#`) and the second cell should be a raw cell containing the following

```rst
.. post:: <Date>
   :author: <Name>
   :tags: <Tag list with commas>
   :category: <One of the below>
   :exclude:

   <Short description of post>
```

The short description will appear as a preview of your post on the blog page.
See the [nbsphinx docs](https://nbsphinx.readthedocs.io/raw-cells.html) for information on making raw notebook cells compatible with Sphinx and RST.

You might have to open the notebook in a text editor and change the "metadata" for the post cell to include the following

```
   "metadata": {
    "raw_mimetype": "text/restructuredtext"
   },
```

In theory the alternative rst style and the below markdown style should also work in this cell.

Additionally, Sphinx will automatically add a link to the interactive version of your notebook, hosted on [Binder](https://mybinder.org/), to the top of your post.
If your notebook requires any other dependencies besides SunPy (or its dependencies), they will need to be added to `binder/requirements.txt`.

### Markdown

If you write your post in markdown formatted text, each file must contain the following header for Sphinx via [Ablog](https://github.com/sunpy/ablog) to parse the post properly:

```
---
blogpost: true
date: <Date>
author: <Name>
category: <One of the below>
---

# <Title>

```

### Metadata

Please note that the date for the post is different from the way it is written for the blog filename.
Since this date is reader-facing, we want month day year **e.g.,** May 14 2056.

The current range of categories we have "officially" are:

- release
- update
- gsoc
- news
- tutorial
- event

Please select the more appropriate one, for many `update` or `news` would be enough.

For tags, you can choose what you prefer for your post but please don't use any that are in the categories list.

## Adding an image to the Sponsor section

- **Step 1.** Make sure you have a correct image size. The sponsor section images should be squared.
- **Step 2.** Commit and push your images in the subfolder `_static/images/sponsors`
- **Step 2.bis (optional).** If your not satisfied with the layout (grid system), edit the `_templates/components/sponsors.html` file to improve the rendering.
- **Step 3.** Create a new `[[sponsors]]` section and add the image name in the [context.toml file](https://github.com/dipy/dipy.org/blob/15a48e058f76be5e76977e71ee5b108077ba9512/context/context.toml#L1). Note that order have an importance. Your new section should look like this:

```python
[[sponsors]]
name = "Indiana University"
image = "iu.webp"
url = "https://www.iu.edu/"
```

## Adding an image to the Carousel section

- **Step 1.** Make sure you have the correct banner aspect ratio. it should respect the "Billboard Banner" aspect ratio (970x250). Look [here for more information](https://www.match2one.com/blog/standard-banner-sizes/#:~:text=Billboard)
- **Step 2.** Commit and push your banner at https://github.com/dipy/dipy_data or update the image in the [banner folder](https://github.com/dipy/dipy.org/tree/master/_static/images/banner).
- **Step 3.** Get the GitHub raw URL of your banner
- **Step 4.** Create a new `[[carousel_slides]]` section and add this link in the [context.toml file](https://github.com/dipy/dipy.org/blob/15a48e058f76be5e76977e71ee5b108077ba9512/context/context.toml#L1). Note that order has importance. Your new section should look like this:

```python
[[carousel_slides]]
caption = "EVAC+, ISMRM 2023"
description = ""
img = "https://raw.githubusercontent.com/dipy/dipy_data/master/dipy_main_evac.png"
link = "https://arxiv.org/abs/2206.02837"
```
