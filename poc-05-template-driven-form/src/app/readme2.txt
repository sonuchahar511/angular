alert
console
prompt  window.prompt("sometext","defaultText");
window.confirm("sometext");


define input property-
    import input decorator and add @Input() on property.
        or by using component decorator metadata.. mention property name as inputs.

    NOTE: ALWAYS USE INPUT DECORATOR AND WITH ALIAS. update component template 
    when changing property name in class.


Only one style will be selected from component decorator whichever comes 
later i.e. either styleUrls or styles..

shadow DOM: encapsulation:ViewEncapsulation.Enumerated,Native,None ENUM

ngContent and ng-container with select

search ngForOf in angular.io to know valid attribute of ngFor directive.
