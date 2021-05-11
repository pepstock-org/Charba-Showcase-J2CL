goog.module('org.pepstock.charba.client.datalabels.Listeners$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
const IsDefaultListeners = goog.require('org.pepstock.charba.client.datalabels.IsDefaultListeners$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
let LabelItem = goog.forwardDeclare('org.pepstock.charba.client.datalabels.LabelItem$impl');
let Event = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Event$impl');
let ClickEventHandler = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.ClickEventHandler$impl');
let EnterEventHandler = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.EnterEventHandler$impl');
let LeaveEventHandler = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.LeaveEventHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultListeners}
 */
class Listeners extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/
  this.f_enterEventCallbackProxy__org_pepstock_charba_client_datalabels_Listeners_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/
  this.f_leaveEventCallbackProxy__org_pepstock_charba_client_datalabels_Listeners_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/
  this.f_clickEventCallbackProxy__org_pepstock_charba_client_datalabels_Listeners_;
  /**@type {LabelItem}*/
  this.f_parent__org_pepstock_charba_client_datalabels_Listeners_;
  /**@type {IsDefaultListeners}*/
  this.f_defaultOptions__org_pepstock_charba_client_datalabels_Listeners_;
 }
 /** @return {!Listeners} */
 static $create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_datalabels_IsDefaultListeners__org_pepstock_charba_client_commons_NativeObject(/** LabelItem */ parent, /** IsDefaultListeners */ defaultOptions, /** ? */ nativeObject) {
  Listeners.$clinit();
  let $instance = new Listeners();
  $instance.$ctor__org_pepstock_charba_client_datalabels_Listeners__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_datalabels_IsDefaultListeners__org_pepstock_charba_client_commons_NativeObject(parent, defaultOptions, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_Listeners__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_datalabels_IsDefaultListeners__org_pepstock_charba_client_commons_NativeObject(/** LabelItem */ parent, /** IsDefaultListeners */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.$init___$p_org_pepstock_charba_client_datalabels_Listeners();
  this.f_parent__org_pepstock_charba_client_datalabels_Listeners_ = /**@type {LabelItem}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(parent, "Parent label argument"), LabelItem));
  this.f_defaultOptions__org_pepstock_charba_client_datalabels_Listeners_ = /**@type {IsDefaultListeners}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultOptions), IsDefaultListeners));
  this.m_setNewIncrementalId__();
  this.f_enterEventCallbackProxy__org_pepstock_charba_client_datalabels_Listeners_.callback = (/** Object */ contextFunction, /** ? */ context) =>{
   return this.m_onEnter__org_pepstock_charba_client_datalabels_DataLabelsContext_$p_org_pepstock_charba_client_datalabels_Listeners(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_datalabels_Listeners_, context));
  };
  this.f_leaveEventCallbackProxy__org_pepstock_charba_client_datalabels_Listeners_.callback = (/** Object */ contextFunction_1, /** ? */ context_1) =>{
   return this.m_onLeave__org_pepstock_charba_client_datalabels_DataLabelsContext_$p_org_pepstock_charba_client_datalabels_Listeners(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_datalabels_Listeners_, context_1));
  };
  this.f_clickEventCallbackProxy__org_pepstock_charba_client_datalabels_Listeners_.callback = (/** Object */ contextFunction_2, /** ? */ context_2) =>{
   return this.m_onClick__org_pepstock_charba_client_datalabels_DataLabelsContext_$p_org_pepstock_charba_client_datalabels_Listeners(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_datalabels_Listeners_, context_2));
  };
 }
 /** @override @return {ClickEventHandler} */
 m_getClickEventHandler__() {
  return /**@type {ClickEventHandler}*/ ($Casts.$to(Listeners.f_CLICK_EVENT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_Listeners_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_Listeners_.m_getClickEventHandler__()), ClickEventHandler));
 }
 
 m_setClickEventHandler__org_pepstock_charba_client_datalabels_events_ClickEventHandler(/** ClickEventHandler */ clickEventHandler) {
  Listeners.f_CLICK_EVENT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_Listeners_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, clickEventHandler, this.f_clickEventCallbackProxy__org_pepstock_charba_client_datalabels_Listeners_.proxy);
 }
 /** @override @return {EnterEventHandler} */
 m_getEnterEventHandler__() {
  return /**@type {EnterEventHandler}*/ ($Casts.$to(Listeners.f_ENTER_EVENT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_Listeners_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_Listeners_.m_getEnterEventHandler__()), EnterEventHandler));
 }
 
 m_setEnterEventHandler__org_pepstock_charba_client_datalabels_events_EnterEventHandler(/** EnterEventHandler */ enterEventHandler) {
  Listeners.f_ENTER_EVENT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_Listeners_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, enterEventHandler, this.f_enterEventCallbackProxy__org_pepstock_charba_client_datalabels_Listeners_.proxy);
 }
 /** @override @return {LeaveEventHandler} */
 m_getLeaveEventHandler__() {
  return /**@type {LeaveEventHandler}*/ ($Casts.$to(Listeners.f_LEAVE_EVENT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_Listeners_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_Listeners_.m_getLeaveEventHandler__()), LeaveEventHandler));
 }
 
 m_setLeaveEventHandler__org_pepstock_charba_client_datalabels_events_LeaveEventHandler(/** LeaveEventHandler */ leaveEventHandler) {
  Listeners.f_LEAVE_EVENT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_Listeners_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, leaveEventHandler, this.f_leaveEventCallbackProxy__org_pepstock_charba_client_datalabels_Listeners_.proxy);
 }
 /** @return {boolean} */
 m_onClick__org_pepstock_charba_client_datalabels_DataLabelsContext_$p_org_pepstock_charba_client_datalabels_Listeners(/** DataLabelsContext */ context) {
  let clickEventHandler = this.m_getClickEventHandler__();
  if (ScriptableUtils.m_isContextConsistent__org_pepstock_charba_client_callbacks_ChartContext(context) && !$Equality.$same(clickEventHandler, null)) {
   return clickEventHandler.m_onClick__org_pepstock_charba_client_datalabels_DataLabelsContext(context);
  }
  return true;
 }
 /** @return {boolean} */
 m_onEnter__org_pepstock_charba_client_datalabels_DataLabelsContext_$p_org_pepstock_charba_client_datalabels_Listeners(/** DataLabelsContext */ context) {
  let enterEventHandler = this.m_getEnterEventHandler__();
  if (ScriptableUtils.m_isContextConsistent__org_pepstock_charba_client_callbacks_ChartContext(context) && !$Equality.$same(enterEventHandler, null)) {
   return enterEventHandler.m_onEnter__org_pepstock_charba_client_datalabels_DataLabelsContext(context);
  }
  return true;
 }
 /** @return {boolean} */
 m_onLeave__org_pepstock_charba_client_datalabels_DataLabelsContext_$p_org_pepstock_charba_client_datalabels_Listeners(/** DataLabelsContext */ context) {
  let leaveEventHandler = this.m_getLeaveEventHandler__();
  if (ScriptableUtils.m_isContextConsistent__org_pepstock_charba_client_callbacks_ChartContext(context) && !$Equality.$same(leaveEventHandler, null)) {
   return leaveEventHandler.m_onLeave__org_pepstock_charba_client_datalabels_DataLabelsContext(context);
  }
  return true;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_datalabels_Listeners() {
  this.f_enterEventCallbackProxy__org_pepstock_charba_client_datalabels_Listeners_ = /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_leaveEventCallbackProxy__org_pepstock_charba_client_datalabels_Listeners_ = /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_clickEventCallbackProxy__org_pepstock_charba_client_datalabels_Listeners_ = /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  Listeners.$clinit = () =>{};
  Listeners.$loadModules();
  NativeObjectContainer.$clinit();
  IsDefaultListeners.$clinit();
  Listeners.f_CLICK_EVENT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_Listeners_ = /**@type {!CallbackPropertyHandler<ClickEventHandler>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Event.f_CLICK__org_pepstock_charba_client_datalabels_enums_Event));
  Listeners.f_ENTER_EVENT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_Listeners_ = /**@type {!CallbackPropertyHandler<EnterEventHandler>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Event.f_ENTER__org_pepstock_charba_client_datalabels_enums_Event));
  Listeners.f_LEAVE_EVENT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_Listeners_ = /**@type {!CallbackPropertyHandler<LeaveEventHandler>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Event.f_LEAVE__org_pepstock_charba_client_datalabels_enums_Event));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Listeners;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  DataLabelsPlugin = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
  LabelItem = goog.module.get('org.pepstock.charba.client.datalabels.LabelItem$impl');
  Event = goog.module.get('org.pepstock.charba.client.datalabels.enums.Event$impl');
  ClickEventHandler = goog.module.get('org.pepstock.charba.client.datalabels.events.ClickEventHandler$impl');
  EnterEventHandler = goog.module.get('org.pepstock.charba.client.datalabels.events.EnterEventHandler$impl');
  LeaveEventHandler = goog.module.get('org.pepstock.charba.client.datalabels.events.LeaveEventHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {CallbackPropertyHandler<ClickEventHandler>}*/
Listeners.f_CLICK_EVENT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_Listeners_;
/**@type {CallbackPropertyHandler<EnterEventHandler>}*/
Listeners.f_ENTER_EVENT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_Listeners_;
/**@type {CallbackPropertyHandler<LeaveEventHandler>}*/
Listeners.f_LEAVE_EVENT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_Listeners_;
IsDefaultListeners.$markImplementor(Listeners);
$Util.$setClassMetadata(Listeners, "org.pepstock.charba.client.datalabels.Listeners");

exports = Listeners;

//# sourceMappingURL=Listeners.js.map
