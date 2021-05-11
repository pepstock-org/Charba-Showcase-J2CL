goog.module('org.pepstock.charba.client.defaults.NoDefaults$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class NoDefaults extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NoDefaults} */
 static $create__() {
  let $instance = new NoDefaults();
  $instance.$ctor__org_pepstock_charba_client_defaults_NoDefaults__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_NoDefaults__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {NoDefaults} */
 static get f_INSTANCE__org_pepstock_charba_client_defaults_NoDefaults() {
  return (NoDefaults.$clinit(), NoDefaults.$static_INSTANCE__org_pepstock_charba_client_defaults_NoDefaults);
 }
 
 static $clinit() {
  NoDefaults.$clinit = () =>{};
  NoDefaults.$loadModules();
  j_l_Object.$clinit();
  NoDefaults.$static_INSTANCE__org_pepstock_charba_client_defaults_NoDefaults = NoDefaults.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NoDefaults;
 }
 
 static $loadModules() {}
}
/**@private {NoDefaults}*/
NoDefaults.$static_INSTANCE__org_pepstock_charba_client_defaults_NoDefaults;
$Util.$setClassMetadata(NoDefaults, "org.pepstock.charba.client.defaults.NoDefaults");

exports = NoDefaults;

//# sourceMappingURL=NoDefaults.js.map
