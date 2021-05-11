goog.module('org.pepstock.charba.client.configuration.Legend$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');
const IsEventProvider = goog.require('org.pepstock.charba.client.configuration.IsEventProvider$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let LegendLabels = goog.forwardDeclare('org.pepstock.charba.client.configuration.LegendLabels$impl');
let LegendTitle = goog.forwardDeclare('org.pepstock.charba.client.configuration.LegendTitle$impl');
let ElementAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ElementAlign$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.enums.Event$impl');
let LegendEventProperty = goog.forwardDeclare('org.pepstock.charba.client.enums.LegendEventProperty$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let TextDirection = goog.forwardDeclare('org.pepstock.charba.client.enums.TextDirection$impl');
let AddHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AddHandlerEvent$impl');
let ChartEventContext = goog.forwardDeclare('org.pepstock.charba.client.events.ChartEventContext$impl');
let LegendClickEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendClickEvent$impl');
let LegendHoverEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendHoverEvent$impl');
let LegendLeaveEvent = goog.forwardDeclare('org.pepstock.charba.client.events.LegendLeaveEvent$impl');
let RemoveHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.RemoveHandlerEvent$impl');
let LegendItem = goog.forwardDeclare('org.pepstock.charba.client.items.LegendItem$impl');

/**
 * @implements {IsEventProvider}
 */
class Legend extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?, ?, ?):void>}*/
  this.f_clickCallbackProxy__org_pepstock_charba_client_configuration_Legend_;
  /**@type {CharbaCallbackProxy<?function(Object, ?, ?, ?):void>}*/
  this.f_hoverCallbackProxy__org_pepstock_charba_client_configuration_Legend_;
  /**@type {CharbaCallbackProxy<?function(Object, ?, ?, ?):void>}*/
  this.f_leaveCallbackProxy__org_pepstock_charba_client_configuration_Legend_;
  /**@type {LegendLabels}*/
  this.f_labels__org_pepstock_charba_client_configuration_Legend_;
  /**@type {LegendTitle}*/
  this.f_title__org_pepstock_charba_client_configuration_Legend_;
  /**@type {number}*/
  this.f_onClickHandlers__org_pepstock_charba_client_configuration_Legend_ = 0;
  /**@type {number}*/
  this.f_onHoverHandlers__org_pepstock_charba_client_configuration_Legend_ = 0;
  /**@type {number}*/
  this.f_onLeaveHandlers__org_pepstock_charba_client_configuration_Legend_ = 0;
 }
 /** @return {!Legend} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Legend.$clinit();
  let $instance = new Legend();
  $instance.$ctor__org_pepstock_charba_client_configuration_Legend__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Legend__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.$init___$p_org_pepstock_charba_client_configuration_Legend();
  IsEventProvider.m_register__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_IsEventProvider(this.m_getChart__(), this);
  this.f_labels__org_pepstock_charba_client_configuration_Legend_ = LegendLabels.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this.m_getOptions__());
  this.f_title__org_pepstock_charba_client_configuration_Legend_ = LegendTitle.$create__org_pepstock_charba_client_configuration_ConfigurationOptions(this.m_getOptions__());
  this.f_clickCallbackProxy__org_pepstock_charba_client_configuration_Legend_.callback = (/** Object */ context, /** ? */ event, /** ? */ item, /** ? */ legend) =>{
   this.m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(LegendClickEvent.$create__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(ChartEventContext.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(event))), LegendItem.f_FACTORY__org_pepstock_charba_client_items_LegendItem.m_create__org_pepstock_charba_client_commons_NativeObject(item)));
  };
  this.f_hoverCallbackProxy__org_pepstock_charba_client_configuration_Legend_.callback = (/** Object */ context_1, /** ? */ event_1, /** ? */ item_1, /** ? */ legend_1) =>{
   this.m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(LegendHoverEvent.$create__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(ChartEventContext.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(event_1))), LegendItem.f_FACTORY__org_pepstock_charba_client_items_LegendItem.m_create__org_pepstock_charba_client_commons_NativeObject(item_1)));
  };
  this.f_leaveCallbackProxy__org_pepstock_charba_client_configuration_Legend_.callback = (/** Object */ context_2, /** ? */ event_2, /** ? */ item_2, /** ? */ legend_2) =>{
   this.m_getChart__().m_fireEvent__org_pepstock_charba_client_events_Event(LegendLeaveEvent.$create__org_pepstock_charba_client_events_ChartEventContext__org_pepstock_charba_client_items_LegendItem(ChartEventContext.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(event_2))), LegendItem.f_FACTORY__org_pepstock_charba_client_items_LegendItem.m_create__org_pepstock_charba_client_commons_NativeObject(item_2)));
  };
 }
 /** @return {LegendLabels} */
 m_getLabels__() {
  return this.f_labels__org_pepstock_charba_client_configuration_Legend_;
 }
 /** @return {LegendTitle} */
 m_getTitle__() {
  return this.f_title__org_pepstock_charba_client_configuration_Legend_;
 }
 
 m_setEvents__arrayOf_org_pepstock_charba_client_enums_Event(/** Array<Event> */ events) {
  this.m_getConfiguration__().m_getLegend__().m_setEvents__arrayOf_org_pepstock_charba_client_enums_Event(events);
 }
 /** @return {List<Event>} */
 m_getEvents__() {
  return this.m_getConfiguration__().m_getLegend__().m_getEvents__();
 }
 /** @override */
 m_onAdd__org_pepstock_charba_client_events_AddHandlerEvent(/** AddHandlerEvent */ event) {
  if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(LegendClickEvent.f_TYPE__org_pepstock_charba_client_events_LegendClickEvent)) {
   if (this.f_onClickHandlers__org_pepstock_charba_client_configuration_Legend_ == 0) {
    this.m_getConfiguration__().m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(this.m_getConfiguration__().m_getLegend__(), LegendEventProperty.f_ON_CLICK__org_pepstock_charba_client_enums_LegendEventProperty, /**@type {!ConfigurationEnvelop<?function():void>}*/ (ConfigurationEnvelop.$create__java_lang_Object(this.f_clickCallbackProxy__org_pepstock_charba_client_configuration_Legend_.proxy)));
   }
   this.f_onClickHandlers__org_pepstock_charba_client_configuration_Legend_ = this.f_onClickHandlers__org_pepstock_charba_client_configuration_Legend_ + 1 | 0;
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(LegendHoverEvent.f_TYPE__org_pepstock_charba_client_events_LegendHoverEvent)) {
   if (this.f_onHoverHandlers__org_pepstock_charba_client_configuration_Legend_ == 0) {
    this.m_getConfiguration__().m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(this.m_getConfiguration__().m_getLegend__(), LegendEventProperty.f_ON_HOVER__org_pepstock_charba_client_enums_LegendEventProperty, /**@type {!ConfigurationEnvelop<?function():void>}*/ (ConfigurationEnvelop.$create__java_lang_Object(this.f_hoverCallbackProxy__org_pepstock_charba_client_configuration_Legend_.proxy)));
   }
   this.f_onHoverHandlers__org_pepstock_charba_client_configuration_Legend_ = this.f_onHoverHandlers__org_pepstock_charba_client_configuration_Legend_ + 1 | 0;
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(LegendLeaveEvent.f_TYPE__org_pepstock_charba_client_events_LegendLeaveEvent)) {
   if (this.f_onLeaveHandlers__org_pepstock_charba_client_configuration_Legend_ == 0) {
    this.m_getConfiguration__().m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(this.m_getConfiguration__().m_getLegend__(), LegendEventProperty.f_ON_LEAVE__org_pepstock_charba_client_enums_LegendEventProperty, /**@type {!ConfigurationEnvelop<?function():void>}*/ (ConfigurationEnvelop.$create__java_lang_Object(this.f_leaveCallbackProxy__org_pepstock_charba_client_configuration_Legend_.proxy)));
   }
   this.f_onLeaveHandlers__org_pepstock_charba_client_configuration_Legend_ = this.f_onLeaveHandlers__org_pepstock_charba_client_configuration_Legend_ + 1 | 0;
  }
 }
 /** @override */
 m_onRemove__org_pepstock_charba_client_events_RemoveHandlerEvent(/** RemoveHandlerEvent */ event) {
  if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(LegendClickEvent.f_TYPE__org_pepstock_charba_client_events_LegendClickEvent)) {
   this.f_onClickHandlers__org_pepstock_charba_client_configuration_Legend_ = this.f_onClickHandlers__org_pepstock_charba_client_configuration_Legend_ - 1 | 0;
   if (this.f_onClickHandlers__org_pepstock_charba_client_configuration_Legend_ == 0) {
    this.m_getConfiguration__().m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(this.m_getConfiguration__().m_getLegend__(), LegendEventProperty.f_ON_CLICK__org_pepstock_charba_client_enums_LegendEventProperty, ConfigurationOptions.f_RESET_CALLBACK_ENVELOP__org_pepstock_charba_client_configuration_ConfigurationOptions);
   }
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(LegendHoverEvent.f_TYPE__org_pepstock_charba_client_events_LegendHoverEvent)) {
   this.f_onHoverHandlers__org_pepstock_charba_client_configuration_Legend_ = this.f_onHoverHandlers__org_pepstock_charba_client_configuration_Legend_ - 1 | 0;
   if (this.f_onHoverHandlers__org_pepstock_charba_client_configuration_Legend_ == 0) {
    this.m_getConfiguration__().m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(this.m_getConfiguration__().m_getLegend__(), LegendEventProperty.f_ON_HOVER__org_pepstock_charba_client_enums_LegendEventProperty, ConfigurationOptions.f_RESET_CALLBACK_ENVELOP__org_pepstock_charba_client_configuration_ConfigurationOptions);
   }
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(LegendLeaveEvent.f_TYPE__org_pepstock_charba_client_events_LegendLeaveEvent)) {
   this.f_onLeaveHandlers__org_pepstock_charba_client_configuration_Legend_ = this.f_onLeaveHandlers__org_pepstock_charba_client_configuration_Legend_ - 1 | 0;
   if (this.f_onLeaveHandlers__org_pepstock_charba_client_configuration_Legend_ == 0) {
    this.m_getConfiguration__().m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(this.m_getConfiguration__().m_getLegend__(), LegendEventProperty.f_ON_LEAVE__org_pepstock_charba_client_enums_LegendEventProperty, ConfigurationOptions.f_RESET_CALLBACK_ENVELOP__org_pepstock_charba_client_configuration_ConfigurationOptions);
   }
  }
 }
 /** @return {boolean} */
 m_hasClickHandlers__() {
  return this.f_onClickHandlers__org_pepstock_charba_client_configuration_Legend_ > 0;
 }
 /** @return {boolean} */
 m_hasHoverHandlers__() {
  return this.f_onHoverHandlers__org_pepstock_charba_client_configuration_Legend_ > 0;
 }
 /** @return {boolean} */
 m_hasLeaveHandlers__() {
  return this.f_onLeaveHandlers__org_pepstock_charba_client_configuration_Legend_ > 0;
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_getConfiguration__().m_getLegend__().m_setDisplay__boolean(display);
 }
 /** @return {boolean} */
 m_isDisplay__() {
  return this.m_getConfiguration__().m_getLegend__().m_isDisplay__();
 }
 
 m_setFullSize__boolean(/** boolean */ fullSize) {
  this.m_getConfiguration__().m_getLegend__().m_setFullSize__boolean(fullSize);
 }
 /** @return {boolean} */
 m_isFullSize__() {
  return this.m_getConfiguration__().m_getLegend__().m_isFullSize__();
 }
 
 m_setReverse__boolean(/** boolean */ reverse) {
  this.m_getConfiguration__().m_getLegend__().m_setReverse__boolean(reverse);
 }
 /** @return {boolean} */
 m_isReverse__() {
  return this.m_getConfiguration__().m_getLegend__().m_isReverse__();
 }
 
 m_setPosition__org_pepstock_charba_client_enums_Position(/** Position */ position) {
  this.m_getConfiguration__().m_getLegend__().m_setPosition__org_pepstock_charba_client_enums_Position(position);
 }
 /** @return {Position} */
 m_getPosition__() {
  return this.m_getConfiguration__().m_getLegend__().m_getPosition__();
 }
 
 m_setAlign__org_pepstock_charba_client_enums_ElementAlign(/** ElementAlign */ alignment) {
  this.m_getConfiguration__().m_getLegend__().m_setAlign__org_pepstock_charba_client_enums_ElementAlign(alignment);
 }
 /** @return {ElementAlign} */
 m_getAlign__() {
  return this.m_getConfiguration__().m_getLegend__().m_getAlign__();
 }
 
 m_setRtl__boolean(/** boolean */ rtl) {
  this.m_getConfiguration__().m_getLegend__().m_setRtl__boolean(rtl);
 }
 /** @return {boolean} */
 m_isRtl__() {
  return this.m_getConfiguration__().m_getLegend__().m_isRtl__();
 }
 
 m_setTextDirection__org_pepstock_charba_client_enums_TextDirection(/** TextDirection */ textDirection) {
  this.m_getConfiguration__().m_getLegend__().m_setTextDirection__org_pepstock_charba_client_enums_TextDirection(textDirection);
 }
 /** @return {TextDirection} */
 m_getTextDirection__() {
  return this.m_getConfiguration__().m_getLegend__().m_getTextDirection__();
 }
 
 m_setMaxWidth__int(/** number */ maxWidth) {
  this.m_getConfiguration__().m_getLegend__().m_setMaxWidth__int(maxWidth);
 }
 /** @return {number} */
 m_getMaxWidth__() {
  return this.m_getConfiguration__().m_getLegend__().m_getMaxWidth__();
 }
 
 m_setMaxHeight__int(/** number */ maxHeight) {
  this.m_getConfiguration__().m_getLegend__().m_setMaxHeight__int(maxHeight);
 }
 /** @return {number} */
 m_getMaxHeight__() {
  return this.m_getConfiguration__().m_getLegend__().m_getMaxWidth__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_Legend() {
  this.f_clickCallbackProxy__org_pepstock_charba_client_configuration_Legend_ = /**@type {CharbaCallbackProxy<?function(Object, ?, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverCallbackProxy__org_pepstock_charba_client_configuration_Legend_ = /**@type {CharbaCallbackProxy<?function(Object, ?, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_leaveCallbackProxy__org_pepstock_charba_client_configuration_Legend_ = /**@type {CharbaCallbackProxy<?function(Object, ?, ?, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_onClickHandlers__org_pepstock_charba_client_configuration_Legend_ = 0;
  this.f_onHoverHandlers__org_pepstock_charba_client_configuration_Legend_ = 0;
  this.f_onLeaveHandlers__org_pepstock_charba_client_configuration_Legend_ = 0;
 }
 
 static $clinit() {
  Legend.$clinit = () =>{};
  Legend.$loadModules();
  ConfigurationOptionsContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Legend;
 }
 
 static $loadModules() {
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  ConfigurationOptions = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
  LegendLabels = goog.module.get('org.pepstock.charba.client.configuration.LegendLabels$impl');
  LegendTitle = goog.module.get('org.pepstock.charba.client.configuration.LegendTitle$impl');
  LegendEventProperty = goog.module.get('org.pepstock.charba.client.enums.LegendEventProperty$impl');
  ChartEventContext = goog.module.get('org.pepstock.charba.client.events.ChartEventContext$impl');
  LegendClickEvent = goog.module.get('org.pepstock.charba.client.events.LegendClickEvent$impl');
  LegendHoverEvent = goog.module.get('org.pepstock.charba.client.events.LegendHoverEvent$impl');
  LegendLeaveEvent = goog.module.get('org.pepstock.charba.client.events.LegendLeaveEvent$impl');
  LegendItem = goog.module.get('org.pepstock.charba.client.items.LegendItem$impl');
 }
}
IsEventProvider.$markImplementor(Legend);
$Util.$setClassMetadata(Legend, "org.pepstock.charba.client.configuration.Legend");

exports = Legend;

//# sourceMappingURL=Legend.js.map
