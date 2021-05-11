goog.module('org.pepstock.charba.client.options.HasAnimationOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimationContainer = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimationContainer$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Animation = goog.forwardDeclare('org.pepstock.charba.client.options.Animation$impl');
let AnimationContainer = goog.forwardDeclare('org.pepstock.charba.client.options.AnimationContainer$impl');
let Animations = goog.forwardDeclare('org.pepstock.charba.client.options.Animations$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.options.HasAnimationOptions.$LambdaAdaptor$impl');
let Transitions = goog.forwardDeclare('org.pepstock.charba.client.options.Transitions$impl');

/**
 * @interface
 * @extends {IsDefaultAnimationContainer}
 */
class HasAnimationOptions {
 /** @abstract @return {AnimationContainer} */
 m_getAnimationContainer__() {}
 /** @abstract @override @return {Animation} */
 m_getAnimation__() {}
 /** @abstract @override @return {Animations} */
 m_getAnimations__() {}
 /** @abstract @override @return {Transitions} */
 m_getTransitions__() {}
 /** @abstract */
 m_setAnimationEnabled__boolean(/** boolean */ enabled) {}
 /** @abstract @return {boolean} */
 m_isAnimationEnabled__() {}
 /** @return {HasAnimationOptions} */
 static $adapt(/** ?function():AnimationContainer */ fn) {
  HasAnimationOptions.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {Animation} */
 static m_getAnimation__$default__org_pepstock_charba_client_options_HasAnimationOptions(/** !HasAnimationOptions */ $thisArg) {
  HasAnimationOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getAnimationContainer__(), null)) {
   return $thisArg.m_getAnimationContainer__().m_getAnimation__();
  }
  return Defaults.m_get__().m_getGlobal__().m_getAnimation__();
 }
 /** @return {Animations} */
 static m_getAnimations__$default__org_pepstock_charba_client_options_HasAnimationOptions(/** !HasAnimationOptions */ $thisArg) {
  HasAnimationOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getAnimationContainer__(), null)) {
   return $thisArg.m_getAnimationContainer__().m_getAnimations__();
  }
  return Defaults.m_get__().m_getGlobal__().m_getAnimations__();
 }
 /** @return {Transitions} */
 static m_getTransitions__$default__org_pepstock_charba_client_options_HasAnimationOptions(/** !HasAnimationOptions */ $thisArg) {
  HasAnimationOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getAnimationContainer__(), null)) {
   return $thisArg.m_getAnimationContainer__().m_getTransitions___$pp_org_pepstock_charba_client_options();
  }
  return Defaults.m_get__().m_getGlobal__().m_getTransitions__();
 }
 
 static m_setAnimationEnabled__$default__org_pepstock_charba_client_options_HasAnimationOptions__boolean(/** !HasAnimationOptions */ $thisArg, /** boolean */ enabled) {
  HasAnimationOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getAnimationContainer__(), null)) {
   $thisArg.m_getAnimationContainer__().m_setAnimationEnabled__boolean_$pp_org_pepstock_charba_client_options(enabled);
  }
 }
 /** @return {boolean} */
 static m_isAnimationEnabled__$default__org_pepstock_charba_client_options_HasAnimationOptions(/** !HasAnimationOptions */ $thisArg) {
  HasAnimationOptions.$clinit();
  if (!$Equality.$same($thisArg.m_getAnimationContainer__(), null)) {
   return $thisArg.m_getAnimationContainer__().m_isAnimationEnabled___$pp_org_pepstock_charba_client_options();
  }
  return true;
 }
 
 static $clinit() {
  HasAnimationOptions.$clinit = () =>{};
  HasAnimationOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultAnimationContainer.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_HasAnimationOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_HasAnimationOptions;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.options.HasAnimationOptions.$LambdaAdaptor$impl');
 }
}
HasAnimationOptions.$markImplementor(/**@type {Function}*/ (HasAnimationOptions));
$Util.$setClassMetadataForInterface(HasAnimationOptions, "org.pepstock.charba.client.options.HasAnimationOptions");

exports = HasAnimationOptions;

//# sourceMappingURL=HasAnimationOptions.js.map
