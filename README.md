angular-ajax-tabs
=================

Reuse your AngularJS `ngRoute` view controllers and partial templates within a tabbed interface *inside another `ngView`*.

Blog post here: http://blog.richpollock.com/2014/10/angular-js-tabs-directive-with-dynamic-loading-of-partial-templates-and-controllers
Plnkr here: http://plnkr.co/edit/3hX2gnrJY7egpXsbNxMd

Angular AJAX Tabs allows HTML such as the following to be used inside an `ngView`:

```HTML
<tabs>
	<pane 
		ng-repeat="pane in panes | filter:{includedInTabView:true}" 
		tab-title="{{pane.name}}" 
		controller="{{pane.controller}}" 
		template="{{pane.template}}">
	</pane>
</tabs>
```

The `controller` and `template` HTML attributes are required for Angular AJAX Tabs to load in the partial template and bind it to the controller. Otherwise the tabs behaviour falls back to using the inline HTML in the `<pane>` tags (which must also specify an ngController as an attribute if a controller needs to be bound to the pane).

The `panes` variable in the above Angularised HTML is an array of pane properties as follows:

```JavaScript
$scope.panes = [{
    "name": "Pane 1",
    "template": "pane-1.html",
    "controller": "Pane1",
    "includedInTabView": true
  }, {
    "name": "Pane 2",
    "template": "pane-2.html",
    "controller": "Pane2",
    "includedInTabView": true
  }, {
    "name": "Pane 3",
    "template": "pane-3.html",
    "controller": "Pane3",
    "includedInTabView": false
  }]
```

If some functionality should *only* appear when the partial template is being used inside a tab, the `isTabbedPane` property is set on the controller's scope, allowing HTML

<span ng-show="isTabbedPane">This will only appear when the template is inside a tab!</span>

The `controller` specified in the attribute needs to already exist beforehand; Angular AJAX Tabs won't instantiate controllers automatically.