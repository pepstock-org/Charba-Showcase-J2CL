goog.module('org.pepstock.charba.client.options.AbstractAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const HasCallbackScope = goog.require('org.pepstock.charba.client.commons.HasCallbackScope$impl');
const IsDefaultBaseAnimation = goog.require('org.pepstock.charba.client.defaults.IsDefaultBaseAnimation$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let DelayCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DelayCallback$impl');
let DurationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DurationCallback$impl');
let EasingCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.EasingCallback$impl');
let LoopCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.LoopCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Easing = goog.forwardDeclare('org.pepstock.charba.client.enums.Easing$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractAnimation.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T, D
 * @implements {IsDefaultBaseAnimation}
 * @implements {HasCallbackScope}
 */
class AbstractAnimation extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_durationCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_;
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_easingCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_delayCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_;
  /**@type {CharbaCallbackProxy<?function(?):boolean>}*/
  this.f_loopCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_;
  /**@type {D}*/
  this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_;
 }
 
 $ctor__org_pepstock_charba_client_options_AbstractAnimation__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultBaseAnimation__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** T */ childKey, /** D */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  this.$init___$p_org_pepstock_charba_client_options_AbstractAnimation();
  this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_ = /**@type {D}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultValues), IsDefaultBaseAnimation));
  this.m_setNewIncrementalId__();
  this.f_durationCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_.callback = (/** ? */ context) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DatasetContext.$create__org_pepstock_charba_client_commons_NativeObject(context), this.m_getDurationCallback__(), Integer.m_valueOf__int(/**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_getDuration__())), Integer)).m_intValue__();
  };
  this.f_delayCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_.callback = (/** ? */ context_1) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DatasetContext.$create__org_pepstock_charba_client_commons_NativeObject(context_1), this.m_getDelayCallback__(), Integer.m_valueOf__int(/**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_getDelay__())), Integer)).m_intValue__();
  };
  this.f_loopCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_.callback = (/** ? */ context_2) =>{
   return Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DatasetContext.$create__org_pepstock_charba_client_commons_NativeObject(context_2), this.m_getLoopCallback__(), /**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_isLoop__()), Boolean)));
  };
  this.f_easingCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_.callback = (/** ? */ context_3) =>{
   return /**@type {Easing}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DatasetContext.$create__org_pepstock_charba_client_commons_NativeObject(context_3), this.m_getEasingCallback__(), /**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_getEasing__()), Easing)).m_value__();
  };
 }
 /** @return {D} */
 m_getDefaultValues__() {
  return this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_;
 }
 /** @override @return {?string} */
 m_getScope__() {
  return HasCallbackScope.m_extractScope__org_pepstock_charba_client_commons_AbstractNode(this);
 }
 
 m_setEasing__org_pepstock_charba_client_enums_Easing(/** Easing */ easing) {
  this.m_setEasing__org_pepstock_charba_client_callbacks_EasingCallback(/**@type {EasingCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_EASING__org_pepstock_charba_client_options_AbstractAnimation_Property, easing);
 }
 /** @override @return {Easing} */
 m_getEasing__() {
  return /**@type {Easing}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_EASING__org_pepstock_charba_client_options_AbstractAnimation_Property, Easing.m_values__(), /**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_getEasing__()), Easing));
 }
 
 m_setDuration__int(/** number */ milliseconds) {
  this.m_setDuration__org_pepstock_charba_client_callbacks_DurationCallback(/**@type {DurationCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_DURATION__org_pepstock_charba_client_options_AbstractAnimation_Property, Checker.m_positiveOrZero__int(milliseconds));
 }
 /** @override @return {number} */
 m_getDuration__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_DURATION__org_pepstock_charba_client_options_AbstractAnimation_Property, /**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_getDuration__());
 }
 
 m_setDelay__int(/** number */ delay) {
  this.m_setDelay__org_pepstock_charba_client_callbacks_DelayCallback(/**@type {DelayCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_DELAY__org_pepstock_charba_client_options_AbstractAnimation_Property, Checker.m_positiveOrZero__int(delay));
 }
 /** @override @return {number} */
 m_getDelay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_DELAY__org_pepstock_charba_client_options_AbstractAnimation_Property, /**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_getDelay__());
 }
 
 m_setLoop__boolean(/** boolean */ loop) {
  this.m_setLoop__org_pepstock_charba_client_callbacks_LoopCallback(/**@type {LoopCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_LOOP__org_pepstock_charba_client_options_AbstractAnimation_Property, loop);
 }
 /** @override @return {boolean} */
 m_isLoop__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_LOOP__org_pepstock_charba_client_options_AbstractAnimation_Property, /**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_isLoop__());
 }
 /** @override @return {DurationCallback} */
 m_getDurationCallback__() {
  return /**@type {DurationCallback}*/ ($Casts.$to(AbstractAnimation.f_DURATION_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, /**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_getDurationCallback__()), DurationCallback));
 }
 
 m_setDuration__org_pepstock_charba_client_callbacks_DurationCallback(/** DurationCallback */ durationCallback) {
  AbstractAnimation.f_DURATION_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, this.m_getScope__(), durationCallback, this.f_durationCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_.proxy);
 }
 
 m_setDuration__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ durationCallback) {
  this.m_setDuration__org_pepstock_charba_client_callbacks_DurationCallback(/**@type {DurationCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_DURATION__org_pepstock_charba_client_options_AbstractAnimation_Property, durationCallback);
 }
 /** @override @return {DelayCallback} */
 m_getDelayCallback__() {
  return /**@type {DelayCallback}*/ ($Casts.$to(AbstractAnimation.f_DELAY_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, /**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_getDelayCallback__()), DelayCallback));
 }
 
 m_setDelay__org_pepstock_charba_client_callbacks_DelayCallback(/** DelayCallback */ delayCallback) {
  AbstractAnimation.f_DELAY_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, this.m_getScope__(), delayCallback, this.f_delayCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_.proxy);
 }
 
 m_setDelay__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ delayCallback) {
  this.m_setDelay__org_pepstock_charba_client_callbacks_DelayCallback(/**@type {DelayCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_DELAY__org_pepstock_charba_client_options_AbstractAnimation_Property, delayCallback);
 }
 /** @override @return {LoopCallback} */
 m_getLoopCallback__() {
  return /**@type {LoopCallback}*/ ($Casts.$to(AbstractAnimation.f_LOOP_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, /**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_getLoopCallback__()), LoopCallback));
 }
 
 m_setLoop__org_pepstock_charba_client_callbacks_LoopCallback(/** LoopCallback */ loopCallback) {
  AbstractAnimation.f_LOOP_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, this.m_getScope__(), loopCallback, this.f_loopCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_.proxy);
 }
 
 m_setLoop__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ loopCallback) {
  this.m_setLoop__org_pepstock_charba_client_callbacks_LoopCallback(/**@type {LoopCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_LOOP__org_pepstock_charba_client_options_AbstractAnimation_Property, loopCallback);
 }
 /** @override @return {EasingCallback} */
 m_getEasingCallback__() {
  return /**@type {EasingCallback}*/ ($Casts.$to(AbstractAnimation.f_EASING_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, /**@type {IsDefaultBaseAnimation}*/ (this.f_defaultValues__org_pepstock_charba_client_options_AbstractAnimation_).m_getEasingCallback__()), EasingCallback));
 }
 
 m_setEasing__org_pepstock_charba_client_callbacks_EasingCallback(/** EasingCallback */ easingCallback) {
  AbstractAnimation.f_EASING_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, this.m_getScope__(), easingCallback, this.f_easingCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_.proxy);
 }
 
 m_setEasing__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ easingCallback) {
  this.m_setEasing__org_pepstock_charba_client_callbacks_EasingCallback(/**@type {EasingCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_EASING__org_pepstock_charba_client_options_AbstractAnimation_Property, easingCallback);
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_options() {
  return super.m_getNativeObject__();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_options_AbstractAnimation() {
  this.f_durationCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_easingCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_delayCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_loopCallbackProxy__org_pepstock_charba_client_options_AbstractAnimation_ = /**@type {CharbaCallbackProxy<?function(?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  AbstractAnimation.$clinit = () =>{};
  AbstractAnimation.$loadModules();
  AbstractNode.$clinit();
  AbstractAnimation.f_DURATION_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_ = /**@type {!CallbackPropertyHandler<DurationCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_DURATION__org_pepstock_charba_client_options_AbstractAnimation_Property));
  AbstractAnimation.f_EASING_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_ = /**@type {!CallbackPropertyHandler<EasingCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_EASING__org_pepstock_charba_client_options_AbstractAnimation_Property));
  AbstractAnimation.f_DELAY_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_ = /**@type {!CallbackPropertyHandler<DelayCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_DELAY__org_pepstock_charba_client_options_AbstractAnimation_Property));
  AbstractAnimation.f_LOOP_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_ = /**@type {!CallbackPropertyHandler<LoopCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_LOOP__org_pepstock_charba_client_options_AbstractAnimation_Property));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractAnimation;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  DelayCallback = goog.module.get('org.pepstock.charba.client.callbacks.DelayCallback$impl');
  DurationCallback = goog.module.get('org.pepstock.charba.client.callbacks.DurationCallback$impl');
  EasingCallback = goog.module.get('org.pepstock.charba.client.callbacks.EasingCallback$impl');
  LoopCallback = goog.module.get('org.pepstock.charba.client.callbacks.LoopCallback$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Easing = goog.module.get('org.pepstock.charba.client.enums.Easing$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AbstractAnimation.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {CallbackPropertyHandler<DurationCallback>}*/
AbstractAnimation.f_DURATION_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_;
/**@type {CallbackPropertyHandler<EasingCallback>}*/
AbstractAnimation.f_EASING_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_;
/**@type {CallbackPropertyHandler<DelayCallback>}*/
AbstractAnimation.f_DELAY_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_;
/**@type {CallbackPropertyHandler<LoopCallback>}*/
AbstractAnimation.f_LOOP_PROPERTY_HANDLER__org_pepstock_charba_client_options_AbstractAnimation_;
IsDefaultBaseAnimation.$markImplementor(AbstractAnimation);
HasCallbackScope.$markImplementor(AbstractAnimation);
$Util.$setClassMetadata(AbstractAnimation, "org.pepstock.charba.client.options.AbstractAnimation");

exports = AbstractAnimation;

//# sourceMappingURL=AbstractAnimation.js.map
