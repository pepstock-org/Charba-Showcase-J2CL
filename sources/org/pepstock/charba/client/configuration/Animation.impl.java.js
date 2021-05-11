goog.module('org.pepstock.charba.client.configuration.Animation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractDynamicConfiguration = goog.require('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration$impl');
const IsEventProvider = goog.require('org.pepstock.charba.client.configuration.IsEventProvider$impl');
const IsAnimation = goog.require('org.pepstock.charba.client.options.IsAnimation$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let DelayCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DelayCallback$impl');
let DurationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DurationCallback$impl');
let EasingCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.EasingCallback$impl');
let LoopCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.LoopCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
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
  /**@type {CharbaCallbackProxy<?function(Chart, ?):void>}*/
  this.f_completeCallbackProxy__org_pepstock_charba_client_configuration_Animation_;
  /**@type {CharbaCallbackProxy<?function(Chart, ?):void>}*/
  this.f_progressCallbackProxy__org_pepstock_charba_client_configuration_Animation_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_durationCallbackProxy__org_pepstock_charba_client_configuration_Animation_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_easingCallbackProxy__org_pepstock_charba_client_configuration_Animation_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_delayCallbackProxy__org_pepstock_charba_client_configuration_Animation_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/
  this.f_loopCallbackProxy__org_pepstock_charba_client_configuration_Animation_;
  /**@type {DurationCallback}*/
  this.f_durationCallback__org_pepstock_charba_client_configuration_Animation_;
  /**@type {DelayCallback}*/
  this.f_delayCallback__org_pepstock_charba_client_configuration_Animation_;
  /**@type {LoopCallback}*/
  this.f_loopCallback__org_pepstock_charba_client_configuration_Animation_;
  /**@type {EasingCallback}*/
  this.f_easingCallback__org_pepstock_charba_client_configuration_Animation_;
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
  this.f_completeCallbackProxy__org_pepstock_charba_client_configuration_Animation_.callback = (/** Chart */ context, /** ? */ nativeObject) =>{
   if (!$Equality.$same(nativeObject, null)) {
    let animationItem = AnimationItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(nativeObject)));
    this.m_onComplete__org_pepstock_charba_client_items_AnimationItem_$p_org_pepstock_charba_client_configuration_Animation(animationItem);
   }
  };
  this.f_progressCallbackProxy__org_pepstock_charba_client_configuration_Animation_.callback = (/** Chart */ context_1, /** ? */ nativeObject_1) =>{
   if (!$Equality.$same(nativeObject_1, null)) {
    let animationItem_1 = AnimationItem.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(nativeObject_1)));
    this.m_onProgress__org_pepstock_charba_client_items_AnimationItem_$p_org_pepstock_charba_client_configuration_Animation(animationItem_1);
   }
  };
  this.f_durationCallbackProxy__org_pepstock_charba_client_configuration_Animation_.callback = (/** Object */ contextFunction, /** ? */ context_2) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DatasetContext.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(context_2))), this.m_getDurationCallback__(), Integer.m_valueOf__int(Defaults.m_get__().m_getGlobal__().m_getAnimation__().m_getDuration__())), Integer)).m_intValue__();
  };
  this.f_delayCallbackProxy__org_pepstock_charba_client_configuration_Animation_.callback = (/** Object */ contextFunction_1, /** ? */ context_3) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DatasetContext.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(context_3))), this.m_getDelayCallback__(), Integer.m_valueOf__int(Defaults.m_get__().m_getGlobal__().m_getAnimation__().m_getDelay__())), Integer)).m_intValue__();
  };
  this.f_loopCallbackProxy__org_pepstock_charba_client_configuration_Animation_.callback = (/** Object */ contextFunction_2, /** ? */ context_4) =>{
   return Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DatasetContext.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(context_4))), this.m_getLoopCallback__(), Defaults.m_get__().m_getGlobal__().m_getAnimation__().m_isLoop__()), Boolean)));
  };
  this.f_easingCallbackProxy__org_pepstock_charba_client_configuration_Animation_.callback = (/** Object */ contextFunction_3, /** ? */ context_5) =>{
   return /**@type {Easing}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DatasetContext.$create__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/**@type {!ConfigurationEnvelop<?>}*/ (ConfigurationEnvelop.$create__java_lang_Object(context_5))), this.m_getEasingCallback__(), Defaults.m_get__().m_getGlobal__().m_getAnimation__().m_getEasing__()), Easing)).m_value__();
  };
 }
 /** @override */
 m_setEasing__org_pepstock_charba_client_enums_Easing(/** Easing */ easing) {
  this.m_setEasing__org_pepstock_charba_client_callbacks_EasingCallback(/**@type {EasingCallback}*/ (null));
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setEasing__org_pepstock_charba_client_enums_Easing(easing);
 }
 /** @override @return {Easing} */
 m_getEasing__() {
  return /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_getEasing__();
 }
 /** @override */
 m_setDuration__int(/** number */ milliseconds) {
  this.m_setDuration__org_pepstock_charba_client_callbacks_DurationCallback(null);
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
  this.m_setDelay__org_pepstock_charba_client_callbacks_DelayCallback(null);
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setDelay__int(delay);
 }
 /** @override @return {number} */
 m_getDelay__() {
  return /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_getDelay__();
 }
 /** @override */
 m_setLoop__boolean(/** boolean */ loop) {
  this.m_setLoop__org_pepstock_charba_client_callbacks_LoopCallback(null);
  /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_setLoop__boolean(loop);
 }
 /** @override @return {boolean} */
 m_isLoop__() {
  return /**@type {IsAnimation}*/ ($Casts.$to(this.m_checkAndGet___$pp_org_pepstock_charba_client_configuration(), IsAnimation)).m_isLoop__();
 }
 /** @return {DurationCallback} */
 m_getDurationCallback__() {
  return this.f_durationCallback__org_pepstock_charba_client_configuration_Animation_;
 }
 
 m_setDuration__org_pepstock_charba_client_callbacks_DurationCallback(/** DurationCallback */ durationCallback) {
  this.f_durationCallback__org_pepstock_charba_client_configuration_Animation_ = durationCallback;
  this.f_chart__org_pepstock_charba_client_configuration_Animation_.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_client_configuration_Animation_.m_getOptions__().m_getConfiguration__(), ExtendedOptions)).m_getAnimation__(), Property.f_DURATION__org_pepstock_charba_client_configuration_Animation_Property, durationCallback, this.f_durationCallbackProxy__org_pepstock_charba_client_configuration_Animation_);
 }
 /** @return {DelayCallback} */
 m_getDelayCallback__() {
  return this.f_delayCallback__org_pepstock_charba_client_configuration_Animation_;
 }
 
 m_setDelay__org_pepstock_charba_client_callbacks_DelayCallback(/** DelayCallback */ delayCallback) {
  this.f_delayCallback__org_pepstock_charba_client_configuration_Animation_ = delayCallback;
  this.f_chart__org_pepstock_charba_client_configuration_Animation_.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_client_configuration_Animation_.m_getOptions__().m_getConfiguration__(), ExtendedOptions)).m_getAnimation__(), Property.f_DELAY__org_pepstock_charba_client_configuration_Animation_Property, delayCallback, this.f_delayCallbackProxy__org_pepstock_charba_client_configuration_Animation_);
 }
 /** @return {LoopCallback} */
 m_getLoopCallback__() {
  return this.f_loopCallback__org_pepstock_charba_client_configuration_Animation_;
 }
 
 m_setLoop__org_pepstock_charba_client_callbacks_LoopCallback(/** LoopCallback */ loopCallback) {
  this.f_loopCallback__org_pepstock_charba_client_configuration_Animation_ = loopCallback;
  this.f_chart__org_pepstock_charba_client_configuration_Animation_.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_client_configuration_Animation_.m_getOptions__().m_getConfiguration__(), ExtendedOptions)).m_getAnimation__(), Property.f_LOOP__org_pepstock_charba_client_configuration_Animation_Property, loopCallback, this.f_loopCallbackProxy__org_pepstock_charba_client_configuration_Animation_);
 }
 /** @return {EasingCallback} */
 m_getEasingCallback__() {
  return this.f_easingCallback__org_pepstock_charba_client_configuration_Animation_;
 }
 
 m_setEasing__org_pepstock_charba_client_callbacks_EasingCallback(/** EasingCallback */ easingCallback) {
  this.f_easingCallback__org_pepstock_charba_client_configuration_Animation_ = easingCallback;
  this.f_chart__org_pepstock_charba_client_configuration_Animation_.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(/**@type {ExtendedOptions}*/ ($Casts.$to(this.f_chart__org_pepstock_charba_client_configuration_Animation_.m_getOptions__().m_getConfiguration__(), ExtendedOptions)).m_getAnimation__(), Property.f_EASING__org_pepstock_charba_client_configuration_Animation_Property, easingCallback, this.f_easingCallbackProxy__org_pepstock_charba_client_configuration_Animation_);
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
  this.f_completeCallbackProxy__org_pepstock_charba_client_configuration_Animation_ = /**@type {CharbaCallbackProxy<?function(Chart, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_progressCallbackProxy__org_pepstock_charba_client_configuration_Animation_ = /**@type {CharbaCallbackProxy<?function(Chart, ?):void>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_durationCallbackProxy__org_pepstock_charba_client_configuration_Animation_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_easingCallbackProxy__org_pepstock_charba_client_configuration_Animation_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_delayCallbackProxy__org_pepstock_charba_client_configuration_Animation_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_loopCallbackProxy__org_pepstock_charba_client_configuration_Animation_ = /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_durationCallback__org_pepstock_charba_client_configuration_Animation_ = null;
  this.f_delayCallback__org_pepstock_charba_client_configuration_Animation_ = null;
  this.f_loopCallback__org_pepstock_charba_client_configuration_Animation_ = null;
  this.f_easingCallback__org_pepstock_charba_client_configuration_Animation_ = null;
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
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  DatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.DatasetContext$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.Animation.Property$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  ConfigurationOptions = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
  DOMBuilder = goog.module.get('org.pepstock.charba.client.dom.DOMBuilder$impl');
  Easing = goog.module.get('org.pepstock.charba.client.enums.Easing$impl');
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
