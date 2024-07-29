My Journey Continues: Week 8 Progress with DIPY
===============================================

.. post:: July 22, 2024
   :author: Kaustav
   :tags: google
   :category: gsoc

Hello everyone! Time for another week of progress. This week has been particularly productive as I tackled several important issues in the dipy.org project and implemented an enhancement suggested by my mentor. Let me walk you through the details of my work.

Issues in dipy.org
------------------

1. Blog Post migration (https://github.com/dipy/dipy.org/issues/11)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

One of the major tasks I undertook this week was migrating blog posts from various old sources to our current website. This task was crucial for consolidating our content and ensuring all valuable information is accessible on our main platform. I worked with three different sources: a Blogspot site dedicated to GSoC 2015, a personal blog, and a Google Docs document.

The migration process was quite involved. I had to carefully convert each post from its original format to RST (reStructuredText), ensuring that all formatting, links, and images were correctly transferred. In total, I migrated 20 blog posts, each requiring individual attention to preserve its unique content and structure. 

A significant part of this task involved adding and organizing images associated with these posts. I created a new directory structure in our `/_static/images/gsoc/` folder to house these images, making sure they were correctly linked in the new RST files.

To ensure the quality of the migration, I conducted thorough testing. This involved verifying that all 20 migrated posts rendered correctly on our development server, checking both internal and external links for functionality, and confirming that all images displayed properly in their new locations.

One challenge I encountered was dealing with complex formatting, particularly in code blocks. These required manual adjustments to ensure they displayed correctly in the RST format. Additionally, I made sure to preserve all author information in the RST metadata, maintaining proper attribution for each post.

Lastly, I updated the old blog URLs to redirect to their new locations on our site.

2. Image Organization (https://github.com/dipy/dipy.org/issues/50)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Upon reviewing our image organization, I noticed that it was rather chaotic and in need of improvement. To address this, I proposed and implemented a new organizational structure for our images. The new system organizes images by year and contributor, following this pattern:

.. code-block:: text

   _static/images/gsoc/[year]/[name_of_contributor]

It involved moving numerous images from their original locations in the main folder to their new, more specific locations based on the year and contributor. This wasn't just a matter of moving files; each move necessitated updating the corresponding image links in our blog posts and other content.

The benefits of this new structure are significant. It allows for easier management of our growing image collection, makes it simpler to find specific images when needed, and provides a clear history of contributions over the years. Moreover, it sets a clear standard for future image uploads, ensuring our organization remains consistent moving forward.

3. GSoC wiki posts migration (https://github.com/dipy/dipy.org/issues/21)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Another important task I tackled this week was migrating our GSoC (Google Summer of Code) and GSOD (Google Season of Docs) announcements from the DIPY wiki to our main blog. This migration is part of our ongoing efforts to centralize our content and make important announcements more accessible to our community.

The process involved carefully converting the wiki content into blog post format, ensuring that all the information was accurately transferred. I paid special attention to maintaining the original context and importance of these announcements while adapting them to our blog's style and format.

After creating these new blog posts, I conducted thorough testing to verify that they render correctly on our development server. This included checking the formatting, ensuring all links are functional, and confirming that any associated images or embedded content displays properly.

This migration will make our GSoC and GSOD announcements more visible and easily accessible to potential participants and the wider DIPY community, potentially increasing engagement with these programs.

Enhancement
-----------

1. Adding sidebar to blog page (https://github.com/dipy/dipy.org/pull/53)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In addition to addressing existing issues, I also worked on an enhancement suggested by my mentor: adding a sidebar to our `blog.html` page. Previously, our blog page lacked a sidebar, which made navigation less intuitive and user-friendly.

The new sidebar is a significant improvement to our blog's usability. It provides quick access to important navigational elements such as categories, archives, and tags. This addition allows users to easily browse through our blog content, find related posts, or explore posts from specific time periods.

This enhancement greatly improves the overall user experience of our blog, making it easier for readers to discover and engage with our content. It's a small change that has a big impact on the usability of our site.

Difficulties & Challenges
-------------------------

I didn't particularly find anything difficult, the tasks were time consuming but not trouble causing.

Next Week
---------

Looking ahead to next week, I have several objectives in mind:

1. I plan to continue addressing open issues on the `dipy.org` & `dipy` repository. There are still several tasks that need attention, and I'm eager to keep up the momentum we've built. I have yet to look into which issues I will be tackling next week.

2. For the preparation of next task, I have to look into Docker. I am planning to learn it through next week to be well prepared for the next task which is about github actions.

Final Thoughts
--------------

The eighth week of the Coding phase has been highly productive, allowing me to address several existing issues and implement a valuable enhancement. It's satisfying to see these improvements take shape and know that they're contributing to a better experience for our users and contributors.

I continue to be grateful for the guidance and support provided by my mentor, `Serge Koudoro <https://github.com/skoudoro>`__, and the entire DIPY community. Their insights and feedback have been instrumental in shaping my work and driving this project forward.

Stay tuned for more updates as I continue to work on enhancing DIPY! Thank you for reading, and I look forward to sharing more progress next week.