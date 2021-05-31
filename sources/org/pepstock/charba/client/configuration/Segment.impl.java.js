goog.module('org.pepstock.charba.client.configuration.Segment$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ConfigurationOptionsContainer = goog.require('org.pepstock.charba.client.configuration.ConfigurationOptionsContainer$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let BorderDashCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashCallback$impl');
let BorderDashOffsetCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderDashOffsetCallback$impl');
let CapStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CapStyleCallback$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let JoinStyleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.JoinStyleCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let SegmentContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.SegmentContext$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let BaseContext = goog.forwardDeclare('org.pepstock.charba.client.configuration.Segment.BaseContext$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.Segment.Property$impl');
let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Segment extends ConfigurationOptionsContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_configuration_Segment_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_configuration_Segment_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_configuration_Segment_;
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_borderCapStyleCallbackProxy__org_pepstock_charba_client_configuration_Segment_;
  /**@type {CharbaCallbackProxy<?function(?):Array>}*/
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_configuration_Segment_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_Segment_;
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_borderJoinStyleCallbackProxy__org_pepstock_charba_client_configuration_Segment_;
  /**@type {ColorCallback<SegmentContext>}*/
  this.f_backgroundColorCallback__org_pepstock_charba_client_configuration_Segment_;
  /**@type {ColorCallback<SegmentContext>}*/
  this.f_borderColorCallback__org_pepstock_charba_client_configuration_Segment_;
  /**@type {WidthCallback<SegmentContext>}*/
  this.f_borderWidthCallback__org_pepstock_charba_client_configuration_Segment_;
  /**@type {CapStyleCallback<SegmentContext>}*/
  this.f_borderCapStyleCallback__org_pepstock_charba_client_configuration_Segment_;
  /**@type {JoinStyleCallback<SegmentContext>}*/
  this.f_borderJoinStyleCallback__org_pepstock_charba_client_configuration_Segment_;
  /**@type {BorderDashCallback<SegmentContext>}*/
  this.f_borderDashCallback__org_pepstock_charba_client_configuration_Segment_;
  /**@type {BorderDashOffsetCallback<SegmentContext>}*/
  this.f_borderDashOffsetCallback__org_pepstock_charba_client_configuration_Segment_;
 }
 /** @return {!Segment} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Segment.$clinit();
  let $instance = new Segment();
  $instance.$ctor__org_pepstock_charba_client_configuration_Segment__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Segment__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_ConfigurationOptionsContainer__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.$init___$p_org_pepstock_charba_client_configuration_Segment();
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_configuration_Segment_.callback = (/** ? */ context) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String__boolean(this.m_getSegmentContext__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Segment(context), this.m_getBackgroundColorCallback__(), this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getElements__().m_getLine__().m_getBackgroundColorAsString__(), true);
  };
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_configuration_Segment_.callback = (/** ? */ context_1) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String__boolean(this.m_getSegmentContext__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Segment(context_1), this.m_getBorderColorCallback__(), this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getElements__().m_getLine__().m_getBorderColorAsString__(), false);
  };
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_configuration_Segment_.callback = (/** ? */ context_2) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getSegmentContext__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Segment(context_2), this.m_getBorderWidthCallback__(), Integer.m_valueOf__int(this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getElements__().m_getLine__().m_getBorderWidth__())), Integer)).m_intValue__();
  };
  this.f_borderCapStyleCallbackProxy__org_pepstock_charba_client_configuration_Segment_.callback = (/** ? */ context_3) =>{
   return /**@type {CapStyle}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getSegmentContext__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Segment(context_3), this.m_getBorderCapStyleCallback__(), this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getElements__().m_getLine__().m_getBorderCapStyle__()), CapStyle)).m_value__();
  };
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_configuration_Segment_.callback = (/** ? */ context_4) =>{
   return this.m_onBorderDash__org_pepstock_charba_client_configuration_Segment_BaseContext_$p_org_pepstock_charba_client_configuration_Segment(BaseContext.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_commons_NativeObject(this.m_getChart__(), context_4));
  };
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_Segment_.callback = (/** ? */ context_5) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getSegmentContext__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Segment(context_5), this.m_getBorderDashOffsetCallback__(), this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getElements__().m_getLine__().m_getBorderDashOffset__()), Double)));
  };
  this.f_borderJoinStyleCallbackProxy__org_pepstock_charba_client_configuration_Segment_.callback = (/** ? */ context_6) =>{
   return /**@type {JoinStyle}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_getSegmentContext__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Segment(context_6), this.m_getBorderJoinStyleCallback__(), this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getElements__().m_getLine__().m_getBorderJoinStyle__()), JoinStyle)).m_value__();
  };
 }
 /** @return {ColorCallback<SegmentContext>} */
 m_getBackgroundColorCallback__() {
  return this.f_backgroundColorCallback__org_pepstock_charba_client_configuration_Segment_;
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<SegmentContext> */ backgroundColorCallback) {
  this.f_backgroundColorCallback__org_pepstock_charba_client_configuration_Segment_ = backgroundColorCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getSegment__(), Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_configuration_Segment_Property, backgroundColorCallback, this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_configuration_Segment_);
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ backgroundColorCallback) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<SegmentContext>}*/ (null));
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getSegment__(), Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_configuration_Segment_Property, backgroundColorCallback);
 }
 /** @return {WidthCallback<SegmentContext>} */
 m_getBorderWidthCallback__() {
  return this.f_borderWidthCallback__org_pepstock_charba_client_configuration_Segment_;
 }
 
 m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<SegmentContext> */ borderWidthCallback) {
  this.f_borderWidthCallback__org_pepstock_charba_client_configuration_Segment_ = borderWidthCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getSegment__(), Property.f_BORDER_WIDTH__org_pepstock_charba_client_configuration_Segment_Property, borderWidthCallback, this.f_borderWidthCallbackProxy__org_pepstock_charba_client_configuration_Segment_);
 }
 
 m_setBorderWidth__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderWidthCallback) {
  this.m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/**@type {WidthCallback<SegmentContext>}*/ (null));
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getSegment__(), Property.f_BORDER_WIDTH__org_pepstock_charba_client_configuration_Segment_Property, borderWidthCallback);
 }
 /** @return {ColorCallback<SegmentContext>} */
 m_getBorderColorCallback__() {
  return this.f_borderColorCallback__org_pepstock_charba_client_configuration_Segment_;
 }
 
 m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<SegmentContext> */ borderColorCallback) {
  this.f_borderColorCallback__org_pepstock_charba_client_configuration_Segment_ = borderColorCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getSegment__(), Property.f_BORDER_COLOR__org_pepstock_charba_client_configuration_Segment_Property, borderColorCallback, this.f_borderColorCallbackProxy__org_pepstock_charba_client_configuration_Segment_);
 }
 
 m_setBorderColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderColorCallback) {
  this.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<SegmentContext>}*/ (null));
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getSegment__(), Property.f_BORDER_COLOR__org_pepstock_charba_client_configuration_Segment_Property, borderColorCallback);
 }
 /** @return {CapStyleCallback<SegmentContext>} */
 m_getBorderCapStyleCallback__() {
  return this.f_borderCapStyleCallback__org_pepstock_charba_client_configuration_Segment_;
 }
 
 m_setBorderCapStyle__org_pepstock_charba_client_callbacks_CapStyleCallback(/** CapStyleCallback<SegmentContext> */ borderCapStyleCallback) {
  this.f_borderCapStyleCallback__org_pepstock_charba_client_configuration_Segment_ = borderCapStyleCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getSegment__(), Property.f_BORDER_CAP_STYLE__org_pepstock_charba_client_configuration_Segment_Property, borderCapStyleCallback, this.f_borderCapStyleCallbackProxy__org_pepstock_charba_client_configuration_Segment_);
 }
 
 m_setBorderCapStyle__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderCapStyleCallback) {
  this.m_setBorderCapStyle__org_pepstock_charba_client_callbacks_CapStyleCallback(/**@type {CapStyleCallback<SegmentContext>}*/ (null));
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getSegment__(), Property.f_BORDER_CAP_STYLE__org_pepstock_charba_client_configuration_Segment_Property, borderCapStyleCallback);
 }
 /** @return {JoinStyleCallback<SegmentContext>} */
 m_getBorderJoinStyleCallback__() {
  return this.f_borderJoinStyleCallback__org_pepstock_charba_client_configuration_Segment_;
 }
 
 m_setBorderJoinStyle__org_pepstock_charba_client_callbacks_JoinStyleCallback(/** JoinStyleCallback<SegmentContext> */ borderJoinStyleCallback) {
  this.f_borderJoinStyleCallback__org_pepstock_charba_client_configuration_Segment_ = borderJoinStyleCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getSegment__(), Property.f_BORDER_JOIN_STYLE__org_pepstock_charba_client_configuration_Segment_Property, borderJoinStyleCallback, this.f_borderJoinStyleCallbackProxy__org_pepstock_charba_client_configuration_Segment_);
 }
 
 m_setBorderJoinStyle__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderJoinStyleCallback) {
  this.m_setBorderJoinStyle__org_pepstock_charba_client_callbacks_JoinStyleCallback(/**@type {JoinStyleCallback<SegmentContext>}*/ (null));
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getSegment__(), Property.f_BORDER_JOIN_STYLE__org_pepstock_charba_client_configuration_Segment_Property, borderJoinStyleCallback);
 }
 /** @return {BorderDashCallback<SegmentContext>} */
 m_getBorderDashCallback__() {
  return this.f_borderDashCallback__org_pepstock_charba_client_configuration_Segment_;
 }
 
 m_setBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/** BorderDashCallback<SegmentContext> */ borderDashCallback) {
  this.f_borderDashCallback__org_pepstock_charba_client_configuration_Segment_ = borderDashCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getSegment__(), Property.f_BORDER_DASH__org_pepstock_charba_client_configuration_Segment_Property, borderDashCallback, this.f_borderDashCallbackProxy__org_pepstock_charba_client_configuration_Segment_);
 }
 
 m_setBorderDash__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderDashCallback) {
  this.m_setBorderDash__org_pepstock_charba_client_callbacks_BorderDashCallback(/**@type {BorderDashCallback<SegmentContext>}*/ (null));
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getSegment__(), Property.f_BORDER_DASH__org_pepstock_charba_client_configuration_Segment_Property, borderDashCallback);
 }
 /** @return {BorderDashOffsetCallback<SegmentContext>} */
 m_getBorderDashOffsetCallback__() {
  return this.f_borderDashOffsetCallback__org_pepstock_charba_client_configuration_Segment_;
 }
 
 m_setBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/** BorderDashOffsetCallback<SegmentContext> */ borderDashOffsetCallback) {
  this.f_borderDashOffsetCallback__org_pepstock_charba_client_configuration_Segment_ = borderDashOffsetCallback;
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getSegment__(), Property.f_BORDER_DASH__org_pepstock_charba_client_configuration_Segment_Property, borderDashOffsetCallback, this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_Segment_);
 }
 
 m_setBorderDashOffset__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderDashOffsetCallback) {
  this.m_setBorderDashOffset__org_pepstock_charba_client_callbacks_BorderDashOffsetCallback(/**@type {BorderDashOffsetCallback<SegmentContext>}*/ (null));
  this.m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getConfiguration__().m_getSegment__(), Property.f_BORDER_DASH__org_pepstock_charba_client_configuration_Segment_Property, borderDashOffsetCallback);
 }
 /** @return {SegmentContext} */
 m_getSegmentContext__org_pepstock_charba_client_commons_NativeObject_$p_org_pepstock_charba_client_configuration_Segment(/** ? */ context) {
  let baseContext = BaseContext.$create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_commons_NativeObject(this.m_getChart__(), context);
  return SegmentContext.$create__org_pepstock_charba_client_commons_NativeObject(baseContext.m_nativeObject___$pp_org_pepstock_charba_client_configuration());
 }
 /** @return {Array} */
 m_onBorderDash__org_pepstock_charba_client_configuration_Segment_BaseContext_$p_org_pepstock_charba_client_configuration_Segment(/** BaseContext */ context) {
  let result = /**@type {List<Integer>}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(SegmentContext.$create__org_pepstock_charba_client_commons_NativeObject(context.m_nativeObject___$pp_org_pepstock_charba_client_configuration()), this.m_getBorderDashCallback__()), List));
  return ArrayInteger_$Overlay.m_fromOrEmpty__java_util_List(result);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_Segment() {
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_configuration_Segment_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_configuration_Segment_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_configuration_Segment_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderCapStyleCallbackProxy__org_pepstock_charba_client_configuration_Segment_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderDashCallbackProxy__org_pepstock_charba_client_configuration_Segment_ = /**@type {CharbaCallbackProxy<?function(?):Array>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderDashOffsetCallbackProxy__org_pepstock_charba_client_configuration_Segment_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderJoinStyleCallbackProxy__org_pepstock_charba_client_configuration_Segment_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_backgroundColorCallback__org_pepstock_charba_client_configuration_Segment_ = null;
  this.f_borderColorCallback__org_pepstock_charba_client_configuration_Segment_ = null;
  this.f_borderWidthCallback__org_pepstock_charba_client_configuration_Segment_ = null;
  this.f_borderCapStyleCallback__org_pepstock_charba_client_configuration_Segment_ = null;
  this.f_borderJoinStyleCallback__org_pepstock_charba_client_configuration_Segment_ = null;
  this.f_borderDashCallback__org_pepstock_charba_client_configuration_Segment_ = null;
  this.f_borderDashOffsetCallback__org_pepstock_charba_client_configuration_Segment_ = null;
 }
 
 static $clinit() {
  Segment.$clinit = () =>{};
  Segment.$loadModules();
  ConfigurationOptionsContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Segment;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  List = goog.module.get('java.util.List$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  SegmentContext = goog.module.get('org.pepstock.charba.client.callbacks.SegmentContext$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  BaseContext = goog.module.get('org.pepstock.charba.client.configuration.Segment.BaseContext$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.Segment.Property$impl');
  CapStyle = goog.module.get('org.pepstock.charba.client.enums.CapStyle$impl');
  JoinStyle = goog.module.get('org.pepstock.charba.client.enums.JoinStyle$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Segment, "org.pepstock.charba.client.configuration.Segment");

exports = Segment;

//# sourceMappingURL=Segment.js.map
