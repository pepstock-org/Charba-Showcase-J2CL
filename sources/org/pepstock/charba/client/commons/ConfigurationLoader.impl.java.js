goog.module('org.pepstock.charba.client.commons.ConfigurationLoader$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Configuration = goog.forwardDeclare('org.pepstock.charba.client.Configuration$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let NativeObjectContainer = goog.forwardDeclare('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

class ConfigurationLoader extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ConfigurationLoader} */
 static $create__() {
  let $instance = new ConfigurationLoader();
  $instance.$ctor__org_pepstock_charba_client_commons_ConfigurationLoader__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_ConfigurationLoader__() {
  this.$ctor__java_lang_Object__();
 }
 
 static m_loadOptions__org_pepstock_charba_client_Configuration__org_pepstock_charba_client_commons_NativeObjectContainer(/** Configuration */ configuration, /** NativeObjectContainer */ options) {
  ConfigurationLoader.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(configuration, "Configuration");
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(options, "Options");
  configuration.m_setOptions__org_pepstock_charba_client_commons_NativeObject(options.m_getNativeObject__());
 }
 
 static m_loadData__org_pepstock_charba_client_Configuration__org_pepstock_charba_client_commons_NativeObjectContainer(/** Configuration */ configuration, /** NativeObjectContainer */ data) {
  ConfigurationLoader.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(configuration, "Configuration");
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(data, "Data configuration");
  configuration.m_setData__org_pepstock_charba_client_commons_NativeObject(data.m_getNativeObject__());
 }
 
 static $clinit() {
  ConfigurationLoader.$clinit = () =>{};
  ConfigurationLoader.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ConfigurationLoader;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
 }
}
$Util.$setClassMetadata(ConfigurationLoader, "org.pepstock.charba.client.commons.ConfigurationLoader");

exports = ConfigurationLoader;

//# sourceMappingURL=ConfigurationLoader.js.map
