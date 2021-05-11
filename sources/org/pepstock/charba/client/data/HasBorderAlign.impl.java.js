goog.module('org.pepstock.charba.client.data.HasBorderAlign$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let BorderAlignCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.BorderAlignCallback$impl');
let BorderAlignHandler = goog.forwardDeclare('org.pepstock.charba.client.data.BorderAlignHandler$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.pepstock.charba.client.data.HasBorderAlign.$LambdaAdaptor$impl');
let BorderAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderAlign$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @interface
 */
class HasBorderAlign {
 /** @abstract @return {BorderAlignHandler} */
 m_getBorderAlignHandler__() {}
 /** @abstract */
 m_setBorderAlign__arrayOf_org_pepstock_charba_client_enums_BorderAlign(/** Array<BorderAlign> */ align) {}
 /** @abstract */
 m_setBorderAlign__java_util_List(/** List<BorderAlign> */ align) {}
 /** @abstract @return {List<BorderAlign>} */
 m_getBorderAlign__() {}
 /** @abstract @return {BorderAlignCallback} */
 m_getBorderAlignCallback__() {}
 /** @abstract */
 m_setBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback(/** BorderAlignCallback */ borderAlignCallback) {}
 /** @return {HasBorderAlign} */
 static $adapt(/** ?function():BorderAlignHandler */ fn) {
  HasBorderAlign.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__arrayOf_org_pepstock_charba_client_enums_BorderAlign(/** !HasBorderAlign */ $thisArg, /** Array<BorderAlign> */ align) {
  HasBorderAlign.$clinit();
  if (!$Equality.$same($thisArg.m_getBorderAlignHandler__(), null)) {
   $thisArg.m_getBorderAlignHandler__().m_setBorderAlign__arrayOf_org_pepstock_charba_client_enums_BorderAlign_$pp_org_pepstock_charba_client_data(align);
  }
 }
 
 static m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__java_util_List(/** !HasBorderAlign */ $thisArg, /** List<BorderAlign> */ align) {
  HasBorderAlign.$clinit();
  if (!$Equality.$same($thisArg.m_getBorderAlignHandler__(), null)) {
   $thisArg.m_getBorderAlignHandler__().m_setBorderAlign__java_util_List_$pp_org_pepstock_charba_client_data(align);
  }
 }
 /** @return {List<BorderAlign>} */
 static m_getBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign(/** !HasBorderAlign */ $thisArg) {
  HasBorderAlign.$clinit();
  if (!$Equality.$same($thisArg.m_getBorderAlignHandler__(), null)) {
   return $thisArg.m_getBorderAlignHandler__().m_getBorderAlign___$pp_org_pepstock_charba_client_data();
  }
  return /**@type {List<BorderAlign>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<BorderAlign>}*/ ($Arrays.$init([Defaults.m_get__().m_getGlobal__().m_getElements__().m_getArc__().m_getBorderAlign__()], BorderAlign))));
 }
 /** @return {BorderAlignCallback} */
 static m_getBorderAlignCallback__$default__org_pepstock_charba_client_data_HasBorderAlign(/** !HasBorderAlign */ $thisArg) {
  HasBorderAlign.$clinit();
  if (!$Equality.$same($thisArg.m_getBorderAlignHandler__(), null)) {
   return $thisArg.m_getBorderAlignHandler__().m_getBorderAlignCallback___$pp_org_pepstock_charba_client_data();
  }
  return null;
 }
 
 static m_setBorderAlign__$default__org_pepstock_charba_client_data_HasBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback(/** !HasBorderAlign */ $thisArg, /** BorderAlignCallback */ borderAlignCallback) {
  HasBorderAlign.$clinit();
  if (!$Equality.$same($thisArg.m_getBorderAlignHandler__(), null)) {
   $thisArg.m_getBorderAlignHandler__().m_setBorderAlign__org_pepstock_charba_client_callbacks_BorderAlignCallback_$pp_org_pepstock_charba_client_data(borderAlignCallback);
  }
 }
 
 static $clinit() {
  HasBorderAlign.$clinit = () =>{};
  HasBorderAlign.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_data_HasBorderAlign = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_data_HasBorderAlign;
 }
 
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  $LambdaAdaptor = goog.module.get('org.pepstock.charba.client.data.HasBorderAlign.$LambdaAdaptor$impl');
  BorderAlign = goog.module.get('org.pepstock.charba.client.enums.BorderAlign$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
HasBorderAlign.$markImplementor(/**@type {Function}*/ (HasBorderAlign));
$Util.$setClassMetadataForInterface(HasBorderAlign, "org.pepstock.charba.client.data.HasBorderAlign");

exports = HasBorderAlign;

//# sourceMappingURL=HasBorderAlign.js.map
