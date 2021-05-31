goog.module('org.pepstock.charba.client.configuration.Animation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDynamicConfiguration = goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration$impl');
const IsEventProvider = goog.require('org.pepstock.charba.client.configuration.IsEventProvider$impl');
const IsAnimation = goog.require('org.pepstock.charba.client.options.IsAnimation$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let DelayCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DelayCallback$impl');
let DurationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DurationCallback$impl');
let EasingCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.EasingCallback$impl');
let LoopCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.LoopCallback$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.Animation.Property$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let DOMBuilder = goog.forwardDeclare('org.pepstock.charba.client.dom.DOMBuilder$impl');
let Easing = goog.forwardDeclare('org.pepstock.charba.client.enums.Easing$impl');
let AddHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AddHandlerEvent$impl');
let AnimationCompleteEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AnimationCompleteEvent$impl');
let AnimationProgressEvent = goog.forwardDeclare('org.pepstock.charba.client.events.AnimationProgressEvent$impl');
let RemoveHandlerEvent = goog.forwardDeclare('org.pepstock.charba.client.events.RemoveHandlerEvent$impl');
let AnimationItem = goog.forwardDeclare('org.pepstock.charba.client.items.AnimationItem$impl');
let ExtendedOptions = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions$impl');
let HasAnimationOptions = goog.forwardDeclare('org.pepstock.charba.client.options.HasAnimationOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractDynamicConfiguration<IsAnimation>}
 * @implements {IsEventProvider}
 * @implements {IsAnimation}
 */
class Animation extends AbstractDynamicConfiguration {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):void>}*/
  this.f_completeCallbackProxy__org_pepstock_charba_client_configuration_Animation_;
  /**@type {CharbaCallbackProxy<?function(?):void>}*/
  this.f_progressCallbackProxy__org_pepstock_charba_client_configuration_Animation_;
  /**@type {number}*/
  this.f_onCompleteHandlers__org_pepstock_charba_client_configuration_Animation_ = 0;
  /**@type {number}*/
  this.f_onProgressHandlers__org_pepstock_charba_client_configuration_Animation_ = 0;
  /**@type {IsChart}*/
  this.f_chart__org_pepstock_charba_client_configuration_Animation_;
  /**@type {HasAnimationOptions}*/
  this.f_options__org_pepstock_charba_client_configuration_Animation_;
 }
 /** @return {!Animation} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_HasAnimationOptions__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsChart */ chart, /** HasAnimationOptions */ options, /** IsProvider<IsAnimation> */ provider) {
  Animation.$clinit();
  let $instance = new Animation();
  $instance.$ctor__org_pepstock_charba_client_configuration_Animation__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_HasAnimationOptions__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(chart, options, provider);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Animation__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_options_HasAnimationOptions__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(/** IsChart */ chart, /** HasAnimationOptions */ options, /** IsProvider<IsAnimation> */ provider) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(provider);
  this.$init___$p_org_pepstock_charba_client_configuration_Animation();
  this.f_chart__org_pepstock_charba_client_configuration_Animation_ = IsChart.m_checkAndGetIfValid__org_pepstock_charba_client_IsChart(chart);
  this.f_options__org_pepstock_charba_client_configuration_Animation_ = options;
  IsEventProvider.m_register__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_IsEventProvider(this.f_chart__org_pepstock_charba_client_configuration_Animation_, this);
  this.f_completeCallbackProxy__org_pepstock_charba_client_configuration_Animation_.callback = (/** ? */ nativeObject) =>{
   if (!$Equality.$same(nativeObject, null)) {
    let animationItem = AnimationItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(nativeObject)));
    this.m_onComplete__org_pepstock_charba_client_items_AnimationItem_$p_org_pepstock_charba_client_configuration_Animation(animationItem);
   }
  };
  this.f_progressCallbackProxy__org_pepstock_charba_client_configuration_Animation_.callback = (/** ? */ nativeObject_1) =>{
   if (!$Equality.$same(nativeObject_1, null)) {
    let animationItem_1 = AnimationItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(nativeObject_1)));
    this.m_onProgress__org_pepstock_charba_client_items_AnimationItem_$p_org_pepstock_charba_client_configuration_Animation(animationItem_1);
   }
  };
 }
 /** @override */
 m_setEasing__org_pepstock_charba_client_enums_Easing(/** Easing */ easing) {
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setEasing__org_pepstock_charba_client_enums_Easing(easing);
 }
 /** @override @return {Easing} */
 m_getEasing__() {
  return /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_getEasing__();
 }
 /** @override */
 m_setDuration__int(/** number */ milliseconds) {
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setDuration__int(milliseconds);
 }
 /** @override @return {number} */
 m_getDuration__() {
  return /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_getDuration__();
 }
 /** @override */
 m_setAnimateRotate__boolean(/** boolean */ animateRotate) {
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setAnimateRotate__boolean(animateRotate);
 }
 /** @override @return {boolean} */
 m_isAnimateRotate__() {
  return /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_isAnimateRotate__();
 }
 /** @override */
 m_setAnimateScale__boolean(/** boolean */ animateScale) {
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setAnimateScale__boolean(animateScale);
 }
 /** @override @return {boolean} */
 m_isAnimateScale__() {
  return /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_isAnimateScale__();
 }
 /** @override */
 m_setDelay__int(/** number */ delay) {
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setDelay__int(delay);
 }
 /** @override @return {number} */
 m_getDelay__() {
  return /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_getDelay__();
 }
 /** @override */
 m_setLoop__boolean(/** boolean */ loop) {
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setLoop__boolean(loop);
 }
 /** @override @return {boolean} */
 m_isLoop__() {
  return /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_isLoop__();
 }
 /** @override @return {DurationCallback} */
 m_getDurationCallback__() {
  return /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_getDurationCallback__();
 }
 /** @override */
 m_setDuration__org_pepstock_charba_client_callbacks_DurationCallback(/** DurationCallback */ durationCallback) {
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setDuration__org_pepstock_charba_client_callbacks_DurationCallback(durationCallback);
 }
 /** @override */
 m_setDuration__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ durationCallback) {
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setDuration__org_pepstock_charba_client_callbacks_NativeCallback(durationCallback);
 }
 /** @override @return {DelayCallback} */
 m_getDelayCallback__() {
  return /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_getDelayCallback__();
 }
 /** @override */
 m_setDelay__org_pepstock_charba_client_callbacks_DelayCallback(/** DelayCallback */ delayCallback) {
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setDelay__org_pepstock_charba_client_callbacks_DelayCallback(delayCallback);
 }
 /** @override */
 m_setDelay__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ delayCallback) {
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setDelay__org_pepstock_charba_client_callbacks_NativeCallback(delayCallback);
 }
 /** @override @return {LoopCallback} */
 m_getLoopCallback__() {
  return /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_getLoopCallback__();
 }
 /** @override */
 m_setLoop__org_pepstock_charba_client_callbacks_LoopCallback(/** LoopCallback */ loopCallback) {
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setLoop__org_pepstock_charba_client_callbacks_LoopCallback(loopCallback);
 }
 /** @override */
 m_setLoop__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ loopCallback) {
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setLoop__org_pepstock_charba_client_callbacks_NativeCallback(loopCallback);
 }
 /** @override @return {EasingCallback} */
 m_getEasingCallback__() {
  return /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_getEasingCallback__();
 }
 /** @override */
 m_setEasing__org_pepstock_charba_client_callbacks_EasingCallback(/** EasingCallback */ easingCallback) {
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setEasing__org_pepstock_charba_client_callbacks_EasingCallback(easingCallback);
 }
 /** @override */
 m_setEasing__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ easingCallback) {
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setEasing__org_pepstock_charba_client_callbacks_NativeCallback(easingCallback);
 }
 /** @override */
 m_onAdd__org_pepstock_charba_client_events_AddHandlerEvent(/** AddHandlerEvent */ event) {
  if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(AnimationCompleteEvent.f_TYPE__org_pepstock_charba_client_events_AnimationCompleteEvent)) {
   if (this.f_onCompleteHandlers__org_pepstock_charba_client_configuration_Animation_ == 0) {
    /**@type {ExtendedOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_client_configuration_Animation_.m_getOptions__().m_getConfiguration__(), ExtendedOptions)).m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(this.f_options__org_pepstock_charba_client_configuration_Animation_.m_getAnimation__(), Property.f_ON_COMPLETE__org_pepstock_charba_client_configuration_Animation_Property, /**@type {!ConfigurationEnvelop<?function():void>}*/ (ConfigurationEnvelop.$create__java_lang_Object(this.f_completeCallbackProxy__org_pepstock_charba_client_configuration_Animation_.proxy)));
   }
   this.f_onCompleteHandlers__org_pepstock_charba_client_configuration_Animation_ = this.f_onCompleteHandlers__org_pepstock_charba_client_configuration_Animation_ + 1 | 0;
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(AnimationProgressEvent.f_TYPE__org_pepstock_charba_client_events_AnimationProgressEvent)) {
   if (this.f_onProgressHandlers__org_pepstock_charba_client_configuration_Animation_ == 0) {
    /**@type {ExtendedOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_client_configuration_Animation_.m_getOptions__().m_getConfiguration__(), ExtendedOptions)).m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(this.f_options__org_pepstock_charba_client_configuration_Animation_.m_getAnimation__(), Property.f_ON_PROGRESS__org_pepstock_charba_client_configuration_Animation_Property, /**@type {!ConfigurationEnvelop<?function():void>}*/ (ConfigurationEnvelop.$create__java_lang_Object(this.f_progressCallbackProxy__org_pepstock_charba_client_configuration_Animation_.proxy)));
   }
   this.f_onProgressHandlers__org_pepstock_charba_client_configuration_Animation_ = this.f_onProgressHandlers__org_pepstock_charba_client_configuration_Animation_ + 1 | 0;
  }
 }
 /** @override */
 m_onRemove__org_pepstock_charba_client_events_RemoveHandlerEvent(/** RemoveHandlerEvent */ event) {
  if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(AnimationCompleteEvent.f_TYPE__org_pepstock_charba_client_events_AnimationCompleteEvent)) {
   this.f_onCompleteHandlers__org_pepstock_charba_client_configuration_Animation_ = this.f_onCompleteHandlers__org_pepstock_charba_client_configuration_Animation_ - 1 | 0;
   if (this.f_onCompleteHandlers__org_pepstock_charba_client_configuration_Animation_ == 0) {
    /**@type {ExtendedOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_client_configuration_Animation_.m_getOptions__().m_getConfiguration__(), ExtendedOptions)).m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(this.f_options__org_pepstock_charba_client_configuration_Animation_.m_getAnimation__(), Property.f_ON_COMPLETE__org_pepstock_charba_client_configuration_Animation_Property, ConfigurationOptions.f_RESET_CALLBACK_ENVELOP__org_pepstock_charba_client_configuration_ConfigurationOptions);
   }
  } else if (event.m_isRecognize__org_pepstock_charba_client_events_EventType(AnimationProgressEvent.f_TYPE__org_pepstock_charba_client_events_AnimationProgressEvent)) {
   this.f_onProgressHandlers__org_pepstock_charba_client_configuration_Animation_ = this.f_onProgressHandlers__org_pepstock_charba_client_configuration_Animation_ - 1 | 0;
   if (this.f_onProgressHandlers__org_pepstock_charba_client_configuration_Animation_ == 0) {
    /**@type {ExtendedOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_client_configuration_Animation_.m_getOptions__().m_getConfiguration__(), ExtendedOptions)).m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(this.f_options__org_pepstock_charba_client_configuration_Animation_.m_getAnimation__(), Property.f_ON_PROGRESS__org_pepstock_charba_client_configuration_Animation_Property, ConfigurationOptions.f_RESET_CALLBACK_ENVELOP__org_pepstock_charba_client_configuration_ConfigurationOptions);
   }
  }
 }
 
 m_onProgress__org_pepstock_charba_client_items_AnimationItem_$p_org_pepstock_charba_client_configuration_Animation(/** AnimationItem */ item) {
  let event = DOMBuilder.m_get__().m_createChangeEvent__();
  this.f_chart__org_pepstock_charba_client_configuration_Animation_.m_fireEvent__org_pepstock_charba_client_events_Event(AnimationProgressEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_AnimationItem(event, item));
 }
 
 m_onComplete__org_pepstock_charba_client_items_AnimationItem_$p_org_pepstock_charba_client_configuration_Animation(/** AnimationItem */ item) {
  let event = DOMBuilder.m_get__().m_createChangeEvent__();
  this.f_chart__org_pepstock_charba_client_configuration_Animation_.m_fireEvent__org_pepstock_charba_client_events_Event(AnimationCompleteEvent.$create__org_pepstock_charba_client_dom_BaseNativeEvent__org_pepstock_charba_client_items_AnimationItem(event, item));
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_Animation() {
  this.f_completeCallbackProxy__org_pepstock_charba_client_configuration_Animation_ = /**@type {CharbaCallbackProxy<?function(?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_progressCallbackProxy__org_pepstock_charba_client_configuration_Animation_ = /**@type {CharbaCallbackProxy<?function(?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_onCompleteHandlers__org_pepstock_charba_client_configuration_Animation_ = 0;
  this.f_onProgressHandlers__org_pepstock_charba_client_configuration_Animation_ = 0;
 }
 
 static $clinit() {
  Animation.$clinit = () =>{};
  Animation.$loadModules();
  AbstractDynamicConfiguration.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Animation;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.Animation.Property$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  ConfigurationOptions = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  AnimationCompleteEvent = goog.module.get('org.pepstock.charba.client.events.AnimationCompleteEvent$impl');
  AnimationProgressEvent = goog.module.get('org.pepstock.charba.client.events.AnimationProgressEvent$impl');
  AnimationItem = goog.module.get('org.pepstock.charba.client.items.AnimationItem$impl');
  ExtendedOptions = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsEventProvider.$markImplementor(Animation);
IsAnimation.$markImplementor(Animation);
$Util.$setClassMetadata(Animation, "org.pepstock.charba.client.configuration.Animation");

exports = Animation;

//# sourceMappingURL=Animation.js.map
