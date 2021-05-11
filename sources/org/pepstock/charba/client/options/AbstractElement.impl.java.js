goog.module('org.pepstock.charba.client.options.AbstractElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let IsDefaultOptionsElement = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptionsElement$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractElement.Property$impl');
let Elements = goog.forwardDeclare('org.pepstock.charba.client.options.Elements$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template D
 * @extends {AbstractModel<Elements, D>}
 */
class AbstractElement extends AbstractModel {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_options_AbstractElement__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultOptionsElement__org_pepstock_charba_client_commons_NativeObject(/** Elements */ elements, /** Key */ childKey, /** D */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(elements, childKey, defaultValues, nativeObject);
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_setBackgroundColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(backgroundColor));
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_options_AbstractElement_Property, backgroundColor);
 }
 /** @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_options_AbstractElement_Property, /**@type {IsDefaultOptionsElement}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptionsElement)).m_getBackgroundColorAsString__());
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBackgroundColorAsString__());
 }
 
 m_setBorderWidth__int(/** number */ borderWidth) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_options_AbstractElement_Property, Checker.m_positiveOrZero__int(borderWidth));
 }
 /** @return {number} */
 m_getBorderWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_options_AbstractElement_Property, /**@type {IsDefaultOptionsElement}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptionsElement)).m_getBorderWidth__());
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {
  this.m_setBorderColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(borderColor));
 }
 
 m_setBorderColor__java_lang_String(/** ?string */ borderColor) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_options_AbstractElement_Property, borderColor);
 }
 /** @return {?string} */
 m_getBorderColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_options_AbstractElement_Property, /**@type {IsDefaultOptionsElement}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptionsElement)).m_getBorderColorAsString__());
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBorderColorAsString__());
 }
 
 m_setHoverBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_setHoverBackgroundColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(backgroundColor));
 }
 
 m_setHoverBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_options_AbstractElement_Property, backgroundColor);
 }
 /** @return {?string} */
 m_getHoverBackgroundColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_HOVER_BACKGROUND_COLOR__org_pepstock_charba_client_options_AbstractElement_Property, /**@type {IsDefaultOptionsElement}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptionsElement)).m_getHoverBackgroundColorAsString__());
 }
 /** @return {IsColor} */
 m_getHoverBackgroundColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getHoverBackgroundColorAsString__());
 }
 
 m_setHoverBorderWidth__int(/** number */ borderWidth) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_options_AbstractElement_Property, Checker.m_positiveOrZero__int(borderWidth));
 }
 /** @return {number} */
 m_getHoverBorderWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_HOVER_BORDER_WIDTH__org_pepstock_charba_client_options_AbstractElement_Property, /**@type {IsDefaultOptionsElement}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptionsElement)).m_getHoverBorderWidth__());
 }
 
 m_setHoverBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {
  this.m_setHoverBorderColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(borderColor));
 }
 
 m_setHoverBorderColor__java_lang_String(/** ?string */ borderColor) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_options_AbstractElement_Property, borderColor);
 }
 /** @return {?string} */
 m_getHoverBorderColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_HOVER_BORDER_COLOR__org_pepstock_charba_client_options_AbstractElement_Property, /**@type {IsDefaultOptionsElement}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultOptionsElement)).m_getHoverBorderColorAsString__());
 }
 /** @return {IsColor} */
 m_getHoverBorderColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getHoverBorderColorAsString__());
 }
 
 static $clinit() {
  AbstractElement.$clinit = () =>{};
  AbstractElement.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractElement;
 }
 
 static $loadModules() {
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  IsDefaultOptionsElement = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultOptionsElement$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AbstractElement.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AbstractElement, "org.pepstock.charba.client.options.AbstractElement");

exports = AbstractElement;

//# sourceMappingURL=AbstractElement.js.map
