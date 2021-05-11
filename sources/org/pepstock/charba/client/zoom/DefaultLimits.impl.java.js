goog.module('org.pepstock.charba.client.zoom.DefaultLimits$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLimits = goog.require('org.pepstock.charba.client.zoom.IsDefaultLimits$impl');

let IsDefaultScaleLimit = goog.forwardDeclare('org.pepstock.charba.client.zoom.IsDefaultScaleLimit$impl');

/**
 * @implements {IsDefaultLimits}
 */
class DefaultLimits extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultLimits} */
 static $create__() {
  DefaultLimits.$clinit();
  let $instance = new DefaultLimits();
  $instance.$ctor__org_pepstock_charba_client_zoom_DefaultLimits__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_DefaultLimits__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {IsDefaultScaleLimit} */
 m_getX__() {
  return IsDefaultLimits.m_getX__$default__org_pepstock_charba_client_zoom_IsDefaultLimits(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsDefaultScaleLimit} */
 m_getY__() {
  return IsDefaultLimits.m_getY__$default__org_pepstock_charba_client_zoom_IsDefaultLimits(this);
 }
 
 static $clinit() {
  DefaultLimits.$clinit = () =>{};
  DefaultLimits.$loadModules();
  j_l_Object.$clinit();
  IsDefaultLimits.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultLimits;
 }
 
 static $loadModules() {}
}
IsDefaultLimits.$markImplementor(DefaultLimits);
$Util.$setClassMetadata(DefaultLimits, "org.pepstock.charba.client.zoom.DefaultLimits");

exports = DefaultLimits;

//# sourceMappingURL=DefaultLimits.js.map
