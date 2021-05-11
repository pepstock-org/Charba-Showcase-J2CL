goog.module('org.pepstock.charba.client.data.HasBarStackGroup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let BarStackHandler = goog.forwardDeclare('org.pepstock.charba.client.data.BarStackHandler$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.data.HasBarStackGroup.$LambdaAdaptor$impl');

/**
 * @interface
 */
class HasBarStackGroup {
 /** @abstract @return {BarStackHandler} */
 m_getBarStackHandler__() {}
 /** @abstract */
 m_setStackGroup__java_lang_String(/** ?string */ stackGroup) {}
 /** @abstract @return {?string} */
 m_getStackGroup__() {}
 /** @return {HasBarStackGroup} */
 static $adapt(/** ?function():BarStackHandler */ fn) {
  HasBarStackGroup.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setStackGroup__$default__org_pepstock_charba_client_data_HasBarStackGroup__java_lang_String(/** !HasBarStackGroup */ $thisArg, /** ?string */ stackGroup) {
  HasBarStackGroup.$clinit();
  if (!$Equality.$same($thisArg.m_getBarStackHandler__(), null)) {
   $thisArg.m_getBarStackHandler__().m_setStackGroup__java_lang_String_$pp_org_pepstock_charba_client_data(stackGroup);
  }
 }
 /** @return {?string} */
 static m_getStackGroup__$default__org_pepstock_charba_client_data_HasBarStackGroup(/** !HasBarStackGroup */ $thisArg) {
  HasBarStackGroup.$clinit();
  if (!$Equality.$same($thisArg.m_getBarStackHandler__(), null)) {
   return $thisArg.m_getBarStackHandler__().m_getStackGroup___$pp_org_pepstock_charba_client_data();
  }
  return ChartType.f_BAR__org_pepstock_charba_client_ChartType.m_value__();
 }
 
 static $clinit() {
  HasBarStackGroup.$clinit = () =>{};
  HasBarStackGroup.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_data_HasBarStackGroup = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_data_HasBarStackGroup;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.data.HasBarStackGroup.$LambdaAdaptor$impl');
 }
}
HasBarStackGroup.$markImplementor(/**@type {Function}*/ (HasBarStackGroup));
$Util.$setClassMetadataForInterface(HasBarStackGroup, "org.pepstock.charba.client.data.HasBarStackGroup");

exports = HasBarStackGroup;

//# sourceMappingURL=HasBarStackGroup.js.map
