goog.module('org.pepstock.charba.client.options.TransitionKey$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DefaultTransitionKey = goog.forwardDeclare('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
let StandardAnimationTransition = goog.forwardDeclare('org.pepstock.charba.client.options.StandardAnimationTransition$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.options.TransitionKey.$LambdaAdaptor$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @interface
 * @extends {Key}
 */
class TransitionKey {
 /** @return {TransitionKey} */
 static m_create__java_lang_String(/** ?string */ transition) {
  TransitionKey.$clinit();
  for (let $array = DefaultTransitionKey.m_values__(), $index = 0; $index < $array.length; $index++) {
   let defMode = $array[$index];
   {
    if (j_l_String.m_equals__java_lang_String__java_lang_Object(defMode.m_value__(), transition)) {
     return defMode;
    }
   }
  }
  return StandardAnimationTransition.$create__java_lang_String(transition);
 }
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {
  TransitionKey.$clinit();
  return Key.m_isValid__org_pepstock_charba_client_commons_Key(transition);
 }
 
 static m_checkIfValid__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {
  TransitionKey.$clinit();
  if (!TransitionKey.m_isValid__org_pepstock_charba_client_options_TransitionKey(transition)) {
   let exceptionMessage = !$Equality.$same(transition, null) ? "Invalid animation mode name, '" + j_l_String.m_valueOf__java_lang_Object(transition.m_value__()) + "' because is reserved" : "Animation mode is null or not consistent";
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(exceptionMessage));
  }
 }
 /** @return {TransitionKey} */
 static m_checkAndGetIfValid__org_pepstock_charba_client_options_TransitionKey(/** TransitionKey */ transition) {
  TransitionKey.$clinit();
  TransitionKey.m_checkIfValid__org_pepstock_charba_client_options_TransitionKey(transition);
  return transition;
 }
 /** @return {TransitionKey} */
 static $adapt(/** ?function():?string */ fn) {
  TransitionKey.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  TransitionKey.$clinit = () =>{};
  TransitionKey.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Key.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_TransitionKey = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_TransitionKey;
 }
 
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DefaultTransitionKey = goog.module.get('org.pepstock.charba.client.enums.DefaultTransitionKey$impl');
  StandardAnimationTransition = goog.module.get('org.pepstock.charba.client.options.StandardAnimationTransition$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.options.TransitionKey.$LambdaAdaptor$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
TransitionKey.$markImplementor(/**@type {Function}*/ (TransitionKey));
$Util.$setClassMetadataForInterface(TransitionKey, "org.pepstock.charba.client.options.TransitionKey");

exports = TransitionKey;

//# sourceMappingURL=TransitionKey.js.map
