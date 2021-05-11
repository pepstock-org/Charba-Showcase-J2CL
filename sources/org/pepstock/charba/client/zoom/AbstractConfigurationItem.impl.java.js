goog.module('org.pepstock.charba.client.zoom.AbstractConfigurationItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
const IsDefaultConfigurationItem = goog.require('org.pepstock.charba.client.zoom.IsDefaultConfigurationItem$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let InteractionAxis = goog.forwardDeclare('org.pepstock.charba.client.enums.InteractionAxis$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.zoom.AbstractConfigurationItem.Property$impl');
let ZoomContext = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomContext$impl');
let ZoomPlugin = goog.forwardDeclare('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
let CompletedCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.CompletedCallback$impl');
let ModeCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.ModeCallback$impl');
let ProgressCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.ProgressCallback$impl');
let RejectedCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.RejectedCallback$impl');
let StartCallback = goog.forwardDeclare('org.pepstock.charba.client.zoom.callbacks.StartCallback$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {IsDefaultConfigurationItem}
 */
class AbstractConfigurationItem extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_modeCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_overScaleModeCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_progressCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_completeCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/
  this.f_rejectCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/
  this.f_startCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_;
 }
 
 $ctor__org_pepstock_charba_client_zoom_AbstractConfigurationItem__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.$init___$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem();
  this.m_setNewIncrementalId__();
  this.f_modeCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.callback = (/** Object */ contextFunction, /** ? */ context) =>{
   return /**@type {InteractionAxis}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(context), this.m_getModeCallback__(), this.m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom().m_getMode__()), InteractionAxis)).m_value__();
  };
  this.f_overScaleModeCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.callback = (/** Object */ contextFunction_1, /** ? */ context_1) =>{
   return /**@type {InteractionAxis}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(context_1), this.m_getOverScaleModeCallback__(), this.m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom().m_getOverScaleMode__()), InteractionAxis)).m_value__();
  };
  this.f_progressCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.callback = (/** Object */ contextFunction_2, /** ? */ context_2) =>{
   this.m_onProgress__org_pepstock_charba_client_zoom_ZoomContext_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(context_2));
  };
  this.f_completeCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.callback = (/** Object */ contextFunction_3, /** ? */ context_3) =>{
   this.m_onCompleted__org_pepstock_charba_client_zoom_ZoomContext_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(context_3));
  };
  this.f_rejectCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.callback = (/** Object */ contextFunction_4, /** ? */ context_4) =>{
   this.m_onRejected__org_pepstock_charba_client_zoom_ZoomContext_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(context_4));
  };
  this.f_startCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.callback = (/** Object */ contextFunction_5, /** ? */ context_5) =>{
   return this.m_onStart__org_pepstock_charba_client_zoom_ZoomContext_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(context_5));
  };
 }
 /** @abstract @return {IsDefaultConfigurationItem} */
 m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom() {}
 /** @abstract @return {CallbackPropertyHandler<ProgressCallback>} */
 m_getProgessPropertyHandler___$pp_org_pepstock_charba_client_zoom() {}
 /** @abstract @return {CallbackPropertyHandler<CompletedCallback>} */
 m_getCompletedPropertyHandler___$pp_org_pepstock_charba_client_zoom() {}
 /** @abstract @return {CallbackPropertyHandler<RejectedCallback>} */
 m_getRejectedPropertyHandler___$pp_org_pepstock_charba_client_zoom() {}
 /** @abstract @return {CallbackPropertyHandler<StartCallback>} */
 m_getStartPropertyHandler___$pp_org_pepstock_charba_client_zoom() {}
 
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_zoom_AbstractConfigurationItem_Property, enabled);
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_zoom_AbstractConfigurationItem_Property, this.m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom().m_isEnabled__());
 }
 
 m_setMode__org_pepstock_charba_client_enums_InteractionAxis(/** InteractionAxis */ mode) {
  this.m_setMode__org_pepstock_charba_client_zoom_callbacks_ModeCallback(/**@type {ModeCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem_Property, mode);
 }
 /** @override @return {InteractionAxis} */
 m_getMode__() {
  if ($Equality.$same(this.m_getModeCallback__(), null)) {
   return /**@type {InteractionAxis}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem_Property, InteractionAxis.m_values__(), this.m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom().m_getMode__()), InteractionAxis));
  }
  return this.m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom().m_getMode__();
 }
 
 m_setOverScaleMode__org_pepstock_charba_client_enums_InteractionAxis(/** InteractionAxis */ mode) {
  this.m_setOverScaleMode__org_pepstock_charba_client_zoom_callbacks_ModeCallback(/**@type {ModeCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_OVER_SCALE_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem_Property, mode);
 }
 /** @override @return {InteractionAxis} */
 m_getOverScaleMode__() {
  return /**@type {InteractionAxis}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_OVER_SCALE_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem_Property, InteractionAxis.m_values__(), this.m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom().m_getOverScaleMode__()), InteractionAxis));
 }
 
 m_setThreshold__double(/** number */ threshold) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_THRESHOLD__org_pepstock_charba_client_zoom_AbstractConfigurationItem_Property, Checker.m_positiveOrZero__double(threshold));
 }
 /** @override @return {number} */
 m_getThreshold__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_THRESHOLD__org_pepstock_charba_client_zoom_AbstractConfigurationItem_Property, this.m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom().m_getThreshold__());
 }
 /** @override @return {ModeCallback} */
 m_getModeCallback__() {
  return /**@type {ModeCallback}*/ ($Casts.$to(AbstractConfigurationItem.f_MODE_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom().m_getModeCallback__()), ModeCallback));
 }
 
 m_setMode__org_pepstock_charba_client_zoom_callbacks_ModeCallback(/** ModeCallback */ modeCallback) {
  AbstractConfigurationItem.f_MODE_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, modeCallback, this.f_modeCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.proxy);
 }
 /** @override @return {ModeCallback} */
 m_getOverScaleModeCallback__() {
  return /**@type {ModeCallback}*/ ($Casts.$to(AbstractConfigurationItem.f_OVER_SCALE_MODE_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom().m_getOverScaleModeCallback__()), ModeCallback));
 }
 
 m_setOverScaleMode__org_pepstock_charba_client_zoom_callbacks_ModeCallback(/** ModeCallback */ modeCallback) {
  AbstractConfigurationItem.f_OVER_SCALE_MODE_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, modeCallback, this.f_overScaleModeCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.proxy);
 }
 /** @override @return {ProgressCallback} */
 m_getProgressCallback__() {
  return /**@type {ProgressCallback}*/ ($Casts.$to(this.m_getProgessPropertyHandler___$pp_org_pepstock_charba_client_zoom().m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom().m_getProgressCallback__()), ProgressCallback));
 }
 
 m_setProgressCallback__org_pepstock_charba_client_zoom_callbacks_ProgressCallback(/** ProgressCallback */ progressCallback) {
  this.m_getProgessPropertyHandler___$pp_org_pepstock_charba_client_zoom().m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, progressCallback, this.f_progressCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.proxy);
 }
 /** @override @return {CompletedCallback} */
 m_getCompletedCallback__() {
  return /**@type {CompletedCallback}*/ ($Casts.$to(this.m_getCompletedPropertyHandler___$pp_org_pepstock_charba_client_zoom().m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom().m_getCompletedCallback__()), CompletedCallback));
 }
 
 m_setCompletedCallback__org_pepstock_charba_client_zoom_callbacks_CompletedCallback(/** CompletedCallback */ completeCallback) {
  this.m_getCompletedPropertyHandler___$pp_org_pepstock_charba_client_zoom().m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, completeCallback, this.f_completeCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.proxy);
 }
 /** @override @return {RejectedCallback} */
 m_getRejectedCallback__() {
  return /**@type {RejectedCallback}*/ ($Casts.$to(this.m_getRejectedPropertyHandler___$pp_org_pepstock_charba_client_zoom().m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom().m_getRejectedCallback__()), RejectedCallback));
 }
 
 m_setRejectedCallback__org_pepstock_charba_client_zoom_callbacks_RejectedCallback(/** RejectedCallback */ rejectCallback) {
  this.m_getRejectedPropertyHandler___$pp_org_pepstock_charba_client_zoom().m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, rejectCallback, this.f_rejectCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.proxy);
 }
 /** @override @return {StartCallback} */
 m_getStartCallback__() {
  return /**@type {StartCallback}*/ ($Casts.$to(this.m_getStartPropertyHandler___$pp_org_pepstock_charba_client_zoom().m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.m_getDefaultsOptions___$pp_org_pepstock_charba_client_zoom().m_getStartCallback__()), StartCallback));
 }
 
 m_setStartCallback__org_pepstock_charba_client_zoom_callbacks_StartCallback(/** StartCallback */ startCallback) {
  this.m_getStartPropertyHandler___$pp_org_pepstock_charba_client_zoom().m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, ZoomPlugin.f_ID__org_pepstock_charba_client_zoom_ZoomPlugin, startCallback, this.f_startCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_.proxy);
 }
 /** @return {ZoomContext} */
 m_createContext__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(/** ? */ context) {
  return ZoomContext.$create__org_pepstock_charba_client_zoom_AbstractConfigurationItem__org_pepstock_charba_client_commons_NativeObject(this, context);
 }
 
 m_onProgress__org_pepstock_charba_client_zoom_ZoomContext_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(/** ZoomContext */ context) {
  let progressCallback = this.m_getProgressCallback__();
  if (this.m_isFunctionInvocationConsistent__java_lang_Object__org_pepstock_charba_client_zoom_ZoomContext_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(progressCallback, context)) {
   progressCallback.m_onProgress__org_pepstock_charba_client_zoom_ZoomContext(context);
  }
 }
 
 m_onCompleted__org_pepstock_charba_client_zoom_ZoomContext_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(/** ZoomContext */ context) {
  let completeCallback = this.m_getCompletedCallback__();
  if (this.m_isFunctionInvocationConsistent__java_lang_Object__org_pepstock_charba_client_zoom_ZoomContext_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(completeCallback, context)) {
   completeCallback.m_onCompleted__org_pepstock_charba_client_zoom_ZoomContext(context);
  }
 }
 
 m_onRejected__org_pepstock_charba_client_zoom_ZoomContext_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(/** ZoomContext */ context) {
  let rejectCallback = this.m_getRejectedCallback__();
  if (this.m_isFunctionInvocationConsistent__java_lang_Object__org_pepstock_charba_client_zoom_ZoomContext_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(rejectCallback, context)) {
   rejectCallback.m_onRejected__org_pepstock_charba_client_zoom_ZoomContext(context);
  }
 }
 /** @return {boolean} */
 m_onStart__org_pepstock_charba_client_zoom_ZoomContext_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(/** ZoomContext */ context) {
  let startCallback = this.m_getStartCallback__();
  if (this.m_isFunctionInvocationConsistent__java_lang_Object__org_pepstock_charba_client_zoom_ZoomContext_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(startCallback, context)) {
   return startCallback.m_onStart__org_pepstock_charba_client_zoom_ZoomContext(context);
  }
  return true;
 }
 /** @return {boolean} */
 m_isFunctionInvocationConsistent__java_lang_Object__org_pepstock_charba_client_zoom_ZoomContext_$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem(/** * */ function_1, /** ZoomContext */ context) {
  return !$Equality.$same(function_1, null) && !$Equality.$same(context, null) && IsChart.m_isValid__org_pepstock_charba_client_IsChart(context.m_getChart__());
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_zoom() {
  return this.m_getNativeObject__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_zoom_AbstractConfigurationItem() {
  this.f_modeCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_overScaleModeCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_progressCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_completeCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_rejectCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_startCallbackProxy__org_pepstock_charba_client_zoom_AbstractConfigurationItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 /** @return {InteractionAxis} */
 static get f_DEFAULT_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem() {
  return (AbstractConfigurationItem.$clinit(), AbstractConfigurationItem.$static_DEFAULT_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem);
 }
 /** @return {InteractionAxis} */
 static get f_DEFAULT_OVER_SCALE_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem() {
  return (AbstractConfigurationItem.$clinit(), AbstractConfigurationItem.$static_DEFAULT_OVER_SCALE_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem);
 }
 
 static $clinit() {
  AbstractConfigurationItem.$clinit = () =>{};
  AbstractConfigurationItem.$loadModules();
  NativeObjectContainer.$clinit();
  IsDefaultConfigurationItem.$clinit();
  AbstractConfigurationItem.f_MODE_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_AbstractConfigurationItem_ = /**@type {!CallbackPropertyHandler<ModeCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem_Property));
  AbstractConfigurationItem.f_OVER_SCALE_MODE_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_AbstractConfigurationItem_ = /**@type {!CallbackPropertyHandler<ModeCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_OVER_SCALE_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem_Property));
  AbstractConfigurationItem.$static_DEFAULT_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem = InteractionAxis.f_XY__org_pepstock_charba_client_enums_InteractionAxis;
  AbstractConfigurationItem.$static_DEFAULT_OVER_SCALE_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem = InteractionAxis.f_XY__org_pepstock_charba_client_enums_InteractionAxis;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractConfigurationItem;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  InteractionAxis = goog.module.get('org.pepstock.charba.client.enums.InteractionAxis$impl');
  Property = goog.module.get('org.pepstock.charba.client.zoom.AbstractConfigurationItem.Property$impl');
  ZoomContext = goog.module.get('org.pepstock.charba.client.zoom.ZoomContext$impl');
  ZoomPlugin = goog.module.get('org.pepstock.charba.client.zoom.ZoomPlugin$impl');
  CompletedCallback = goog.module.get('org.pepstock.charba.client.zoom.callbacks.CompletedCallback$impl');
  ModeCallback = goog.module.get('org.pepstock.charba.client.zoom.callbacks.ModeCallback$impl');
  ProgressCallback = goog.module.get('org.pepstock.charba.client.zoom.callbacks.ProgressCallback$impl');
  RejectedCallback = goog.module.get('org.pepstock.charba.client.zoom.callbacks.RejectedCallback$impl');
  StartCallback = goog.module.get('org.pepstock.charba.client.zoom.callbacks.StartCallback$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {CallbackPropertyHandler<ModeCallback>}*/
AbstractConfigurationItem.f_MODE_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_AbstractConfigurationItem_;
/**@type {CallbackPropertyHandler<ModeCallback>}*/
AbstractConfigurationItem.f_OVER_SCALE_MODE_PROPERTY_HANDLER__org_pepstock_charba_client_zoom_AbstractConfigurationItem_;
/**@const {boolean}*/
AbstractConfigurationItem.f_DEFAULT_ENABLED__org_pepstock_charba_client_zoom_AbstractConfigurationItem = false;
/**@private {InteractionAxis}*/
AbstractConfigurationItem.$static_DEFAULT_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem;
/**@private {InteractionAxis}*/
AbstractConfigurationItem.$static_DEFAULT_OVER_SCALE_MODE__org_pepstock_charba_client_zoom_AbstractConfigurationItem;
IsDefaultConfigurationItem.$markImplementor(AbstractConfigurationItem);
$Util.$setClassMetadata(AbstractConfigurationItem, "org.pepstock.charba.client.zoom.AbstractConfigurationItem");

exports = AbstractConfigurationItem;

//# sourceMappingURL=AbstractConfigurationItem.js.map
