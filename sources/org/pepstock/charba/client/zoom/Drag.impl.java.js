goog.module('org.pepstock.charba.client.zoom.Drag$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');
const IsDefaultDrag = goog.require('org.pepstock.charba.client.zoom.IsDefaultDrag$impl');

let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.zoom.Drag.Property$impl');

/**
 * @implements {IsDefaultDrag}
 */
class Drag extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
  /**@type {IsDefaultDrag}*/
  this.f_defaultOptions__org_pepstock_charba_client_zoom_Drag_;
 }
 //Factory method corresponding to constructor 'Drag(IsDefaultDrag)'.
 /** @return {!Drag} */
 static $create__org_pepstock_charba_client_zoom_IsDefaultDrag(/** IsDefaultDrag */ defaultOptions) {
  Drag.$clinit();
  let $instance = new Drag();
  $instance.$ctor__org_pepstock_charba_client_zoom_Drag__org_pepstock_charba_client_zoom_IsDefaultDrag(defaultOptions);
  return $instance;
 }
 //Initialization from constructor 'Drag(IsDefaultDrag)'.
 
 $ctor__org_pepstock_charba_client_zoom_Drag__org_pepstock_charba_client_zoom_IsDefaultDrag(/** IsDefaultDrag */ defaultOptions) {
  this.$ctor__org_pepstock_charba_client_zoom_Drag__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_zoom_IsDefaultDrag(null, defaultOptions);
 }
 //Factory method corresponding to constructor 'Drag(NativeObject, IsDefaultDrag)'.
 /** @return {!Drag} */
 static $create__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_zoom_IsDefaultDrag(/** ? */ nativeObject, /** IsDefaultDrag */ defaultOptions) {
  Drag.$clinit();
  let $instance = new Drag();
  $instance.$ctor__org_pepstock_charba_client_zoom_Drag__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_zoom_IsDefaultDrag(nativeObject, defaultOptions);
  return $instance;
 }
 //Initialization from constructor 'Drag(NativeObject, IsDefaultDrag)'.
 
 $ctor__org_pepstock_charba_client_zoom_Drag__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_zoom_IsDefaultDrag(/** ? */ nativeObject, /** IsDefaultDrag */ defaultOptions) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_defaultOptions__org_pepstock_charba_client_zoom_Drag_ = defaultOptions;
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_setBackgroundColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(backgroundColor));
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ backgroundColor) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_zoom_Drag_Property, backgroundColor);
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
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_zoom_Drag_Property, borderColor);
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
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_zoom_Drag_Property, Checker.m_positiveOrZero__int(borderWidth));
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_zoom_Drag_Property, this.f_defaultOptions__org_pepstock_charba_client_zoom_Drag_.m_getBorderWidth__());
 }
 
 static $clinit() {
  Drag.$clinit = () =>{};
  Drag.$loadModules();
  NativeObjectContainer.$clinit();
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
  Property = goog.module.get('org.pepstock.charba.client.zoom.Drag.Property$impl');
 }
}
/**@const {?string}*/
Drag.f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_zoom_Drag = "rgba(225,225,225,0.3)";
/**@const {?string}*/
Drag.f_DEFAULT_BORDER_COLOR__org_pepstock_charba_client_zoom_Drag = "rgb(225,225,225)";
/**@const {number}*/
Drag.f_DEFAULT_BORDER_WIDTH__org_pepstock_charba_client_zoom_Drag = 0;
IsDefaultDrag.$markImplementor(Drag);
$Util.$setClassMetadata(Drag, "org.pepstock.charba.client.zoom.Drag");

exports = Drag;

//# sourceMappingURL=Drag.js.map
