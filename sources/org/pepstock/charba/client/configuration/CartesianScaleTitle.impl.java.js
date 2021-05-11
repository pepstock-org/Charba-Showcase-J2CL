goog.module('org.pepstock.charba.client.configuration.CartesianScaleTitle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AxisContainer = goog.require('org.pepstock.charba.client.configuration.AxisContainer$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let IsProvider = goog.forwardDeclare('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
let Axis = goog.forwardDeclare('org.pepstock.charba.client.configuration.Axis$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.configuration.Font$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.configuration.Padding$impl');
let ScaleTitleAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleTitleAlign$impl');
let ExtendedScale = goog.forwardDeclare('org.pepstock.charba.client.options.ExtendedScale$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CartesianScaleTitle extends AxisContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {Padding}*/
  this.f_padding__org_pepstock_charba_client_configuration_CartesianScaleTitle_;
  /**@type {Font}*/
  this.f_font__org_pepstock_charba_client_configuration_CartesianScaleTitle_;
 }
 /** @return {!CartesianScaleTitle} */
 static $create__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  CartesianScaleTitle.$clinit();
  let $instance = new CartesianScaleTitle();
  $instance.$ctor__org_pepstock_charba_client_configuration_CartesianScaleTitle__org_pepstock_charba_client_configuration_Axis(axis);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_configuration_CartesianScaleTitle__org_pepstock_charba_client_configuration_Axis(/** Axis */ axis) {
  this.$ctor__org_pepstock_charba_client_configuration_AxisContainer__org_pepstock_charba_client_configuration_Axis(axis);
  this.f_padding__org_pepstock_charba_client_configuration_CartesianScaleTitle_ = Padding.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_getPadding__();
  }));
  this.f_font__org_pepstock_charba_client_configuration_CartesianScaleTitle_ = Font.$create__org_pepstock_charba_client_configuration_AbstractDynamicConfiguration_IsProvider(IsProvider.$adapt(() =>{
   return /**@type {ExtendedScale}*/ ($Casts.$to(this.m_getAxis__().m_getConfiguration__(), ExtendedScale)).m_getTitle__().m_getFont__();
  }));
 }
 /** @return {Font} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_configuration_CartesianScaleTitle_;
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setColor__java_lang_String(/** ?string */ color) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_setColor__java_lang_String(color);
 }
 /** @return {?string} */
 m_getColorAsString__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_getColorAsString__();
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 /** @return {Padding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_configuration_CartesianScaleTitle_;
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_setDisplay__boolean(display);
 }
 /** @return {boolean} */
 m_isDisplay__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_isDisplay__();
 }
 
 m_setText__arrayOf_java_lang_String(/** Array<?string> */ text) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_setText__arrayOf_java_lang_String(text);
 }
 /** @return {List<?string>} */
 m_getText__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_getText__();
 }
 
 m_setAlign__org_pepstock_charba_client_enums_ScaleTitleAlign(/** ScaleTitleAlign */ align) {
  this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_setAlign__org_pepstock_charba_client_enums_ScaleTitleAlign(align);
 }
 /** @return {ScaleTitleAlign} */
 m_getAlign__() {
  return this.m_getAxis__().m_getScale___$pp_org_pepstock_charba_client_configuration().m_getTitle__().m_getAlign__();
 }
 
 static $clinit() {
  CartesianScaleTitle.$clinit = () =>{};
  CartesianScaleTitle.$loadModules();
  AxisContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CartesianScaleTitle;
 }
 
 static $loadModules() {
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  IsProvider = goog.module.get('org.pepstock.charba.client.configuration.AbstractDynamicConfiguration.IsProvider$impl');
  Font = goog.module.get('org.pepstock.charba.client.configuration.Font$impl');
  Padding = goog.module.get('org.pepstock.charba.client.configuration.Padding$impl');
  ExtendedScale = goog.module.get('org.pepstock.charba.client.options.ExtendedScale$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(CartesianScaleTitle, "org.pepstock.charba.client.configuration.CartesianScaleTitle");

exports = CartesianScaleTitle;

//# sourceMappingURL=CartesianScaleTitle.js.map
