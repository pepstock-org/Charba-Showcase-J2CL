goog.module('org.pepstock.charba.client.zoom.DefaultWheel$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultWheel = goog.require('org.pepstock.charba.client.zoom.IsDefaultWheel$impl');

let ModifierKey = goog.forwardDeclare('org.pepstock.charba.client.enums.ModifierKey$impl');

/**
 * @implements {IsDefaultWheel}
 */
class DefaultWheel extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultWheel} */
 static $create__() {
  let $instance = new DefaultWheel();
  $instance.$ctor__org_pepstock_charba_client_zoom_DefaultWheel__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_DefaultWheel__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {ModifierKey} */
 m_getModifierKey__() {
  return IsDefaultWheel.m_getModifierKey__$default__org_pepstock_charba_client_zoom_IsDefaultWheel(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getSpeed__() {
  return IsDefaultWheel.m_getSpeed__$default__org_pepstock_charba_client_zoom_IsDefaultWheel(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isEnabled__() {
  return IsDefaultWheel.m_isEnabled__$default__org_pepstock_charba_client_zoom_IsDefaultWheel(this);
 }
 /** @return {DefaultWheel} */
 static get f_INSTANCE__org_pepstock_charba_client_zoom_DefaultWheel() {
  return (DefaultWheel.$clinit(), DefaultWheel.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultWheel);
 }
 
 static $clinit() {
  DefaultWheel.$clinit = () =>{};
  DefaultWheel.$loadModules();
  j_l_Object.$clinit();
  IsDefaultWheel.$clinit();
  DefaultWheel.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultWheel = DefaultWheel.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultWheel;
 }
 
 static $loadModules() {}
}
/**@private {DefaultWheel}*/
DefaultWheel.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultWheel;
IsDefaultWheel.$markImplementor(DefaultWheel);
$Util.$setClassMetadata(DefaultWheel, "org.pepstock.charba.client.zoom.DefaultWheel");

exports = DefaultWheel;

//# sourceMappingURL=DefaultWheel.js.map
