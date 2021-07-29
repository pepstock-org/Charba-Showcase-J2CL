goog.module('org.pepstock.charba.client.configuration.EventAxesHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEventElementHandler = goog.require('org.pepstock.charba.client.configuration.AbstractEventElementHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ScaleType = goog.forwardDeclare('org.pepstock.charba.client.ScaleType$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let AddHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AddHandlerEvent$impl');
let AxisClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisClickEvent$impl');
let AxisEnterEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisEnterEvent$impl');
let AxisHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisHoverEvent$impl');
let AxisLeaveEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AxisLeaveEvent$impl');
let RemoveHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.RemoveHandlerEvent$impl');
let ScaleItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class EventAxesHandler extends AbstractEventElementHandler {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_onAxisClickHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = 0;
  /**@type {number}*/
  this.f_onAxisHoverHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = 0;
  /**@type {number}*/
  this.f_onAxisEnterHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = 0;
  /**@type {number}*/
  this.f_onAxisLeaveHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = 0;
  /**@type {ScaleItem}*/
  this.f_hoveredAxis__org_pepstock_charba_client_configuration_EventAxesHandler_;
 }
 /** @return {!EventAxesHandler} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ configuration) {
  EventAxesHandler.$clinit();
  let $instance = new EventAxesHandler();
  $instance.$ctor__org_pepstock_charba_client_configuration_EventAxesHandler__org_pepstock_charba_client_configuration_ConfigurationOptions(configuration);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_EventAxesHandler__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ configuration) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractEventElementHandler__org_pepstock_charba_client_configuration_ConfigurationOptions(configuration);
  this.$init___$p_org_pepstock_charba_client_configuration_EventAxesHandler();
 }
 /** @return {boolean} */
 m_hasAxisClickHandlers___$pp_org_pepstock_charba_client_configuration() {
  return this.f_onAxisClickHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ > 0;
 }
 /** @return {boolean} */
 m_hasAxisHoverHandlers___$pp_org_pepstock_charba_client_configuration() {
  return this.f_onAxisHoverHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ > 0;
 }
 /** @return {boolean} */
 m_hasAxisEnterHandlers___$pp_org_pepstock_charba_client_configuration() {
  return this.f_onAxisEnterHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ > 0;
 }
 /** @return {boolean} */
 m_hasAxisLeaveHandlers___$pp_org_pepstock_charba_client_configuration() {
  return this.f_onAxisLeaveHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ > 0;
 }
 /** @override */
 m_onAdd__org_pepstock_charba_client_events_AddHandlerEvent(/** AddHandlerEvent */ event) {
  if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(AxisClickEvent.f_TYPE__org_pepstock_charba_client_events_AxisClickEvent)) {
   this.m_checkAndManageCanvasClickListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(true, !this.m_hasAxisClickHandlers___$pp_org_pepstock_charba_client_configuration());
   this.f_onAxisClickHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = this.f_onAxisClickHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ + 1 | 0;
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(AxisHoverEvent.f_TYPE__org_pepstock_charba_client_events_AxisHoverEvent)) {
   this.m_checkAndManageCanvasHoverListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(true, !this.m_hasAxisHoverHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasAxisLeaveHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasAxisEnterHandlers___$pp_org_pepstock_charba_client_configuration());
   this.f_onAxisHoverHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = this.f_onAxisHoverHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ + 1 | 0;
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(AxisEnterEvent.f_TYPE__org_pepstock_charba_client_events_AxisEnterEvent)) {
   this.m_checkAndManageCanvasHoverListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(true, !this.m_hasAxisHoverHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasAxisLeaveHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasAxisEnterHandlers___$pp_org_pepstock_charba_client_configuration());
   this.f_onAxisEnterHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = this.f_onAxisEnterHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ + 1 | 0;
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(AxisLeaveEvent.f_TYPE__org_pepstock_charba_client_events_AxisLeaveEvent)) {
   this.m_checkAndManageCanvasHoverListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(true, !this.m_hasAxisHoverHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasAxisLeaveHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasAxisEnterHandlers___$pp_org_pepstock_charba_client_configuration());
   this.f_onAxisLeaveHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = this.f_onAxisLeaveHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ + 1 | 0;
  }
 }
 /** @override */
 m_onRemove__org_pepstock_charba_client_events_RemoveHandlerEvent(/** RemoveHandlerEvent */ event) {
  if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(AxisClickEvent.f_TYPE__org_pepstock_charba_client_events_AxisClickEvent)) {
   this.f_onAxisClickHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = this.f_onAxisClickHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ - 1 | 0;
   this.m_checkAndManageCanvasClickListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(false, !this.m_hasAxisClickHandlers___$pp_org_pepstock_charba_client_configuration());
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(AxisHoverEvent.f_TYPE__org_pepstock_charba_client_events_AxisHoverEvent)) {
   this.f_onAxisHoverHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = this.f_onAxisHoverHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ - 1 | 0;
   this.m_checkAndManageCanvasHoverListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(false, !this.m_hasAxisHoverHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasAxisLeaveHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasAxisEnterHandlers___$pp_org_pepstock_charba_client_configuration());
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(AxisEnterEvent.f_TYPE__org_pepstock_charba_client_events_AxisEnterEvent)) {
   this.f_onAxisEnterHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = this.f_onAxisEnterHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ - 1 | 0;
   this.m_checkAndManageCanvasHoverListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(false, !this.m_hasAxisHoverHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasAxisLeaveHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasAxisEnterHandlers___$pp_org_pepstock_charba_client_configuration());
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(AxisLeaveEvent.f_TYPE__org_pepstock_charba_client_events_AxisLeaveEvent)) {
   this.f_onAxisLeaveHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = this.f_onAxisLeaveHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ - 1 | 0;
   this.m_checkAndManageCanvasHoverListeners__boolean__boolean_$pp_org_pepstock_charba_client_configuration(false, !this.m_hasAxisHoverHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasAxisLeaveHandlers___$pp_org_pepstock_charba_client_configuration() && !this.m_hasAxisEnterHandlers___$pp_org_pepstock_charba_client_configuration());
  }
 }
 /** @override */
 m_handleClickEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(/** Object */ event) {
  if (this.m_hasAxisClickHandlers___$pp_org_pepstock_charba_client_configuration()) {
   let scaleItem = this.m_searchScaleItem__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_configuration_EventAxesHandler(event);
   if (!$Equality.$same(scaleItem, null)) {
    let axis = this.m_searchAxis__org_pepstock_charba_client_items_ScaleItem_$p_org_pepstock_charba_client_configuration_EventAxesHandler(scaleItem);
    this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(AxisClickEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis__org_pepstock_charba_client_items_ScaleValueItem(event, scaleItem, axis, scaleItem.m_getValueAtEvent__org_pepstock_charba_client_dom_BaseNativeEvent(event)));
   }
  }
 }
 /** @override */
 m_handleHoverEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(/** Object */ event) {
  if (this.m_hasAxisHoverHandlers___$pp_org_pepstock_charba_client_configuration() || this.m_hasAxisLeaveHandlers___$pp_org_pepstock_charba_client_configuration() || this.m_hasAxisEnterHandlers___$pp_org_pepstock_charba_client_configuration()) {
   let scaleItem = this.m_searchScaleItem__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_configuration_EventAxesHandler(event);
   if (!$Equality.$same(scaleItem, null)) {
    let axis = this.m_searchAxis__org_pepstock_charba_client_items_ScaleItem_$p_org_pepstock_charba_client_configuration_EventAxesHandler(scaleItem);
    this.m_manageHoverEventOnAxis__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis_$p_org_pepstock_charba_client_configuration_EventAxesHandler(event, scaleItem, axis);
   } else {
    this.m_handleLeaveEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(event);
   }
  }
 }
 
 m_manageHoverEventOnAxis__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis_$p_org_pepstock_charba_client_configuration_EventAxesHandler(/** Object */ event, /** ScaleItem */ scaleItem, /** Axis */ axis) {
  if (!$Equality.$same(this.f_hoveredAxis__org_pepstock_charba_client_configuration_EventAxesHandler_, null)) {
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(this.f_hoveredAxis__org_pepstock_charba_client_configuration_EventAxesHandler_.m_getId__(), scaleItem.m_getId__()) && this.m_hasAxisHoverHandlers___$pp_org_pepstock_charba_client_configuration()) {
    this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(AxisHoverEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(event, scaleItem, axis));
   } else if (!$Objects.m_equals__java_lang_Object__java_lang_Object(this.f_hoveredAxis__org_pepstock_charba_client_configuration_EventAxesHandler_.m_getId__(), scaleItem.m_getId__())) {
    this.m_handleLeaveEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(event);
    if (this.m_hasAxisEnterHandlers___$pp_org_pepstock_charba_client_configuration()) {
     this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(AxisEnterEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(event, scaleItem, axis));
    }
    this.f_hoveredAxis__org_pepstock_charba_client_configuration_EventAxesHandler_ = scaleItem;
   }
  } else {
   if (this.m_hasAxisEnterHandlers___$pp_org_pepstock_charba_client_configuration()) {
    this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(AxisEnterEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(event, scaleItem, axis));
   }
   this.f_hoveredAxis__org_pepstock_charba_client_configuration_EventAxesHandler_ = scaleItem;
  }
 }
 /** @override */
 m_handleLeaveEventOnElements__org_pepstock_charba_client_dom_BaseNativeEvent_$pp_org_pepstock_charba_client_configuration(/** Object */ event) {
  if (!$Equality.$same(this.f_hoveredAxis__org_pepstock_charba_client_configuration_EventAxesHandler_, null) && this.m_hasAxisLeaveHandlers___$pp_org_pepstock_charba_client_configuration()) {
   let axis = this.m_searchAxis__org_pepstock_charba_client_items_ScaleItem_$p_org_pepstock_charba_client_configuration_EventAxesHandler(this.f_hoveredAxis__org_pepstock_charba_client_configuration_EventAxesHandler_);
   this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(AxisLeaveEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_configuration_Axis(event, this.f_hoveredAxis__org_pepstock_charba_client_configuration_EventAxesHandler_, axis));
  }
  this.f_hoveredAxis__org_pepstock_charba_client_configuration_EventAxesHandler_ = null;
 }
 /** @return {ScaleItem} */
 m_searchScaleItem__org_pepstock_charba_client_dom_BaseNativeEvent_$p_org_pepstock_charba_client_configuration_EventAxesHandler(/** Object */ event) {
  if (!this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_getNode__().m_getChartArea__().m_isInside__org_pepstock_charba_client_dom_BaseNativeEvent(event) && !$Objects.m_equals__java_lang_Object__java_lang_Object(ScaleType.f_NONE__org_pepstock_charba_client_ScaleType, this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_getType__().m_scaleType__())) {
   let scales = this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getChart__().m_getNode__().m_getScales__();
   if (scales.m_isInside__org_pepstock_charba_client_dom_BaseNativeEvent(event)) {
    return scales.m_getScaleIsInside__org_pepstock_charba_client_dom_BaseNativeEvent(event);
   }
  }
  return null;
 }
 /** @return {Axis} */
 m_searchAxis__org_pepstock_charba_client_items_ScaleItem_$p_org_pepstock_charba_client_configuration_EventAxesHandler(/** ScaleItem */ scaleItem) {
  let axis = null;
  if (!$Equality.$same(scaleItem, null)) {
   let charbaIdOfScale = scaleItem.m_getCharbaId__();
   if (Undefined.m_isNot__int(charbaIdOfScale)) {
    axis = this.m_getConfiguration___$pp_org_pepstock_charba_client_configuration().m_getAxisById__int_$pp_org_pepstock_charba_client_configuration(charbaIdOfScale);
   }
  }
  return axis;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_EventAxesHandler() {
  this.f_onAxisClickHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = 0;
  this.f_onAxisHoverHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = 0;
  this.f_onAxisEnterHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = 0;
  this.f_onAxisLeaveHandlers__org_pepstock_charba_client_configuration_EventAxesHandler_ = 0;
  this.f_hoveredAxis__org_pepstock_charba_client_configuration_EventAxesHandler_ = null;
 }
 
 static $clinit() {
  EventAxesHandler.$clinit = () =>{};
  EventAxesHandler.$loadModules();
  AbstractEventElementHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventAxesHandler;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ScaleType = goog.module.get('org.pepstock.charba.client.ScaleType$impl');
  AxisClickEvent = goog.module.get('org.pepstock.charba.client.events.AxisClickEvent$impl');
  AxisEnterEvent = goog.module.get('org.pepstock.charba.client.events.AxisEnterEvent$impl');
  AxisHoverEvent = goog.module.get('org.pepstock.charba.client.events.AxisHoverEvent$impl');
  AxisLeaveEvent = goog.module.get('org.pepstock.charba.client.events.AxisLeaveEvent$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(EventAxesHandler, "org.pepstock.charba.client.configuration.EventAxesHandler");

exports = EventAxesHandler;

//# sourceMappingURL=EventAxesHandler.js.map
