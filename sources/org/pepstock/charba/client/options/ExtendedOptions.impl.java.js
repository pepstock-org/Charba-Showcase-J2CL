goog.module('org.pepstock.charba.client.options.ExtendedOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ScaledOptions = goog.require('org.pepstock.charba.client.options.ScaledOptions$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Envelop = goog.forwardDeclare('org.pepstock.charba.client.commons.Envelop$impl');
let Id = goog.forwardDeclare('org.pepstock.charba.client.commons.Id$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
let ConfigurationEnvelop = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
let ControllerMapperFactory = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllerMapperFactory$impl');
let IsDefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
let ExtendedOptions_Property = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedOptions.Property$impl');
let ExtendedScales = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScales$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.ScaledOptions.Property$impl');
let Segment = goog.forwardDeclare('org.pepstock.charba.client.options.Segment$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');

class ExtendedOptions extends ScaledOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {IsChart}*/
  this.f_chart__org_pepstock_charba_client_options_ExtendedOptions_;
  /**@type {ExtendedScales}*/
  this.f_scales__org_pepstock_charba_client_options_ExtendedOptions_;
  /**@type {Segment}*/
  this.f_segment__org_pepstock_charba_client_options_ExtendedOptions_;
 }
 //Factory method corresponding to constructor 'ExtendedOptions(IsChart, IsDefaultScaledOptions, ConfigurationEnvelop)'.
 /** @return {!ExtendedOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues, /** ConfigurationEnvelop<?> */ envelop) {
  ExtendedOptions.$clinit();
  let $instance = new ExtendedOptions();
  $instance.$ctor__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_configuration_ConfigurationEnvelop(chart, defaultValues, envelop);
  return $instance;
 }
 //Initialization from constructor 'ExtendedOptions(IsChart, IsDefaultScaledOptions, ConfigurationEnvelop)'.
 
 $ctor__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues, /** ConfigurationEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_commons_NativeObject(chart, defaultValues, /**@type {?}*/ (/**@type {ConfigurationEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ConfigurationEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'ExtendedOptions(IsChart, IsDefaultScaledOptions, ChartEnvelop)'.
 /** @return {!ExtendedOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_ChartEnvelop(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues, /** ChartEnvelop<?> */ envelop) {
  ExtendedOptions.$clinit();
  let $instance = new ExtendedOptions();
  $instance.$ctor__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_ChartEnvelop(chart, defaultValues, envelop);
  return $instance;
 }
 //Initialization from constructor 'ExtendedOptions(IsChart, IsDefaultScaledOptions, ChartEnvelop)'.
 
 $ctor__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_ChartEnvelop(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues, /** ChartEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_commons_NativeObject(chart, defaultValues, /**@type {?}*/ (/**@type {ChartEnvelop<?>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ChartEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'ExtendedOptions(IsChart, IsDefaultScaledOptions, NativeObject)'.
 /** @return {!ExtendedOptions} */
 static $create__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_commons_NativeObject(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues, /** ? */ nativeObject) {
  ExtendedOptions.$clinit();
  let $instance = new ExtendedOptions();
  $instance.$ctor__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_commons_NativeObject(chart, defaultValues, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'ExtendedOptions(IsChart, IsDefaultScaledOptions, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_commons_NativeObject(/** IsChart */ chart, /** IsDefaultScaledOptions */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_ScaledOptions__java_lang_String__org_pepstock_charba_client_defaults_IsDefaultScaledOptions__org_pepstock_charba_client_commons_NativeObject__boolean(IsChart.m_checkAndGetIfValid__org_pepstock_charba_client_IsChart(chart).m_getId__(), defaultValues, nativeObject, false);
  this.f_chart__org_pepstock_charba_client_options_ExtendedOptions_ = chart;
  this.f_scales__org_pepstock_charba_client_options_ExtendedOptions_ = ExtendedScales.$create__org_pepstock_charba_client_options_Options__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultScales__org_pepstock_charba_client_commons_NativeObject(this, Property.f_SCALES__org_pepstock_charba_client_options_ScaledOptions_Property, defaultValues.m_getScales__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_SCALES__org_pepstock_charba_client_options_ScaledOptions_Property));
  this.f_segment__org_pepstock_charba_client_options_ExtendedOptions_ = Segment.$create__org_pepstock_charba_client_options_ExtendedOptions__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultOptions__org_pepstock_charba_client_commons_NativeObject(this, ExtendedOptions_Property.f_SEGMENT__org_pepstock_charba_client_options_ExtendedOptions_Property, defaultValues, this.m_getValue__org_pepstock_charba_client_commons_Key(ExtendedOptions_Property.f_SEGMENT__org_pepstock_charba_client_options_ExtendedOptions_Property));
 }
 /** @return {IsChart} */
 m_getChart__() {
  return this.f_chart__org_pepstock_charba_client_options_ExtendedOptions_;
 }
 
 m_setCharbaId__java_lang_String(/** ?string */ id) {
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(id, "CHARBA id argument");
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Id.f_CHARBA_ID__org_pepstock_charba_client_commons_Id, id);
 }
 /** @override @return {ExtendedScales} */
 m_getScales__() {
  return this.f_scales__org_pepstock_charba_client_options_ExtendedOptions_;
 }
 /** @return {Segment} */
 m_getSegment__() {
  return this.f_segment__org_pepstock_charba_client_options_ExtendedOptions_;
 }
 
 m_setCallback__org_pepstock_charba_client_configuration_ConfigurationEnvelop__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(/** ConfigurationEnvelop<AbstractNode> */ envelop, /** Key */ property, /** ?function():void */ proxy) {
  this.m_setCallbackToModel__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(/**@type {AbstractNode}*/ ($Casts.$to(/**@type {ConfigurationEnvelop<AbstractNode>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ConfigurationEnvelop)).m_getContent__(), AbstractNode)), property, proxy);
 }
 
 m_setCallback__org_pepstock_charba_client_configuration_ConfigurationEnvelop__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(/** ConfigurationEnvelop<AbstractNode> */ envelop, /** Key */ property, /** Function */ callback) {
  this.m_setCallbackToModel__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(/**@type {AbstractNode}*/ ($Casts.$to(/**@type {ConfigurationEnvelop<AbstractNode>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ConfigurationEnvelop)).m_getContent__(), AbstractNode)), property, callback);
 }
 
 m_setEvent__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_configuration_ConfigurationEnvelop(/** AbstractNode */ node, /** Key */ property, /** ConfigurationEnvelop<?function():void> */ envelop) {
  this.m_setEventToModel__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_CallbackProxy_Proxy(node, property, /**@type {?function():void}*/ ($Casts.$to(/**@type {ConfigurationEnvelop<?function():void>}*/ ($Casts.$to(Envelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_Envelop(envelop), ConfigurationEnvelop)).m_getContent__(), $JavaScriptFunction)));
 }
 /** @template T @return {T} */
 m_getRemappedOptions__org_pepstock_charba_client_controllers_ControllerMapperFactory(/** ControllerMapperFactory<T> */ factory) {
  if (!$Equality.$same(factory, null)) {
   return factory.m_create__org_pepstock_charba_client_commons_NativeObject(this.m_getNativeObject__());
  }
  return null;
 }
 
 static $clinit() {
  ExtendedOptions.$clinit = () =>{};
  ExtendedOptions.$loadModules();
  ScaledOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExtendedOptions;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartEnvelop = goog.module.get('org.pepstock.charba.client.ChartEnvelop$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  AbstractNode = goog.module.get('org.pepstock.charba.client.commons.AbstractNode$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Envelop = goog.module.get('org.pepstock.charba.client.commons.Envelop$impl');
  Id = goog.module.get('org.pepstock.charba.client.commons.Id$impl');
  ConfigurationEnvelop = goog.module.get('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');
  ExtendedOptions_Property = goog.module.get('org.pepstock.charba.client.options.ExtendedOptions.Property$impl');
  ExtendedScales = goog.module.get('org.pepstock.charba.client.options.ExtendedScales$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.ScaledOptions.Property$impl');
  Segment = goog.module.get('org.pepstock.charba.client.options.Segment$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
}
$Util.$setClassMetadata(ExtendedOptions, "org.pepstock.charba.client.options.ExtendedOptions");

exports = ExtendedOptions;

//# sourceMappingURL=ExtendedOptions.js.map
