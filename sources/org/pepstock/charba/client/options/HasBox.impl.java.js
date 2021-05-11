goog.module('org.pepstock.charba.client.options.HasBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultBoxHandler = goog.require('org.pepstock.charba.client.defaults.IsDefaultBoxHandler$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let BoxHandler = goog.forwardDeclare('org.pepstock.charba.client.options.BoxHandler$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.options.HasBox.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {IsDefaultBoxHandler}
 */
class HasBox {
 /** @abstract @return {BoxHandler} */
 m_getBoxHandler__() {}
 /** @abstract */
 m_setBoxWidth__int(/** number */ boxWidth) {}
 /** @abstract @override @return {number} */
 m_getBoxWidth__() {}
 /** @abstract */
 m_setBoxHeight__int(/** number */ boxHeight) {}
 /** @abstract @override @return {number} */
 m_getBoxHeight__() {}
 /** @return {HasBox} */
 static $adapt(/** ?function():BoxHandler */ fn) {
  HasBox.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setBoxWidth__$default__org_pepstock_charba_client_options_HasBox__int(/** !HasBox */ $thisArg, /** number */ boxWidth) {
  HasBox.$clinit();
  if (!$Equality.$same($thisArg.m_getBoxHandler__(), null)) {
   $thisArg.m_getBoxHandler__().m_setBoxWidth__int_$pp_org_pepstock_charba_client_options(boxWidth);
  }
 }
 /** @return {number} */
 static m_getBoxWidth__$default__org_pepstock_charba_client_options_HasBox(/** !HasBox */ $thisArg) {
  HasBox.$clinit();
  if (!$Equality.$same($thisArg.m_getBoxHandler__(), null)) {
   return $thisArg.m_getBoxHandler__().m_getBoxWidth___$pp_org_pepstock_charba_client_options();
  }
  return Defaults.m_get__().m_getGlobal__().m_getTooltips__().m_getBoxWidth__();
 }
 
 static m_setBoxHeight__$default__org_pepstock_charba_client_options_HasBox__int(/** !HasBox */ $thisArg, /** number */ boxHeight) {
  HasBox.$clinit();
  if (!$Equality.$same($thisArg.m_getBoxHandler__(), null)) {
   $thisArg.m_getBoxHandler__().m_setBoxHeight__int_$pp_org_pepstock_charba_client_options(boxHeight);
  }
 }
 /** @return {number} */
 static m_getBoxHeight__$default__org_pepstock_charba_client_options_HasBox(/** !HasBox */ $thisArg) {
  HasBox.$clinit();
  if (!$Equality.$same($thisArg.m_getBoxHandler__(), null)) {
   return $thisArg.m_getBoxHandler__().m_getBoxHeight___$pp_org_pepstock_charba_client_options();
  }
  return Defaults.m_get__().m_getGlobal__().m_getTooltips__().m_getBoxHeight__();
 }
 
 static $clinit() {
  HasBox.$clinit = () =>{};
  HasBox.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  IsDefaultBoxHandler.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_options_HasBox = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_options_HasBox;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.options.HasBox.$LambdaAdaptor$impl');
 }
}
HasBox.$markImplementor(/**@type {Function}*/ (HasBox));
$Util.$setClassMetadataForInterface(HasBox, "org.pepstock.charba.client.options.HasBox");

exports = HasBox;

//# sourceMappingURL=HasBox.js.map
