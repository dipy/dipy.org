My Journey Continues: Week 3 Progress with DIPY
===============================================

.. post:: June 19 2024
     :author: Kaustav
     :tags: google
     :category: gsoc

Greetings, everyone!
The third week of the Coding phase has been a whirlwind of progress. I have achieved significant milestones in both the decorator implementation and lazy loading integration tasks, bringing us closer to enhancing DIPY's performance and efficiency.

Decorator Implementation across Modules
---------------------------------------

With refinements made in the previous week, I am thrilled to announce that I have successfully implemented the decorator function across 15 modules in DIPY.
This milestone represents a major step forward in enhancing the codebase's efficiency and maintainability.

Difficulties & Challenges
-------------------------

When I was trying to implement the decorator to multiple modules, I tried to do it through a script so that I could apply the decorator to all necessary functions at one shot.
The script functionality would first parse the selected file, then apply the decorator to the necessary functions and lastly unparse and reconstruct the file. I was using libraries which comply with PEP-8 and ruff formatting.
I faced two problems here:
1. After reconstruction, the comments that were put in the file will be removed. (This happened due to how the libraries worked)
2. The libraries were not able to unparse the Docstring correctly and would give errors.

After long time of trial and errors, I decided to work on applying decorators manually to all the modules.

Testing and Continuous Integration
----------------------------------

While the decorator implementation has been completed, there is still some testing remaining to ensure the robustness and reliability of the integrated code.
Additionally, I have submitted a pull request (PR) for the decorator implementation, and I am currently working on addressing any issues or concerns raised by the Continuous Integration (CI) pipeline.
Ensuring a smooth CI process is crucial for maintaining the quality and integrity of the codebase.

Lazy Loading Demonstration
--------------------------

Parallel to the decorator implementation, I have also made progress on the lazy loading integration task.
As a proof of concept, I have demonstrated a simple implementation of lazy loading in the align module of DIPY.
This initial implementation showcases the potential benefits of lazy loading, such as improved memory efficiency and performance optimization.
By delaying the initialization of objects until they are actually needed, lazy loading can significantly reduce the memory footprint of the application and enhance overall efficiency.

Next Week
---------

The plan next week is to work on the Lazy Loading, implement in DIPY and share a test branch with my mentor.
I will also look into fixing the existing PRs where I have implemented the decorator in sub-modules.

Final Thoughts
--------------

The third week of the Coding phase has been a significant milestone, with the decorator implementation across multiple modules and the demonstration of lazy loading capabilities.
I am grateful for the guidance and support provided by my mentor `Serge Koudoro <https://github.com/skoudoro>`__, and the DIPY community, which have been instrumental in driving this project forward.

Stay tuned for more updates as I continue to work on enhancing DIPY!

Thank you for reading!
