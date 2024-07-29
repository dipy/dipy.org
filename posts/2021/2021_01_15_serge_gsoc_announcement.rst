Google Summer of Code 2021
==========================

.. post:: January 15 2021
     :author: Serge Koudoro
     :tags: google
     :category: gsoc announcement

Introduction to DIPY
====================

DIPY is a free and open-source software library for the analysis of 3D/4D+ imaging in Python. It contains generic methods for spatial normalization, signal processing, machine learning, statistical analysis, and visualization of medical images. Additionally, it contains specialized methods for computational anatomy including diffusion, perfusion, and structural imaging. DIPY has many users from computational neuroanatomy and the medical data science field. DIPY is an international project which brings together scientists across labs and countries to share their state-of-the-art code and expertise in the same codebase, accelerating scientific research in medical imaging. DIPY is participating in GSoC this year for the 5th time.

How to become a part of DIPY's Google Summer of Code 2021
=========================================================

GSoC is a program that allows students to learn by contributing to an open-source project while receiving a fellowship from Google, and mentorship from open-source software developers. For details about this year's GSoC, please refer to `this page <https://summerofcode.withgoogle.com/>`_. This year, DIPY is participating in GSoC under the umbrella of the International Neuroinformatics Coordinating Facility (`INCF <https://www.incf.org/>`_). More information can be found at INCF's `GSoC 2021 page <https://www.incf.org/training/gsoc>`_.

Before considering becoming part of the DIPY GSoC, please read about our expectations.

All participants should have basic knowledge of scientific computing and development in Python. For a comprehensive introduction to these topics, please refer to the book `Effective Computation in Physics <http://shop.oreilly.com/product/0636920033424.do>`_ by Katy Huff and Anthony Scopatz. However, you should be already familiar with data analysis using Python and Numpy before applying.

Be happy to ask questions directly in our Gitter channel https://gitter.im/nipy/dipy

Advice
------

Potential candidates should take a look at the guidelines on how to `contribute to DIPY <https://github.com/dipy/dipy/blob/master/CONTRIBUTING.md>`_. Making a small enhancement/bugfix/documentation fix/etc to DIPY already before applying for the GSoC can help you get some idea how things would work during the GSoC. The fix does not need to be related to your proposal. We have and will continue adding some beginner-friendly issues in Github. You can see some of them `here <https://github.com/dipy/dipy/issues>`_.

Projects
========

Population-based MRI Template Creation
--------------------------------------

**Description:** Implement a method to create a population-based MRI template. Given an input of several subjects' MRI, create one standard template MRI for the population. The method will utilize the MRI registration framework available in DIPY.

**Steps:** 

* Understand MRI data
* Implement template creation method
* Write DIPY workflow of the method
* Test it on different data sets

**Difficulty:** Intermediate

**Skills required:** Python, Image Registration, Image Processing.

**Mentors:** `Bramsh Qamar Chandio <mailto:bqchandi@iu.edu>`_, `Shreyas Fadnavis <mailto:shfadn@iu.edu>`_, and `Jong Sung Park <mailto:jp109@iu.edu>`_

Population-specific Tractography Bundle Atlas Creation
------------------------------------------------------

**Description:** Implement a method to create a population-specific Tractography Bundle Atlas. Given an input of several subjects' segmented white matter tracts, create one standard atlas of bundles for the population. The method will utilize the streamline-based registration framework available in DIPY.

**Steps:** 

* Understand Diffusion Tensor Imaging and Tractography data
* Implement Bundle Atlas creation method
* Write DIPY workflow of the method
* Test it on different data sets

**Difficulty:** Hard

**Skills required:** Python, Registration.

**Skills preferred:** Experience with Diffusion Tensor Imaging

**Mentors:** `Bramsh Qamar Chandio <mailto:bqchandi@iu.edu>`_, `Shreyas Fadnavis <mailto:shfadn@iu.edu>`_, and `Jong Sung Park <mailto:jp109@iu.edu>`_

Extend DIPY Horizon workflow for Visualization
----------------------------------------------

**Description:** Extend ``dipy_horizon`` workflow by adding more options for the visualization of the diffusion data. DIPY Horizon is a workflow that enables to visualize diffusion data such as dMRI, tractograms, white matter bundles, and more from the command line. This project requires student to add support for different types of file formats and visualizations in the horizon workflow. 

**Steps:** 

* Add support to visualize orientation distribution functions (odfs) generated from diffusion data
* Create an option in the horizon workflow to project anatomical measures such as functional anisotropy (FA), mean diffusivity (MD), etc on the white matter tracts and visualize them
* Add region-of-interest (ROI) capacity for streamline filtering in Horizon.
* Add Qt functionality in dipy_horizon workflow

**Difficulty:** Intermediate

**Skills required:** Python, VTK, Qt. 

**Mentors:** `Bramsh Qamar Chandio <mailto:bqchandi@iu.edu>`_, `Shreyas Fadnavis <mailto:shfadn@iu.edu>`_, and `Jong Sung Park <mailto:jp109@iu.edu>`_

DIPY-Tract-or-Treat: DIPY DTI Post-Processing Pipeline 
------------------------------------------------------

**Description:** DIPY has several methods for reconstruction, tractography, bundle extraction, and tratometry. The idea of this project is to combine them all into one command-line interface that does reconstruction, tractography, bundle extraction, and bundle analytics. Users will have the option to select among different methods and design their pipeline from the list of available options.

**Steps:** 

* Understand DIPY and its workflows thoroughly
* Create a command-line interface (workflow) to create a pipeline of different existing methods.
* Test in on data

**Difficulty:** Intermediate

**Skills required:** Python

**Skills preferred:** Experience with Diffusion Tensor Imaging

**Mentors:** `Bramsh Qamar Chandio <mailto:bqchandi@iu.edu>`_, `Shreyas Fadnavis <mailto:shfadn@iu.edu>`_, and `Jong Sung Park <mailto:jp109@iu.edu>`_