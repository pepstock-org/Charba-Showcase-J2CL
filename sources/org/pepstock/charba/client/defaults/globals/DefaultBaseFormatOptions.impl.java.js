goog.module('org.pepstock.charba.client.defaults.globals.DefaultBaseFormatOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultBaseFormatOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultBaseFormatOptions$impl');

let LocaleMatcher = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.LocaleMatcher$impl');
let NumberingSystem = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.NumberingSystem$impl');

/**
 * @implements {IsDefaultBaseFormatOptions}
 */
class DefaultBaseFormatOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultBaseFormatOptions} */
 static $create__() {
  DefaultBaseFormatOptions.$clinit();
  let $instance = new DefaultBaseFormatOptions();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultBaseFormatOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultBaseFormatOptions__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {LocaleMatcher} */
 m_getLocaleMatcher__() {
  return LocaleMatcher.f_BEST_FIT__org_pepstock_charba_client_intl_enums_LocaleMatcher;
 }
 /** @override @return {NumberingSystem} */
 m_getNumberingSystem__() {
  return null;
 }
 /** @return {IsDefaultBaseFormatOptions} */
 static get f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultBaseFormatOptions() {
  return (DefaultBaseFormatOptions.$clinit(), DefaultBaseFormatOptions.$static_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultBaseFormatOptions);
 }
 
 static $clinit() {
  DefaultBaseFormatOptions.$clinit = () =>{};
  DefaultBaseFormatOptions.$loadModules();
  j_l_Object.$clinit();
  DefaultBaseFormatOptions.$static_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultBaseFormatOptions = DefaultBaseFormatOptions.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultBaseFormatOptions;
 }
 
 static $loadModules() {
  LocaleMatcher = goog.module.get('org.pepstock.charba.client.intl.enums.LocaleMatcher$impl');
 }
}
/**@private {IsDefaultBaseFormatOptions}*/
DefaultBaseFormatOptions.$static_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultBaseFormatOptions;
IsDefaultBaseFormatOptions.$markImplementor(DefaultBaseFormatOptions);
$Util.$setClassMetadata(DefaultBaseFormatOptions, "org.pepstock.charba.client.defaults.globals.DefaultBaseFormatOptions");

exports = DefaultBaseFormatOptions;

//# sourceMappingURL=DefaultBaseFormatOptions.js.map
