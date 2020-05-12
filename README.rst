Node.js Experiments
=====================================

Using `nvm <https://github.com/nvm-sh/nvm>`_ to manage Node.js versions.

Pass environment variable from command line.

.. code ::

    $ PORT=8080 COLOR=red node nodejs-dev-0001-01.js

Add dotenv to dependencies and use `require('dotenv').config()` to read an .env file.

.. code ::

    $ node nodejs-dev-0001-01.js


Add dotenv to devDependencies and pass `-r dotenv/config` to the command line to read an .env file.

.. code ::

    node -r dotenv/config nodejs-dev-0001-01.js

Run MongoDB container exposing port to the host.

.. code ::

    $ docker run --name some-mongo -d -p 27017:27017 mongo:4.2.6-bionic

You can connect to localhost:27017 with MongoDB Compass or via the container.

.. code ::

    $ docker exec -it some-mongo mongo


TODO
--------------------------------------------------

Should I use nodemon for reloading and watching files during development?   