({
    onBoatClick : function(component, event, helper) {
        var boat = component.get("v.boat");
        if (boat && boat.Id) {
            var boatselect = component.getEvent("boatselect");
            boatselect.setParams({"boatId": boat.Id});
            boatselect.fire();

            var boatselected = $A.get("e.c:boatselected");
            boatselected.setParams({"boat": boat});
            boatselected.fire();
        }
    }
})
