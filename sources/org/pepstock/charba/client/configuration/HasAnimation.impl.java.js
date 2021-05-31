goog.module('org.pepstock.charba.client.configuration.HasAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Animation = goog.forwardDeclare('org.pepstock.charba.client.configuration.Animation$impl');
let AnimationContainer = goog.forwardDeclare('org.pepstock.charba.client.configuration.AnimationContainer$impl');
let Animations = goog.forwardDeclare('org.pepstock.charba.client.configuration.Animations$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.configuration.HasAnimation.$LambdaAdaptor$impl');
let Transitions = goog.forwardDeclare('org.pepstock.charba.client.configuration.Transitions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 */
class HasAnimation {
 /** @abstract @return {AnimationContainer} */
 m_getAnimationContainer__() {}
 /** @abstract @return {Animation} */
 m_getAnimation__() {}
 /** @abstract @return {Animations} */
 m_getAnimations__() {}
 /** @abstract @return {Transitions} */
 m_getTransitions__() {}
 /** @abstract */
 m_setAnimationEnabled__boolean(/** boolean */ enabled) {}
 /** @abstract @return {boolean} */
 m_isAnimationEnabled__() {}
 /** @return {HasAnimation} */
 static $adapt(/** ?function():AnimationContainer */ fn) {
  HasAnimation.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {Animation} */
 static m_getAnimation__$default__org_pepstock_charba_client_configuration_HasAnimation(/** !HasAnimation */ $thisArg) {
  HasAnimation.$clinit();
  return /**@type {AnimationContainer}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String($thisArg.m_getAnimationContainer__(), "Animation container"), AnimationContainer)).m_getAnimation___$pp_org_pepstock_charba_client_configuration();
 }
 /** @return {Animations} */
 static m_getAnimations__$default__org_pepstock_charba_client_configuration_HasAnimation(/** !HasAnimation */ $thisArg) {
  HasAnimation.$clinit();
  return /**@type {AnimationContainer}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String($thisArg.m_getAnimationContainer__(), "Animation container"), AnimationContainer)).m_getAnimations___$pp_org_pepstock_charba_client_configuration();
 }
 /** @return {Transitions} */
 static m_getTransitions__$default__org_pepstock_charba_client_configuration_HasAnimation(/** !HasAnimation */ $thisArg) {
  HasAnimation.$clinit();
  return /**@type {AnimationContainer}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String($thisArg.m_getAnimationContainer__(), "Animation container"), AnimationContainer)).m_getTransitions___$pp_org_pepstock_charba_client_configuration();
 }
 
 static m_setAnimationEnabled__$default__org_pepstock_charba_client_configuration_HasAnimation__boolean(/** !HasAnimation */ $thisArg, /** boolean */ enabled) {
  HasAnimation.$clinit();
  if (!$Equality.$same($thisArg.m_getAnimationContainer__(), null)) {
   $thisArg.m_getAnimationContainer__().m_setAnimationEnabled__boolean_$pp_org_pepstock_charba_client_configuration(enabled);
  }
 }
 /** @return {boolean} */
 static m_isAnimationEnabled__$default__org_pepstock_charba_client_configuration_HasAnimation(/** !HasAnimation */ $thisArg) {
  HasAnimation.$clinit();
  if (!$Equality.$same($thisArg.m_getAnimationContainer__(), null)) {
   return $thisArg.m_getAnimationContainer__().m_isAnimationEnabled___$pp_org_pepstock_charba_client_configuration();
  }
  return true;
 }
 
 static $clinit() {
  HasAnimation.$clinit = () =>{};
  HasAnimation.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_configuration_HasAnimation = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_configuration_HasAnimation;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  AnimationContainer = goog.module.get('org.pepstock.charba.client.configuration.AnimationContainer$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.configuration.HasAnimation.$LambdaAdaptor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
HasAnimation.$markImplementor(/**@type {Function}*/ (HasAnimation));
$Util.$setClassMetadataForInterface(HasAnimation, "org.pepstock.charba.client.configuration.HasAnimation");

exports = HasAnimation;

//# sourceMappingURL=HasAnimation.js.map
