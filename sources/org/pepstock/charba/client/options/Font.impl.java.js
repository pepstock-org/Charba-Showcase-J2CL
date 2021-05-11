goog.module('org.pepstock.charba.client.options.Font$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const IsFont = goog.require('org.pepstock.charba.client.options.IsFont$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let Weight = goog.forwardDeclare('org.pepstock.charba.client.enums.Weight$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Font.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsFont}
 */
class Font extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultFont}*/
  this.f_defaultValues__org_pepstock_charba_client_options_Font_;
 }
 /** @return {!Font} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultFont */ defaultValues, /** ? */ nativeObject) {
  Font.$clinit();
  let $instance = new Font();
  $instance.$ctor__org_pepstock_charba_client_options_Font__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Font__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultFont */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  this.f_defaultValues__org_pepstock_charba_client_options_Font_ = /**@type {IsDefaultFont}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultValues), IsDefaultFont));
 }
 /** @override */
 m_setSize__int(/** number */ size) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_SIZE__org_pepstock_charba_client_options_Font_Property, Checker.m_positiveOrZero__int(size));
 }
 /** @override @return {number} */
 m_getSize__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_SIZE__org_pepstock_charba_client_options_Font_Property, this.f_defaultValues__org_pepstock_charba_client_options_Font_.m_getSize__());
 }
 /** @override */
 m_setStyle__org_pepstock_charba_client_enums_FontStyle(/** FontStyle */ style) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_STYLE__org_pepstock_charba_client_options_Font_Property, style);
 }
 /** @override @return {FontStyle} */
 m_getStyle__() {
  return /**@type {FontStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_STYLE__org_pepstock_charba_client_options_Font_Property, FontStyle.m_values__(), this.f_defaultValues__org_pepstock_charba_client_options_Font_.m_getStyle__()), FontStyle));
 }
 /** @override */
 m_setFamily__java_lang_String(/** ?string */ family) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FAMILY__org_pepstock_charba_client_options_Font_Property, family);
 }
 /** @override @return {?string} */
 m_getFamily__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_FAMILY__org_pepstock_charba_client_options_Font_Property, this.f_defaultValues__org_pepstock_charba_client_options_Font_.m_getFamily__());
 }
 /** @override */
 m_setWeight__org_pepstock_charba_client_enums_Weight(/** Weight */ weight) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_WEIGHT__org_pepstock_charba_client_options_Font_Property, weight);
 }
 /** @override @return {Weight} */
 m_getWeight__() {
  return /**@type {Weight}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_WEIGHT__org_pepstock_charba_client_options_Font_Property, Weight.m_values__(), this.f_defaultValues__org_pepstock_charba_client_options_Font_.m_getWeight__()), Weight));
 }
 /** @override */
 m_setLineHeight__double(/** number */ lineHeight) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_LINE_HEIGHT__org_pepstock_charba_client_options_Font_Property, Checker.m_positiveOrZero__double(lineHeight));
 }
 /** @override */
 m_setLineHeight__java_lang_String(/** ?string */ lineHeight) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_LINE_HEIGHT__org_pepstock_charba_client_options_Font_Property, lineHeight);
 }
 /** @override @return {number} */
 m_getLineHeight__() {
  let defaultValue = this.f_defaultValues__org_pepstock_charba_client_options_Font_.m_getLineHeight__();
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_LINE_HEIGHT__org_pepstock_charba_client_options_Font_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_LINE_HEIGHT__org_pepstock_charba_client_options_Font_Property, defaultValue);
  }
  return defaultValue;
 }
 /** @override @return {?string} */
 m_getLineHeightAsString__() {
  let defaultValue = j_l_String.m_valueOf__double(this.f_defaultValues__org_pepstock_charba_client_options_Font_.m_getLineHeight__());
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_LINE_HEIGHT__org_pepstock_charba_client_options_Font_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_LINE_HEIGHT__org_pepstock_charba_client_options_Font_Property, defaultValue);
  }
  return defaultValue;
 }
 /** @override @return {FontItem} */
 m_create__org_pepstock_charba_client_defaults_IsDefaultFont(/** IsDefaultFont */ defaultValues) {
  return IsDefaultFont.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_defaults_IsDefaultFont(this, this.f_defaultValues__org_pepstock_charba_client_options_Font_);
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_options() {
  return this.m_getNativeObject__();
 }
 //Default method forwarding stub.
 /** @override @return {FontItem} */
 m_create__() {
  return IsDefaultFont.m_create__$default__org_pepstock_charba_client_defaults_IsDefaultFont(this);
 }
 
 static $clinit() {
  Font.$clinit = () =>{};
  Font.$loadModules();
  AbstractNode.$clinit();
  IsDefaultFont.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Font;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  IsDefaultFont = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
  FontStyle = goog.module.get('org.pepstock.charba.client.enums.FontStyle$impl');
  Weight = goog.module.get('org.pepstock.charba.client.enums.Weight$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Font.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsFont.$markImplementor(Font);
$Util.$setClassMetadata(Font, "org.pepstock.charba.client.options.Font");

exports = Font;

//# sourceMappingURL=Font.js.map
