# Angular
Angular is Javascript framework for building client-side applications.

### Getting Started
- Install Angular CLI : 
```node
npm install -g @angular/cli
```
- Create New Agnaular App
```node
ng new APM
```
- navigate to APP folder
```node
cd APM
```
- Install all required packages
```node
npm install
```
- Start running APP
```node
ng serve
```

## Angular Components

![img text](https://github.com/milindchavan12/Angular/blob/master/Assets/AngularCompoent.png)

### Decorator 
Decorator is a function that adds Metadata to the class, it members, or its method arguments. And Prefix with @ sign

## Angular Modules
Angular modules are code files that organise and modularize the application into cohesive blocks of functionality. 
![img text](https://github.com/milindchavan12/Angular/blob/master/Assets/Modules.png)

## Binding
Binding cordinates the communication between component's class and it's template and often involves passing the data.

### Interpolation 
Double curly braces is very known interpolation

```node
<h1>{{pageTitle}}</h1>
```

## Directive
Directives are custom HTML element or attributes used to power up and extend the HTML.
- Structural Directives are *ngIf and *ngFor

## Two-Way Binding
To specify two way binding in DOM element must be spcified with ngModel with round and square paranthesis and assigns to Component Class property.

```node
<input [(ngModel)]='listFilter'>
```
![img text](https://pbs.twimg.com/media/DiA1748X4AILZzC.jpg)

