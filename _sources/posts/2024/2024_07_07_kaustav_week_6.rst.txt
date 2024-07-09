My Journey Continues: Week 6 Progress with DIPY
===============================================

.. post:: July 07 2024
     :author: Kaustav
     :tags: google
     :category: gsoc

Greetings, everyone!
The sixth week of GSOC has been a hectic one. A ton of time in correcting errors and fixing PRs. 

Decorator PR Fixes
------------------

With decorator implementation PRs in place, and the integration of my original PR for keyword-only arguments (https://github.com/dipy/dipy/pull/3239), it was now time for the PRs which had the decorator implementation for specific modules to be integrated.

Lazy Loading PR
---------------

I have submitted a PR for the lazy loading feature using the `lazy_loader <https://pypi.org/project/lazy-loader/>`__ package. (https://github.com/dipy/dipy/pull/3288)

Difficulties & Challenges
-------------------------

I had and have a ton of challenges ahead as I am having trouble with some PR, I am specifically having a challenge in completing:

1. https://github.com/dipy/dipy/pull/3257
- This PR has issues related to the **wls_fit_tensor** function, after the application of the decorator I am receiving an error where it is telling me that 3 positional arguments are allowed but 4 are being passed, but when I check the main function parameters there are only 3 positional params. I am not able to figure out why 1 extra **argument** is being passed.

2. https://github.com/dipy/dipy/pull/3254
- This PR have a issue about the application of arguments separator, I am just awaiting response on applying the separator.

3. https://github.com/dipy/dipy/pull/3288
- This PR is my lazy loading PR. I am having trouble with the application of **type_stub** as the package is not able to recognize it and thus I am receiving error when trying to import the modules. I was trying to make it as close as possible to `scikit-image <https://github.com/scikit-image/scikit-image/tree/main>`__ implementation, it hasn't happened yet. But I'm hopeful.

Next Week
---------

Next week I am planning to push through the remaining PRs of decorator implementation. Also for **lazy_loader**, I am planning to fix the error.
I will have to go through the `PEP-561 <https://peps.python.org/pep-0561/>`__ documentation which talks about the **type_stub** implementation.

Final Thoughts
--------------

The sixth week of the Coding phase has been a challenging week, with the decorator implementation and lazy loading. Hopefully I can fix these soon and move on to next problems.
I am grateful for the guidance and support provided by my mentor `Serge Koudoro <https://github.com/skoudoro>`__, and the DIPY community, which have been instrumental in driving this project forward.

Stay tuned for more updates as I continue to work on enhancing DIPY!

Thank you for reading!
