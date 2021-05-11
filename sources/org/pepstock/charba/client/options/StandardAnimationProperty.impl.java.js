goog.module('org.pepstock.charba.client.options.StandardAnimationProperty$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractTypedAnimationKey = goog.require('org.pepstock.charba.client.options.AbstractTypedAnimationKey$impl');
const IsAnimationPropertyKey = goog.require('org.pepstock.charba.client.options.IsAnimationPropertyKey$impl');

let AnimationType = goog.forwardDeclare('org.pepstock.charba.client.enums.AnimationType$impl');

/**
 * @implements {IsAnimationPropertyKey}
 */
class StandardAnimationProperty extends AbstractTypedAnimationKey {
 /** @protected */
 constructor() {
  super();
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
  IsAnimationPropertyKey.m_checkIfValid__org_pepstock_charba_client_options_IsAnimationPropertyKey(this);
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
 
 static $loadModules() {}
}
IsAnimationPropertyKey.$markImplementor(StandardAnimationProperty);
$Util.$setClassMetadata(StandardAnimationProperty, "org.pepstock.charba.client.options.StandardAnimationProperty");

exports = StandardAnimationProperty;

//# sourceMappingURL=StandardAnimationProperty.js.map
