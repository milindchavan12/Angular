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
There are different ways with different option we can create Angular App. Following are few most common examples: 

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

## Linting
Angular CLI comes with in-built linting which means to check if our code is okay. Here are some of the option with Lint:

To lint app and format outout

`
ng lint my-app --format stylish
`

To lint app and fix all problem automatcially in the app

`
ng lint my-app --fix
`

## Generating the Code with Blueprints
The *generate* command will generate the code from blueprint

### Syntax : 
`ng generate <blueprint> <options>`

### Generating the component:
`ng generate component pet`

and with alias : `ng g c pet`

## Let's compare the Dev and Production Build
![img text](https://github.com/milindchavan12/Angular/blob/master/Assets/build.png)
