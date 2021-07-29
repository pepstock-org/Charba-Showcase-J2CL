goog.module('org.pepstock.charba.client.items.IsArea$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @interface
 */
class IsArea {
 /** @return {boolean} */
 static m_isConsistent__org_pepstock_charba_client_items_IsArea(/** IsArea */ area) {
  IsArea.$clinit();
  if (!$Equality.$same(area, null)) {
   let x = Undefined.m_isNot__double(area.m_getLeft__()) && Undefined.m_isNot__double(area.m_getRight__()) && area.m_getWidth__() >= 0;
   let y = Undefined.m_isNot__double(area.m_getTop__()) && Undefined.m_isNot__double(area.m_getBottom__()) && area.m_getHeight__() >= 0;
   return x && y;
  }
  return false;
 }
 /** @abstract @return {number} */
 m_getTop__() {}
 /** @abstract @return {number} */
 m_getRight__() {}
 /** @abstract @return {number} */
 m_getBottom__() {}
 /** @abstract @return {number} */
 m_getLeft__() {}
 /** @abstract @return {number} */
 m_getWidth__() {}
 /** @abstract @return {number} */
 m_getHeight__() {}
 /** @return {number} */
 static m_getWidth__$default__org_pepstock_charba_client_items_IsArea(/** !IsArea */ $thisArg) {
  IsArea.$clinit();
  return $thisArg.m_getRight__() - $thisArg.m_getLeft__();
 }
 /** @return {number} */
 static m_getHeight__$default__org_pepstock_charba_client_items_IsArea(/** !IsArea */ $thisArg) {
  IsArea.$clinit();
  return $thisArg.m_getBottom__() - $thisArg.m_getTop__();
 }
 
 static $clinit() {
  IsArea.$clinit = () =>{};
  IsArea.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_items_IsArea = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_items_IsArea;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
IsArea.$markImplementor(/**@type {Function}*/ (IsArea));
$Util.$setClassMetadataForInterface(IsArea, "org.pepstock.charba.client.items.IsArea");

exports = IsArea;

//# sourceMappingURL=IsArea.js.map
