goog.module('org.pepstock.charba.client.colors.GradientColor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let GradientColorFactory = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientColor.GradientColorFactory$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientColor.Property$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');

class GradientColor extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'GradientColor(double, IsColor)'.
 /** @return {!GradientColor} */
 static $create__double__org_pepstock_charba_client_colors_IsColor(/** number */ offset, /** IsColor */ color) {
  GradientColor.$clinit();
  let $instance = new GradientColor();
  $instance.$ctor__org_pepstock_charba_client_colors_GradientColor__double__org_pepstock_charba_client_colors_IsColor(offset, color);
  return $instance;
 }
 //Initialization from constructor 'GradientColor(double, IsColor)'.
 
 $ctor__org_pepstock_charba_client_colors_GradientColor__double__org_pepstock_charba_client_colors_IsColor(/** number */ offset, /** IsColor */ color) {
  this.$ctor__org_pepstock_charba_client_colors_GradientColor__double__java_lang_String(offset, IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(color) ? color.m_toRGBA__() : null);
 }
 //Factory method corresponding to constructor 'GradientColor(double, String)'.
 /** @return {!GradientColor} */
 static $create__double__java_lang_String(/** number */ offset, /** ?string */ color) {
  GradientColor.$clinit();
  let $instance = new GradientColor();
  $instance.$ctor__org_pepstock_charba_client_colors_GradientColor__double__java_lang_String(offset, color);
  return $instance;
 }
 //Initialization from constructor 'GradientColor(double, String)'.
 
 $ctor__org_pepstock_charba_client_colors_GradientColor__double__java_lang_String(/** number */ offset, /** ?string */ color) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
  GradientColor.m_checkOffsetWithinBounds__double(offset);
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_CHARBA_GRADIENT_COLOR_OFFSET__org_pepstock_charba_client_colors_GradientColor_Property, offset);
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_CHARBA_GRADIENT_COLOR__org_pepstock_charba_client_colors_GradientColor_Property, $Equality.$same(color, null) ? Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getBackgroundColorAsString__() : color);
 }
 //Factory method corresponding to constructor 'GradientColor(NativeObject)'.
 /** @return {!GradientColor} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  GradientColor.$clinit();
  let $instance = new GradientColor();
  $instance.$ctor__org_pepstock_charba_client_colors_GradientColor__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'GradientColor(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_colors_GradientColor__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {number} */
 m_getOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_CHARBA_GRADIENT_COLOR_OFFSET__org_pepstock_charba_client_colors_GradientColor_Property, GradientColor.f_DEFAULT_OFFSET__org_pepstock_charba_client_colors_GradientColor_);
 }
 /** @return {?string} */
 m_getColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_CHARBA_GRADIENT_COLOR__org_pepstock_charba_client_colors_GradientColor_Property, Defaults.m_get__().m_getGlobal__().m_getElements__().m_getLine__().m_getBackgroundColorAsString__());
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 static m_checkOffsetWithinBounds__double(/** number */ offset) {
  GradientColor.$clinit();
  Checker.m_checkIfBetween__double__double__double__java_lang_String(offset, GradientColor.f_DEFAULT_OFFSET_START__org_pepstock_charba_client_colors_GradientColor, GradientColor.f_DEFAULT_OFFSET_STOP__org_pepstock_charba_client_colors_GradientColor, "Offset argument");
 }
 /** @override @return {?string} */
 toString() {
  return "GradientColor [offset=" + this.m_getOffset__() + ", color=" + j_l_String.m_valueOf__java_lang_Object(this.m_getColorAsString__()) + "]";
 }
 /** @return {GradientColorFactory} */
 static get f_FACTORY__org_pepstock_charba_client_colors_GradientColor() {
  return (GradientColor.$clinit(), GradientColor.$static_FACTORY__org_pepstock_charba_client_colors_GradientColor);
 }
 
 static $clinit() {
  GradientColor.$clinit = () =>{};
  GradientColor.$loadModules();
  NativeObjectContainer.$clinit();
  GradientColor.$static_FACTORY__org_pepstock_charba_client_colors_GradientColor = GradientColorFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GradientColor;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  GradientColorFactory = goog.module.get('org.pepstock.charba.client.colors.GradientColor.GradientColorFactory$impl');
  Property = goog.module.get('org.pepstock.charba.client.colors.GradientColor.Property$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
 }
}
/**@const {number}*/
GradientColor.f_DEFAULT_OFFSET_START__org_pepstock_charba_client_colors_GradientColor = 0;
/**@const {number}*/
GradientColor.f_DEFAULT_OFFSET_STOP__org_pepstock_charba_client_colors_GradientColor = 1;
/**@private {GradientColorFactory}*/
GradientColor.$static_FACTORY__org_pepstock_charba_client_colors_GradientColor;
/**@const {number}*/
GradientColor.f_DEFAULT_OFFSET__org_pepstock_charba_client_colors_GradientColor_ = 0;
$Util.$setClassMetadata(GradientColor, "org.pepstock.charba.client.colors.GradientColor");

exports = GradientColor;

//# sourceMappingURL=GradientColor.js.map
