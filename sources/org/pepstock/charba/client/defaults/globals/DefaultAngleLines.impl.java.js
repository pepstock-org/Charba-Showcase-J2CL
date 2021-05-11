goog.module('org.pepstock.charba.client.defaults.globals.DefaultAngleLines$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAngleLines = goog.require('org.pepstock.charba.client.defaults.IsDefaultAngleLines$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');

/**
 * @implements {IsDefaultAngleLines}
 */
class DefaultAngleLines extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultAngleLines} */
 static $create__() {
  DefaultAngleLines.$clinit();
  let $instance = new DefaultAngleLines();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAngleLines__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultAngleLines__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return DefaultAngleLines.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultAngleLines_;
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return Defaults.m_get__().m_getGlobal__().m_getBorderColorAsString__();
 }
 /** @override @return {number} */
 m_getLineWidth__() {
  return DefaultAngleLines.f_DEFAULT_LINE_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultAngleLines_;
 }
 /** @override @return {number} */
 m_getBorderDashOffset__() {
  return DefaultAngleLines.f_DEFAULT_BORDER_DASH_OFFSET__org_pepstock_charba_client_defaults_globals_DefaultAngleLines_;
 }
 /** @override @return {List<Integer>} */
 m_getBorderDash__() {
  return /**@type {List<Integer>}*/ (Collections.m_emptyList__());
 }
 
 static $clinit() {
  DefaultAngleLines.$clinit = () =>{};
  DefaultAngleLines.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultAngleLines;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
 }
}
/**@const {boolean}*/
DefaultAngleLines.f_DEFAULT_DISPLAY__org_pepstock_charba_client_defaults_globals_DefaultAngleLines_ = false;
/**@const {number}*/
DefaultAngleLines.f_DEFAULT_LINE_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultAngleLines_ = 1;
/**@const {number}*/
DefaultAngleLines.f_DEFAULT_BORDER_DASH_OFFSET__org_pepstock_charba_client_defaults_globals_DefaultAngleLines_ = 0;
IsDefaultAngleLines.$markImplementor(DefaultAngleLines);
$Util.$setClassMetadata(DefaultAngleLines, "org.pepstock.charba.client.defaults.globals.DefaultAngleLines");

exports = DefaultAngleLines;

//# sourceMappingURL=DefaultAngleLines.js.map
