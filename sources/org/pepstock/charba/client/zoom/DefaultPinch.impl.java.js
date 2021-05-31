goog.module('org.pepstock.charba.client.zoom.DefaultPinch$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultPinch = goog.require('org.pepstock.charba.client.zoom.IsDefaultPinch$impl');

/**
 * @implements {IsDefaultPinch}
 */
class DefaultPinch extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultPinch} */
 static $create__() {
  let $instance = new DefaultPinch();
  $instance.$ctor__org_pepstock_charba_client_zoom_DefaultPinch__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_DefaultPinch__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isEnabled__() {
  return IsDefaultPinch.m_isEnabled__$default__org_pepstock_charba_client_zoom_IsDefaultPinch(this);
 }
 /** @return {DefaultPinch} */
 static get f_INSTANCE__org_pepstock_charba_client_zoom_DefaultPinch() {
  return (DefaultPinch.$clinit(), DefaultPinch.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultPinch);
 }
 
 static $clinit() {
  DefaultPinch.$clinit = () =>{};
  DefaultPinch.$loadModules();
  j_l_Object.$clinit();
  IsDefaultPinch.$clinit();
  DefaultPinch.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultPinch = DefaultPinch.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultPinch;
 }
 
 static $loadModules() {}
}
/**@private {DefaultPinch}*/
DefaultPinch.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultPinch;
IsDefaultPinch.$markImplementor(DefaultPinch);
$Util.$setClassMetadata(DefaultPinch, "org.pepstock.charba.client.zoom.DefaultPinch");

exports = DefaultPinch;

//# sourceMappingURL=DefaultPinch.js.map
