goog.module('org.pepstock.charba.client.options.StandardAnimationCollection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractTypedAnimationKey = goog.require('org.pepstock.charba.client.options.AbstractTypedAnimationKey$impl');
const AnimationCollectionKey = goog.require('org.pepstock.charba.client.options.AnimationCollectionKey$impl');

let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');
let AnimationPropertyKey = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationPropertyKey$impl');

/**
 * @implements {AnimationCollectionKey}
 */
class StandardAnimationCollection extends AbstractTypedAnimationKey {
 /** @protected */
 constructor() {
  super();
  /**@type {List<AnimationPropertyKey>}*/
  this.f_properties__org_pepstock_charba_client_options_StandardAnimationCollection_;
 }
 /** @return {!StandardAnimationCollection} */
 static $create__java_lang_String__org_pepstock_charba_client_enums_AnimationType(/** ?string */ value, /** AnimationType */ type) {
  StandardAnimationCollection.$clinit();
  let $instance = new StandardAnimationCollection();
  $instance.$ctor__org_pepstock_charba_client_options_StandardAnimationCollection__java_lang_String__org_pepstock_charba_client_enums_AnimationType(value, type);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_StandardAnimationCollection__java_lang_String__org_pepstock_charba_client_enums_AnimationType(/** ?string */ value, /** AnimationType */ type) {
  this.$ctor__org_pepstock_charba_client_options_AbstractTypedAnimationKey__java_lang_String__org_pepstock_charba_client_enums_AnimationType(value, type);
  this.$init___$p_org_pepstock_charba_client_options_StandardAnimationCollection();
  AnimationCollectionKey.m_checkIfValid__org_pepstock_charba_client_options_AnimationCollectionKey(this);
 }
 /** @override @return {List<AnimationPropertyKey>} */
 m_properties__() {
  return this.f_properties__org_pepstock_charba_client_options_StandardAnimationCollection_;
 }
 /** @override @return {number} */
 hashCode() {
  return super.hashCode();
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  return super.equals(obj);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_options_StandardAnimationCollection() {
  this.f_properties__org_pepstock_charba_client_options_StandardAnimationCollection_ = /**@type {!LinkedList<AnimationPropertyKey>}*/ (LinkedList.$create__());
 }
 
 static $clinit() {
  StandardAnimationCollection.$clinit = () =>{};
  StandardAnimationCollection.$loadModules();
  AbstractTypedAnimationKey.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StandardAnimationCollection;
 }
 
 static $loadModules() {
  LinkedList = goog.module.get('java.util.LinkedList$impl');
 }
}
AnimationCollectionKey.$markImplementor(StandardAnimationCollection);
$Util.$setClassMetadata(StandardAnimationCollection, "org.pepstock.charba.client.options.StandardAnimationCollection");

exports = StandardAnimationCollection;

//# sourceMappingURL=StandardAnimationCollection.js.map
