goog.module('org.pepstock.charba.client.configuration.HasAnimation.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasAnimation = goog.require('org.pepstock.charba.client.configuration.HasAnimation$impl');

let Animation = goog.forwardDeclare('org.pepstock.charba.client.configuration.Animation$impl');
let AnimationContainer = goog.forwardDeclare('org.pepstock.charba.client.configuration.AnimationContainer$impl');
let Animations = goog.forwardDeclare('org.pepstock.charba.client.configuration.Animations$impl');
let Transitions = goog.forwardDeclare('org.pepstock.charba.client.configuration.Transitions$impl');

/**
 * @implements {HasAnimation}
 */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():AnimationContainer */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():AnimationContainer}*/
  this.f_fn__org_pepstock_charba_client_configuration_HasAnimation_$LambdaAdaptor;
  this.$ctor__org_pepstock_charba_client_configuration_HasAnimation_$LambdaAdaptor__org_pepstock_charba_client_configuration_HasAnimation_$JsFunction(fn);
 }
 
 $ctor__org_pepstock_charba_client_configuration_HasAnimation_$LambdaAdaptor__org_pepstock_charba_client_configuration_HasAnimation_$JsFunction(/** ?function():AnimationContainer */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_fn__org_pepstock_charba_client_configuration_HasAnimation_$LambdaAdaptor = fn;
 }
 /** @override @return {AnimationContainer} */
 m_getAnimationContainer__() {
  let /** ?function():AnimationContainer */ $function;
  return ($function = this.f_fn__org_pepstock_charba_client_configuration_HasAnimation_$LambdaAdaptor, $function());
 }
 //Default method forwarding stub.
 /** @override @return {Animation} */
 m_getAnimation__() {
  return HasAnimation.m_getAnimation__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Animations} */
 m_getAnimations__() {
  return HasAnimation.m_getAnimations__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override @return {Transitions} */
 m_getTransitions__() {
  return HasAnimation.m_getTransitions__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isAnimationEnabled__() {
  return HasAnimation.m_isAnimationEnabled__$default__org_pepstock_charba_client_configuration_HasAnimation(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setAnimationEnabled__boolean(/** boolean */ arg0) {
  HasAnimation.m_setAnimationEnabled__$default__org_pepstock_charba_client_configuration_HasAnimation__boolean(this, arg0);
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
  HasAnimation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
}
HasAnimation.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, "org.pepstock.charba.client.configuration.HasAnimation$$LambdaAdaptor");

exports = $LambdaAdaptor;

//# sourceMappingURL=HasAnimation$$LambdaAdaptor.js.map
