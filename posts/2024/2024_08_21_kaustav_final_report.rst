.. role:: custom-title

.. |main-title| raw:: html

   <span class="gsoc-title">Google Summer of Code Final Work Product</span>

.. |project-abstract-title| raw:: html

   <span class="gsoc-title">Project Abstract</span>

.. |proposed-objectives-title| raw:: html

   <span class="gsoc-title">Proposed Objectives</span>

.. |objectives-completed-title| raw:: html

   <span class="gsoc-title">Objectives Completed</span>

.. |objectives-progress-title| raw:: html

   <span class="gsoc-title">Objectives in Progress</span>

.. |future-work-title| raw:: html

   <span class="gsoc-title">Future Works</span>

.. |timeline-title| raw:: html

   <span class="gsoc-title">Timeline</span>

.. image:: /_static/images/logos/gsoc-logo.png
   :height: 40
   :target: https://summerofcode.withgoogle.com/programs/2024/projects/dHajBmW3
   :class: no-background

.. image:: /_static/images/logos/python-logo.png
   :height: 40
   :target: https://summerofcode.withgoogle.com/programs/2024/organizations/python-software-foundation
   :class: no-background

.. image:: /_static/images/logos/dipy-logo-2.png
   :height: 30
   :target: http://dipy.org
   :class: no-background

.. raw:: html

   <div style="margin-top: 20px;"></div>

|main-title|
============

.. post:: August 21 2024
   :author: Kaustav
   :tags: google
   :category: gsoc

-  **Name:** `Kaustav Deka <https://github.com/deka27>`_ 
-  **Organization:** `Python Software Foundation <https://www.python.org/psf-landing/>`_
-  **Sub-Organization:** `DIPY <https://github.com/dipy>`_
-  **Project:** `Modernize DIPY Codebase <https://github.com/dipy/dipy/wiki/Google-Summer-of-Code-2024#project-6-modernize-dipy-codebase>`_

|project-abstract-title|
------------------------

This project is dedicated to implementing crucial improvements to DIPY, with the primary goal of enhancing its functionality, efficiency, and user experience through a series of targeted updates and additions.

This initiative comprehensively covers several critical development areas, including transitioning to keyword-only arguments to boost code robustness and readability, and implementing lazy loading to optimize resource management and overall performance.

The project also aims to improve and simplify the current website management system, enhancing user interaction and information accessibility. Furthermore, it focuses on streamlining the Issues and Pull Requests triage process, incorporating automation to increase efficiency. The integration of multiple GitHub Actions is planned to further streamline workflows. Additionally, the project involves refactoring select DIPY packages and improving docstring documentation, ensuring clearer and more maintainable code. Lastly, new tutorials will be added to support user education and engagement, making DIPY more accessible to both new and experienced users.

|proposed-objectives-title|
---------------------------

The objectives include:

1. **Transitioning to Keyword-Only Arguments**: Restructuring function calls to utilize keyword-only arguments for improved code clarity and robustness.

.. raw:: html

   <div style="margin-top: 10px;"></div>

2. **Lazy Loading Integration**: Implementing lazy loading techniques to load resources dynamically, thereby optimizing performance and reducing memory footprint.

.. raw:: html

   <div style="margin-top: 10px;"></div>

3. **Improvement and Simplification of Website Management**: Enhancing the management of the DIPY website to streamline content updates and provide a more user-friendly experience for visitors.

.. raw:: html

   <div style="margin-top: 10px;"></div>

4. **Integration of Multiple GitHub Actions**: Implementing a suite of GitHub Actions to simplify development workflows, automate repetitive tasks, and enhance collaboration among contributors.

.. raw:: html

   <div style="margin-top: 10px;"></div>

5. **Improvement of Issues and Pull Requests Triage + Triage Automation**: Enhancing the process of managing issues and pull requests by implementing efficient triage practices and automation tools to streamline the review and resolution process.

.. raw:: html

   <div style="margin-top: 10px;"></div>

6. **Refactoring of DIPY Packages + Improvement of Docstrings**: Conducting targeted refactoring of DIPY packages to improve code structure, readability, and maintainability. Additionally, enhancing docstrings to provide comprehensive documentation for developers and users.

.. raw:: html

   <div style="margin-top: 10px;"></div>

7. **Addition of Tutorials**: Creating new tutorials to guide users through various aspects of DIPY functionality, ensuring accessibility for users of all experience levels and facilitating learning and adoption.

.. raw:: html

   <div style="margin-top: 10px;"></div>

|objectives-completed-title|
----------------------------

1. Keyword-Only Arguments
-------------------------

This task focused on transitioning DIPY's codebase to use keyword-only arguments in function calls. Keyword arguments are a powerful feature in Python that allow for more explicit and self-documenting function calls. They offer several advantages:

i. **Improved readability:** By using keyword arguments, it's immediately clear what each argument represents, making the code easier to understand.
ii. **Reduced errors:** Keyword arguments reduce the risk of passing arguments in the wrong order.
iii. **Better API design:** They allow for more flexible function signatures and make it easier to add optional parameters without breaking existing code.

In the future, we want all function calls in DIPY to use keyword arguments instead of positional arguments. To facilitate this transition, I created a decorator that provides warnings when functions are called with positional arguments instead of keyword arguments.

Here's how the decorator works:

.. code-block:: python

   @warning_for_keyword()
   def function(a, b, *, c=100):
       pass

   variable = function(a, b, 50)  # This will trigger a warning

In this example, the decorator will issue a warning saying that ``c`` is being called as a positional argument when it should be a keyword argument.

For the transition phase, we're providing warnings instead of completely blocking the function execution. This approach allows for a smoother migration, giving developers time to update their code while still maintaining functionality.

The implementation of this decorator was a significant part of the project. You can find the full pull request for the decorator here: `PR #3239 <https://github.com/dipy/dipy/pull/3239>`_

After creating the decorator, I applied it systematically across various DIPY modules. This extensive work touched many parts of the codebase:

- **align** `PR #3249 <https://github.com/dipy/dipy/pull/3249>`_: Applied to alignment algorithms.
- **core** `PR #3251 <https://github.com/dipy/dipy/pull/3251>`_: Updated core functionality of DIPY.
- **data** `PR #3253 <https://github.com/dipy/dipy/pull/3253>`_: Modified data handling functions.
- **denoise** `PR #3252 <https://github.com/dipy/dipy/pull/3252>`_: Updated denoising algorithms.
- **io** `PR #3255 <https://github.com/dipy/dipy/pull/3255>`_: Applied to input/output operations.
- **nn** `PR #3256 <https://github.com/dipy/dipy/pull/3256>`_: Modified neural network related functions.
- **segment** `PR #3258 <https://github.com/dipy/dipy/pull/3258>`_: Updated segmentation algorithms.
- **sims** `PR #3259 <https://github.com/dipy/dipy/pull/3259>`_: Applied to simulation functions.
- **tracking** `PR #3260 <https://github.com/dipy/dipy/pull/3260>`_: Modified tracking algorithms.
- **utils** `PR #3261 <https://github.com/dipy/dipy/pull/3261>`_: Updated utility functions.
- **viz** `PR #3262 <https://github.com/dipy/dipy/pull/3262>`_: Applied to visualization functions.
- **workflows** `PR #3263 <https://github.com/dipy/dipy/pull/3263>`_: Modified workflow-related functions.

This comprehensive application of the decorator across DIPY's modules represents a significant step towards modernizing the codebase. It not only improves the immediate readability and robustness of the code but also sets the stage for future enhancements and maintains consistency across the project.

The warnings generated by this decorator will help both DIPY developers and users transition to using keyword arguments, ultimately leading to more maintainable and error-resistant code. As the community adapts to this change, we expect to see a gradual reduction in the use of positional arguments, paving the way for potentially making keyword arguments mandatory in future releases.

2. Website Improvements
-----------------------

Several tasks were undertaken to improve the DIPY website, enhancing its functionality, organization, and user experience. These improvements are crucial for maintaining an effective online presence and ensuring that our community has easy access to all relevant information.

a. Blog Post Migration
^^^^^^^^^^^^^^^^^^^^^^

One of the major tasks was the migration of blog posts from various old sources to our current website. This consolidation effort ensures that all valuable information is accessible on our main platform. The migration involved working with three different sources:

- A Blogspot site dedicated to GSoC 2015
- A personal blog
- A Google Docs document

This task was crucial for several reasons:

- It centralizes our content, making it easier for users to locate information.
- It ensures that valuable historical content is not lost.
- It provides a unified platform for all DIPY-related blog posts.

For more details, see the related issue: `Issue #11 <https://github.com/dipy/dipy.org/issues/11>`_

b. Image Organization Improvement
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Upon reviewing our image organization, it became apparent that the existing system was chaotic and in need of improvement. To address this, a new organizational structure for our images was proposed and implemented. The new system organizes images by year and contributor, which offers several benefits:

- Easier navigation and retrieval of images
- Better tracking of image contributions over time
- Improved ability to manage and update image assets

.. code-block:: text

   _static/images/gsoc/[year]/[name_of_contributor]

This reorganization sets the stage for more efficient image management in the future.

For more information, refer to: `Issue #50 <https://github.com/dipy/dipy.org/issues/50>`_

c. DIPY Wiki Migration
^^^^^^^^^^^^^^^^^^^^^^

Another significant task was migrating our GSoC (Google Summer of Code) and GSOD (Google Season of Docs) announcements from the DIPY wiki to our main blog. This migration is part of our ongoing efforts to centralize content and make important announcements more accessible to our community. Benefits of this migration include:

- Increased visibility of GSoC and GSOD announcements
- Improved searchability of this content
- Consistency in how we present important project information

You can find more details in: `Issue #21 <https://github.com/dipy/dipy.org/issues/21>`_

d. Adding Sidebars to Blog Page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

An enhancement suggested by my mentor was implemented: adding a sidebar to our ``blog.html`` page. Previously, the blog page lacked a sidebar, which made navigation less intuitive and user-friendly. The new sidebar significantly improves the blog's usability by providing:

- Quick access to important navigational elements
- Categories for easy content classification
- Archives for exploring historical posts
- Tags for topic-based navigation

These additions allow users to easily browse through our blog content, find related posts, or explore posts from specific time periods. The sidebar enhances the overall user experience and makes our blog more engaging and accessible.

The pull request for this feature can be found here: `PR #53 <https://github.com/dipy/dipy.org/pull/53>`_

Conclusion
^^^^^^^^^^

These website improvements represent a significant step forward in enhancing DIPY's online presence. By consolidating content, improving organization, and enhancing navigation, we've made it easier for our community to engage with DIPY's resources and stay informed about project developments. These changes lay a solid foundation for future improvements and will contribute to the growth and accessibility of the DIPY project.

|objectives-progress-title|
---------------------------

1. Keyword-Only Arguments
-------------------------

Implementation of keyword-only arguments is still in progress for two modules:

a. Direction module (`PR #3254 <https://github.com/dipy/dipy/pull/3254>`_)
b. Reconst module (`PR #3257 <https://github.com/dipy/dipy/pull/3257>`_)

Next Steps
^^^^^^^^^^

- Conduct testing and address feedback
- Merge changes once approved

2. Lazy Loading
---------------

Lazy loading is a crucial optimization technique that has been implemented in DIPY to enhance resource management and improve performance, particularly for large-scale neuroimaging applications. By delaying the loading of modules until they are actually needed, we achieve a more efficient and responsive system.

Implementation Details
^^^^^^^^^^^^^^^^^^^^^^

- **Package Used:** The ``lazy_loader`` package has been employed to implement lazy loading functionality in DIPY, allowing for on-demand module loading.
- **Inspiration:** This approach draws inspiration from the scikit-image library, which has effectively utilized lazy loading to optimize its performance and reduce memory usage.

The core concept involves creating a stub file, such as `__init__.pyi`, where all functions from the module are imported. This stub file is then imported into the main initialization file, `__init__.py`, enabling lazy loading for the specified submodules.

Here’s an outline of how it works:

.. code-block:: python
   :caption: __init__.pyi

   submodules = [
       "align",
       "core",
       "data",
       "denoise",
       "direction",
       "io",
       "nn",
       "reconst",
       "segment",
       "sims",
       "stats",
       "tracking",
       "utils",
       "viz",
       "workflows",
       "tests",
       "testing",
   ]

   __all__ = submodules

In the main initialization file, lazy loading is attached to the module using the following setup:

.. code-block:: python
   :caption: __init__.py

   __getattr__, __lazy_dir__, _ = lazy.attach_stub(__name__, __file__)

This structure ensures that each submodule is only loaded when it is explicitly accessed, thereby optimizing both memory usage and load times.

Benefits of Lazy Loading
^^^^^^^^^^^^^^^^^^^^^^^^

- **Reduced Initial Load Time:** By loading modules and objects only when they are needed, the initial load time of DIPY is significantly decreased, leading to a faster startup.
- **Memory Optimization:** On-demand loading minimizes unnecessary memory usage, which is particularly advantageous when working with large datasets in neuroimaging.
- **Improved Performance:** Lazy loading can lead to better overall performance, especially in scenarios where only specific subsets of DIPY’s functionality are used.
- **Enhanced Modularity:** This approach encourages a more modular code structure, improving maintainability and simplifying the addition of new features in the future.

Current Status
^^^^^^^^^^^^^^

- The implementation of lazy loading across all planned modules has been completed.
- The changes are currently under review by the DIPY team, with final input and feedback pending.
- The updated modules are expected to be merged into the main codebase shortly after the review process is complete.

Next Steps
^^^^^^^^^^

- **Incorporate Feedback:** Address any feedback or suggestions provided by the DIPY team during the review.
- **Final Testing:** Conduct thorough testing to ensure that all lazy-loaded components function as expected under various conditions.
- **Documentation Update:** Update the project documentation to reflect the new lazy loading behavior, providing clear guidance on how it impacts module usage.
- **Merge and Monitor:** Once approved, merge the changes into the main DIPY codebase and monitor initial user feedback and performance metrics post-deployment.

This implementation of lazy loading represents a significant step forward in optimizing DIPY's performance and usability, particularly in resource-intensive environments.

3. Docker Integration
---------------------

Current Status
^^^^^^^^^^^^^^

The Docker integration for DIPY is currently under development. A pull request has been submitted to introduce Docker support, aimed at enhancing the consistency and ease of development, testing, and deployment across different environments:

- **Pull Request:** `PR #3322 <https://github.com/dipy/dipy/pull/3322>`_

To achieve a minimal yet functional configuration, I created the following Dockerfile:

.. code-block:: dockerfile
   :caption: Dockerfile

   FROM python:3.10
   
   RUN apt-get update && apt-get install -y --no-install-recommends \
       libhdf5-dev \
       gcc \
       && rm -rf /var/lib/apt/lists/* \
       && apt-get clean

   RUN pip install --no-cache-dir \
       numpy==1.26.4 \
       dipy \
       nibabel \
       scipy \
       matplotlib

This Dockerfile sets up a Python 3.10 environment with the essential dependencies for DIPY, including `numpy`, `dipy`, `nibabel`, `scipy`, and `matplotlib`. The use of `--no-install-recommends` and `--no-cache-dir` ensures a lean and efficient image by minimizing unnecessary packages and caching.

Additionally, I developed build and push scripts to automate the Docker image creation and deployment process. These scripts streamline the workflow, making it easier for developers to build and push images to a Docker registry with minimal effort.

Next Steps
^^^^^^^^^^

1. **Incorporate Feedback**: Address any suggestions or concerns raised during the code review process.
2. **Cross-Environment Testing**: Test the Docker setup across various environments to ensure compatibility and stability.
3. **Documentation Update**: Revise the project documentation to include comprehensive guidelines on using Docker with DIPY, including setup, usage, and troubleshooting tips.
4. **CI/CD Integration**: Integrate Docker into the Continuous Integration/Continuous Deployment (CI/CD) pipeline to automate builds, tests, and deployments, ensuring a robust and consistent development workflow.

The implementation of Docker is a critical step in modernizing DIPY's development process, providing a standardized environment that reduces setup time and ensures consistency across different platforms. We expect to finalize and merge this feature soon, following thorough testing and review.

|future-work-title|
-------------------

1. Addition of Tutorials
-------------------------

As part of my ongoing efforts to improve DIPY's accessibility and user experience, I am planning to develop new tutorials. These tutorials will focus on two key areas:

a. 2D Registration
^^^^^^^^^^^^^^^^^^

The 2D registration tutorial will cover:

- **Overview of 2D Registration Algorithms**: An explanation of the different 2D registration algorithms in DIPY, with a focus on when and how to use them.
- **Step-by-Step Guide**: A detailed, step-by-step process for performing 2D registration using DIPY, making it easy to follow along.
- **Optimization Tips**: Tips for getting the best results from 2D registration, including parameter adjustments and troubleshooting.

b. Docker Usage
^^^^^^^^^^^^^^^

The Docker tutorial will include:

- **Introduction to Docker**: An overview of Docker and why it is useful for DIPY users.
- **Setting Up Docker for DIPY**: Instructions for setting up Docker specifically for DIPY, including installation and configuration.
- **Running DIPY in a Docker Container**: How to run DIPY within a Docker container, with common commands and workflows.
- **Best Practices**: Advice on how to use Docker with DIPY effectively, focusing on performance and resource management.
- **Troubleshooting**: Common issues you might encounter with Docker and how to solve them.

Objectives
^^^^^^^^^^

By adding these tutorials, I aim to:

1. **Lower the Entry Barrier**: Make it easier for new DIPY users to get started.
2. **Provide Clear Guidance**: Offer practical, easy-to-follow instructions on using DIPY.
3. **Encourage Best Practices**: Help users adopt best practices in neuroimaging analysis.
4. **Support Reproducible Research**: Teach users how to create consistent environments using Docker, which will help ensure reliable and reproducible results.

|timeline-title|
----------------

.. list-table:: Weekly Journey
   :header-rows: 1
   :widths: 20 60 15

   * - Date
     - Title
     - Blog Link
   * - 27-05-2024
     - My Journey Begins: Community Bonding Period with DIPY
     - `Week 0 <https://dipy.org/posts/2024/2024_05_27_kaustav_week0.html>`__
   * - 03-06-2024
     - Starting with keyword-only-decorator function
     - `Week 1 <https://dipy.org/posts/2024/2024_06_03_kaustav_week_1.html>`__
   * - 12-06-2024
     - Decorator function refinement, Lazy loading research
     - `Week 2 <https://dipy.org/posts/2024/2024_06_12_kaustav_week_2.html>`__
   * - 19-06-2024
     - Decorator implementation across modules, Lazy loading demo
     - `Week 3 <https://dipy.org/posts/2024/2024_06_19_kaustav_week_3.html>`__
   * - 30-06-2024
     - Decorator implementation fixes
     - `Week 4 <https://dipy.org/posts/2024/2024_06_30_kaustav_week_4.html>`__
   * - 01-07-2024
     - Health issues, Lazy loading preparation
     - `Week 5 <https://dipy.org/posts/2024/2024_07_01_kaustav_week_5.html>`__
   * - 07-07-2024
     - Lazy loading implementation, Decorator bug fixes
     - `Week 6 <https://dipy.org/posts/2024/2024_07_07_kaustav_week_6.html>`__
   * - 15-07-2024
     - Improvements in lazy loading
     - `Week 7 <https://dipy.org/posts/2024/2024_07_15_kaustav_week_7.html>`__
   * - 22-07-2024
     - Blog-post migration, GSoC wiki migration
     - `Week 8 <https://dipy.org/posts/2024/2024_07_22_kaustav_week_8.html>`__
   * - 29-07-2024
     - Docker research
     - `Week 9 <https://dipy.org/posts/2024/2024_07_29_kaustav_week_9.html>`__
   * - 05-08-2024
     - Fixing tutorials for application of keyword-only-decorator
     - `Week 10 <https://dipy.org/posts/2024/2024_08_05_kaustav_week_10.html>`__
   * - 12-08-2024
     - Docker PR
     - `Week 11 <https://dipy.org/posts/2024/2024_08_12_kaustav_week_11.html>`__
   * - 19-08-2024
     - Final week
     - `Week 12 <https://dipy.org/posts/2024/2024_08_19_kaustav_week_12.html>`__
