goog.module('org.pepstock.charba.client.configuration.ConfigurationContainer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ChartContainer = goog.require('org.pepstock.charba.client.configuration.ChartContainer$impl');

let ChartEnvelop = goog.forwardDeclare('org.pepstock.charba.client.ChartEnvelop$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Merger = goog.forwardDeclare('org.pepstock.charba.client.commons.Merger$impl');
let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 */
class ConfigurationContainer extends ChartContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_configuration__org_pepstock_charba_client_configuration_ConfigurationContainer_;
 }
 //Initialization from constructor 'ConfigurationContainer(IsChart)'.
 
 $ctor__org_pepstock_charba_client_configuration_ConfigurationContainer__org_pepstock_charba_client_IsChart(/** IsChart */ chart) {
  this.$ctor__org_pepstock_charba_client_configuration_ChartContainer__org_pepstock_charba_client_IsChart(chart);
 }
 //Initialization from constructor 'ConfigurationContainer(IsChart, NativeObjectContainer)'.
 
 $ctor__org_pepstock_charba_client_configuration_ConfigurationContainer__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_commons_NativeObjectContainer(/** IsChart */ chart, /** T */ configuration) {
  this.$ctor__org_pepstock_charba_client_configuration_ChartContainer__org_pepstock_charba_client_IsChart(chart);
  this.f_configuration__org_pepstock_charba_client_configuration_ConfigurationContainer_ = /**@type {T}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(configuration, "Configuration argument"), NativeObjectContainer));
 }
 
 m_setConfiguration__org_pepstock_charba_client_commons_NativeObjectContainer(/** T */ configuration) {
  this.f_configuration__org_pepstock_charba_client_configuration_ConfigurationContainer_ = configuration;
 }
 /** @return {T} */
 m_getConfiguration__() {
  return this.f_configuration__org_pepstock_charba_client_configuration_ConfigurationContainer_;
 }
 
 m_merge__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String(/** NativeObjectContainer */ source, /** ?string */ property) {
  Merger.m_get__().m_merge__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String(this.m_getConfiguration__(), source, property);
 }
 /** @return {?string} */
 m_toJSON__() {
  return /**@type {NativeObjectContainer}*/ (this.f_configuration__org_pepstock_charba_client_configuration_ConfigurationContainer_).m_toJSON__();
 }
 /** @return {ChartEnvelop<?>} */
 m_loadNativeObject__org_pepstock_charba_client_ChartEnvelop(/** ChartEnvelop<?> */ envelop) {
  return /**@type {NativeObjectContainer}*/ (this.m_getConfiguration__()).m_loadNativeObject__org_pepstock_charba_client_ChartEnvelop(envelop);
 }
 
 static $clinit() {
  ConfigurationContainer.$clinit = () =>{};
  ConfigurationContainer.$loadModules();
  ChartContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ConfigurationContainer;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Merger = goog.module.get('org.pepstock.charba.client.commons.Merger$impl');
  NativeObjectContainer = goog.module.get('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ConfigurationContainer, "org.pepstock.charba.client.configuration.ConfigurationContainer");

exports = ConfigurationContainer;

//# sourceMappingURL=ConfigurationContainer.js.map
