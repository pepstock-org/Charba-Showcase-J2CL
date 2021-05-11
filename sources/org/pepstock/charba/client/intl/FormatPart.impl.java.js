goog.module('org.pepstock.charba.client.intl.FormatPart$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Property = goog.forwardDeclare('org.pepstock.charba.client.intl.FormatPart.Property$impl');
let FormatPartType = goog.forwardDeclare('org.pepstock.charba.client.intl.enums.FormatPartType$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class FormatPart extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!FormatPart} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  FormatPart.$clinit();
  let $instance = new FormatPart();
  $instance.$ctor__org_pepstock_charba_client_intl_FormatPart__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_FormatPart__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {FormatPartType} */
 m_getType__() {
  return /**@type {FormatPartType}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_intl_FormatPart_Property, FormatPartType.m_values__(), FormatPartType.f_UNKNOWN__org_pepstock_charba_client_intl_enums_FormatPartType), FormatPartType));
 }
 /** @return {?string} */
 m_getValue__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_VALUE__org_pepstock_charba_client_intl_FormatPart_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 
 static $clinit() {
  FormatPart.$clinit = () =>{};
  FormatPart.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormatPart;
 }
 
 static $loadModules() {
  Property = goog.module.get('org.pepstock.charba.client.intl.FormatPart.Property$impl');
  FormatPartType = goog.module.get('org.pepstock.charba.client.intl.enums.FormatPartType$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(FormatPart, "org.pepstock.charba.client.intl.FormatPart");

exports = FormatPart;

//# sourceMappingURL=FormatPart.js.map
