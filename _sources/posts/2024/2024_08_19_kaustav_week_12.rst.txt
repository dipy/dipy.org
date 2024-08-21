My Journey Continues: Week 12 Progress with DIPY
================================================

.. post:: August 19, 2024
   :author: Kaustav
   :tags: google
   :category: gsoc

Hello everyone! We've reached Week 12, the final week of my GSoC journey with DIPY. It's been an incredible experience, and I'm excited to share my progress and reflections from this week.

Dockerfile Creation and Deployment
----------------------------------

This week, I focused on creating a Dockerfile for DIPY, along with build and push shell scripts. This task was crucial for improving our continuous integration processes and making DIPY more accessible to users who prefer containerized environments.

The Dockerfile creation process involved carefully selecting the right base image and ensuring all necessary dependencies were included. The build script automates the Docker image creation process, while the push script facilitates easy deployment to our container registry.

While working on this, I encountered some challenges related to package versions and compatibility. However, through careful testing and configuration adjustments, I was able to resolve these issues and create a functional Dockerfile.

You can view the progress of this work here: https://github.com/dipy/dipy/pull/3322

Tutorial Fixes Progress
-----------------------

I've made significant progress on fixing up the tutorials. This ongoing task involves updating and improving various DIPY tutorials to ensure they're up-to-date, clear, and fully functional. I've been working through the tutorials systematically, making necessary adjustments and improvements.

Check out the tutorial fixes PR here: https://github.com/dipy/dipy/pull/3306

Addressing Missed Keyword Arguments
-----------------------------------

In a separate PR, I addressed an important issue related to missed keyword arguments in several function calls. These weren't updated during the initial implementation of keyword arguments. The affected functions include:

* ``get_fname``
* ``get_sphere``
* ``gradient_table``

This PR was crucial as these missed keyword arguments were not detected during the initial testing phase, potentially leading to issues in related functionalities. By adding the necessary keyword arguments to these function calls, we've ensured proper execution and improved the overall robustness of our codebase.

You can review this PR here: https://github.com/dipy/dipy/pull/3324

Preparing for Project Conclusion
--------------------------------

As this is the final week of GSoC, I've been focusing on wrapping up my project:

1. **Final Project Report**: I've started preparing the final project report, which will summarize all the work done during my GSoC period, the challenges faced, and the solutions implemented.

2. **Final Presentation**: I'm also working on a presentation that will showcase the key achievements and learnings from my GSoC experience with DIPY.

Reflections and Gratitude
-------------------------

As I near the end of this incredible journey, I'm filled with gratitude for the DIPY community, my amazing mentor `Serge Koudoro <https://github.com/skoudoro>`_, and everyone who has supported me throughout this process. The guidance and support I've received have been invaluable, helping me grow as a developer and contributor to open-source software.

I am really grateful to my fellow GSoC teammates:

* `Iñigo Tellaetxe Elorriaga <https://github.com/itellaetxe>`_
* `Robin Roy <https://github.com/robinroy03>`_
* `Wachiou BOURAIMA <https://github.com/WassCodeur>`_

Their amazing support has been crucial throughout this journey.

This experience has not only improved my technical skills but also taught me the importance of community collaboration in open-source projects. I'm truly thankful for the opportunity to have been part of this amazing team.

Next Steps
----------

In the coming days, my priorities will be:

1. Finalizing and submitting the project report

Final Thoughts
--------------

As I reflect on my GSoC journey with DIPY, I'm amazed at how much I've learned and grown. This experience has reinforced my passion for neuroimaging and open-source development. I'm excited to see how my contributions will help future DIPY users and developers.

Thank you all for your support throughout this journey. I look forward to sharing my final presentation and continuing to be part of the DIPY community!