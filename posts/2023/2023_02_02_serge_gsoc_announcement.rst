Google Summer of Code 2023
==========================

.. post:: February 02 2023
     :author: Serge Koudoro
     :tags: google
     :category: gsoc announcement

Introduction to DIPY
====================

DIPY is a free and open-source software library for the analysis of 3D/4D+ imaging in Python. It contains generic methods for spatial normalization, signal processing, machine learning, statistical analysis, and visualization of medical images. Additionally, it contains specialized methods for computational anatomy including diffusion, perfusion, and structural imaging. DIPY has many users from computational neuroanatomy and the medical data science field. DIPY is an international project which brings together scientists across labs and countries to share their state-of-the-art code and expertise in the same codebase, accelerating scientific research in medical imaging. DIPY is participating in GSoC this year for the 7th time.

How to become a part of DIPY's Google Summer of Code 2023
=========================================================

GSoC is a program that allows students to learn by contributing to an open-source project while receiving a fellowship from Google, and mentorship from open-source software developers. For details about this year's GSoC, please refer to `this page <https://summerofcode.withgoogle.com/>`_. 

Before considering becoming part of the DIPY GSoC, please read about our expectations.

All participants should have basic knowledge of scientific computing and development in Python. For a comprehensive introduction to these topics, please refer to the book `Effective Computation in Physics <http://shop.oreilly.com/product/0636920033424.do>`_ by Katy Huff and Anthony Scopatz. However, you should be already familiar with data analysis using Python and Numpy before applying.

Be happy to ask questions directly in our:

- Gitter channel https://gitter.im/dipy/dipy
- Forum https://github.com/dipy/dipy/discussions

Advice
------

Potential candidates should take a look at the guidelines on how to `contribute to DIPY <https://github.com/dipy/dipy/blob/master/CONTRIBUTING.md>`_. Making a small enhancement/bugfix/documentation fix/etc to DIPY already before applying for the GSoC can help you get some idea how things would work during the GSoC. The fix does not need to be related to your proposal. We have and will continue adding some beginner-friendly issues in Github. You can see some of them `here (beginner-friendly issues) <https://github.com/dipy/dipy/issues?q=is%3Aissue+is%3Aopen+label%3ABeginner-friendly>`_  or all the issues `here (all issues) <https://github.com/dipy/dipy/issues>`_.

Project Ideas (7)
=================

**Notice 1:** More project ideas might appear **Stay tuned and check regularly this page!**

**Notice 2:** We want to provide the best mentoring to our students, **only 2 or 3 of these projects will be selected.** Not more! 

If you have any questions or if you want to contact a mentor:

- `open a new discussion <https://github.com/dipy/dipy/discussions/new>`_ with GSOC as a category.

Project 1. Add mutual information for non-rigid registration 
------------------------------------------------------------

**Difficulty:** Beginner / Intermediate

**Mentors:** Serge Koudoro, Jong Sung Park (contact via github discussion)

**Description:**

Currently mutual information (MI) similarity metric is available only for affine registration and not nonrigid registration. The student will need to implement, compare and test MI for nonrigid registration. The existing implementation provides examples for SSD and Expectation Maximization metrics. The MI method is expected to work slightly better than our existing EM method for multimodal images. This project will focus on multimodal images. If time is permitted the student can also investigate a tensor based metric for registration.

**Time:** Part-time (175 hours) or Full-Time (350 hours)

**Skills required:** Familiarity with registration algorithms, Python, Cython or C/C++.

Project 2. Generalized along tract analysis of fiber orientation dispersion
---------------------------------------------------------------------------

**Difficulty:** Intermediate

**Mentors:** Rafael Neto Henriques, Julio Villalón  (contact via github discussion)

**Description:** 

Modeling the fiber orientation dispersion (OD) in the brain's white matter (WM) has been one of the long-standing goals of diffusion MRI (dMRI). The must common way to estimate OD is to apply biophysical models to diffusion MRI data acquired with multiple b-values (multi-shell acquisitions). Nevertheless, a vast amount of clinical dMRI data currently available worldwide is acquired using a single b-value (single-shell acquisitions). In this project, the student will need to implement OD estimation algorithms compatible to both single-shell and multi-shell acquisitions. These implementations should be integrated with the current reconstruction procedures in the Diffusion in Python (DIPY) library and they should be compatible with DIPY's unique along tract analysis.

**Time:** Full-time (350 hours)

**Skills required:** Familiarity with Python, experience with diffusion MRI would be a plus.

Project 3. Correlation Tensor Magnetic Resonance Imaging
--------------------------------------------------------

**Difficulty:** Intermediate

**Mentors:** Rafael Neto Henriques, Shreyas Fadnavis (contact via github discussion)

**Description:** 

Typical diffusion MRI techniques uses different phenomenological and mechanistic models to infer microscopic tissue properties from conventional diffusion MRI acquisitions. Recent studies show, however, that advanced diffusion encoding sequences can provide unique information not accessible from more conventional acquisition approaches [1]. In this project, the student will implement a recently proposed diffusion MRI technique for advanced diffusion MRI acquisitions, termed the Correlation Tensor Magnetic Resonance Imaging [2, 3]. This technique allows the estimation of specific sources of tissue non-Gaussian diffusion free from tissue model assumptions. 

**Time:** Full-time (350 hours)

**Skills required:** Familiarity with Python, experience with diffusion MRI with be a plus.

**Related References and Links:**

[1] Henriques, R.N., Palombo, M., Jespersen, S.N., Shemesh, N., Lundell, H., Ianuş , A., 2021. Double diffusion encoding and applications for biomedical imaging. J. Neurosci. Methods, 108989 doi: 10.1016/j.jneumeth.2020.108989

[2] Henriques, R.N., Jespersen, S.N., Shemesh, N., 2020. Correlation tensor magnetic resonance imaging. Neuroimage 211. doi: 10.1016/j.neuroimage.2020.116605

[3] Henriques, R.N., Jespersen, S.N., Shemesh, N., 2021. Evidence for microscopic kurtosis in neural tissue revealed by correlation tensor MRI. Magn. Reson. Med. 1–20. doi: 10.1002/mrm.28938 .

Project 4. Creating Synthetic MRI data
--------------------------------------

**Difficulty:** Hard

**Mentors:** Jong Sung Park, Serge Koudoro (contact via github discussion)

**Description:**

Diffusion models have been a state-of-the-art technique in the image generation area. While a lot of work has been done in the Computer Vision field, there has been limited work on conditional image generation of MRI data. Since it is relatively hard to acquire conditioned brain image data, various research can benefit from the synthetic dataset. The student will work on creating a conditioned diffusion model to generate brain MRI. The conditions can be, but not limited to, different modalities, existence/location of tumor/lesions, pediatric/adult, etc.

**Time:** Full-time (350 hours)

**Skills Required:** Python, Tensorflow or Pytorch (Tensorflow preferred), some familiarity on MRI.

Project 5. An optimal pythonic implementation of Susceptibility Distortion Correction using AP PA data
------------------------------------------------------------------------------------------------------

**Difficulty:** Hard

**Mentors:** Sreekar Chigurupati, Jong Sung Park (contact via github discussion)

**Description:**

A popular request is to bring topup [4] in a simple pythonic implementation that can be easily extended. We will provide an unoptimized version for reference. The student will work on optimizing topup (or similar function) using Python, Cython and Numpy.

**Time:** Full-time (350 hours)

**Skills Required:** Strong familiarity with diffusion MRI, Python, Numpy, Cython or C/C++

**Related References and Links:**

[4] J.L.R. Andersson, S. Skare, J. Ashburner. How to correct susceptibility distortions in spin-echo echo-planar images: application to diffusion tensor imaging. NeuroImage, 20(2):870-888, 2003.

Project 6. DIPY algorithms Optimizations
----------------------------------------

**Difficulty:** Intermediate

**Mentors:** Serge Koudoro, Jongsung Park (contact via github discussion)

**Description:**

Our algorithms performance can be easily be improved via somealgorithms trick and auto-vectorization. To realize this, the project will make sure that our current code is "auto-vectorization" friendly for any C compiler.  An extra step would be to parallelize via thread and CPU. In addition, an extra GPU component can be added for a full-time project if the student feel comfortable and confident with this technology. For example, we currently have cudipy and GPU streamlines. A unified framework is required. In addition, we will need to parallelize some algorithms such as those used for probabilistic tractography and nonrigid registration.

**Project Steps**:

 - Step 1: Look at pitfalls of our Registration framework and tractography framework.
 - Step 2: Unroll many loop and simplify several Cython function.
 - Step 3: Benchmark performance improvement.
 - Step 4: Research for new algorithm tricks, implement them. Also, implementation of multithreading/multiprocessing via openmp or MPI 
 - Step 5 (optional): GPU study and improvement.

**Time:** Full-time (350 hours) or Part-time (175 hours)

**Skills Required:** Python, cython, math, algorithms, optimization, CUDA, openmp, MPI, SIMD, SIMT

Project 7. Accelerated MRI viewer – Horizon
-------------------------------------------

**Difficulty:** Intermediate/Advanced

**Mentors:** Sreekar Chigurupati, Jong Sung Park (contact via github discussion)

**Description:**

DIPY comes with a modern viewer for dMRI-related data - Horizon [6]. It can be used both via Python and CLI. The purpose of this project is to load multiple MR images as textures to use them for comparison in slicer viewers. The candidate is expected to use the FURY shader API to create a layer-by-layer visibility option to switch images as well as add functionality that changes the relative contrast. In addition, we will create functionality to reset the 3D view to coronal, sagittal, and horizontal views.

**Time:** Part-time (175 hours) or Full-Time (350 hours)

**Skills Required:** MRI, Python, DIPY Workflows, FURY, VTK, GLSL

**Related References and Links:**

[6] Garyfallidis E., M-A. Cote, B.Q. Chandio, S. Fadnavis, J. Guaje, R. Aggarwal, E. St-Onge, K.S. Juneja, S. Koudoro, D. Reagan, DIPY Horizon: fast, modular, unified and adaptive visualization, Proceedings of: International Society of Magnetic Resonance in Medicine (ISMRM), Montreal, Canada, 2019.