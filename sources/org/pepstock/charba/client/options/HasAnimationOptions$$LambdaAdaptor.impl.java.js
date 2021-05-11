goog.module('org.pepstock.charba.client.options.HasAnimationOptions.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasAnimationOptions = goog.require('org.pepstock.charba.client.options.HasAnimationOptions$impl');

let Animation = goog.forwardDeclare('org.pepstock.charba.client.options.Animation$impl');
let AnimationContainer = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationContainer$impl');
let Animations = goog.forwardDeclare('org.pepstock.charba.client.options.Animations$impl');
let Transitions = goog.forwardDeclare('org.pepstock.charba.client.options.Transitions$impl');

/**
 * @implements {HasAnimationOptions}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():AnimationContainer */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():AnimationContainer}*/
  this.f_fn__org_pepstock_charba_client_options_HasAnimationOptions_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_options_HasAnimationOptions_$LambdaAdaptor__org_pepstock_charba_client_options_HasAnimationOptions_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_options_HasAnimationOptions_$LambdaAdaptor__org_pepstock_charba_client_options_HasAnimationOptions_$JsFunction(/** ?function():AnimationContainer */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_options_HasAnimationOptions_$LambdaAdaptor = fn;
 }
 /** @override @return {AnimationContainer} */
 m_getAnimationContainer__() {
  let /** ?function():AnimationContainer */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_options_HasAnimationOptions_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {Animation} */
 m_getAnimation__() {
  return HasAnimationOptions.m_getAnimation__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {Animations} */
 m_getAnimations__() {
  return HasAnimationOptions.m_getAnimations__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {Transitions} */
 m_getTransitions__() {
  return HasAnimationOptions.m_getTransitions__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isAnimationEnabled__() {
  return HasAnimationOptions.m_isAnimationEnabled__$default__org_pepstock_charba_client_options_HasAnimationOptions(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setAnimationEnabled__boolean(/** boolean */ arg0) {
  HasAnimationOptions.m_setAnimationEnabled__$default__org_pepstock_charba_client_options_HasAnimationOptions__boolean(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasAnimationOptions.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasAnimationOptions.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.options.HasAnimationOptions$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasAnimationOptions$$LambdaAdaptor.js.map
