goog.module('org.pepstock.charba.client.configuration.Arc$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractConfigurationElement = goog.require('org.pepstock.charba.client.configuration.AbstractConfigurationElement$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let AngleCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.AngleCallback$impl');
let BorderAlignCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderAlignCallback$impl');
let BorderRadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderRadiusCallback$impl');
let DatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DatasetContext$impl');
let OffsetCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.OffsetCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.configuration.Arc.Property$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let IsDefaultArc = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultArc$impl');
let BorderAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderAlign$impl');
let AbstractElement = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractConfigurationElement<IsDefaultArc>}
 */
class Arc extends AbstractConfigurationElement {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_borderAlignCallbackProxy__org_pepstock_charba_client_configuration_Arc_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_angleCallbackProxy__org_pepstock_charba_client_configuration_Arc_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_offsetCallbackProxy__org_pepstock_charba_client_configuration_Arc_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_hoverOffsetCallbackProxy__org_pepstock_charba_client_configuration_Arc_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Arc_;
  /**@type {BorderAlignCallback}*/
  this.f_borderAlignCallback__org_pepstock_charba_client_configuration_Arc_;
  /**@type {AngleCallback}*/
  this.f_angleCallback__org_pepstock_charba_client_configuration_Arc_;
  /**@type {OffsetCallback<DatasetContext>}*/
  this.f_offsetCallback__org_pepstock_charba_client_configuration_Arc_;
  /**@type {OffsetCallback<DatasetContext>}*/
  this.f_hoverOffsetCallback__org_pepstock_charba_client_configuration_Arc_;
  /**@type {BorderRadiusCallback}*/
  this.f_borderRadiusCallback__org_pepstock_charba_client_configuration_Arc_;
 }
 /** @return {!Arc} */
 static $create__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  Arc.$clinit();
  let $instance = new Arc();
  $instance.$ctor__org_pepstock_charba_client_configuration_Arc__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_Arc__org_pepstock_charba_client_configuration_ConfigurationOptions(/** ConfigurationOptions */ options) {
  this.$ctor__org_pepstock_charba_client_configuration_AbstractConfigurationElement__org_pepstock_charba_client_configuration_ConfigurationOptions(options);
  this.$init___$p_org_pepstock_charba_client_configuration_Arc();
  this.f_offsetCallbackProxy__org_pepstock_charba_client_configuration_Arc_.callback = (/** ? */ context) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context), this.m_getOffsetCallback__(), Integer.m_valueOf__int(this.m_getDefaultElement__().m_getOffset__())), Integer)).m_intValue__();
  };
  this.f_hoverOffsetCallbackProxy__org_pepstock_charba_client_configuration_Arc_.callback = (/** ? */ context_1) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_1), this.m_getHoverOffsetCallback__(), Integer.m_valueOf__int(this.m_getDefaultElement__().m_getOffset__())), Integer)).m_intValue__();
  };
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Arc_.callback = (/** ? */ context_2) =>{
   return this.m_onBorderRadius__org_pepstock_charba_client_callbacks_DatasetContext__org_pepstock_charba_client_callbacks_BorderRadiusCallback__int_$pp_org_pepstock_charba_client_configuration(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_2), this.m_getBorderRadiusCallback__(), this.m_getDefaultElement__().m_getBorderRadius__());
  };
  this.f_borderAlignCallbackProxy__org_pepstock_charba_client_configuration_Arc_.callback = (/** ? */ context_3) =>{
   return /**@type {BorderAlign}*/ ($Casts.$to(ScriptableUtils.m_getOptionValueAsString__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_Key(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_3), this.m_getBorderAlignCallback__(), this.m_getDefaultElement__().m_getBorderAlign__()), BorderAlign)).m_value__();
  };
  this.f_angleCallbackProxy__org_pepstock_charba_client_configuration_Arc_.callback = (/** ? */ context_4) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(this.m_createContext__org_pepstock_charba_client_commons_NativeObject_$pp_org_pepstock_charba_client_configuration(context_4), this.m_getAngleCallback__(), this.m_getDefaultElement__().m_getAngle__()), Double)));
  };
 }
 /** @override @return {AbstractElement<IsDefaultArc>} */
 m_getElement__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__();
 }
 /** @override @return {IsDefaultArc} */
 m_getDefaultElement__() {
  return this.m_getOptions__().m_getDefaultValues___$pp_org_pepstock_charba_client_configuration().m_getElements__().m_getArc__();
 }
 
 m_setBorderAlign__org_pepstock_charba_client_enums_BorderAlign(/** BorderAlign */ align) {
  this.m_setBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback(/**@type {BorderAlignCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getArc__().m_setBorderAlign__org_pepstock_charba_client_enums_BorderAlign(align);
 }
 /** @return {BorderAlign} */
 m_getBorderAlign__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__().m_getBorderAlign__();
 }
 
 m_setWeight__double(/** number */ weight) {
  this.m_getConfiguration__().m_getElements__().m_getArc__().m_setWeight__double(weight);
 }
 /** @return {number} */
 m_getWeight__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__().m_getWeight__();
 }
 
 m_setAngle__double(/** number */ angle) {
  this.m_setAngle__org_pepstock_charba_client_callbacks_AngleCallback(/**@type {AngleCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getArc__().m_setAngle__double(angle);
 }
 /** @return {number} */
 m_getAngle__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__().m_getAngle__();
 }
 
 m_setOffset__int(/** number */ offset) {
  this.m_setOffset__org_pepstock_charba_client_callbacks_OffsetCallback(/**@type {OffsetCallback<DatasetContext>}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getArc__().m_setOffset__int(offset);
 }
 /** @return {number} */
 m_getOffset__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__().m_getOffset__();
 }
 
 m_setSpacing__int(/** number */ spacing) {
  this.m_getConfiguration__().m_getElements__().m_getArc__().m_setSpacing__int(spacing);
 }
 /** @return {number} */
 m_getSpacing__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__().m_getSpacing__();
 }
 
 m_setBorderRadius__int(/** number */ borderRadius) {
  this.m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getArc__().m_setBorderRadius__int(borderRadius);
 }
 /** @return {number} */
 m_getBorderRadius__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__().m_getBorderRadius__();
 }
 
 m_setHoverOffset__int(/** number */ offset) {
  this.m_setHoverOffset__org_pepstock_charba_client_callbacks_OffsetCallback(/**@type {OffsetCallback<DatasetContext>}*/ (null));
  this.m_getConfiguration__().m_getElements__().m_getArc__().m_setHoverOffset__int(offset);
 }
 /** @return {number} */
 m_getHoverOffset__() {
  return this.m_getConfiguration__().m_getElements__().m_getArc__().m_getHoverOffset__();
 }
 /** @return {BorderAlignCallback} */
 m_getBorderAlignCallback__() {
  return this.f_borderAlignCallback__org_pepstock_charba_client_configuration_Arc_;
 }
 
 m_setBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback(/** BorderAlignCallback */ borderAlignCallback) {
  this.f_borderAlignCallback__org_pepstock_charba_client_configuration_Arc_ = borderAlignCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_ALIGN__org_pepstock_charba_client_configuration_Arc_Property, borderAlignCallback, this.f_borderAlignCallbackProxy__org_pepstock_charba_client_configuration_Arc_);
 }
 
 m_setBorderAlign__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderAlignCallback) {
  this.m_setBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback(/**@type {BorderAlignCallback}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_ALIGN__org_pepstock_charba_client_configuration_Arc_Property, borderAlignCallback);
 }
 /** @return {BorderRadiusCallback} */
 m_getBorderRadiusCallback__() {
  return this.f_borderRadiusCallback__org_pepstock_charba_client_configuration_Arc_;
 }
 
 m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/** BorderRadiusCallback */ borderRadiusCallback) {
  this.f_borderRadiusCallback__org_pepstock_charba_client_configuration_Arc_ = borderRadiusCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_RADIUS__org_pepstock_charba_client_configuration_Arc_Property, borderRadiusCallback, this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Arc_);
 }
 
 m_setBorderRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ borderRadiusCallback) {
  this.m_setBorderRadius__org_pepstock_charba_client_callbacks_BorderRadiusCallback(/**@type {BorderRadiusCallback}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_BORDER_RADIUS__org_pepstock_charba_client_configuration_Arc_Property, borderRadiusCallback);
 }
 /** @return {OffsetCallback<DatasetContext>} */
 m_getOffsetCallback__() {
  return this.f_offsetCallback__org_pepstock_charba_client_configuration_Arc_;
 }
 
 m_setOffset__org_pepstock_charba_client_callbacks_OffsetCallback(/** OffsetCallback<DatasetContext> */ offsetCallback) {
  this.f_offsetCallback__org_pepstock_charba_client_configuration_Arc_ = offsetCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_OFFSET__org_pepstock_charba_client_configuration_Arc_Property, offsetCallback, this.f_offsetCallbackProxy__org_pepstock_charba_client_configuration_Arc_);
 }
 
 m_setOffset__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ offsetCallback) {
  this.m_setOffset__org_pepstock_charba_client_callbacks_OffsetCallback(/**@type {OffsetCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_OFFSET__org_pepstock_charba_client_configuration_Arc_Property, offsetCallback);
 }
 /** @return {OffsetCallback<DatasetContext>} */
 m_getHoverOffsetCallback__() {
  return this.f_hoverOffsetCallback__org_pepstock_charba_client_configuration_Arc_;
 }
 
 m_setHoverOffset__org_pepstock_charba_client_callbacks_OffsetCallback(/** OffsetCallback<DatasetContext> */ hoverOffsetCallback) {
  this.f_hoverOffsetCallback__org_pepstock_charba_client_configuration_Arc_ = hoverOffsetCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_HOVER_OFFSET__org_pepstock_charba_client_configuration_Arc_Property, hoverOffsetCallback, this.f_hoverOffsetCallbackProxy__org_pepstock_charba_client_configuration_Arc_);
 }
 
 m_setHoverOffset__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ hoverOffsetCallback) {
  this.m_setHoverOffset__org_pepstock_charba_client_callbacks_OffsetCallback(/**@type {OffsetCallback<DatasetContext>}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_HOVER_OFFSET__org_pepstock_charba_client_configuration_Arc_Property, hoverOffsetCallback);
 }
 /** @return {AngleCallback} */
 m_getAngleCallback__() {
  return this.f_angleCallback__org_pepstock_charba_client_configuration_Arc_;
 }
 
 m_setAngle__org_pepstock_charba_client_callbacks_AngleCallback(/** AngleCallback */ angleCallback) {
  this.f_angleCallback__org_pepstock_charba_client_configuration_Arc_ = angleCallback;
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_ANGLE__org_pepstock_charba_client_configuration_Arc_Property, angleCallback, this.f_angleCallbackProxy__org_pepstock_charba_client_configuration_Arc_);
 }
 
 m_setAngle__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ angleCallback) {
  this.m_setAngle__org_pepstock_charba_client_callbacks_AngleCallback(/**@type {AngleCallback}*/ (null));
  this.m_getChart__().m_getOptions__().m_setCallback__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback_$pp_org_pepstock_charba_client_configuration(this.m_getElement__(), Property.f_ANGLE__org_pepstock_charba_client_configuration_Arc_Property, angleCallback);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_configuration_Arc() {
  this.f_borderAlignCallbackProxy__org_pepstock_charba_client_configuration_Arc_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_angleCallbackProxy__org_pepstock_charba_client_configuration_Arc_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_offsetCallbackProxy__org_pepstock_charba_client_configuration_Arc_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_hoverOffsetCallbackProxy__org_pepstock_charba_client_configuration_Arc_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_configuration_Arc_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderAlignCallback__org_pepstock_charba_client_configuration_Arc_ = null;
  this.f_angleCallback__org_pepstock_charba_client_configuration_Arc_ = null;
  this.f_offsetCallback__org_pepstock_charba_client_configuration_Arc_ = null;
  this.f_hoverOffsetCallback__org_pepstock_charba_client_configuration_Arc_ = null;
  this.f_borderRadiusCallback__org_pepstock_charba_client_configuration_Arc_ = null;
 }
 
 static $clinit() {
  Arc.$clinit = () =>{};
  Arc.$loadModules();
  AbstractConfigurationElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Arc;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.configuration.Arc.Property$impl');
  BorderAlign = goog.module.get('org.pepstock.charba.client.enums.BorderAlign$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Arc, "org.pepstock.charba.client.configuration.Arc");

exports = Arc;

//# sourceMappingURL=Arc.js.map
