goog.module('org.pepstock.charba.client.defaults.globals.DefaultLegendLabels$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLegendLabels = goog.require('org.pepstock.charba.client.defaults.IsDefaultLegendLabels$impl');

let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
let DefaultRoutedFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');

/**
 * @implements {IsDefaultLegendLabels}
 */
class DefaultLegendLabels extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DefaultRoutedFont}*/
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_;
 }
 /** @return {!DefaultLegendLabels} */
 static $create__() {
  DefaultLegendLabels.$clinit();
  let $instance = new DefaultLegendLabels();
  $instance.$ctor__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_defaults_globals_DefaultLegendLabels();
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return Defaults.m_get__().m_getGlobal__().m_getColorAsString__();
 }
 /** @override @return {IsDefaultFont} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_;
 }
 /** @override @return {boolean} */
 m_isUsePointStyle__() {
  return DefaultLegendLabels.f_DEFAULT_USE_POINT_STYLE__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_;
 }
 /** @override @return {PointStyle} */
 m_getPointStyle__() {
  return PointStyle.f_CIRCLE__org_pepstock_charba_client_enums_PointStyle;
 }
 /** @override @return {number} */
 m_getBoxWidth__() {
  return DefaultLegendLabels.f_DEFAULT_BOX_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_;
 }
 /** @override @return {number} */
 m_getBoxHeight__() {
  return this.f_font__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_.m_getSize__();
 }
 /** @override @return {number} */
 m_getPadding__() {
  return DefaultLegendLabels.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_;
 }
 /** @override @return {boolean} */
 m_isPointStyleAsImage__() {
  return DefaultLegendLabels.f_DEFAULT_POINT_STYLE_AS_IMG__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_;
 }
 /** @override @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return DefaultLegendLabels.f_DEFAULT_POINT_STYLE_IMG__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_;
 }
 /** @override @return {TextAlign} */
 m_getTextAlign__() {
  return TextAlign.f_CENTER__org_pepstock_charba_client_enums_TextAlign;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_defaults_globals_DefaultLegendLabels() {
  this.f_font__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_ = DefaultRoutedFont.$create__();
 }
 
 static $clinit() {
  DefaultLegendLabels.$clinit = () =>{};
  DefaultLegendLabels.$loadModules();
  j_l_Object.$clinit();
  IsDefaultPointStyleHandler.$clinit();
  DefaultLegendLabels.f_DEFAULT_POINT_STYLE_IMG__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_ = Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultLegendLabels;
 }
 
 static $loadModules() {
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  IsDefaultPointStyleHandler = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
  DefaultRoutedFont = goog.module.get('org.pepstock.charba.client.defaults.globals.DefaultRoutedFont$impl');
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  TextAlign = goog.module.get('org.pepstock.charba.client.enums.TextAlign$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
 }
}
/**@const {number}*/
DefaultLegendLabels.f_DEFAULT_PADDING__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_ = 10;
/**@const {number}*/
DefaultLegendLabels.f_DEFAULT_BOX_WIDTH__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_ = 40;
/**@const {boolean}*/
DefaultLegendLabels.f_DEFAULT_USE_POINT_STYLE__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_ = false;
/**@const {boolean}*/
DefaultLegendLabels.f_DEFAULT_POINT_STYLE_AS_IMG__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_ = false;
/**@type {HTMLImageElement}*/
DefaultLegendLabels.f_DEFAULT_POINT_STYLE_IMG__org_pepstock_charba_client_defaults_globals_DefaultLegendLabels_;
IsDefaultLegendLabels.$markImplementor(DefaultLegendLabels);
$Util.$setClassMetadata(DefaultLegendLabels, "org.pepstock.charba.client.defaults.globals.DefaultLegendLabels");

exports = DefaultLegendLabels;

//# sourceMappingURL=DefaultLegendLabels.js.map
