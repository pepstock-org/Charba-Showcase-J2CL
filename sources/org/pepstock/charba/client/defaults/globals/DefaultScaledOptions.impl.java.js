goog.module('org.pepstock.charba.client.defaults.globals.DefaultScaledOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScaledOptions = goog.require('org.pepstock.charba.client.defaults.IsDefaultScaledOptions$impl');
const DefaultOptions = goog.require('org.pepstock.charba.client.defaults.globals.DefaultOptions$impl');

let IsDefaultScales = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultScales$impl');
let DefaultScales = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultScales$impl');

/**
 * @implements {IsDefaultScaledOptions}
 */
class DefaultScaledOptions extends DefaultOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultScales}*/
  this.f_scales__org_pepstock_charba_client_defaults_globals_DefaultScaledOptions_;
 }
 /** @return {!DefaultScaledOptions} */
 static $create__() {
  DefaultScaledOptions.$clinit();
  let $instance = new DefaultScaledOptions();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultScaledOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultScaledOptions__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultOptions__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultScaledOptions();
 }
 /** @override @return {IsDefaultScales} */
 m_getScales__() {
  return this.f_scales__org_pepstock_charba_client_defaults_globals_DefaultScaledOptions_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultScaledOptions() {
  this.f_scales__org_pepstock_charba_client_defaults_globals_DefaultScaledOptions_ = DefaultScales.$create__();
 }
 
 static $clinit() {
  DefaultScaledOptions.$clinit = () =>{};
  DefaultScaledOptions.$loadModules();
  DefaultOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultScaledOptions;
 }
 
 static $loadModules() {
  DefaultScales = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultScales$impl');
 }
}
IsDefaultScaledOptions.$markImplementor(DefaultScaledOptions);
$Util.$setClassMetadata(DefaultScaledOptions, "org.pepstock.charba.client.defaults.globals.DefaultScaledOptions");

exports = DefaultScaledOptions;

//# sourceMappingURL=DefaultScaledOptions.js.map
