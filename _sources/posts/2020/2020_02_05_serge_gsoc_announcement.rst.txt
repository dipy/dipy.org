Google Summer of Code 2020
==========================

.. post:: February 05 2020
     :author: Serge Koudoro
     :tags: google
     :category: gsoc announcement

Introduction to DIPY
====================

DIPY is a free and open-source software library for the analysis of 3D/4D+ imaging in Python. It contains generic methods for spatial normalization, signal processing, machine learning, statistical analysis and visualization of medical images. Additionally, it contains specialized methods for computational anatomy including diffusion, perfusion, and structural imaging. DIPY has many users from computational neuroanatomy and medical data science field. DIPY is an international project which brings together scientists across labs and countries to share their state-of-the-art code and expertise in the same codebase, accelerating scientific research in medical imaging. DIPY is participating in GSoC this year for the 4th time.

How to become a part of DIPY's Google Summer of Code 2020
=========================================================

GSoC is a program that allows students to learn by contributing to an open-source project while receiving a fellowship from Google, and mentorship from open-source software developers. For details about this year's GSoC, please refer to `this page <https://summerofcode.withgoogle.com/>`_. This year, DIPY is participating in GSoC under the umbrella of International Neuroinformatics Coordinating Facility (`INCF <https://www.incf.org/>`_). More information can be found at INCF's `GSoC 2020 page <https://www.incf.org/training/gsoc>`_.

Before considering becoming part of the DIPY GSoC, please read about our expectations.

All participants should have basic knowledge of scientific computing and development in Python. For a comprehensive introduction to these topics, please refer to the book `Effective Computation in Physics <http://shop.oreilly.com/product/0636920033424.do>`_ by Katy Huff and Anthony Scopatz. However, you should be already familiar with data analysis using Python and Numpy before applying.

Be happy to ask questions directly in our Gitter channel https://gitter.im/nipy/dipy

Advice
------

Potential candidates should take a look at the guidelines on how to `contribute to DIPY <https://github.com/dipy/dipy/blob/master/CONTRIBUTING.md>`_. Making a small enhancement/bugfix/documentation fix/etc to DIPY already before applying for the GSoC can help you get some idea how things would work during the GSoC. The fix does not need to be related to your proposal. We have and will continue adding some beginner-friendly issues in Github. You can see some of them `here <https://github.com/dipy/dipy/issues>`_.

Projects
========

DIPY support for DICOM files
----------------------------

**Description:** Magnetic resonance imaging (MRI) is often stored in Digital Imaging and Communications in Medicine (DICOM) format. We want to provide DIPY users support for reading and writing to DICOM files. And also have an additional option to convert from DICOM to NIFTI file format.

* Understand how DICOM file format works. 
* Add support in DIPY to read and write DICOM files.
* Understand and create a new DIPY command-line interface (Workflow).
* Implement a robust DICOM to NIFTI conversion method.
* (Optional) Create a workflow to connect and get data from a PACS server.

**Difficulty:** Intermediate

**Skills required:** Python/Cython, Medical Imaging. 

**Mentors:** `Bramsh Chandio <mailto:bqchandi@iu.edu>`_ and `Eleftherios Garyfallidis <mailto:elef@indiana.edu>`_

Machine learning-based MRI registration
---------------------------------------

**Description:** Develop a machine learning-based registration framework that makes use of the Diffeomorphic Registration implemented in DIPY. The goal is to train a CNN model that can compute the deformation field in an unsupervised setting. This project will also involve leveraging the reconstruction module in DIPY to perform image fusion via inter-modality registration.

* Understand Diffeomorphic Registration. Look at ``dipy.align`` module and DIPY tutorial.
* Understand advanced Image Reconstruction Models such as Free-Water-DTI, DKI, etc. in DIPY
* Implement a Deep Neural Net (e.g. a 2D/ 3D CNN) or a Multivariate Model for Co-learning 

**Difficulty:** High

**Skills required:** Python, Deep Learning, Tensorflow, Registration, Strong Math Skills.

**Mentors:** `Shreyas Fadnavis <mailto:shreyasfadnavis@gmail.com>`_ and `Bramsh Chandio <mailto:bqchandi@iu.edu>`_

Extend DIPY Horizon workflow
----------------------------

**Description:** Extend ``dipy_horizon`` workflow by adding more options for the visualization of the diffusion data. DIPY Horizon is a workflow that enables to visualize diffusion data such as dMRI, tractograms, white matter bundles and more from command line. This project requires student to add support for different types of visualizations in the horizon workflow. 

* Add support to visualize orientation distribution functions (odfs) generated from diffusion data
* Create an option in the horizon workflow to project anatomical measures such as functional anisotropy (FA), mean diffusivity (MD), etc on the white matter tracts and visualize them
* Add Qt functionality in dipy_horizon workflow

**Difficulty:** Easy / Intermediate

**Skills required:** Python, VTK, Qt. 

**Mentors:** `Bramsh Chandio <mailto:bqchandi@iu.edu>`_ and `Eleftherios Garyfallidis <mailto:elef@indiana.edu>`_