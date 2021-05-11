goog.module('org.pepstock.charba.client.options.HasSpanGaps$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DefaultsBuilder = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.options.HasSpanGaps.$LambdaAdaptor$impl');
let SpanGapHandler = goog.forwardDeclare('org.pepstock.charba.client.options.SpanGapHandler$impl');

/**
 * @interface
 */
class HasSpanGaps {
 /** @abstract @return {SpanGapHandler} */
 m_getSpanGapHandler__() {}
 /** @abstract */
 m_setSpanGaps__boolean(/** boolean */ spanGaps) {}
 /** @abstract */
 m_setSpanGaps__double(/** number */ spanGaps) {}
 /** @abstract @return {boolean} */
 m_isSpanGaps__() {}
 /** @abstract @return {number} */
 m_getSpanGaps__() {}
 /** @return {HasSpanGaps} */
 static $adapt(/** ?function():SpanGapHandler */ fn) {
  HasSpanGaps.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps__boolean(/** !HasSpanGaps */ $thisArg, /** boolean */ spanGaps) {
  HasSpanGaps.$clinit();
  if (!$Equality.$same($thisArg.m_getSpanGapHandler__(), null)) {
   $thisArg.m_getSpanGapHandler__().m_setSpanGaps__boolean_$pp_org_pepstock_charba_client_options(spanGaps);
  }
 }
 
 static m_setSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps__double(/** !HasSpanGaps */ $thisArg, /** number */ spanGaps) {
  HasSpanGaps.$clinit();
  if (!$Equality.$same($thisArg.m_getSpanGapHandler__(), null)) {
   $thisArg.m_getSpanGapHandler__().m_setSpanGaps__double_$pp_org_pepstock_charba_client_options(spanGaps);
  }
 }
 /** @return {boolean} */
 static m_isSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps(/** !HasSpanGaps */ $thisArg) {
  HasSpanGaps.$clinit();
  if (!$Equality.$same($thisArg.m_getSpanGapHandler__(), null)) {
   return $thisArg.m_getSpanGapHandler__().m_isSpanGaps___$pp_org_pepstock_charba_client_options();
  }
  return DefaultsBuilder.m_get__().m_getOptions__().m_isSpanGaps__();
 }
 /** @return {number} */
 static m_getSpanGaps__$default__org_pepstock_charba_client_options_HasSpanGaps(/** !HasSpanGaps */ $thisArg) {
  HasSpanGaps.$clinit();
  if (!$Equality.$same($thisArg.m_getSpanGapHandler__(), null)) {
   return $thisArg.m_getSpanGapHandler__().m_getSpanGaps___$pp_org_pepstock_charba_client_options();
  }
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 
 static $clinit() {
  HasSpanGaps.$clinit = () =>{};
  HasSpanGaps.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_options_HasSpanGaps = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_HasSpanGaps;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DefaultsBuilder = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultsBuilder$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.options.HasSpanGaps.$LambdaAdaptor$impl');
 }
}
HasSpanGaps.$markImplementor(/**@type {Function}*/ (HasSpanGaps));
$Util.$setClassMetadataForInterface(HasSpanGaps, "org.pepstock.charba.client.options.HasSpanGaps");

exports = HasSpanGaps;

//# sourceMappingURL=HasSpanGaps.js.map
