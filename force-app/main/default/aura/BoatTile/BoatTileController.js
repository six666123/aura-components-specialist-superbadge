({
    onBoatClick : function(component, event, helper) {
        var boat = component.get("v.boat");
        if (boat && boat.Id) {
            var params = {"boatId": boat.Id};

            var boatselect = component.getEvent("boatselect");
            boatselect.setParams(params);
            boatselect.fire();
        }
    }
})
