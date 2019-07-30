# Angular Forms
There are 2 Angular Form Technologies:
- Template Driven forms
- Reactive Forms

## Form Validation 
Following are the validation classes by which Angular performs the validation on fields: This can be reviewed any field by adding **#classTest** and **#propertyTest** attribute

- **ng-untouched**  : The form field not touched/modified.
- **ng-touched**    : The field is tabed in or modified.
- **ng-pristine**   : the field is not yet changed since the starting value.
- **ng-dirty**      : As soon as user, changes the field it becomes, *dirty*
- **ng-valid**      : the field has valid value
- **ng-invalid**    : the field has invalid value

### Classes and associtated ngModel properties
![img text](https://github.com/milindchavan12/Angular/blob/master/Assets/ngProperties.png)

### HTML 5 CSS validation:
To check if we can use HTML5 CSS validation : https://caniuse.com/

### Adding Default Angular Validation
by adding `ngNativeValidate`, allow browser each control from ngForm. Angular turns this OFF by default, because of browsers.
