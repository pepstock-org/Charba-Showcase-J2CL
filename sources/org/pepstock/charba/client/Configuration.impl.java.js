goog.module('org.pepstock.charba.client.Configuration$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Property = goog.forwardDeclare('org.pepstock.charba.client.Configuration.Property$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let ConfigurationOptions = goog.forwardDeclare('org.pepstock.charba.client.configuration.ConfigurationOptions$impl');
let Data = goog.forwardDeclare('org.pepstock.charba.client.data.Data$impl');
let Plugins = goog.forwardDeclare('org.pepstock.charba.client.plugins.Plugins$impl');

class Configuration extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Configuration} */
 static $create__() {
  Configuration.$clinit();
  let $instance = new Configuration();
  $instance.$ctor__org_pepstock_charba_client_Configuration__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_Configuration__() {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
 }
 
 m_setOptions__org_pepstock_charba_client_commons_NativeObject(/** ? */ options) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(Property.f_OPTIONS__org_pepstock_charba_client_Configuration_Property, options);
 }
 /** @return {?} */
 m_getOptions___$pp_org_pepstock_charba_client() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_OPTIONS__org_pepstock_charba_client_Configuration_Property);
 }
 
 m_setData__org_pepstock_charba_client_commons_NativeObject(/** ? */ data) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(Property.f_DATA__org_pepstock_charba_client_Configuration_Property, data);
 }
 
 m_setPlugins__org_pepstock_charba_client_commons_ArrayObject(/** Array */ plugins) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_PLUGINS__org_pepstock_charba_client_Configuration_Property, plugins);
 }
 
 m_setType__org_pepstock_charba_client_Type_$pp_org_pepstock_charba_client(/** Type */ type) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_Configuration_Property, type);
 }
 /** @template T */
 m_setOptions__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_configuration_ConfigurationOptions_$pp_org_pepstock_charba_client(/** IsChart */ chart, /** T */ options) {
  /**@type {ConfigurationOptions}*/ (options).m_load__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Configuration(chart, this);
 }
 
 m_setData__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_data_Data_$pp_org_pepstock_charba_client(/** IsChart */ chart, /** Data */ data) {
  data.m_load__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Configuration(chart, this);
 }
 
 m_setPlugins__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_plugins_Plugins_$pp_org_pepstock_charba_client(/** IsChart */ chart, /** Plugins */ plugins) {
  plugins.m_load__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_Configuration(chart, this);
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client() {
  return this.m_getNativeObject__();
 }
 
 static $clinit() {
  Configuration.$clinit = () =>{};
  Configuration.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Configuration;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.Configuration.Property$impl');
 }
}
$Util.$setClassMetadata(Configuration, "org.pepstock.charba.client.Configuration");

exports = Configuration;

//# sourceMappingURL=Configuration.js.map
