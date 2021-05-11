goog.module('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let PaddingItem = goog.forwardDeclare('org.pepstock.charba.client.items.PaddingItem$impl');

/**
 * @interface
 */
class IsDefaultPadding {
 /** @abstract @return {number} */
 m_getLeft__() {}
 /** @abstract @return {number} */
 m_getRight__() {}
 /** @abstract @return {number} */
 m_getTop__() {}
 /** @abstract @return {number} */
 m_getBottom__() {}
 /** @abstract @return {PaddingItem} */
 m_create__() {}
 /** @abstract @return {PaddingItem} */
 m_create__org_pepstock_charba_client_defaults_IsDefaultPadding(/** IsDefaultPadding */ defaultValues) {}
 /** @return {PaddingItem} */
 static m_create__$default__org_pepstock_charba_client_defaults_IsDefaultPadding(/** !IsDefaultPadding */ $thisArg) {
  IsDefaultPadding.$clinit();
  return $thisArg.m_create__org_pepstock_charba_client_defaults_IsDefaultPadding(null);
 }
 /** @return {PaddingItem} */
 static m_create__$default__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_defaults_IsDefaultPadding(/** !IsDefaultPadding */ $thisArg, /** IsDefaultPadding */ defaultValues) {
  IsDefaultPadding.$clinit();
  let result = PaddingItem.$create__org_pepstock_charba_client_defaults_IsDefaultPadding(defaultValues);
  result.m_setLeft__int(Math.max($thisArg.m_getLeft__(), 0));
  result.m_setRight__int(Math.max($thisArg.m_getRight__(), 0));
  result.m_setTop__int(Math.max($thisArg.m_getTop__(), 0));
  result.m_setBottom__int(Math.max($thisArg.m_getBottom__(), 0));
  return result;
 }
 
 static $clinit() {
  IsDefaultPadding.$clinit = () =>{};
  IsDefaultPadding.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultPadding = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultPadding;
 }
 
 static $loadModules() {
  PaddingItem = goog.module.get('org.pepstock.charba.client.items.PaddingItem$impl');
 }
}
IsDefaultPadding.$markImplementor(/**@type {Function}*/ (IsDefaultPadding));
$Util.$setClassMetadataForInterface(IsDefaultPadding, "org.pepstock.charba.client.defaults.IsDefaultPadding");

exports = IsDefaultPadding;

//# sourceMappingURL=IsDefaultPadding.js.map
