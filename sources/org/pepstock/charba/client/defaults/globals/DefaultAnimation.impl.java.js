goog.module('org.pepstock.charba.client.defaults.globals.DefaultAnimation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAnimation = goog.require('org.pepstock.charba.client.defaults.IsDefaultAnimation$impl');
const AbstractDefaultAnimation = goog.require('org.pepstock.charba.client.defaults.globals.AbstractDefaultAnimation$impl');

/**
 * @implements {IsDefaultAnimation}
 */
class DefaultAnimation extends AbstractDefaultAnimation {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultAnimation} */
 static $create__() {
  DefaultAnimation.$clinit();
  let $instance = new DefaultAnimation();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimation__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultAnimation__() {
  this.$ctor__org_pepstock_charba_client_defaults_globals_AbstractDefaultAnimation__();
 }
 /** @override @return {boolean} */
 m_isAnimateRotate__() {
  return DefaultAnimation.f_DEFAULT_ANIMATE_ROTATE__org_pepstock_charba_client_defaults_globals_DefaultAnimation_;
 }
 /** @override @return {boolean} */
 m_isAnimateScale__() {
  return DefaultAnimation.f_DEFAULT_ANIMATE_SCALE__org_pepstock_charba_client_defaults_globals_DefaultAnimation_;
 }
 
 static $clinit() {
  DefaultAnimation.$clinit = () =>{};
  DefaultAnimation.$loadModules();
  AbstractDefaultAnimation.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultAnimation;
 }
 
 static $loadModules() {}
}
/**@const {boolean}*/
DefaultAnimation.f_DEFAULT_ANIMATE_ROTATE__org_pepstock_charba_client_defaults_globals_DefaultAnimation_ = true;
/**@const {boolean}*/
DefaultAnimation.f_DEFAULT_ANIMATE_SCALE__org_pepstock_charba_client_defaults_globals_DefaultAnimation_ = false;
IsDefaultAnimation.$markImplementor(DefaultAnimation);
$Util.$setClassMetadata(DefaultAnimation, "org.pepstock.charba.client.defaults.globals.DefaultAnimation");

exports = DefaultAnimation;

//# sourceMappingURL=DefaultAnimation.js.map
