goog.module('org.pepstock.charba.client.zoom.Drag$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const IsDefaultDrag = goog.require('org.pepstock.charba.client.zoom.IsDefaultDrag$impl');

let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ModifierKey = goog.forwardDeclare('org.pepstock.charba.client.enums.ModifierKey$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.zoom.Drag.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsDefaultDrag}
 */
class Drag extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultDrag}*/
  this.f_defaultOptions__org_pepstock_charba_client_zoom_Drag_;
 }
 /** @return {!Drag} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_zoom_IsDefaultDrag__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultDrag */ defaultOptions, /** ? */ nativeObject) {
  Drag.$clinit();
  let $instance = new Drag();
  $instance.$ctor__org_pepstock_charba_client_zoom_Drag__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_zoom_IsDefaultDrag__org_pepstock_charba_client_commons_NativeObject(parent, childKey, defaultOptions, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_zoom_Drag__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_zoom_IsDefaultDrag__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** Key */ childKey, /** IsDefaultDrag */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(parent, childKey, nativeObject);
  this.f_defaultOptions__org_pepstock_charba_client_zoom_Drag_ = /**@type {IsDefaultDrag}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultOptions), IsDefaultDrag));
 }
 
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_zoom_Drag_Property, enabled);
 }
 /** @override @return {boolean} */
 m_isEnabled__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_zoom_Drag_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_Drag_.m_isEnabled__());
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_setBackgroundColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(backgroundColor));
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_zoom_Drag_Property, backgroundColor);
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_zoom_Drag_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_Drag_.m_getBackgroundColorAsString__());
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBackgroundColorAsString__());
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {
  this.m_setBorderColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(borderColor));
 }
 
 m_setBorderColor__java_lang_String(/** ?string */ borderColor) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_zoom_Drag_Property, borderColor);
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_zoom_Drag_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_Drag_.m_getBorderColorAsString__());
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBorderColorAsString__());
 }
 
 m_setBorderWidth__int(/** number */ borderWidth) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_zoom_Drag_Property, Checker.m_positiveOrZero__int(borderWidth));
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_zoom_Drag_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_Drag_.m_getBorderWidth__());
 }
 
 m_setThreshold__double(/** number */ threshold) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_THRESHOLD__org_pepstock_charba_client_zoom_Drag_Property, Checker.m_positiveOrZero__double(threshold));
 }
 /** @override @return {number} */
 m_getThreshold__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_THRESHOLD__org_pepstock_charba_client_zoom_Drag_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_Drag_.m_getThreshold__());
 }
 
 m_setModifierKey__org_pepstock_charba_client_enums_ModifierKey(/** ModifierKey */ modifierKey) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MODIFIER_KEY__org_pepstock_charba_client_zoom_Drag_Property, modifierKey);
 }
 /** @override @return {ModifierKey} */
 m_getModifierKey__() {
  return /**@type {ModifierKey}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_MODIFIER_KEY__org_pepstock_charba_client_zoom_Drag_Property, ModifierKey.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_zoom_Drag_.m_getModifierKey__()), ModifierKey));
 }
 
 static $clinit() {
  Drag.$clinit = () =>{};
  Drag.$loadModules();
  AbstractNode.$clinit();
  IsDefaultDrag.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Drag;
 }
 
 static $loadModules() {
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ModifierKey = goog.module.get('org.pepstock.charba.client.enums.ModifierKey$impl');
  Property = goog.module.get('org.pepstock.charba.client.zoom.Drag.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {boolean}*/
Drag.f_DEFAULT_ENABLED__org_pepstock_charba_client_zoom_Drag = false;
/**@const {?string}*/
Drag.f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_zoom_Drag = "rgba(225,225,225,0.3)";
/**@const {?string}*/
Drag.f_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_zoom_Drag = "rgb(225,225,225)";
/**@const {number}*/
Drag.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_zoom_Drag = 0;
/**@const {number}*/
Drag.f_DEFAULT_THRESHOLD__org_pepstock_charba_client_zoom_Drag = 0;
IsDefaultDrag.$markImplementor(Drag);
$Util.$setClassMetadata(Drag, "org.pepstock.charba.client.zoom.Drag");

exports = Drag;

//# sourceMappingURL=Drag.js.map
