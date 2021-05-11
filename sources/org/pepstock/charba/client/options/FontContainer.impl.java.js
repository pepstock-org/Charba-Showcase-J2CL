goog.module('org.pepstock.charba.client.options.FontContainer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyHandler = goog.require('org.pepstock.charba.client.commons.PropertyHandler$impl');

let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let IsDefaultFontContainer = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFontContainer$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.options.Font$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.FontContainer.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PropertyHandler<IsDefaultFontContainer>}
 */
class FontContainer extends PropertyHandler {
 /** @protected */
 constructor() {
  super();
  /**@type {Font}*/
  this.f_font__org_pepstock_charba_client_options_FontContainer_;
 }
 /** @return {!FontContainer} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultFontContainer__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsDefaultFontContainer */ defaultValues, /** ? */ nativeObject) {
  FontContainer.$clinit();
  let $instance = new FontContainer();
  $instance.$ctor__org_pepstock_charba_client_options_FontContainer__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultFontContainer__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_FontContainer__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultFontContainer__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsDefaultFontContainer */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_PropertyHandler__org_pepstock_charba_client_commons_AbstractNode__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  this.f_font__org_pepstock_charba_client_options_FontContainer_ = Font.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(parent, Property.f_FONT__org_pepstock_charba_client_options_FontContainer_Property, /**@type {IsDefaultFontContainer}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultFontContainer)).m_getFont__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_FONT__org_pepstock_charba_client_options_FontContainer_Property));
 }
 /** @return {Font} */
 m_getFont___$pp_org_pepstock_charba_client_options() {
  return this.f_font__org_pepstock_charba_client_options_FontContainer_;
 }
 
 m_setColor__java_lang_String_$pp_org_pepstock_charba_client_options(/** ?string */ color) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_options_FontContainer_Property, color);
 }
 /** @return {?string} */
 m_getColorAsString___$pp_org_pepstock_charba_client_options() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_options_FontContainer_Property, /**@type {IsDefaultFontContainer}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultFontContainer)).m_getColorAsString__());
 }
 
 static $clinit() {
  FontContainer.$clinit = () =>{};
  FontContainer.$loadModules();
  PropertyHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FontContainer;
 }
 
 static $loadModules() {
  IsDefaultFontContainer = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultFontContainer$impl');
  Font = goog.module.get('org.pepstock.charba.client.options.Font$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.FontContainer.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(FontContainer, "org.pepstock.charba.client.options.FontContainer");

exports = FontContainer;

//# sourceMappingURL=FontContainer.js.map
