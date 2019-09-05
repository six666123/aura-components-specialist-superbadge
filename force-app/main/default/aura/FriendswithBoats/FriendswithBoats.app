<aura:application extends="force:slds">
  <div>
    <lightning:card title="Find a Boat" class="slds-m-bottom_medium">
      <c:BoatSearchForm />
    </lightning:card>
    <lightning:card title="Matching Boats">
      <c:BoatSearchResults />
    </lightning:card>
  </div>
</aura:application>