goog.module('org.pepstock.charba.client.intl.CLocaleBuilder.LocaleRegExpGroups$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.intl.CLocaleBuilder.LocaleRegExpGroups.Property$impl');
let Language = goog.forwardDeclare('org.pepstock.charba.client.intl.Language$impl');
let Region = goog.forwardDeclare('org.pepstock.charba.client.intl.Region$impl');
let Script = goog.forwardDeclare('org.pepstock.charba.client.intl.Script$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LocaleRegExpGroups extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LocaleRegExpGroups} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  LocaleRegExpGroups.$clinit();
  let $instance = new LocaleRegExpGroups();
  $instance.$ctor__org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {Language} */
 m_getLanguage___$p_org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups() {
  return Language.m_getByCode__java_lang_String(this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_LANGUAGE__org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined));
 }
 /** @return {Script} */
 m_getScript___$p_org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups() {
  return /**@type {Script}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_SCRIPT__org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups_Property, Script.m_values__(), null), Script));
 }
 /** @return {Region} */
 m_getRegion___$p_org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups() {
  return /**@type {Region}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_REGION__org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups_Property, Region.m_values__(), null), Region));
 }
 /** @return {?string} */
 m_getVariantAndExtension___$p_org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_VARIANT_AND_EXTENSION__org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {boolean} */
 m_isConsistent___$p_org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups() {
  if (!this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_LANGUAGE__org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType) || $Equality.$same(Language.m_getByCode__java_lang_String(this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_LANGUAGE__org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined)), null)) {
   return false;
  }
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_REGION__org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType) && !Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(Region.m_values__(), this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_REGION__org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined))) {
   return false;
  }
  return !(this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_SCRIPT__org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType) && !Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(Script.m_values__(), this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_SCRIPT__org_pepstock_charba_client_intl_CLocaleBuilder_LocaleRegExpGroups_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined)));
 }
 
 static $clinit() {
  LocaleRegExpGroups.$clinit = () =>{};
  LocaleRegExpGroups.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LocaleRegExpGroups;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Property = goog.module.get('org.pepstock.charba.client.intl.CLocaleBuilder.LocaleRegExpGroups.Property$impl');
  Language = goog.module.get('org.pepstock.charba.client.intl.Language$impl');
  Region = goog.module.get('org.pepstock.charba.client.intl.Region$impl');
  Script = goog.module.get('org.pepstock.charba.client.intl.Script$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(LocaleRegExpGroups, "org.pepstock.charba.client.intl.CLocaleBuilder$LocaleRegExpGroups");

exports = LocaleRegExpGroups;

//# sourceMappingURL=CLocaleBuilder$LocaleRegExpGroups.js.map
