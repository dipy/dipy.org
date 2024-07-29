Google Summer of Code 2024
==========================

.. post:: January 10 2024
     :author: Serge Koudoro
     :tags: google
     :category: gsoc announcement

Introduction to DIPY
====================

DIPY is a free and open-source software library for the analysis of 3D/4D+ imaging in Python. It contains generic methods for spatial normalization, signal processing, machine learning, statistical analysis, and visualization of medical images. Additionally, it contains specialized methods for computational anatomy including diffusion, perfusion, and structural imaging. DIPY has many users from computational neuroanatomy and the medical data science field. DIPY is an international project which brings together scientists across labs and countries to share their state-of-the-art code and expertise in the same codebase, accelerating scientific research in medical imaging. DIPY is participating in GSoC this year for the 7th time.

How to become a part of DIPY's Google Summer of Code 2024
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

Project Ideas
=============

**Notice 1:** More project ideas might appear **Stay tuned and check regularly this page!**

**Notice 2:** We want to provide the best mentoring to our students, **only 2 or 3 of these projects will be selected.** Not more! 

If you have any questions or if you want to contact a mentor:

- `open a new discussion <https://github.com/dipy/dipy/discussions/new>`_ with GSOC as a category.
  
Project 1. Add mutual information for non-rigid registration
------------------------------------------------------------

**Difficulty:** Beginner

**Mentors:** Sreekar Chigurupati, Serge Koudoro, Jong Sung Park (contact via github discussion)

**Description:**

Mutual information (MI) similarity metric is a metric for registering images that have different modalities or styles. Currently, the metric is available only for affine registration and not nonrigid registration. The student will need to implement, compare and test MI for nonrigid registration. An existing implementation in DIPY of different metrics will provide a guideline. An initial implementation separate from DIPY will be provided as well. This metric is expected to boost registration accuracy. This project will focus on multimodal images. If time is permitted the student can also investigate a tensor based metric for registration.

**Time:** small (~90 hour projects) or medium (~175 hr projects)

**Skills required:** Familiarity with registration algorithms, Python and some knowledge in Cython or C/C++.

Project 2. CUDA non-rigid registration
--------------------------------------

**Difficulty:** Intermediate

**Mentors:** Sreekar Chigurupati, Serge Koudoro, Jong Sung Park (contact via github discussion)

**Description:**

Non-rigid registration has a larger degree of freedom than affine registration, hence a more accurate registration output. However, this also means an increase in time complexity. In neuroimaging, it is always beneficial to have a faster preprocessing pipeline. The student will work implementing the current non-rigid registration algorithm in DIPY using CUDA, as part of the gpu acceleration projects of various DIPY algorithms. If time permits, the student can also investigate accelerating different algorithms such as tracking or segmentation.

**Time:** medium (~175 hr projects) or large (~350 hour)

**Skills required:** Familiarity with registration algorithms, Python and CUDA

Project 3. DIPY algorithms Optimizations
----------------------------------------

**Difficulty:** Intermediate

**Mentors:** Serge Koudoro, Jongsung Park (contact via github discussion)

**Description:**

Our algorithms performance can be easily be improved via some algorithms trick and auto-vectorization. To realize this, the project will make sure that our current code is "auto-vectorization" friendly for any C compiler.  An extra step would be to parallelize via thread and CPU. In addition, an extra GPU component can be added for a full-time project if the student feel comfortable and confident with this technology. For example, we currently have cudipy and GPU streamlines. A unified framework is required. In addition, we will need to parallelize some algorithms such as those used for probabilistic tractography and nonrigid registration.

**Project Steps:**

 - Step 1: Look at pitfalls of our Registration framework and Denoising framework.
 - Step 2: Unroll many loop and simplify several Cython function.
 - Step 3: Benchmark performance improvement.
 - Step 4: Implementation of multithreading/multiprocessing via openmp or MPI 
 - Step 5 (optional): GPU study and improvement. Research for new algorithm tricks and implement them

**Time:** Full-time (350 hours) or Part-time (175 hours)

**Skills Required:** Python, cython, math, algorithms, optimization, CUDA, openmp, MPI, SIMD, SIMT

Project 4. Solving Issues in DIPY_HORIZON
-----------------------------------------

**Difficulty:** Beginner

**Mentors:** Maharshi Gor, Serge Koudoro, Jong Sung Park (contact via github discussion)

**Description:**

Horizon is a highly efficient scientific visualization tool. While DIPY contributors have been upgrading the function to accommodate user feedback and fix bugs, there are still several issues that need to be solved. This project requires the student to modify the python code and work on the issue. It will be a great opportunity for them to get involved in an open-source project and possibly continue to work on such projects.

**Time:** small (~90 hour projects)

**Skills required:** Python

Project 5. Project ideas using AI/ML in Diffusion MRI processing
----------------------------------------------------------------

**Difficulty:** Intermediate

**Mentors:** Jong Sung Park,  Sreekar Chigurupati, Serge Koudoro (contact via github discussion)

**Description:**

While there are many techniques that provide good results in Diffusion MRI processing, in many cases the algorithm can be a time bottleneck in the pipeline due to the complex equations and following time complexity. This project is to support the research of students who are interested in a AI/ML project that uses diffusion MRI data. Once the project is concluded and if the model is ready, further support will be done for publishing and providing open source code.

**Time:** medium (~175 hr projects) or large (~350 hour)

**Skills Required:** Python, Some knowledge with diffusion MRI, experience with AI/ML and corresponding tools (e.g. Tensorflow, Pytorch, etc)

Project 6. Modernize DIPY Codebase
----------------------------------

**Difficulty:** Beginner

**Mentors:** Serge Koudoro, Maharshi Gor, Jong Sung Park

**Description:**

The primary objective is to implement key improvements, including transitioning to keyword-only arguments for a more robust and readable codebase. Additionally, the initiative aims to integrate lazy loading, enhancing the tool's efficiency by loading resources only when needed. This modernization effort reflects a commitment to maintainability, code clarity, and optimizing performance in DIPY, ensuring it remains at the forefront of scientific visualization tools in the Python ecosystem. Other potential tasks may include code refactoring, adopting best practices, and incorporating new features to further elevate DIPY's capabilities and user experience.

**Project Steps:**

 - Step 1: keyword-only arguments integration.
 - Step 2: lazy loading implementation.
 - Step 3: Improve and simplify the management of the current website.
 - Step 4: Improve Issues and Pull Requests Triage + Triage automation.
 - Step 5: Integrates multiple Github Actions to simplify the workflows.
 - Step 6: Refactor some DIPY packages + Improves Docstring
 - Step 7: Add Tutorials

**Time:** Part-time (175 hours) or full-time (350 hours) project

**Skills Required:** Python, Sphinx.