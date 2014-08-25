from setuptools import setup, find_packages

setup(
      name='pybrowserstack-screenshots',
      version='0.1',
      description="api wrapper and python client for Browserstack Screenshots, including phantomCSS support",
      long_description=""" """,
      classifiers=[], # Get strings from http://pypi.python.org/pypi?%3Aaction=list_classifiers
      keywords='browserstack screenshots phantomCSS',
      author='Clark Mckenzie',
      author_email='clarkmckenzie@googlemail.com',
      url='http://github.com/cmck/pybrowserstack-screenshots',
      license='MIT',
      packages=find_packages(exclude=['ez_setup', 'examples', 'tests']),
      include_package_data=True,
      zip_safe=True,
      install_requires=[
            "simplejson>=3.3.2",
            "requests>=2.2.0",
            "Pillow>=2.3.0",
      ],
      )