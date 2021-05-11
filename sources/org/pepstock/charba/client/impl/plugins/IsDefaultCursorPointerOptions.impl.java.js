goog.module('org.pepstock.charba.client.impl.plugins.IsDefaultCursorPointerOptions$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');

/**
 * @interface
 */
class IsDefaultCursorPointerOptions {
 /** @abstract @return {CursorType} */
 m_getCursorPointer__() {}
 /** @return {CursorType} */
 static m_getCursorPointer__$default__org_pepstock_charba_client_impl_plugins_IsDefaultCursorPointerOptions(/** !IsDefaultCursorPointerOptions */ $thisArg) {
  IsDefaultCursorPointerOptions.$clinit();
  return CursorType.f_POINTER__org_pepstock_charba_client_dom_enums_CursorType;
 }
 
 static $clinit() {
  IsDefaultCursorPointerOptions.$clinit = () =>{};
  IsDefaultCursorPointerOptions.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_impl_plugins_IsDefaultCursorPointerOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_impl_plugins_IsDefaultCursorPointerOptions;
 }
 
 static $loadModules() {
  CursorType = goog.module.get('org.pepstock.charba.client.dom.enums.CursorType$impl');
 }
}
IsDefaultCursorPointerOptions.$markImplementor(/**@type {Function}*/ (IsDefaultCursorPointerOptions));
$Util.$setClassMetadataForInterface(IsDefaultCursorPointerOptions, "org.pepstock.charba.client.impl.plugins.IsDefaultCursorPointerOptions");

exports = IsDefaultCursorPointerOptions;

//# sourceMappingURL=IsDefaultCursorPointerOptions.js.map
