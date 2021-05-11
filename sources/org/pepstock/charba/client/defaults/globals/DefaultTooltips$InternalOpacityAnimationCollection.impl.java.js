goog.module('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalOpacityAnimationCollection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultAnimationCollection = goog.require('org.pepstock.charba.client.defaults.globals.DefaultAnimationCollection$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let InternalAnimations = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalAnimations$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let Easing = goog.forwardDeclare('org.pepstock.charba.client.enums.Easing$impl');
let IsAnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.options.IsAnimationPropertyKey$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class InternalOpacityAnimationCollection extends DefaultAnimationCollection {
 /** @protected */
 constructor() {
  super();
  /**@type {List<IsAnimationPropertyKey>}*/
  this.f_properties__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalOpacityAnimationCollection_;
 }
 /** @return {!InternalOpacityAnimationCollection} */
 static $create__() {
  InternalOpacityAnimationCollection.$clinit();
  let $instance = new InternalOpacityAnimationCollection();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalOpacityAnimationCollection__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalOpacityAnimationCollection__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimationCollection__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalOpacityAnimationCollection();
 }
 /** @override @return {List<IsAnimationPropertyKey>} */
 m_getProperties__() {
  if ($Equality.$same(this.f_properties__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalOpacityAnimationCollection_, null)) {
   this.f_properties__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalOpacityAnimationCollection_ = /**@type {List<IsAnimationPropertyKey>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {List<IsAnimationPropertyKey>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<IsAnimationPropertyKey>}*/ ($Arrays.$init([InternalAnimations.f_OPACITY__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_], IsAnimationPropertyKey))))));
  }
  return this.f_properties__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalOpacityAnimationCollection_;
 }
 /** @override @return {AnimationType} */
 m_getType__() {
  return InternalAnimations.f_OPACITY__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalAnimations_.m_type__();
 }
 /** @override @return {Easing} */
 m_getEasing__() {
  return Easing.f_LINEAR__org_pepstock_charba_client_enums_Easing;
 }
 /** @override @return {number} */
 m_getDuration__() {
  return InternalOpacityAnimationCollection.f_DEFAULT_DURATION__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalOpacityAnimationCollection_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalOpacityAnimationCollection() {
  this.f_properties__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalOpacityAnimationCollection_ = null;
 }
 
 static $clinit() {
  InternalOpacityAnimationCollection.$clinit = () =>{};
  InternalOpacityAnimationCollection.$loadModules();
  DefaultAnimationCollection.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InternalOpacityAnimationCollection;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  InternalAnimations = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultTooltips.InternalAnimations$impl');
  Easing = goog.module.get('org.pepstock.charba.client.enums.Easing$impl');
  IsAnimationPropertyKey = goog.module.get('org.pepstock.charba.client.options.IsAnimationPropertyKey$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number}*/
InternalOpacityAnimationCollection.f_DEFAULT_DURATION__org_pepstock_charba_client_defaults_globals_DefaultTooltips_InternalOpacityAnimationCollection_ = 200;
$Util.$setClassMetadata(InternalOpacityAnimationCollection, "org.pepstock.charba.client.defaults.globals.DefaultTooltips$InternalOpacityAnimationCollection");

exports = InternalOpacityAnimationCollection;

//# sourceMappingURL=DefaultTooltips$InternalOpacityAnimationCollection.js.map
