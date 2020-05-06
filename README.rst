Node.js Experiments
=====================================

Pass environment variable from command line.

.. code ::

    $ PORT=8080 COLOR=red node nodejs-dev-0001-01.js

Add dotenv to dependencies and use `require('dotenv').config()` to read an .env file.

.. code ::

    $ node nodejs-dev-0001-01.js


Add dotenv to devDependencies and pass `-r dotenv/config` to the command line to read an .env file.

.. code ::

    node -r dotenv/config nodejs-dev-0001-01.js
