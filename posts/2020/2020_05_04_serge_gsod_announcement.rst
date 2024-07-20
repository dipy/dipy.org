Google Season of Docs 2020
==========================

.. post:: May 04 2020
     :author: Serge Koudoro
     :tags: google
     :category: gsod announcement

DIPY + FURY project ideas for GSoD'20
=====================================

Welcome, and thank you for showing your interest in `DIPY(Diffusion Imaging in Python) <https://dipy.org>`_ and `FURY(Free Unified Rendering in Python) <https://fury.gl>`_ projects! On this page, we will first provide more information about DIPY and FURY, then the current state of both projects' documentation, and we will finish by describing two project ideas in detail. We want to point out that you are more than welcome to bring your ideas; we'd love to discuss with you any ideas that improve our online presence or documentation.

**Please note that** `the Google Season of Docs <https://developers.google.com/season-of-docs>`_ **is a program for writers with previous experience to show for the application. If you are a student, please consider** `Google Summer of Code <https://summerofcode.withgoogle.com>`_ **instead.**

Technical Writers
-----------------

Welcome technical writers! Do not hesitate to contact us as early as possible! You can use any project chat channels for your first contact (see links on the documentation section). Also, you can find more information on the following links:

- `Guidelines <https://developers.google.com/season-of-docs/docs/tech-writer-guide>`_
- `Application Timeline <https://developers.google.com/season-of-docs/docs/timeline>`_
- `How to write a good proposal <https://developers.google.com/season-of-docs/docs/tech-writer-application-hints>`_

What are DIPY and FURY?
-----------------------

**About DIPY**: DIPY is a free and open-source software library for the analysis of 3D/4D+ imaging in Python. It contains generic methods for spatial normalization, signal processing, machine learning, statistical analysis, and visualization of medical images. Additionally, it contains specialized methods for computational anatomy including diffusion, perfusion, and structural imaging. DIPY has many users from the computational neuroanatomy and medical data science fields. DIPY is an international project which brings together scientists across labs and countries to share their state-of-the-art code and expertise in the same codebase, accelerating scientific research in medical imaging

**About FURY**: FURY is a free and open-source software library for scientific visualization and 3D animations. FURY contains many tools for visualizing a series of scientific data including graph and imaging data. FURY is a DIPY spin-off.

About our Documentation
-----------------------

+-------------------+------------------------------------------------+------------------------------------------------+
|                   | DIPY                                           | FURY                                           |
+===================+================================================+================================================+
| Latest version    | https://dipy.org                               | https://fury.gl                                |
+-------------------+------------------------------------------------+------------------------------------------------+
| tutorials         | https://dipy.org/tutorials/                    | http://fury.gl/latest/auto_tutorials/index.html|
+-------------------+------------------------------------------------+------------------------------------------------+
| reference guide   | https://dipy.org/documentation/latest/reference| http://fury.gl/latest/reference/index.html     |
+-------------------+------------------------------------------------+------------------------------------------------+
| developer docs    | https://dipy.org/documentation/latest/devel/   | http://fury.gl/latest/symlink/contributing.html|
+-------------------+------------------------------------------------+------------------------------------------------+
| GitHub repository | https://github.com/dipy/dipy                   | https://github.com/fury-gl/fury                |
+-------------------+------------------------------------------------+------------------------------------------------+

**The state of DIPY documentation**: We have complete reference documentation for most of the functions and classes exposed to users, although most of the functions are missing a usage example. Our User and Developer Guide needs to be updated and be made more consistent. Also, we need to create the documentation of our new CLI feature. Overall, offering a better experience will be valuable for our users!

**The state of FURY documentation**: FURY is a recent project that offers flexibility. We have complete reference documentation for most functions, and an increasing number of tutorials have been created but FURY suffers from a lack of a Developer and User Guides.

**DIPY + FURY documentation generation**: All our documentation and websites are built with `Sphinx <http://www.sphinx-doc.org>`_. Sphinx generates static websites (making them easy to deploy) and provides extensive functionality to transform plain-text *reStructuredText* documents to HTML, as well as extract and cross-link documentation automatically from docstrings in Python source code. Reference documentation follows the `NumPy docstring standard <https://numpydoc.readthedocs.io/en/latest/format.html>`_. A detailed guide on how to document functions, classes, and other objects can be found `here <https://www.numpy.org/devdocs/docs/howto_document.html>`_.

Note for DIPY: A Django instance manages dynamic content and loads the static page generated by Sphinx.

**DIPY + FURY approach to documentation work**: Documentation tasks and issues are maintained on our GitHub issue tracker for `DIPY <https://github.com/dipy/dipy/issues>`_ and `FURY <https://github.com/fury-gl/fury/issues>`_. Changes to the documentation are made via pull requests on GitHub, and reviewed with our standard review process which is the same for documentation and code (see `DIPY contributing guide <https://github.com/dipy/dipy/blob/master/CONTRIBUTING.md>`_ or `FURY contributing guide <http://fury.gl/latest/symlink/contributing.html>`_). Any new feature should be documented and followed by a tutorial. There is no dedicated "documentation manager" so every developer can review, improve, or comment on the improvement.

Contact
-------

As a community-driven project we try to have all conversations about DIPY and FURY in public:

- All discussions related to the *development* of DIPY (which includes GSoD) can occur on the `DIPY mailing list <https://mail.python.org/mailman3/lists/dipy.python.org/>`_. Please register and post to that list for discussing a GSoD proposal or idea. Also, you can use `our chat on gitter <https://gitter.im/nipy/dipy>`_.
- All discussions related to the *development* of FURY (which includes GSoD) can occur on the `FURY mailing list <https://mail.python.org/mailman3/lists/fury.python.org/>`_. Please register and post to that list for discussing a GSoD proposal or idea. Also, you can use `our chat on Discord <https://discord.gg/6btFPPj>`_.

Projects
--------

- **Project Idea 1**: *[DIPY] High-level restructuring and end-user focus.*
- **Project Idea 2**: *[FURY] Create User and Developer Guides. Update missing docstrings/doctests*

Projects in Details:
====================

Project idea 1: High-level restructuring and end-user focus
-----------------------------------------------------------

**Potential Mentors**: Ariel Rokem, Eleftherios Garyfallidis, Jon Haitz Legarreta Gorroño

**Description**: DIPY serves many kinds of users: students that have a first time contact with the neuroimaging field, educators, researchers, medical doctors, software developers. In summary, DIPY's 10 year documentation needs to be reshaped and improved. We want to provide ways to guide those users to the parts of the documentation most relevant to them. We would love to work with a technical writer that can help us address this challenge.

**Possible topics** include:

- Improving the structure and content of https://dipy.org/
- Reviewing and improving the structure of the documentation
- Producing a roadmap or list of work items for engaging the community in further documentation work 
- Rewriting the User and Developer Guides.
- Adding non-textual images (illustrations, animations, graphics) to enhance the textual explanations
- Improving consistency across the documentation.
- Create documentation for the new command-line interface.

Project idea 2: [FURY] Create User and Developer Guides. Update missing docstrings/doctests
-------------------------------------------------------------------------------------------

**Potential Mentors**: Serge Koudoro, Eleftherios Garyfallidis

This project will be split into 2 parts:

**Create User and Developer Guides**: Despite a lot of tutorials and demos, FURY is missing a User and Developer Guides to explain some basic concepts of our library. What is a vertex? What is a primitive? The technical writer will have to work closely with the core team to provide a boost to our current documentation and facilitate user learning and early adoption.

**Missing docstrings/doctests**: Every public function in FURY should have a docstring with examples (doctests). At present few of them have an example on the docstring. The part of this project would consist of identifying which functions are missing documentation and adding them.