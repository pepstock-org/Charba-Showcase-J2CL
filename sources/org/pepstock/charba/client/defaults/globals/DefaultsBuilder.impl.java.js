goog.module('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultOptions$impl');
let DefaultScale = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultScale$impl');
let DefaultScaledOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultScaledOptions$impl');

class DefaultsBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultOptions}*/
  this.f_noneScale__org_pepstock_charba_client_defaults_globals_DefaultsBuilder_;
  /**@type {DefaultScaledOptions}*/
  this.f_multiScales__org_pepstock_charba_client_defaults_globals_DefaultsBuilder_;
  /**@type {DefaultScale}*/
  this.f_scale__org_pepstock_charba_client_defaults_globals_DefaultsBuilder_;
 }
 /** @return {!DefaultsBuilder} */
 static $create__() {
  let $instance = new DefaultsBuilder();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultsBuilder__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultsBuilder__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultsBuilder();
 }
 /** @return {DefaultsBuilder} */
 static m_get__() {
  DefaultsBuilder.$clinit();
  return DefaultsBuilder.f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultsBuilder_;
 }
 /** @return {DefaultOptions} */
 m_getOptions__() {
  return this.f_noneScale__org_pepstock_charba_client_defaults_globals_DefaultsBuilder_;
 }
 /** @return {DefaultScaledOptions} */
 m_getScaledOptions__() {
  return this.f_multiScales__org_pepstock_charba_client_defaults_globals_DefaultsBuilder_;
 }
 /** @return {DefaultScale} */
 m_getScale__() {
  return this.f_scale__org_pepstock_charba_client_defaults_globals_DefaultsBuilder_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultsBuilder() {
  this.f_noneScale__org_pepstock_charba_client_defaults_globals_DefaultsBuilder_ = DefaultOptions.$create__();
  this.f_multiScales__org_pepstock_charba_client_defaults_globals_DefaultsBuilder_ = DefaultScaledOptions.$create__();
  this.f_scale__org_pepstock_charba_client_defaults_globals_DefaultsBuilder_ = DefaultScale.$create__();
 }
 
 static $clinit() {
  DefaultsBuilder.$clinit = () =>{};
  DefaultsBuilder.$loadModules();
  j_l_Object.$clinit();
  DefaultsBuilder.f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultsBuilder_ = DefaultsBuilder.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultsBuilder;
 }
 
 static $loadModules() {
  DefaultOptions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultOptions$impl');
  DefaultScale = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultScale$impl');
  DefaultScaledOptions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultScaledOptions$impl');
 }
}
/**@type {DefaultsBuilder}*/
DefaultsBuilder.f_INSTANCE__org_pepstock_charba_client_defaults_globals_DefaultsBuilder_;
$Util.$setClassMetadata(DefaultsBuilder, "org.pepstock.charba.client.defaults.globals.DefaultsBuilder");

exports = DefaultsBuilder;

//# sourceMappingURL=DefaultsBuilder.js.map
