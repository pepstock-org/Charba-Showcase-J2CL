goog.module('org.pepstock.charba.client.zoom.DefaultDrag$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDrag = goog.require('org.pepstock.charba.client.zoom.IsDefaultDrag$impl');

let ModifierKey = goog.forwardDeclare('org.pepstock.charba.client.enums.ModifierKey$impl');

/**
 * @implements {IsDefaultDrag}
 */
class DefaultDrag extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultDrag} */
 static $create__() {
  let $instance = new DefaultDrag();
  $instance.$ctor__org_pepstock_charba_client_zoom_DefaultDrag__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_DefaultDrag__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return IsDefaultDrag.m_getBackgroundColorAsString__$default__org_pepstock_charba_client_zoom_IsDefaultDrag(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return IsDefaultDrag.m_getBorderColorAsString__$default__org_pepstock_charba_client_zoom_IsDefaultDrag(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getBorderWidth__() {
  return IsDefaultDrag.m_getBorderWidth__$default__org_pepstock_charba_client_zoom_IsDefaultDrag(this);
 }
 //Default method forwarding stub.
 /** @override @return {ModifierKey} */
 m_getModifierKey__() {
  return IsDefaultDrag.m_getModifierKey__$default__org_pepstock_charba_client_zoom_IsDefaultDrag(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getThreshold__() {
  return IsDefaultDrag.m_getThreshold__$default__org_pepstock_charba_client_zoom_IsDefaultDrag(this);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_isEnabled__() {
  return IsDefaultDrag.m_isEnabled__$default__org_pepstock_charba_client_zoom_IsDefaultDrag(this);
 }
 /** @return {DefaultDrag} */
 static get f_INSTANCE__org_pepstock_charba_client_zoom_DefaultDrag() {
  return (DefaultDrag.$clinit(), DefaultDrag.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultDrag);
 }
 
 static $clinit() {
  DefaultDrag.$clinit = () =>{};
  DefaultDrag.$loadModules();
  j_l_Object.$clinit();
  IsDefaultDrag.$clinit();
  DefaultDrag.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultDrag = DefaultDrag.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultDrag;
 }
 
 static $loadModules() {}
}
/**@private {DefaultDrag}*/
DefaultDrag.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultDrag;
IsDefaultDrag.$markImplementor(DefaultDrag);
$Util.$setClassMetadata(DefaultDrag, "org.pepstock.charba.client.zoom.DefaultDrag");

exports = DefaultDrag;

//# sourceMappingURL=DefaultDrag.js.map
