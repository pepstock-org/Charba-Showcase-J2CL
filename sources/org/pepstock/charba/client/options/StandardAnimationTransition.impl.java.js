goog.module('org.pepstock.charba.client.options.StandardAnimationTransition$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractStandardKey = goog.require('org.pepstock.charba.client.options.AbstractStandardKey$impl');
const TransitionKey = goog.require('org.pepstock.charba.client.options.TransitionKey$impl');

/**
 * @implements {TransitionKey}
 */
class StandardAnimationTransition extends AbstractStandardKey {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!StandardAnimationTransition} */
 static $create__java_lang_String(/** ?string */ value) {
  StandardAnimationTransition.$clinit();
  let $instance = new StandardAnimationTransition();
  $instance.$ctor__org_pepstock_charba_client_options_StandardAnimationTransition__java_lang_String(value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_StandardAnimationTransition__java_lang_String(/** ?string */ value) {
  this.$ctor__org_pepstock_charba_client_options_AbstractStandardKey__java_lang_String(value);
  TransitionKey.m_checkIfValid__org_pepstock_charba_client_options_TransitionKey(this);
 }
 
 static $clinit() {
  StandardAnimationTransition.$clinit = () =>{};
  StandardAnimationTransition.$loadModules();
  AbstractStandardKey.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StandardAnimationTransition;
 }
 
 static $loadModules() {}
}
TransitionKey.$markImplementor(StandardAnimationTransition);
$Util.$setClassMetadata(StandardAnimationTransition, "org.pepstock.charba.client.options.StandardAnimationTransition");

exports = StandardAnimationTransition;

//# sourceMappingURL=StandardAnimationTransition.js.map
