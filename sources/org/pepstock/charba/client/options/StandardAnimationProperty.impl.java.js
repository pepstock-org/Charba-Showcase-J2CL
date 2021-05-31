goog.module('org.pepstock.charba.client.options.StandardAnimationProperty$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractTypedAnimationKey = goog.require('org.pepstock.charba.client.options.AbstractTypedAnimationKey$impl');
const AnimationPropertyKey = goog.require('org.pepstock.charba.client.options.AnimationPropertyKey$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {AnimationPropertyKey}
 */
class StandardAnimationProperty extends AbstractTypedAnimationKey {
 /** @protected */
 constructor() {
  super();
  /**@type {List<AnimationPropertyKey>}*/
  this.f_properties__org_pepstock_charba_client_options_StandardAnimationProperty_;
 }
 /** @return {!StandardAnimationProperty} */
 static $create__java_lang_String__org_pepstock_charba_client_enums_AnimationType(/** ?string */ value, /** AnimationType */ type) {
  StandardAnimationProperty.$clinit();
  let $instance = new StandardAnimationProperty();
  $instance.$ctor__org_pepstock_charba_client_options_StandardAnimationProperty__java_lang_String__org_pepstock_charba_client_enums_AnimationType(value, type);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_StandardAnimationProperty__java_lang_String__org_pepstock_charba_client_enums_AnimationType(/** ?string */ value, /** AnimationType */ type) {
  this.$ctor__org_pepstock_charba_client_options_AbstractTypedAnimationKey__java_lang_String__org_pepstock_charba_client_enums_AnimationType(value, type);
  this.$init___$p_org_pepstock_charba_client_options_StandardAnimationProperty();
  AnimationPropertyKey.m_checkIfValid__org_pepstock_charba_client_options_AnimationPropertyKey(this);
 }
 /** @override @return {number} */
 hashCode() {
  return super.hashCode();
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  return super.equals(obj);
 }
 /** @override @return {List<AnimationPropertyKey>} */
 m_properties__() {
  if ($Equality.$same(this.f_properties__org_pepstock_charba_client_options_StandardAnimationProperty_, null)) {
   this.f_properties__org_pepstock_charba_client_options_StandardAnimationProperty_ = /**@type {List<AnimationPropertyKey>}*/ (Collections.m_unmodifiableList__java_util_List(/**@type {List<StandardAnimationProperty>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<StandardAnimationProperty>}*/ ($Arrays.$init([this], StandardAnimationProperty))))));
  }
  return this.f_properties__org_pepstock_charba_client_options_StandardAnimationProperty_;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_options_StandardAnimationProperty() {
  this.f_properties__org_pepstock_charba_client_options_StandardAnimationProperty_ = null;
 }
 
 static $clinit() {
  StandardAnimationProperty.$clinit = () =>{};
  StandardAnimationProperty.$loadModules();
  AbstractTypedAnimationKey.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StandardAnimationProperty;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
AnimationPropertyKey.$markImplementor(StandardAnimationProperty);
$Util.$setClassMetadata(StandardAnimationProperty, "org.pepstock.charba.client.options.StandardAnimationProperty");

exports = StandardAnimationProperty;

//# sourceMappingURL=StandardAnimationProperty.js.map
