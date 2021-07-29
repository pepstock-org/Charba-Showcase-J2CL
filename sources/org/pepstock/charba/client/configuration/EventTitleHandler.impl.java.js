goog.module('org.pepstock.charba.client.configuration.EventTitleHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEventElementHandler = goog.require('org.pepstock.charba.client.configuration.AbstractEventElementHandler$impl');

let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let AddHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AddHandlerEvent$impl');
let RemoveHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.RemoveHandlerEvent$impl');
let TitleClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleClickEvent$impl');
let TitleEnterEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleEnterEvent$impl');
let TitleLeaveEvent = goog.forwardDeclare('org.pepstock.charba.client.events.TitleLeaveEvent$impl');

class EventTitleHandler extends AbstractEventElementHandler {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_onTitleClickHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ = 0;
  /**@type {number}*/
  this.f_onTitleEnterHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ = 0;
  /**@type {number}*/
  this.f_onTitleLeaveHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ = 0;
  /**@type {boolean}*/
  this.f_hoveredTitle__org_pepstock_charba_client_configuration_EventTitleHandler_ = false;
 }
 /** @return {!EventTitleHandler} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ configuration) {
  EventTitleHandler.$clinit();
  let $instance = new EventTitleHandler();
  $instance.$ctor__org_pepstock_charba_client_configuration_EventTitleHandler__org_pepstock_charba_client_configuration_ConfigurationOptions(configuration);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_EventTitleHandler__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ configuration) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractEventElementHandler__org_pepstock_charba_client_configuration_ConfigurationOptions(configuration);
  this.$init___$p_org_pepstock_charba_client_configuration_EventTitleHandler();
 }
 /** @return {boolean} */
 m_hasTitleClickHandlers___$pp_org_pepstock_charba_client_configuration() {
  return this.f_onTitleClickHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ > 0;
 }
 /** @return {boolean} */
 m_hasTitleEnterHandlers___$pp_org_pepstock_charba_client_configuration() {
  return this.f_onTitleEnterHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ > 0;
 }
 /** @return {boolean} */
 m_hasTitleLeaveHandlers___$pp_org_pepstock_charba_client_configuration() {
  return this.f_onTitleLeaveHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ > 0;
 }
 /** @override */
 m_onAdd__org_pepstock_charba_client_events_AddHandlerEvent(/** AddHandlerEvent */ event) {
  if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(TitleClickEvent.f_TYPE__org_pepstock_charba_client_events_TitleClickEvent)) {
   this.m_checkAndManageCanvasClickListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(true, !this.m_hasTitleClickHandlers___$pp_org_pepstock_charba_client_configuration());
   this.f_onTitleClickHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ = this.f_onTitleClickHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ + 1 | 0;
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(TitleEnterEvent.f_TYPE__org_pepstock_charba_client_events_TitleEnterEvent)) {
   this.m_checkAndManageCanvasHoverListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(true, !this.m_hasTitleEnterHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasTitleLeaveHandlers___$pp_org_pepstock_charba_client_configuration());
   this.f_onTitleEnterHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ = this.f_onTitleEnterHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ + 1 | 0;
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(TitleLeaveEvent.f_TYPE__org_pepstock_charba_client_events_TitleLeaveEvent)) {
   this.m_checkAndManageCanvasHoverListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(true, !this.m_hasTitleEnterHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasTitleLeaveHandlers___$pp_org_pepstock_charba_client_configuration());
   this.f_onTitleLeaveHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ = this.f_onTitleLeaveHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ + 1 | 0;
  }
 }
 /** @override */
 m_onRemove__org_pepstock_charba_client_events_RemoveHandlerEvent(/** RemoveHandlerEvent */ event) {
  if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(TitleClickEvent.f_TYPE__org_pepstock_charba_client_events_TitleClickEvent)) {
   this.f_onTitleClickHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ = this.f_onTitleClickHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ - 1 | 0;
   this.m_checkAndManageCanvasClickListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(false, !this.m_hasTitleClickHandlers___$pp_org_pepstock_charba_client_configuration());
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(TitleEnterEvent.f_TYPE__org_pepstock_charba_client_events_TitleEnterEvent)) {
   this.f_onTitleEnterHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ = this.f_onTitleEnterHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ - 1 | 0;
   this.m_checkAndManageCanvasClickListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(false, !this.m_hasTitleEnterHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasTitleLeaveHandlers___$pp_org_pepstock_charba_client_configuration());
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(TitleLeaveEvent.f_TYPE__org_pepstock_charba_client_events_TitleLeaveEvent)) {
   this.f_onTitleLeaveHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ = this.f_onTitleLeaveHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ - 1 | 0;
   this.m_checkAndManageCanvasClickListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(false, !this.m_hasTitleEnterHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasTitleLeaveHandlers___$pp_org_pepstock_charba_client_configuration());
  }
 }
 /** @override */
 m_handleClickEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(/** Object */ event) {
  if (this.m_hasTitleClickHandlers___$pp_org_pepstock_charba_client_configuration() && this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_getNode__().m_getTitle__().m_isInside__org_pepstock_charba_client_dom_BaseNativeEvent(event)) {
   this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(TitleClickEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_options_Title(event, this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_getNode__().m_getOptions__().m_getTitle__()));
  }
 }
 /** @override */
 m_handleHoverEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(/** Object */ event) {
  if (this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_getNode__().m_getTitle__().m_isInside__org_pepstock_charba_client_dom_BaseNativeEvent(event)) {
   if (!this.f_hoveredTitle__org_pepstock_charba_client_configuration_EventTitleHandler_) {
    if (this.m_hasTitleEnterHandlers___$pp_org_pepstock_charba_client_configuration()) {
     this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(TitleEnterEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_options_Title(event, this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_getNode__().m_getOptions__().m_getTitle__()));
    }
    this.f_hoveredTitle__org_pepstock_charba_client_configuration_EventTitleHandler_ = true;
   }
  } else {
   this.m_handleLeaveEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(event);
  }
 }
 /** @override */
 m_handleLeaveEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(/** Object */ event) {
  if (this.f_hoveredTitle__org_pepstock_charba_client_configuration_EventTitleHandler_ && this.m_hasTitleLeaveHandlers___$pp_org_pepstock_charba_client_configuration()) {
   this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(TitleLeaveEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_options_Title(event, this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_getNode__().m_getOptions__().m_getTitle__()));
   this.f_hoveredTitle__org_pepstock_charba_client_configuration_EventTitleHandler_ = false;
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_EventTitleHandler() {
  this.f_onTitleClickHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ = 0;
  this.f_onTitleEnterHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ = 0;
  this.f_onTitleLeaveHandlers__org_pepstock_charba_client_configuration_EventTitleHandler_ = 0;
  this.f_hoveredTitle__org_pepstock_charba_client_configuration_EventTitleHandler_ = false;
 }
 
 static $clinit() {
  EventTitleHandler.$clinit = () =>{};
  EventTitleHandler.$loadModules();
  AbstractEventElementHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventTitleHandler;
 }
 
 static $loadModules() {
  TitleClickEvent = goog.module.get('org.pepstock.charba.client.events.TitleClickEvent$impl');
  TitleEnterEvent = goog.module.get('org.pepstock.charba.client.events.TitleEnterEvent$impl');
  TitleLeaveEvent = goog.module.get('org.pepstock.charba.client.events.TitleLeaveEvent$impl');
 }
}
$Util.$setClassMetadata(EventTitleHandler, "org.pepstock.charba.client.configuration.EventTitleHandler");

exports = EventTitleHandler;

//# sourceMappingURL=EventTitleHandler.js.map
