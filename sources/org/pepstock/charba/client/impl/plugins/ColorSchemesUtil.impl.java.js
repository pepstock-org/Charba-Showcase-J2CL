goog.module('org.pepstock.charba.client.impl.plugins.ColorSchemesUtil$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let BarBorderWidth = goog.forwardDeclare('org.pepstock.charba.client.data.BarBorderWidth$impl');
let BarDataset = goog.forwardDeclare('org.pepstock.charba.client.data.BarDataset$impl');
let HovingFlexDataset = goog.forwardDeclare('org.pepstock.charba.client.data.HovingFlexDataset$impl');
let ColorScheme = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorScheme$impl');
let ColorSchemesOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ColorSchemesUtil extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<?string, ColorScheme>}*/
  this.f_colorSchemes__org_pepstock_charba_client_impl_plugins_ColorSchemesUtil_;
 }
 /** @return {!ColorSchemesUtil} */
 static $create__() {
  let $instance = new ColorSchemesUtil();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesUtil__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ColorSchemesUtil__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_impl_plugins_ColorSchemesUtil();
  this.m_putColorScheme__org_pepstock_charba_client_impl_plugins_ColorScheme_$pp_org_pepstock_charba_client_impl_plugins(ColorSchemesOptions.f_DEFAULT_SCHEME__org_pepstock_charba_client_impl_plugins_ColorSchemesOptions);
 }
 /** @return {ColorSchemesUtil} */
 static m_get__() {
  ColorSchemesUtil.$clinit();
  return ColorSchemesUtil.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ColorSchemesUtil_;
 }
 
 m_putColorScheme__org_pepstock_charba_client_impl_plugins_ColorScheme_$pp_org_pepstock_charba_client_impl_plugins(/** ColorScheme */ scheme) {
  this.f_colorSchemes__org_pepstock_charba_client_impl_plugins_ColorSchemesUtil_.put(this.m_createKey__org_pepstock_charba_client_impl_plugins_ColorScheme_$pp_org_pepstock_charba_client_impl_plugins(scheme), scheme);
 }
 /** @return {ColorScheme} */
 m_getColorScheme__java_lang_String__java_lang_String_$pp_org_pepstock_charba_client_impl_plugins(/** ?string */ category, /** ?string */ name) {
  return /**@type {ColorScheme}*/ ($Casts.$to(this.f_colorSchemes__org_pepstock_charba_client_impl_plugins_ColorSchemesUtil_.get(this.m_createKey__java_lang_String__java_lang_String_$pp_org_pepstock_charba_client_impl_plugins(category, name)), ColorScheme));
 }
 /** @return {boolean} */
 m_hasColorScheme__java_lang_String__java_lang_String_$pp_org_pepstock_charba_client_impl_plugins(/** ?string */ category, /** ?string */ name) {
  return this.f_colorSchemes__org_pepstock_charba_client_impl_plugins_ColorSchemesUtil_.containsKey(this.m_createKey__java_lang_String__java_lang_String_$pp_org_pepstock_charba_client_impl_plugins(category, name));
 }
 /** @return {?string} */
 m_createKey__org_pepstock_charba_client_impl_plugins_ColorScheme_$pp_org_pepstock_charba_client_impl_plugins(/** ColorScheme */ scheme) {
  return this.m_createKey__java_lang_String__java_lang_String_$pp_org_pepstock_charba_client_impl_plugins(scheme.m_category__(), scheme.m_value__());
 }
 /** @return {?string} */
 m_createKey__java_lang_String__java_lang_String_$pp_org_pepstock_charba_client_impl_plugins(/** ?string */ category, /** ?string */ name) {
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(name, "Color scheme name");
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(category, "Color scheme category");
  let sb = StringBuilder.$create__java_lang_String(category);
  sb.m_append__java_lang_String(Constants.f_DOT__org_pepstock_charba_client_commons_Constants).m_append__java_lang_String(name);
  return sb.toString();
 }
 /** @return {number} */
 m_getMaxBorderWidth__org_pepstock_charba_client_data_HovingFlexDataset_$pp_org_pepstock_charba_client_impl_plugins(/** HovingFlexDataset */ hovingDataset) {
  let borderWidths = hovingDataset.m_getBorderWidth__();
  let maxBorderWidth = 0;
  if (!borderWidths.isEmpty()) {
   for (let $iterator = borderWidths.m_iterator__(); $iterator.m_hasNext__(); ) {
    let borderWidth = /**@type {Integer}*/ ($Casts.$to($iterator.m_next__(), Integer));
    {
     maxBorderWidth = Math.max(maxBorderWidth, borderWidth.m_intValue__());
    }
   }
  } else if (BarDataset.$isInstance(hovingDataset)) {
   let barDataset = /**@type {BarDataset}*/ ($Casts.$to(hovingDataset, BarDataset));
   let borderWidthObjects = barDataset.m_getBorderWidthAsObjects__();
   for (let $iterator_1 = borderWidthObjects.m_iterator__(); $iterator_1.m_hasNext__(); ) {
    let borderWidth_1 = /**@type {BarBorderWidth}*/ ($Casts.$to($iterator_1.m_next__(), BarBorderWidth));
    {
     maxBorderWidth = Math.max(maxBorderWidth, borderWidth_1.m_getTop__());
     maxBorderWidth = Math.max(maxBorderWidth, borderWidth_1.m_getBottom__());
     maxBorderWidth = Math.max(maxBorderWidth, borderWidth_1.m_getLeft__());
     maxBorderWidth = Math.max(maxBorderWidth, borderWidth_1.m_getRight__());
    }
   }
  }
  return maxBorderWidth;
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_plugins_ColorSchemesUtil() {
  this.f_colorSchemes__org_pepstock_charba_client_impl_plugins_ColorSchemesUtil_ = /**@type {!HashMap<?string, ColorScheme>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  ColorSchemesUtil.$clinit = () =>{};
  ColorSchemesUtil.$loadModules();
  j_l_Object.$clinit();
  ColorSchemesUtil.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ColorSchemesUtil_ = ColorSchemesUtil.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColorSchemesUtil;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  BarBorderWidth = goog.module.get('org.pepstock.charba.client.data.BarBorderWidth$impl');
  BarDataset = goog.module.get('org.pepstock.charba.client.data.BarDataset$impl');
  ColorScheme = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorScheme$impl');
  ColorSchemesOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.ColorSchemesOptions$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {ColorSchemesUtil}*/
ColorSchemesUtil.f_INSTANCE__org_pepstock_charba_client_impl_plugins_ColorSchemesUtil_;
$Util.$setClassMetadata(ColorSchemesUtil, "org.pepstock.charba.client.impl.plugins.ColorSchemesUtil");

exports = ColorSchemesUtil;

//# sourceMappingURL=ColorSchemesUtil.js.map
