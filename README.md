# Angular
Angular is Javascript framework for building client-side, Progressive Web Applications and Mobile applications. Angular uses Expressive HTML with Powerful Data Binding and Backend integration.

## Angular Components

Angular Component comprises of Template and class associtiated with Template. Component als has Metadata with additional information about component.
![img text](https://github.com/milindchavan12/Angular/blob/master/Assets/AngularCompoent.png)


### Getting Started : To lean more about Angular CLI : [Please check link](https://github.com/milindchavan12/Angular/tree/master/AngularCLI)
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

### Trasforming data with Pipes
Angular supports various built-in and custome pipes. Some of the built-i pipes are :
- Date, number, decimal, percent currency, json and slice etc.

Examples :
- To show item in lowercase : `{{ productName | lowercase }}`
- To chain the pipes : `{{ price | currency | lowercase }}`
- Pipe with paramters : `{{ price | currency:'USD':'symbol':'1.2-2' }}`

## Interface
Interface is specification identifying a releated set of properties and Methods. A Class commits to supporting the specification by implementing the Interface. Interfaces are development time only, as they are not supported on ES5

## Nestable Component
Any component can be defined as Nestable component, if they have selector defined in Component Decorator. Nested Component can receive the input from the Container Component by `@Input()` decorator.

Example : `@Input() rating : number;`

Similarly, if nested component needs to send information to Container component then it can raise an event with `@Output()` decorator

Example : `@Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();`

## Services and Dependency Injection
Service is the class with focused purpose with featues :
 - independent from any perticular component.
 - provides shared data or logic across components.
 - Encapsulate the external interactionns.

Dependency Injection : A coding peetern in which a class receives the instance of an object it needs (called Dependencies) from an external source rather creating them itself.

Injecting the Service is done in constructor of Component class:

`constructor(private serviceName : ServiceName) {
 }
`

## Observable and Reactive Extension
Observable helps to manage asynchronous data.

![img text](https://github.com/milindchavan12/Angular/blob/master/Assets/promiseobserv.png)

## Router
To activate the route with the code, following steps are followed:
- Use the Router Service and Import as well as Define it as Dependency.
- Create a method that calls the navigate method of the router service instance and pass in the link paramter array.
- Add User Interface elemment and use event binding to bind to created method.

### Passing the parameters to Route
Passing the parameters to the Route can be achieved through *ActivatedRoute* Service provided by the router. 
Example :

```angular
 constructor(private route : ActivatedRoute) {
   console.log(this.route.snapshot.paramMap.get('id'))
 }
```
### Activating the Route with code
```angular
 on(private router : Router) {
   this.route.navigate(['/path'])
 }
```
