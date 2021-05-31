goog.module('org.pepstock.charba.client.defaults.globals.DefaultScales$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScales = goog.require('org.pepstock.charba.client.defaults.IsDefaultScales$impl');

let IsDefaultScale = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScale$impl');
let DefaultScale = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultScale$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let ScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.ScaleId$impl');

/**
 * @implements {IsDefaultScales}
 */
class DefaultScales extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultScale}*/
  this.f_scale__org_pepstock_charba_client_defaults_globals_DefaultScales_;
 }
 /** @return {!DefaultScales} */
 static $create__() {
  DefaultScales.$clinit();
  let $instance = new DefaultScales();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultScales__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultScales__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultScales();
 }
 /** @override @return {IsDefaultScale} */
 m_getAxis__org_pepstock_charba_client_options_ScaleId__org_pepstock_charba_client_enums_AxisKind(/** ScaleId */ scaleId, /** AxisKind */ kind) {
  return this.f_scale__org_pepstock_charba_client_defaults_globals_DefaultScales_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultScales() {
  this.f_scale__org_pepstock_charba_client_defaults_globals_DefaultScales_ = DefaultScale.$create__();
 }
 
 static $clinit() {
  DefaultScales.$clinit = () =>{};
  DefaultScales.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultScales;
 }
 
 static $loadModules() {
  DefaultScale = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultScale$impl');
 }
}
IsDefaultScales.$markImplementor(DefaultScales);
$Util.$setClassMetadata(DefaultScales, "org.pepstock.charba.client.defaults.globals.DefaultScales");

exports = DefaultScales;

//# sourceMappingURL=DefaultScales.js.map
