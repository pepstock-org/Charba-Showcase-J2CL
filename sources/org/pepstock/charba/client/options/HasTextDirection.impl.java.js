goog.module('org.pepstock.charba.client.options.HasTextDirection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultTextDirectionHandler = goog.require('org.pepstock.charba.client.defaults.IsDefaultTextDirectionHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let TextDirection = goog.forwardDeclare('org.pepstock.charba.client.enums.TextDirection$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.options.HasTextDirection.$LambdaAdaptor$impl');
let TextDirectionHandler = goog.forwardDeclare('org.pepstock.charba.client.options.TextDirectionHandler$impl');

/**
 * @interface
 * @extends {IsDefaultTextDirectionHandler}
 */
class HasTextDirection {
 /** @abstract @return {TextDirectionHandler} */
 m_getTextDirectionHandler__() {}
 /** @abstract */
 m_setRtl__boolean(/** boolean */ rtl) {}
 /** @abstract @override @return {boolean} */
 m_isRtl__() {}
 /** @abstract */
 m_setTextDirection__org_pepstock_charba_client_enums_TextDirection(/** TextDirection */ textDirection) {}
 /** @abstract @override @return {TextDirection} */
 m_getTextDirection__() {}
 /** @return {HasTextDirection} */
 static $adapt(/** ?function():TextDirectionHandler */ fn) {
  HasTextDirection.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setRtl__$default__org_pepstock_charba_client_options_HasTextDirection__boolean(/** !HasTextDirection */ $thisArg, /** boolean */ rtl) {
  HasTextDirection.$clinit();
  if (!$Equality.$same($thisArg.m_getTextDirectionHandler__(), null)) {
   $thisArg.m_getTextDirectionHandler__().m_setRtl__boolean_$pp_org_pepstock_charba_client_options(rtl);
  }
 }
 /** @return {boolean} */
 static m_isRtl__$default__org_pepstock_charba_client_options_HasTextDirection(/** !HasTextDirection */ $thisArg) {
  HasTextDirection.$clinit();
  if (!$Equality.$same($thisArg.m_getTextDirectionHandler__(), null)) {
   return $thisArg.m_getTextDirectionHandler__().m_isRtl___$pp_org_pepstock_charba_client_options();
  }
  return Defaults.m_get__().m_getGlobal__().m_getLegend__().m_isRtl__();
 }
 
 static m_setTextDirection__$default__org_pepstock_charba_client_options_HasTextDirection__org_pepstock_charba_client_enums_TextDirection(/** !HasTextDirection */ $thisArg, /** TextDirection */ textDirection) {
  HasTextDirection.$clinit();
  if (!$Equality.$same($thisArg.m_getTextDirectionHandler__(), null)) {
   $thisArg.m_getTextDirectionHandler__().m_setTextDirection__org_pepstock_charba_client_enums_TextDirection_$pp_org_pepstock_charba_client_options(textDirection);
  }
 }
 /** @return {TextDirection} */
 static m_getTextDirection__$default__org_pepstock_charba_client_options_HasTextDirection(/** !HasTextDirection */ $thisArg) {
  HasTextDirection.$clinit();
  if (!$Equality.$same($thisArg.m_getTextDirectionHandler__(), null)) {
   return $thisArg.m_getTextDirectionHandler__().m_getTextDirection___$pp_org_pepstock_charba_client_options();
  }
  return Defaults.m_get__().m_getGlobal__().m_getLegend__().m_getTextDirection__();
 }
 
 static $clinit() {
  HasTextDirection.$clinit = () =>{};
  HasTextDirection.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultTextDirectionHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_HasTextDirection = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_HasTextDirection;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.options.HasTextDirection.$LambdaAdaptor$impl');
 }
}
HasTextDirection.$markImplementor(/**@type {Function}*/ (HasTextDirection));
$Util.$setClassMetadataForInterface(HasTextDirection, "org.pepstock.charba.client.options.HasTextDirection");

exports = HasTextDirection;

//# sourceMappingURL=HasTextDirection.js.map
