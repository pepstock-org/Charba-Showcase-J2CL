goog.module('org.pepstock.charba.client.defaults.globals.DefaultTypedDataset$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTypedDataset = goog.require('org.pepstock.charba.client.defaults.IsDefaultTypedDataset$impl');

let IsDefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');
let IsDefaultAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultAnimations$impl');
let IsDefaultTransitions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTransitions$impl');
let DefaultAnimation = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultAnimation$impl');
let DefaultAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultAnimations$impl');
let DefaultTransitions = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTransitions$impl');

/**
 * @implements {IsDefaultTypedDataset}
 */
class DefaultTypedDataset extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultAnimation}*/
  this.f_animation__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_;
  /**@type {IsDefaultAnimations}*/
  this.f_animations__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_;
  /**@type {IsDefaultTransitions}*/
  this.f_transitions__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_;
 }
 /** @return {!DefaultTypedDataset} */
 static $create__() {
  DefaultTypedDataset.$clinit();
  let $instance = new DefaultTypedDataset();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultTypedDataset();
 }
 /** @override @return {IsDefaultAnimation} */
 m_getAnimation__() {
  return this.f_animation__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_;
 }
 /** @override @return {IsDefaultTransitions} */
 m_getTransitions__() {
  return this.f_transitions__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_;
 }
 /** @override @return {IsDefaultAnimations} */
 m_getAnimations__() {
  return this.f_animations__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_;
 }
 /** @override @return {number} */
 m_getBarPercentage__() {
  return DefaultTypedDataset.f_DEFAULT_BAR_PERCENTAGE__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_;
 }
 /** @override @return {number} */
 m_getCategoryPercentage__() {
  return DefaultTypedDataset.f_DEFAULT_CATEGORY_PERCENTAGE__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_;
 }
 /** @override @return {number} */
 m_getBarThickness__() {
  return DefaultTypedDataset.f_DEFAULT_BAR_THICKNESS__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_;
 }
 /** @override @return {number} */
 m_getMaxBarThickness__() {
  return DefaultTypedDataset.f_DEFAULT_MAX_BAR_THICKNESS__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_;
 }
 /** @override @return {number} */
 m_getMinBarLength__() {
  return DefaultTypedDataset.f_DEFAULT_MIN_BAR_LENGTH__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_;
 }
 /** @override @return {boolean} */
 m_isGrouped__() {
  return DefaultTypedDataset.f_DEFAULT_GROUPED__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_;
 }
 /** @override @return {boolean} */
 m_isShowLine__() {
  return DefaultTypedDataset.f_DEFAULT_SHOW_LINE__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultTypedDataset() {
  this.f_animation__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_ = DefaultAnimation.$create__();
  this.f_animations__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_ = DefaultAnimations.$create__();
  this.f_transitions__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_ = DefaultTransitions.$create__();
 }
 
 static $clinit() {
  DefaultTypedDataset.$clinit = () =>{};
  DefaultTypedDataset.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultTypedDataset;
 }
 
 static $loadModules() {
  DefaultAnimation = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultAnimation$impl');
  DefaultAnimations = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultAnimations$impl');
  DefaultTransitions = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTransitions$impl');
 }
}
/**@const {number}*/
DefaultTypedDataset.f_FLEX_BAR_THICKNESS__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset = -2147483648;
/**@const {?string}*/
DefaultTypedDataset.f_FLEX_BAR_THICKNESS_VALUE__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset = "flex";
/**@const {number}*/
DefaultTypedDataset.f_DEFAULT_BAR_PERCENTAGE__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_ = 0.9;
/**@const {number}*/
DefaultTypedDataset.f_DEFAULT_CATEGORY_PERCENTAGE__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_ = 0.8;
/**@const {number}*/
DefaultTypedDataset.f_DEFAULT_BAR_THICKNESS__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_ = 0;
/**@const {number}*/
DefaultTypedDataset.f_DEFAULT_MAX_BAR_THICKNESS__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_ = 0;
/**@const {number}*/
DefaultTypedDataset.f_DEFAULT_MIN_BAR_LENGTH__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_ = 0;
/**@const {boolean}*/
DefaultTypedDataset.f_DEFAULT_GROUPED__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_ = true;
/**@const {boolean}*/
DefaultTypedDataset.f_DEFAULT_SHOW_LINE__org_pepstock_charba_client_defaults_globals_DefaultTypedDataset_ = true;
IsDefaultTypedDataset.$markImplementor(DefaultTypedDataset);
$Util.$setClassMetadata(DefaultTypedDataset, "org.pepstock.charba.client.defaults.globals.DefaultTypedDataset");

exports = DefaultTypedDataset;

//# sourceMappingURL=DefaultTypedDataset.js.map
