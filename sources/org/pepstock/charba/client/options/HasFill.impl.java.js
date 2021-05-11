goog.module('org.pepstock.charba.client.options.HasFill$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultFillHandler = goog.require('org.pepstock.charba.client.defaults.IsDefaultFillHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');
let FillHandler = goog.forwardDeclare('org.pepstock.charba.client.options.FillHandler$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.options.HasFill.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {IsDefaultFillHandler}
 */
class HasFill {
 /** @abstract @return {FillHandler} */
 m_getFillHandler__() {}
 /** @abstract */
 m_setFill__boolean(/** boolean */ fill) {}
 /** @abstract */
 m_setFill__int(/** number */ index) {}
 /** @abstract */
 m_setFill__java_lang_String(/** ?string */ index) {}
 /** @abstract */
 m_setFill__org_pepstock_charba_client_enums_IsFill(/** IsFill */ fill) {}
 /** @abstract @override @return {IsFill} */
 m_getFill__() {}
 /** @return {HasFill} */
 static $adapt(/** ?function():FillHandler */ fn) {
  HasFill.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setFill__$default__org_pepstock_charba_client_options_HasFill__boolean(/** !HasFill */ $thisArg, /** boolean */ fill) {
  HasFill.$clinit();
  if (!$Equality.$same($thisArg.m_getFillHandler__(), null)) {
   $thisArg.m_getFillHandler__().m_setFill__boolean(fill);
  }
 }
 
 static m_setFill__$default__org_pepstock_charba_client_options_HasFill__int(/** !HasFill */ $thisArg, /** number */ index) {
  HasFill.$clinit();
  if (!$Equality.$same($thisArg.m_getFillHandler__(), null)) {
   $thisArg.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.m_getFill__int(index));
  }
 }
 
 static m_setFill__$default__org_pepstock_charba_client_options_HasFill__java_lang_String(/** !HasFill */ $thisArg, /** ?string */ index) {
  HasFill.$clinit();
  if (!$Equality.$same($thisArg.m_getFillHandler__(), null)) {
   $thisArg.m_setFill__org_pepstock_charba_client_enums_IsFill(Fill.m_getFill__java_lang_String(index));
  }
 }
 
 static m_setFill__$default__org_pepstock_charba_client_options_HasFill__org_pepstock_charba_client_enums_IsFill(/** !HasFill */ $thisArg, /** IsFill */ fill) {
  HasFill.$clinit();
  if (!$Equality.$same($thisArg.m_getFillHandler__(), null)) {
   $thisArg.m_getFillHandler__().m_setFill__org_pepstock_charba_client_enums_IsFill(fill);
  }
 }
 /** @return {IsFill} */
 static m_getFill__$default__org_pepstock_charba_client_options_HasFill(/** !HasFill */ $thisArg) {
  HasFill.$clinit();
  if (!$Equality.$same($thisArg.m_getFillHandler__(), null)) {
   return $thisArg.m_getFillHandler__().m_getFill__();
  }
  return Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getFill__();
 }
 
 static $clinit() {
  HasFill.$clinit = () =>{};
  HasFill.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultFillHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_HasFill = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_HasFill;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.options.HasFill.$LambdaAdaptor$impl');
 }
}
HasFill.$markImplementor(/**@type {Function}*/ (HasFill));
$Util.$setClassMetadataForInterface(HasFill, "org.pepstock.charba.client.options.HasFill");

exports = HasFill;

//# sourceMappingURL=HasFill.js.map
