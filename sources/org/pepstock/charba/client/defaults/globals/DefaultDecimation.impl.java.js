goog.module('org.pepstock.charba.client.defaults.globals.DefaultDecimation$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDecimation = goog.require('org.pepstock.charba.client.defaults.IsDefaultDecimation$impl');

let DecimationAlgorithm = goog.forwardDeclare('org.pepstock.charba.client.enums.DecimationAlgorithm$impl');

/**
 * @implements {IsDefaultDecimation}
 */
class DefaultDecimation extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultDecimation} */
 static $create__() {
  DefaultDecimation.$clinit();
  let $instance = new DefaultDecimation();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultDecimation__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultDecimation__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return DefaultDecimation.f_DEFAULT_ENABLED__org_pepstock_charba_client_defaults_globals_DefaultDecimation_;
 }
 /** @override @return {DecimationAlgorithm} */
 m_getAlgorithm__() {
  return DecimationAlgorithm.f_MIN_MAX__org_pepstock_charba_client_enums_DecimationAlgorithm;
 }
 /** @override @return {number} */
 m_getSamples__() {
  return DefaultDecimation.f_DEFAULT_SAMPLES__org_pepstock_charba_client_defaults_globals_DefaultDecimation_;
 }
 /** @override @return {number} */
 m_getThreshold__() {
  return DefaultDecimation.f_DEFAULT_THRESHOLD__org_pepstock_charba_client_defaults_globals_DefaultDecimation_;
 }
 
 static $clinit() {
  DefaultDecimation.$clinit = () =>{};
  DefaultDecimation.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultDecimation;
 }
 
 static $loadModules() {
  DecimationAlgorithm = goog.module.get('org.pepstock.charba.client.enums.DecimationAlgorithm$impl');
 }
}
/**@const {boolean}*/
DefaultDecimation.f_DEFAULT_ENABLED__org_pepstock_charba_client_defaults_globals_DefaultDecimation_ = false;
/**@const {number}*/
DefaultDecimation.f_DEFAULT_SAMPLES__org_pepstock_charba_client_defaults_globals_DefaultDecimation_ = NaN;
/**@const {number}*/
DefaultDecimation.f_DEFAULT_THRESHOLD__org_pepstock_charba_client_defaults_globals_DefaultDecimation_ = NaN;
IsDefaultDecimation.$markImplementor(DefaultDecimation);
$Util.$setClassMetadata(DefaultDecimation, "org.pepstock.charba.client.defaults.globals.DefaultDecimation");

exports = DefaultDecimation;

//# sourceMappingURL=DefaultDecimation.js.map
