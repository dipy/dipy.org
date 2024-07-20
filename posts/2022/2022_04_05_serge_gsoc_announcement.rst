Google Summer of Code 2022
==========================

.. post:: April 05 2022
     :author: Serge Koudoro
     :tags: google
     :category: gsoc announcement

Introduction to DIPY
====================

DIPY is a free and open-source software library for the analysis of 3D/4D+ imaging in Python. It contains generic methods for spatial normalization, signal processing, machine learning, statistical analysis, and visualization of medical images. Additionally, it contains specialized methods for computational anatomy including diffusion, perfusion, and structural imaging. DIPY has many users from computational neuroanatomy and the medical data science field. DIPY is an international project which brings together scientists across labs and countries to share their state-of-the-art code and expertise in the same codebase, accelerating scientific research in medical imaging. DIPY is participating in GSoC this year for the 7th time.

How to become a part of DIPY's Google Summer of Code 2022
=========================================================

GSoC is a program that allows students to learn by contributing to an open-source project while receiving a fellowship from Google, and mentorship from open-source software developers. For details about this year's GSoC, please refer to `this page <https://summerofcode.withgoogle.com/>`_. This year, DIPY is participating in GSoC under the umbrella of the International Neuroinformatics Coordinating Facility (`INCF <https://www.incf.org/>`_). More information can be found at INCF's `GSoC 2022 page <https://www.incf.org/training/gsoc>`_.

Before considering becoming part of the DIPY GSoC, please read about our expectations.

All participants should have basic knowledge of scientific computing and development in Python. For a comprehensive introduction to these topics, please refer to the book `Effective Computation in Physics <http://shop.oreilly.com/product/0636920033424.do>`_ by Katy Huff and Anthony Scopatz. However, you should be already familiar with data analysis using Python and Numpy before applying.

Be happy to ask questions directly in our Gitter channel https://gitter.im/nipy/dipy

Advice
------

Potential candidates should take a look at the guidelines on how to `contribute to DIPY <https://github.com/dipy/dipy/blob/master/CONTRIBUTING.md>`_. Making a small enhancement/bugfix/documentation fix/etc to DIPY already before applying for the GSoC can help you get some idea how things would work during the GSoC. The fix does not need to be related to your proposal. We have and will continue adding some beginner-friendly issues in Github. You can see some of them `here <https://github.com/dipy/dipy/issues>`_.

Projects
========

GPU parallelization of DIPY algorithms
--------------------------------------

**Description:** We have multiple versions of GPU parallelized algorithms. The project will be bringing those together in a common framework and adding new methods as well. For example, we currently have cudipy and GPU streamlines. A unified framework is required. In addition, we will need to parallelize some algorithms such as those used for probabilistic tractography and nonrigid registration.

**Difficulty:** Intermediate

**Time:** Full time

**Skills required:** CUDA, C/C++, Python

**Mentors:** Shreyas Fadnavis, Jongsung Park, Bramsh Qamar Chandio (contact via gitter or incf neurostar)

A pythonic implementation of topup
----------------------------------

**Description:** A popular request is to bring topup [1] in a simple pythonic implementation that can be easily extended. The student will work on implementing topup (or similar function) from the ground up using Python, Cython and Numpy.

**Difficulty:** Hard

**Time:** Full time

**Skills required:** Strong familiarity with diffusion MRI, Python, Numpy, Cython or C/C++

**Mentors:** Jongsung Park, Shreyas Fadnavis, Bramsh Qamar Chandio (contact via gitter or incf neurostar)

Extend DIPY Horizon workflow for Visualization
----------------------------------------------

**Description:** Extend dipy_horizon workflow by adding more options for the visualization and cleaning of tractograms generated from diffusion MRI data. DIPY Horizon is a workflow that enables to visualize diffusion data such as dMRI, tractograms, white matter bundles, and more from the command line. This project requires students to add support for different types of file formats and visualizations in the horizon workflow. Students will work on adding multiple features to help manual cleaning of streamlines such as select and remove streamlines from a bundle, cut some parts of the bundle and so on.

**Difficulty:** Intermediate

**Time:** Full time

**Skills required:** Python, OpenGL, VTK

**Mentors:** Bramsh Qamar Chandio, Shreyas Fadnavis, and Jong Sung Park (contact via gitter or incf neurostar)

Add mutual information for non-rigid registration 
-------------------------------------------------

**Description:** Currently mutual information (MI) similarity metric is available only for affine registration and not nonrigid registration. The student will need to implement, compare and test MI for nonrigid registration. The existing implementation provides examples for SSD and Expectation Maximization metrics. The MI method is expected to work slightly better than our existing EM method for multimodal images. This project will focus on multimodal images. If time is permitted the student can also investigate a tensor based metric for registration.

**Difficulty:** Beginner

**Time:** Half time

**Skills required:** Familiarity with registration algorithms, Python, Cython or C/C++.

**Mentors:** Bramsh Qamar Chandio, Shreyas Fadnavis, Jong Sung Park (contact via gitter or incf neurostar)
