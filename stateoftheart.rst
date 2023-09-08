.. _stateoftheart:

============================
A quick overview of features
============================

Here are just a few of the state-of-the-art `technologies <https//doc.dipy.org/examples>` and algorithms which are provided in DIPY_:

- Reconstruction algorithms: CSD, DSI, GQI, DTI, DKI, QBI, SHORE and MAPMRI.
- Fiber tracking algorithms: deterministic and probabilistic.
- Simple interactive visualization of ODFs and streamlines.
- Apply different operations on streamlines (selection, resampling, registration).
- Simplify large datasets of streamlines using QuickBundles clustering.
- Reslice datasets with anisotropic voxels to isotropic.
- Calculate distances/correspondences between streamlines.
- Deal with huge streamline datasets without memory restrictions (using the .dpy file format).
- Visualize streamlines in the same space as anatomical images.

With the help of some external tools you can also:

- Read many different file formats e.g. Trackvis or Nifti (with nibabel).
- Examine your datasets interactively (with ipython).

For more information on specific algorithms we recommend starting by looking at DIPY's `gallery <https//doc.dipy.org/examples>` of examples.


=================
Systems supported
=================

DIPY_ is multiplatform and will run under any standard operating systems such
as *Windows*, *Linux* and  *Mac OS X*. Every single new code addition is being tested on
a number of different buildbots and can be monitored online `here <http://nipy.bic.berkeley.edu/builders>`_.


.. include:: links_names.inc
