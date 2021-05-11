goog.module('org.pepstock.charba.client.configuration.ConfigurationEnvelop$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ImmutableEnvelop = goog.require('org.pepstock.charba.client.commons.ImmutableEnvelop$impl');

/**
 * @template T
 * @extends {ImmutableEnvelop<T>}
 */
class ConfigurationEnvelop extends ImmutableEnvelop {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ConfigurationEnvelop(Object)'.
 /** @template T @return {!ConfigurationEnvelop<T>} */
 static $create__java_lang_Object(/** T */ content) {
  ConfigurationEnvelop.$clinit();
  let $instance = new ConfigurationEnvelop();
  $instance.$ctor__org_pepstock_charba_client_configuration_ConfigurationEnvelop__java_lang_Object(content);
  return $instance;
 }
 //Initialization from constructor 'ConfigurationEnvelop(Object)'.
 
 $ctor__org_pepstock_charba_client_configuration_ConfigurationEnvelop__java_lang_Object(/** T */ content) {
  this.$ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object(content);
 }
 //Factory method corresponding to constructor 'ConfigurationEnvelop(Object, boolean)'.
 /** @template T @return {!ConfigurationEnvelop<T>} */
 static $create__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  ConfigurationEnvelop.$clinit();
  let $instance = new ConfigurationEnvelop();
  $instance.$ctor__org_pepstock_charba_client_configuration_ConfigurationEnvelop__java_lang_Object__boolean(content, nullable);
  return $instance;
 }
 //Initialization from constructor 'ConfigurationEnvelop(Object, boolean)'.
 
 $ctor__org_pepstock_charba_client_configuration_ConfigurationEnvelop__java_lang_Object__boolean(/** T */ content, /** boolean */ nullable) {
  this.$ctor__org_pepstock_charba_client_commons_ImmutableEnvelop__java_lang_Object__boolean(content, nullable);
 }
 
 static $clinit() {
  ConfigurationEnvelop.$clinit = () =>{};
  ConfigurationEnvelop.$loadModules();
  ImmutableEnvelop.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ConfigurationEnvelop;
 }
 
 static $loadModules() {}
}
$Util.$setClassMetadata(ConfigurationEnvelop, "org.pepstock.charba.client.configuration.ConfigurationEnvelop");

exports = ConfigurationEnvelop;

//# sourceMappingURL=ConfigurationEnvelop.js.map
