goog.module('org.pepstock.charba.client.defaults.IsDefaultFont$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @interface
 */
class IsDefaultFont {
 /** @abstract @return {number} */
 m_getSize__() {}
 /** @abstract @return {FontStyle} */
 m_getStyle__() {}
 /** @abstract @return {?string} */
 m_getFamily__() {}
 /** @abstract @return {Weight} */
 m_getWeight__() {}
 /** @abstract @return {number} */
 m_getLineHeight__() {}
 /** @abstract @return {?string} */
 m_getLineHeightAsString__() {}
 /** @abstract @return {FontItem} */
 m_create__() {}
 /** @abstract @return {FontItem} */
 m_create__org_pepstock_charba_client_defaults_IsDefaultFont(/** IsDefaultFont */ defaultValues) {}
 /** @return {FontItem} */
 static m_create__$default__org_pepstock_charba_client_defaults_IsDefaultFont(/** !IsDefaultFont */ $thisArg) {
  IsDefaultFont.$clinit();
  return $thisArg.m_create__org_pepstock_charba_client_defaults_IsDefaultFont(Defaults.m_get__().m_getGlobal__().m_getFont__());
 }
 /** @return {FontItem} */
 static m_create__$default__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_defaults_IsDefaultFont(/** !IsDefaultFont */ $thisArg, /** IsDefaultFont */ defaultValues) {
  IsDefaultFont.$clinit();
  let result = FontItem.$create__org_pepstock_charba_client_defaults_IsDefaultFont(defaultValues);
  let size = $thisArg.m_getSize__();
  if (Undefined.m_isNot__int(size)) {
   result.m_setSize__int(size);
  }
  result.m_setStyle__org_pepstock_charba_client_enums_FontStyle($thisArg.m_getStyle__());
  result.m_setFamily__java_lang_String($thisArg.m_getFamily__());
  result.m_setWeight__org_pepstock_charba_client_enums_Weight($thisArg.m_getWeight__());
  let lineHeightAsSttring = $thisArg.m_getLineHeightAsString__();
  if (!$Equality.$same(lineHeightAsSttring, null)) {
   result.m_setLineHeight__java_lang_String(lineHeightAsSttring);
  } else {
   let lineHeight = $thisArg.m_getLineHeight__();
   if (Undefined.m_isNot__double(lineHeight)) {
    result.m_setLineHeight__double(lineHeight);
   }
  }
  return result;
 }
 
 static $clinit() {
  IsDefaultFont.$clinit = () =>{};
  IsDefaultFont.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_pepstock_charba_client_defaults_IsDefaultFont = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_defaults_IsDefaultFont;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  FontItem = goog.module.get('org.pepstock.charba.client.items.FontItem$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
IsDefaultFont.$markImplementor(/**@type {Function}*/ (IsDefaultFont));
$Util.$setClassMetadataForInterface(IsDefaultFont, "org.pepstock.charba.client.defaults.IsDefaultFont");

exports = IsDefaultFont;

//# sourceMappingURL=IsDefaultFont.js.map
