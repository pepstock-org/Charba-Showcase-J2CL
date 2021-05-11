goog.module('org.pepstock.charba.client.options.AngleLines$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultAngleLines = goog.require('org.pepstock.charba.client.defaults.IsDefaultAngleLines$impl');
const AbstractScaleLines = goog.require('org.pepstock.charba.client.options.AbstractScaleLines$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AbstractScale = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractScale$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AngleLines.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractScaleLines<IsDefaultAngleLines>}
 * @implements {IsDefaultAngleLines}
 */
class AngleLines extends AbstractScaleLines {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!AngleLines} */
 static $create__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAngleLines__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** IsDefaultAngleLines */ defaultValues, /** ? */ nativeObject) {
  AngleLines.$clinit();
  let $instance = new AngleLines();
  $instance.$ctor__org_pepstock_charba_client_options_AngleLines__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAngleLines__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_AngleLines__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultAngleLines__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** IsDefaultAngleLines */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractScaleLines__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_AngleLines_Property, display);
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_AngleLines_Property, /**@type {IsDefaultAngleLines}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAngleLines)).m_isDisplay__());
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setColor__java_lang_String(/** ?string */ color) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_options_AngleLines_Property, color);
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_options_AngleLines_Property, /**@type {IsDefaultAngleLines}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAngleLines)).m_getColorAsString__());
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 m_setLineWidth__int(/** number */ lineWidth) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_LINE_WIDTH__org_pepstock_charba_client_options_AngleLines_Property, Checker.m_positiveOrZero__int(lineWidth));
 }
 /** @override @return {number} */
 m_getLineWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_LINE_WIDTH__org_pepstock_charba_client_options_AngleLines_Property, /**@type {IsDefaultAngleLines}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAngleLines)).m_getLineWidth__());
 }
 /** @override @return {number} */
 m_getDefaultBorderDashOffset___$pp_org_pepstock_charba_client_options() {
  return /**@type {IsDefaultAngleLines}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAngleLines)).m_getBorderDashOffset__();
 }
 /** @override @return {List<Integer>} */
 m_getDefaultBorderDash___$pp_org_pepstock_charba_client_options() {
  return /**@type {IsDefaultAngleLines}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultAngleLines)).m_getBorderDash__();
 }
 
 static $clinit() {
  AngleLines.$clinit = () =>{};
  AngleLines.$loadModules();
  AbstractScaleLines.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AngleLines;
 }
 
 static $loadModules() {
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AngleLines.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultAngleLines.$markImplementor(AngleLines);
$Util.$setClassMetadata(AngleLines, "org.pepstock.charba.client.options.AngleLines");

exports = AngleLines;

//# sourceMappingURL=AngleLines.js.map
