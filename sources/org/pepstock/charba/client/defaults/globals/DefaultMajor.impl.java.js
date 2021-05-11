goog.module('org.pepstock.charba.client.defaults.globals.DefaultMajor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultMajor = goog.require('org.pepstock.charba.client.defaults.IsDefaultMajor$impl');

/**
 * @implements {IsDefaultMajor}
 */
class DefaultMajor extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultMajor} */
 static $create__() {
  DefaultMajor.$clinit();
  let $instance = new DefaultMajor();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultMajor__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultMajor__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return DefaultMajor.f_DEFAULT_ENABLED__org_pepstock_charba_client_defaults_globals_DefaultMajor_;
 }
 
 static $clinit() {
  DefaultMajor.$clinit = () =>{};
  DefaultMajor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultMajor;
 }
 
 static $loadModules() {}
}
/**@const {boolean}*/
DefaultMajor.f_DEFAULT_ENABLED__org_pepstock_charba_client_defaults_globals_DefaultMajor_ = false;
IsDefaultMajor.$markImplementor(DefaultMajor);
$Util.$setClassMetadata(DefaultMajor, "org.pepstock.charba.client.defaults.globals.DefaultMajor");

exports = DefaultMajor;

//# sourceMappingURL=DefaultMajor.js.map
