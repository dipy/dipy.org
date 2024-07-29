My Journey Continues: Week 7 Progress with DIPY
===============================================

.. post:: July 15 2024
     :author: Kaustav
     :tags: google
     :category: gsoc

Greetings, everyone!
The seventh week of GSOC has been a fruitful and learning one.

Decorator PR Fixes
------------------

This week I tried to fix one of the decorator PR(:ref:`PR #3257 <#3257>`). I had implemented a lot of solutions to make the tests pass, but realized I had added unnecessary code, all I had to do was fix the tests.
Basically I had to add the necessary calls for keyword arguments.

Lazy Loading PR
---------------

I had submitted a PR for the lazy loading feature last week(:ref:`PR #3288 <#3288>`). I was able to fix most of the problems that I was facing last week, I added a ton of **.pyi** files for various modules.
I had initiated the review of the PR this week. I hope to get it merged ASAP, maybe in a day or two. Alas this was my biggest learning until now and also quite fun, and I am really thankful for the opportunity to do this work.

Difficulties & Challenges
-------------------------

While fixing the PRs, these were some of my thoughts

.. _#3257:

1. `PR #3257 <https://github.com/dipy/dipy/pull/3257>`_
- Most of the issues were fixed thanks to the review by my mentor. One clarification still remains about the **fit_method**. I was receiving an error as mentioned below, to fix it I applied an `else` clause for the `fit_method` in `FreeWaterTensorModel`.

.. code-block:: python

    def test_fwdti_singlevoxel():
        # Simulation when water contamination is added
        gtf = 0.44444  # ground truth volume fraction
        mevals = np.array([[0.0017, 0.0003, 0.0003], [0.003, 0.003, 0.003]])
        S_conta, peaks = multi_tensor(
            gtab_2s,
            mevals,
            S0=100,
            angles=[(90, 0), (90, 0)],
            fractions=[(1 - gtf) * 100, gtf * 100],
            snr=None,
        )
        fwdm = fwdti.FreeWaterTensorModel(gtab_2s, "WLS")
        fwefit = fwdm.fit(S_conta)

    dipy/reconst/tests/test_fwdti.py:100: 
    _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

    dipy/reconst/multi_voxel.py:40: in new_fit
        return single_voxel_fit(self, data)
    dipy/testing/decorators.py:210: in wrapper
        return convert_positional_to_keyword(func, args, kwargs)
    dipy/testing/decorators.py:191: in convert_positional_to_keyword
        return func(*args, **kwargs)
    _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

    self = <dipy.reconst.fwdti.FreeWaterTensorModel object at 0x13e1ce110>
    data = array([ 100.        ,   43.50442139,   13.18018944,   33.49286891,
             18.75861633,   22.62819702,   37.1749802 ,...   5.72778443,
             29.20758655,    5.17472072,   35.21098605,   27.02812095,
             20.99614616,    5.7284468 ]), mask = None, kwargs = {}, S0 = 100.0

        @multi_voxel_fit
        @warning_for_keywords()
        def fit(self, data, *, mask=None, **kwargs):
            """Fit method of the free water elimination DTI model class
        
            Parameters
            ----------
            data : array
                The measured signal from one voxel.
            mask : array
                A boolean array used to mark the coordinates in the data that
                should be analyzed that has the shape data.shape[:-1]
            """
            S0 = np.mean(data[self.gtab.b0s_mask])
            fwdti_params = self.fit_method(
                self.design_matrix, data, S0, *self.args, **self.kwargs
            )
    E       TypeError: 'str' object is not callable

    dipy/reconst/fwdti.py:161: TypeError

.. _#3254:

1. `PR #3254 <https://github.com/dipy/dipy/pull/3254>`_
- I am still having issues with this PR, where applying the decorator to two specific functions gives me errors. I am assuming the problem is occurring because my decorator is not receiving the signature correctly from the cython function. I was able to resolve it locally through the `cython.binding` method but it didn't work out for the CI.

.. _#3288:

3. `PR #3288 <https://github.com/dipy/dipy/pull/3288>`_
- Very good progress, I have a few little doubts to complete this PR. I will try to ask them in the next meeting session with my mentor. Also for some reason the external libraries are not getting loaded even with the correct implementation of the `lazy_loader <https://pypi.org/project/lazy-loader/>`__ package. Hopefully I can resolve this soon.

Next Week
---------

Next week I am planning to take care of some documentation issues that are raised in the repository like `Issue #2665 <https://github.com/dipy/dipy/issues/2665>`__. Also I have some tasks assigned by my mentor towards improvements of DIPY.
I have started working on them already, planning to put down the PRs soon.

Final Thoughts
--------------

The seventh week of the Coding phase has been a progressive one. I learned tons of new stuff and implemented it. Hopefully I can finish the PRs soon and move onto next tasks.
I am grateful for the guidance and support provided by my mentor `Serge Koudoro <https://github.com/skoudoro>`__, and the DIPY community, which have been instrumental in driving this project forward.

Stay tuned for more updates as I continue to work on enhancing DIPY!

Thank you for reading!
