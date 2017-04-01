# language package for the speedata Publisher

This package allows you to use the atom editor with the speedata Publisher.

## Installation

You can install this package from the [Atom](https://atom.io/) editor by going into the Preferences, select “Install” and type `speedata`, click on “Package”. You should see the “Install” button now.

This package should install `linter-autocomplete-jing` automatically, but somehow this does not seem to work. So you need to install this with the procedure above.

After restarting the editor you can create a (stub) Layout file with the correct name space:

    <Layout
      xmlns="urn:speedata.de:2009/publisher/en"
      xmlns:sd="urn:speedata:2009/publisher/functions/en">

    </Layout>

Now you should have auto completion for all the commands (elements), parameters (attributes) and documentation on both.

![automatic completion](assets/autocompletion.png)
