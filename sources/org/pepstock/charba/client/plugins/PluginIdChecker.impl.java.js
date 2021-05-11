goog.module('org.pepstock.charba.client.plugins.PluginIdChecker$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');

class PluginIdChecker extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PluginIdChecker} */
 static $create__() {
  let $instance = new PluginIdChecker();
  $instance.$ctor__org_pepstock_charba_client_plugins_PluginIdChecker__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_plugins_PluginIdChecker__() {
  this.$ctor__java_lang_Object__();
 }
 
 static m_check__java_lang_String(/** ?string */ id) {
  PluginIdChecker.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(id, "Plugin id");
  Checker.m_assertCheck__boolean__java_lang_String(!j_l_String.m_startsWith__java_lang_String__java_lang_String(id, Constants.f_DOT__org_pepstock_charba_client_commons_Constants) && !j_l_String.m_startsWith__java_lang_String__java_lang_String(id, Constants.f_UNDERSCORE__org_pepstock_charba_client_commons_Constants), PluginIdChecker.m_buildMessage__java_lang_String__java_lang_String(id, "Plugin id can not start with a dot or an underscore "));
  Checker.m_assertCheck__boolean__java_lang_String(!$Equality.$same(Constants.f_REGEXP_ID__org_pepstock_charba_client_commons_Constants.exec(id), null), PluginIdChecker.m_buildMessage__java_lang_String__java_lang_String(id, "Plugin id can not contain any invalid characters "));
 }
 /** @return {Key} */
 static m_key__java_lang_String(/** ?string */ id) {
  PluginIdChecker.$clinit();
  PluginIdChecker.m_check__java_lang_String(id);
  return Key.m_create__java_lang_String(id);
 }
 /** @return {?string} */
 static m_buildMessage__java_lang_String__java_lang_String(/** ?string */ pluginId, /** ?string */ message) {
  let sb = StringBuilder.$create__java_lang_String(message);
  sb.m_append__java_lang_String(Constants.f_OPEN_SQUARE_BRACKET__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(pluginId).m_append__java_lang_String(Constants.f_CLOSE_SQUARE_BRACKET__org_pepstock_charba_client_commons_Constants);
  return sb.toString();
 }
 
 static $clinit() {
  PluginIdChecker.$clinit = () =>{};
  PluginIdChecker.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PluginIdChecker;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
 }
}
$Util.$setClassMetadata(PluginIdChecker, "org.pepstock.charba.client.plugins.PluginIdChecker");

exports = PluginIdChecker;

//# sourceMappingURL=PluginIdChecker.js.map
