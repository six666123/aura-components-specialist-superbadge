({
    init : function(component, event, helper) {
        var createRecordEvent = $A.get("event.force:createRecord");
        if (createRecordEvent) {
            component.set("v.showNewBtn", true);
        }

        helper.loadBoatTypes(component, event, helper);
    },

    boatTypeChange : function(component, event, helper) {
        var boatType = event.getSource().get("v.value");
        component.set("v.boatType", boatType);
    },

    searchBtnClick : function(component, event, helper) {
    },

    newBtnClick : function(component, event, helper) {
        var createRecordEvent = $A.get("event.force:createRecord");

        if (createRecordEvent) {
            var params = {"entityApiName": "Boat__c"};

            var boatType = component.get("v.boatType");
            if (boatType) {
                params.defaultFieldValues = {"BoatType__c" : boatType};
            }

            console.log(params);

            createRecordEvent.setParams(params);
            createRecordEvent.fire();
        }
    }
})
