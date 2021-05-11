goog.module('org.pepstock.charba.client.zoom.DefaultScaleLimit$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScaleLimit = goog.require('org.pepstock.charba.client.zoom.IsDefaultScaleLimit$impl');

let IsDefaultScaleRange = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultScaleRange$impl');

/**
 * @implements {IsDefaultScaleLimit}
 */
class DefaultScaleLimit extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultScaleLimit} */
 static $create__() {
  DefaultScaleLimit.$clinit();
  let $instance = new DefaultScaleLimit();
  $instance.$ctor__org_pepstock_charba_client_zoom_DefaultScaleLimit__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_DefaultScaleLimit__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMax__() {
  return IsDefaultScaleRange.m_getMax__$default__org_pepstock_charba_client_zoom_IsDefaultScaleRange(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMin__() {
  return IsDefaultScaleRange.m_getMin__$default__org_pepstock_charba_client_zoom_IsDefaultScaleRange(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_getMinRange__() {
  return IsDefaultScaleLimit.m_getMinRange__$default__org_pepstock_charba_client_zoom_IsDefaultScaleLimit(this);
 }
 /** @return {DefaultScaleLimit} */
 static get f_INSTANCE__org_pepstock_charba_client_zoom_DefaultScaleLimit() {
  return (DefaultScaleLimit.$clinit(), DefaultScaleLimit.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultScaleLimit);
 }
 
 static $clinit() {
  DefaultScaleLimit.$clinit = () =>{};
  DefaultScaleLimit.$loadModules();
  j_l_Object.$clinit();
  IsDefaultScaleLimit.$clinit();
  DefaultScaleLimit.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultScaleLimit = DefaultScaleLimit.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultScaleLimit;
 }
 
 static $loadModules() {
  IsDefaultScaleRange = goog.module.get('org.pepstock.charba.client.zoom.IsDefaultScaleRange$impl');
 }
}
/**@private {DefaultScaleLimit}*/
DefaultScaleLimit.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultScaleLimit;
IsDefaultScaleLimit.$markImplementor(DefaultScaleLimit);
$Util.$setClassMetadata(DefaultScaleLimit, "org.pepstock.charba.client.zoom.DefaultScaleLimit");

exports = DefaultScaleLimit;

//# sourceMappingURL=DefaultScaleLimit.js.map
