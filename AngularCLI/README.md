# Angular CLI

Angular CLI is command line interface that makes it easier to create an application that works and follows best practices, right out of the box.

### Installing the Angular CLI globally :

`
npm i @angular/cli -g
`

Once installed we can check the version of angular by 

`
ng -v
`

### Let's create our first app
To create an Angular app with CLI, without writing any files which won't install the node packages.

`
ng new my-app --dry-run
`

To create new app without installing node packages:

`
ng new my-app --skip-install
`

The default prefix of an Angular App will be **app**, to create app with custome prefix:

`
ng new my-app --prefix myprefix
`

To create a new app with "No Tests", and "SCSS" styling 

`
ng new my-app --prefix myprefix --skip-tests --style scss
`
