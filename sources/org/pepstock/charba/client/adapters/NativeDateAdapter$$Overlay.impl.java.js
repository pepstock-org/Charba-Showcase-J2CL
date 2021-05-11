goog.module('org.pepstock.charba.client.adapters.NativeDateAdapter.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DateAdapter = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapter$impl');
let DateAdapterModule = goog.forwardDeclare('org.pepstock.charba.client.adapters.DateAdapterModule$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class $Overlay {
 /** @return {?string} */
 static m_getId__$devirt__org_pepstock_charba_client_adapters_NativeDateAdapter(/** !CharbaChartAdaptersDate */ $thisArg) {
  $Overlay.$clinit();
  if ($Overlay.m_isUndefined__$devirt__org_pepstock_charba_client_adapters_NativeDateAdapter__java_lang_String($thisArg, DateAdapter.f_ID_PROPERTY__org_pepstock_charba_client_adapters_DateAdapter)) {
   return DateAdapterModule.f_ID__org_pepstock_charba_client_adapters_DateAdapterModule;
  }
  let id = $thisArg._id;
  return !$Equality.$same(id, null) ? id : DateAdapterModule.f_ID__org_pepstock_charba_client_adapters_DateAdapterModule;
 }
 /** @return {boolean} */
 static m_isUndefined__$devirt__org_pepstock_charba_client_adapters_NativeDateAdapter__java_lang_String(/** !CharbaChartAdaptersDate */ $thisArg, /** ?string */ key) {
  if (!$Equality.$same(key, null)) {
   let type = JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String($thisArg, key);
   return $Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_UNDEFINED__org_pepstock_charba_client_commons_ObjectType, type);
  }
  return true;
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CharbaChartAdaptersDate;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DateAdapter = goog.module.get('org.pepstock.charba.client.adapters.DateAdapter$impl');
  DateAdapterModule = goog.module.get('org.pepstock.charba.client.adapters.DateAdapterModule$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata($Overlay, "CharbaChartAdaptersDate");

exports = $Overlay;

//# sourceMappingURL=NativeDateAdapter$$Overlay.js.map
