goog.module('org.pepstock.charba.client.zoom.DefaultScaleRange$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScaleRange = goog.require('org.pepstock.charba.client.zoom.IsDefaultScaleRange$impl');

/**
 * @implements {IsDefaultScaleRange}
 */
class DefaultScaleRange extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultScaleRange} */
 static $create__() {
  DefaultScaleRange.$clinit();
  let $instance = new DefaultScaleRange();
  $instance.$ctor__org_pepstock_charba_client_zoom_DefaultScaleRange__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_DefaultScaleRange__() {
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
 /** @return {DefaultScaleRange} */
 static get f_INSTANCE__org_pepstock_charba_client_zoom_DefaultScaleRange() {
  return (DefaultScaleRange.$clinit(), DefaultScaleRange.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultScaleRange);
 }
 
 static $clinit() {
  DefaultScaleRange.$clinit = () =>{};
  DefaultScaleRange.$loadModules();
  j_l_Object.$clinit();
  IsDefaultScaleRange.$clinit();
  DefaultScaleRange.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultScaleRange = DefaultScaleRange.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultScaleRange;
 }
 
 static $loadModules() {}
}
/**@private {DefaultScaleRange}*/
DefaultScaleRange.$static_INSTANCE__org_pepstock_charba_client_zoom_DefaultScaleRange;
IsDefaultScaleRange.$markImplementor(DefaultScaleRange);
$Util.$setClassMetadata(DefaultScaleRange, "org.pepstock.charba.client.zoom.DefaultScaleRange");

exports = DefaultScaleRange;

//# sourceMappingURL=DefaultScaleRange.js.map
