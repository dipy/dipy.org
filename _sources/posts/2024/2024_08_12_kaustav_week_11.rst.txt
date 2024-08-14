My Journey Continues: Week 11 Progress with DIPY
================================================

.. post:: August 12, 2024
   :author: Kaustav
   :tags: google
   :category: gsoc

Hello everyone! Week 11 has been another week of progress, although it came with its own set of challenges. I’ve been working on Docker, making updates to the tutorial fixes, and I also have some exciting news on the personal front. Let me take you through the highlights of this week.

Creating a Docker Image for DIPY
--------------------------------

This week, I focused on creating a Docker image for DIPY. However, I ran into some issues related to the `FURY` and `VTK` packages due to version incompatibilities. These packages are crucial for the visualization components of DIPY, and ensuring they work correctly within the Docker environment has been a bit tricky.

The version conflicts have caused some build failures, and I’ve been troubleshooting the issue by testing different configurations and dependencies. While I haven’t completely resolved the issue yet, I’m hopeful that I can find a solution soon. I’ll continue to work on this in the coming days, as getting this Docker image ready is important for our continuous integration processes.

.. image:: /_static/images/gsoc/2024/kaustav/docker_issue_fury.png
    :alt: Docker FURY VTK issue
    :width: 800

Tutorial Fixes PR Update
------------------------

In addition to Docker, I’ve been updating the PR for the tutorial fixes related to the keyword argument changes I made earlier. I’m happy to report that I’m about 60% done with the updates. The tutorials are shaping up well, and the changes are making them more robust and easier to follow.

I plan to complete the remaining 40% by today or tomorrow, ensuring that all tutorials are fully updated.

PhD Application Submitted
--------------------------

On a personal note, I successfully submitted my PhD application this week! This has been a significant milestone for me, and I’m thrilled to have it completed. Applying for a PhD is a rigorous process, and I’ve put a lot of effort into crafting the application. Now that it’s submitted, I’m hopeful for the best outcome.

If I do get accepted, it would be a dream come true. I’m particularly excited about the prospect of learning from and working with leaders in the field, such as `Dr. Eleftherios Garyfallidis <https://github.com/Garyfallidis>`__, whose work I greatly admire. The opportunity to contribute to and learn from such a program would be invaluable, and I’m eagerly looking forward to the possibility.

Next Week
---------

Looking ahead to next week, my priorities will be:

1. **Fixing the Docker Image Issues**: I’ll continue troubleshooting the `FURY` and `VTK` package issues within the Docker environment, aiming to get a working Docker image for DIPY.

2. **Completing the Tutorial Fixes**: I plan to finish the remaining 40% of the tutorial updates, ensuring that the PR is ready for review and merging.

Final Thoughts
--------------

Week 11 has been a productive week, despite some challenges with Docker. I’m pleased with the progress I’ve made on the tutorials and excited about the future, both with DIPY and potentially with my PhD journey. As always, I’m grateful for the support from my mentor, `Serge Koudoro <https://github.com/skoudoro>`__, and the DIPY community, who continue to provide invaluable guidance.

Thank you for reading, and I look forward to sharing more updates next week as I continue working on these tasks!
