How to become a part of DIPY's Google Summer of Code 2016
=========================================================

.. post:: February 01 2016
     :author: Eleftherios Garyfallidis
     :tags: google
     :category: gsoc announcement

GSoC is a program that allows students to learn by contributing to an open-source project, while receiving a fellowship from Google, and mentorship from open-source software developers. For details about this year's GSoC, please refer to `this page <https://developers.google.com/open-source/gsoc/>`_.

Before considering becoming part of the Dipy GSoC, please read about our `expectations <https://wiki.python.org/moin/SummerOfCode/Expectations>`_. 

All participants should have basic knowledge of scientific computing and development in Python. For a comprehensive introduction to these topics, please refer to the book `Effective Computation in Physics <http://shop.oreilly.com/product/0636920033424.do>`_ by Katy Huff and Anthony Scopatz. 

Projects
--------

1. **Continuous quality assurance (QA) in cloud computing environment**

   Description: The ultimate demonstration of a tool is in its use in realistic and important cases. The analysis of high-quality publicly available data-sets (e.g. from the `Human Connectome Project <http://www.humanconnectome.org/>`_) is one compelling case. The goal of this project, is to create a pipeline for analysis of such a data-set, and to reproducibly execute this analysis on a cloud computing resource, as a way to benchmark the tools available through dipy, and perform QA, to detect regressions in the performance of these tools. This will also be a public show-case of the project, as a way to interest new users. 

   Difficulty: intermediate. 

   Skills required: acquaintance with diffusion MRI, and with dipy. Acquaintance with cloud computing is a plus.

   Mentors: `Ariel Rokem <mailto:arokem@gmail.com>`_ and `Eleftherios Garyfallidis <mailto:garyfallidis@gmail.com>`_.

2. **CHARMED: biophysical modeling of multi b-value data**
    
   Description: The `CHARMED model <http://www.ncbi.nlm.nih.gov/pubmed/15979342>`_ describes the diffusion signal as a combination of hindered and restricted components. This advanced model, when applied to data with multiple b-values, can be used to make inferences about tissue structure and biophysics. The GSoC project will focus on an efficient and well-tested implementation of the CHARMED model in the Dipy reconstruction module. 

   Difficulty: intermediate

   Mentors: `Ariel Rokem <mailto:arokem@gmail.com>`_ and Rafael Henriques.

3. **Develop a new DIPY website with more interactive features (project is full)**

   Description: The current `DIPY <http://dipy.org>`_ website is based on Sphinx and allows for only one documentation to be online (the development version). One of the tasks of this project will be to create a new github repository which will be only for Dipy's website. Right now the website is under the doc folder of the dipy repository. In this new repository a new responsive website will be created which upon other things will allow for hosting documentations for multiple versions. Additionally, the new website will allow for direct insertion of news and connections and updates to social media. Most importantly, new algorithms are expected to be developed that will increase UX. More details soon.
 
   Difficulty: intermediate

   Skills required: Django, bootstrap, javascript, sphinx and expertise in web development

   Project is full: We had already more than 40 excellent people applying for this project and it will be impossible to interview more of them. **So, this specific project is now closed for new applicants, contacting us after 2nd of March**. Please look and apply to the other exciting projects. 

   Mentors: `Jean-Christophe Houde <mailto:jean.christophe.houde@gmail.com>`_ and `Eleftherios Garyfallidis <mailto:garyfallidis@gmail.com>`_

4. **DKI enhancements**

   Description: diffusion kurtosis imaging (DKI) is an extension of the classic DTI model. In the previous GSoC, `Rafael Henriques implemented the DKI model fitting and estimation <http://gsoc2015dipydki.blogspot.com/>`_. This project proposes to extend our current implementation of diffusion kurtosis with a few different improvements. The first extension will allow us to estimate additional parameters of white matter "integrity" based on the diffusion kurtosis model (see `Fieremans et al. paper <http://www.sciencedirect.com/science/article/pii/S1053811911006148>`_). The second extension will allow us to use the DKI model for tractography (see `tractography paper <http://www.ncbi.nlm.nih.gov/pubmed/26275886>`_). Finally, we will also implement the REKINDLE algorithm, which allows robust fitting of DKI parameters (see `REKINDLE paper <http://onlinelibrary.wiley.com/doi/10.1002/mrm.25165/abstract>`_).

   Difficulty: high -- knowledge in diffusion MRI preferred

   Mentors: `Ariel Rokem <mailto:arokem@gmail.com>`_ and Rafael Henriques

5. **IVIM: Simultaneous modeling of perfusion and diffusion**

   Description: The IVIM model uniquely describes the diffusion and perfusion from data with multiple b-values (see `Le Bihan et al. paper <http://pubs.rsna.org/doi/abs/10.1148/radiology.161.2.3763909>`_ or `Luciani et al. paper <http://onlinelibrary.wiley.com/doi/10.1002/jmri.24195/full>`_). It has been used to investigate brain disease, stroke, aging, and liver fibrosis among other medical and neuroscience applications. This project proposes porting a `previous implementation of IVIM processing by Eric Peterson <https://github.com/etpeterson/IVIM_fitting>`_ into Dipy. Further extensions would be to implement the Jacobian for speed improvements in the nonlinear fitting and improvements in the fitting algorithm to improve robustness.

   Difficulty: intermediate

   Mentors: `Ariel Rokem <mailto:arokem@gmail.com>`_, Eric Peterson and `Rafael Henriques <mailto:rafaelnh21@gmail.com>`_.

6. **Scifi UI using Python-VTK in DIPY.VIZ**

   Description: The main idea will be to develop new futuristic widgets directly using VTK (Visualization Toolkit) without calling any external libraries. So, no Qt! Only VTK which is written already in OpenGL. Here are some recent tutorials to have a look http://dipy.org/examples_index.html#id15 and start playing with.
   Those new widgets are useful because we want to use them to navigate in tractographies and allow neurosurgeons and other neuroscientists to have a unique impression and user experience when using our tools. We also want to be lightweight and as multiplaform as possible.
   Have you watched Guardians of the Galaxy? We want to create with this project the very basic tools so that in some years, we can do something like that https://vimeo.com/103533906 but of course applied for tractography exploration not for space travelling. For example, some of the tasks will be to develop a filedialogue, a sliding panel with buttons and add dynamic actor menus (3D menus on objects - like in games). 

   Difficulty: high

   Skills required: Python, OpenGL and VTK

   Mentors: `Marc-Alexandre Côté <mailto:marc.cote.19@gmail.com>`_ and `Eleftherios Garyfallidis <mailto:garyfallidis@gmail.com>`_
    
7. **Automatic denoising and robust brain extraction**

   Description: Create a method for automatic denoising of diffusion MRI and structural MR datasets. Currently we need to estimate the noise of the signal which is often a bit troublesome. Local PCA will be the main method to try to implement in this project but the harder task will be to do so efficiently in Python/Cython without extra dependencies. After implementing this method, the next task will be to create a more robust brain extraction method from what is currently implemented in DIPY. For this task the student will have to think of his own strategies and take decisions on which methods to combine or implement to do so. 

   Difficulty: high

   Skills required: Python, Numpy, diffusion MRI, signal processing, DIPY

   Mentors: `Eleftherios Garyfallidis <mailto:garyfallidis@gmail.com>`_, Omar Ocegueda, `Julio Villalon <mailto:jevillalonr@gmail.com>`_ and `Rafael Henriques <mailto:rafaelnh21@gmail.com>`_.

8. **Eddy current correction**

   Description: Eddy currents are artifacts that affect diffusion MRI measurements. A common preprocessing step is to correct for these artifacts. In this project, we will implement a `popular algorithm for eddy current correction <http://www.ncbi.nlm.nih.gov/pubmed/14705050>`_.

   Difficulty: moderate

   Skills required: Familiarity with diffusion MRI, numpy, scipy.

   Mentors: `Ariel Rokem <mailto:arokem@gmail.com>`_ and Bob Dougherty.