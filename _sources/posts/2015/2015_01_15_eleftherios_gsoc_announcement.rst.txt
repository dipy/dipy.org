Google Summer of Code 2015 Announcement
=======================================

.. post:: January 15 2015
     :author: Eleftherios Garyfallidis
     :tags: google
     :category: gsoc announcement

We are happy to announce our application for the Google Summer of Code 2015. 

If you are interested in participating as a student, please read `this <https://wiki.python.org/moin/SummerOfCode/Expectations>`_ first.

GSoC is a project that enables students to learn by contributing to an open-source project, while receiving a stipend from Google, and mentorship from open-source software developers. For details about this year's GSoC, please refer to `this page <http://www.google-melange.com/gsoc/homepage/google/gsoc2015>`_.

All participants should have a basic knowledge of scientific programming in Python.
Recommended book `Python for Data Analysis by Wes McKinney <http://shop.oreilly.com/product/0636920023784.do>`_. 

Here are the projects we offer to mentor this summer:

1. **3D visualizations**

   Description: The main tool for 3D visualization in dipy is the dipy.viz.fvtk module. 
   This creates `beautiful images <https://www.youtube.com/watch?v=kstL7KKqu94>`_, but the functionality is currently limited, and we would like to expand it. This project will create a more generic API that allows visualization of peaks, ODFs, volumes and streamlines in the correct space. Also implement VTK's network visualization in fvtk. Get creative! Many other things can be done here! For example enabling recording of 3D animations of the brain, create glass effects etc. 

   Difficulty: high. 

   Skills required: acquaintance with VTK is an advantage, knowledge of 3D graphics is required. 

   Mentors: `Eleftherios Garyfallidis <mailto:garyfallidis@gmail.com>`_ and `Ariel Rokem <mailto:arokem@gmail.com>`_ and `Matthew Brett <mailto:matthew.brett@gmail.com>`_.

2. **Use directional information to improve dMRI registration**

   Description: Currently in DIPY we have a framework for nonlinear registration based on the idea of Symmetric Normalization `SyN <http://www.ncbi.nlm.nih.gov/pubmed/17659998>`_. This framework allows to create new similarity metrics (e.g. cross correlation, or mutual information) and let the optimization of SyN to warp the images. Now, in diffusion MRI we can have in each voxel orientation distributions. The goal of the project is to use additionally this orientation information to drive the registration. So now we do not only warp but also re-orient the orientation distributions while warping. In other words, you will have to create a new orientation distribution based metric which will work inside our existing SyN framework. `This paper <http://www.ncbi.nlm.nih.gov/pubmed/21316463>`_ is a must read.

   Difficulty: high 

   Skills required: expertise in registration; acquaintance with diffusion modelling. 

   Mentors: `Matthew Brett <mailto:matthew.brett@gmail.com>`_ and `Eleftherios Garyfallidis <mailto:garyfallidis@gmail.com>`_ and `Matthew Brett <mailto:matthew.brett@gmail.com>`_.  

3. **Diffusion Kurtosis Imaging**

   Description: `Diffusion Kurtosis Imaging <http://www.ncbi.nlm.nih.gov/pubmed/20632416>`_, or DKI, is a method that estimates the parameters of higher-order statistics in DWI data with multiple b-value measurements (such as measurements from the `Human Connectome Project <http://www.humanconnectome.org/>`_. This allows us to make inferences about properties of the tissue that are not readily available with other methods, such as DTI. We have already `begun <https://github.com/nipy/dipy/pull/233>`_ the work on an implementation of this algorithm, but the work needs to be completed, and there is still much to do here.

   Difficulty: high. 
   
   Skills required: acquaintance with diffusion MRI. 

   Mentors: `Ariel Rokem <mailto:arokem@gmail.com>`_ and `Eleftherios Garyfallidis <mailto:garyfallidis@gmail.com>`_ and `Matthew Brett <mailto:matthew.brett@gmail.com>`_.

4. **Offline quality assurance (QA) using a publicly available dataset**

   Description: The ultimate demonstration of a tool is in its use in realistic and important cases. The analysis of high-quality publicly available data-sets (e.g. from the `Human Connectome Project <http://www.humanconnectome.org/>`_) is one compelling case. The goal of this project, is to create a pipeline for analysis of such a data-set, and to reproducibly execute this analysis as a way to benchmark the tools available through dipy, and perform QA, to detect regressions in the performance of these tools. This will also be a public show-case of the project, as a way to interest new users. 

   Difficulty: intermediate. 

   Skills required: acquaintance with diffusion MRI, and with dipy. 

   Mentors: `Ariel Rokem <mailto:arokem@gmail.com>`_ and `Eleftherios Garyfallidis <mailto:garyfallidis@gmail.com>`_ and `Matthew Brett <mailto:matthew.brett@gmail.com>`_.

5. **Tissue classifiers for tracking**

   Description: Research in the last couple of years has shown that using a tissue classifier in tracking can be of great benefit for creating more accurate representations of the underlying white matter anatomy. The goal of this project will be to create accurate tissue classifiers to guide tracking. So this is basically an image segmentation task. To do that, we will have to implement a couple of popular algorithms using T1-weighted and/or invent a new one using DWI data. Sounds fun?

   Difficulty: intermediate. 

   Skills required: acquaintance with diffusion MRI and image segmentation. 

   Mentors: `Eleftherios Garyfallidis <mailto:garyfallidis@gmail.com>`_ and `Ariel Rokem <mailto:arokem@gmail.com>`_ and `Matthew Brett <mailto:matthew.brett@gmail.com>`_