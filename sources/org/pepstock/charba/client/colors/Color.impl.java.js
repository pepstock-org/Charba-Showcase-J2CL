goog.module('org.pepstock.charba.client.colors.Color$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsColor = goog.require('org.pepstock.charba.client.colors.IsColor$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ColorUtil = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorUtil$impl');

/**
 * @implements {IsColor}
 */
class Color extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_red__org_pepstock_charba_client_colors_Color_ = 0;
  /**@type {number}*/
  this.f_green__org_pepstock_charba_client_colors_Color_ = 0;
  /**@type {number}*/
  this.f_blue__org_pepstock_charba_client_colors_Color_ = 0;
  /**@type {number}*/
  this.f_alpha__org_pepstock_charba_client_colors_Color_ = 0;
 }
 //Factory method corresponding to constructor 'Color(int, int, int)'.
 /** @return {!Color} */
 static $create__int__int__int(/** number */ r, /** number */ g, /** number */ b) {
  Color.$clinit();
  let $instance = new Color();
  $instance.$ctor__org_pepstock_charba_client_colors_Color__int__int__int(r, g, b);
  return $instance;
 }
 //Initialization from constructor 'Color(int, int, int)'.
 
 $ctor__org_pepstock_charba_client_colors_Color__int__int__int(/** number */ r, /** number */ g, /** number */ b) {
  this.$ctor__org_pepstock_charba_client_colors_Color__int__int__int__double(r, g, b, Color.f_DEFAULT_ALPHA__org_pepstock_charba_client_colors_Color);
 }
 //Factory method corresponding to constructor 'Color(int, int, int, double)'.
 /** @return {!Color} */
 static $create__int__int__int__double(/** number */ r, /** number */ g, /** number */ b, /** number */ a) {
  Color.$clinit();
  let $instance = new Color();
  $instance.$ctor__org_pepstock_charba_client_colors_Color__int__int__int__double(r, g, b, a);
  return $instance;
 }
 //Initialization from constructor 'Color(int, int, int, double)'.
 
 $ctor__org_pepstock_charba_client_colors_Color__int__int__int__double(/** number */ r, /** number */ g, /** number */ b, /** number */ a) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_colors_Color();
  ColorUtil.m_checkChannelWithinBounds__int(r);
  ColorUtil.m_checkChannelWithinBounds__int(g);
  ColorUtil.m_checkChannelWithinBounds__int(b);
  ColorUtil.m_checkAlphaWithinBounds__double(a);
  this.f_red__org_pepstock_charba_client_colors_Color_ = r;
  this.f_green__org_pepstock_charba_client_colors_Color_ = g;
  this.f_blue__org_pepstock_charba_client_colors_Color_ = b;
  this.f_alpha__org_pepstock_charba_client_colors_Color_ = a;
 }
 /** @override @return {number} */
 m_getRed__() {
  return this.f_red__org_pepstock_charba_client_colors_Color_;
 }
 /** @override @return {number} */
 m_getGreen__() {
  return this.f_green__org_pepstock_charba_client_colors_Color_;
 }
 /** @override @return {number} */
 m_getBlue__() {
  return this.f_blue__org_pepstock_charba_client_colors_Color_;
 }
 /** @override @return {number} */
 m_getAlpha__() {
  return this.f_alpha__org_pepstock_charba_client_colors_Color_;
 }
 /** @override @return {?string} */
 toString() {
  return "Color [red=" + this.f_red__org_pepstock_charba_client_colors_Color_ + ", green=" + this.f_green__org_pepstock_charba_client_colors_Color_ + ", blue=" + this.f_blue__org_pepstock_charba_client_colors_Color_ + ", alpha=" + this.f_alpha__org_pepstock_charba_client_colors_Color_ + ", hex=" + j_l_String.m_valueOf__java_lang_Object(this.m_toHex__()) + "]";
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_alpha__double(/** number */ arg0) {
  return IsColor.m_alpha__$default__org_pepstock_charba_client_colors_IsColor__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_brighter__() {
  return IsColor.m_brighter__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_brighter__double(/** number */ arg0) {
  return IsColor.m_brighter__$default__org_pepstock_charba_client_colors_IsColor__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_darker__() {
  return IsColor.m_darker__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_darker__double(/** number */ arg0) {
  return IsColor.m_darker__$default__org_pepstock_charba_client_colors_IsColor__double(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toHSL__() {
  return IsColor.m_toHSL__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toHSLA__() {
  return IsColor.m_toHSLA__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toHex__() {
  return IsColor.m_toHex__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toRGB__() {
  return IsColor.m_toRGB__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_toRGBA__() {
  return IsColor.m_toRGBA__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {number} */
 m_toRGBs__() {
  return IsColor.m_toRGBs__$default__org_pepstock_charba_client_colors_IsColor(this);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_colors_Color() {
  this.f_alpha__org_pepstock_charba_client_colors_Color_ = Color.f_DEFAULT_ALPHA__org_pepstock_charba_client_colors_Color;
 }
 /** @return {Color} */
 static get f_CHARBA__org_pepstock_charba_client_colors_Color() {
  return (Color.$clinit(), Color.$static_CHARBA__org_pepstock_charba_client_colors_Color);
 }
 
 static $clinit() {
  Color.$clinit = () =>{};
  Color.$loadModules();
  j_l_Object.$clinit();
  IsColor.$clinit();
  Color.$static_CHARBA__org_pepstock_charba_client_colors_Color = Color.$create__int__int__int(242, 113, 115);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Color;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ColorUtil = goog.module.get('org.pepstock.charba.client.colors.ColorUtil$impl');
 }
}
/**@const {number}*/
Color.f_DEFAULT_ALPHA__org_pepstock_charba_client_colors_Color = 1;
/**@private {Color}*/
Color.$static_CHARBA__org_pepstock_charba_client_colors_Color;
IsColor.$markImplementor(Color);
$Util.$setClassMetadata(Color, "org.pepstock.charba.client.colors.Color");

exports = Color;

//# sourceMappingURL=Color.js.map
