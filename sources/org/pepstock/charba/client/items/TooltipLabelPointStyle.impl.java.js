goog.module('org.pepstock.charba.client.items.TooltipLabelPointStyle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelPointStyle.Property$impl');
let TooltipLabelPointStyleFactory = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelPointStyle.TooltipLabelPointStyleFactory$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class TooltipLabelPointStyle extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'TooltipLabelPointStyle()'.
 /** @return {!TooltipLabelPointStyle} */
 static $create__() {
  TooltipLabelPointStyle.$clinit();
  let $instance = new TooltipLabelPointStyle();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipLabelPointStyle__();
  return $instance;
 }
 //Initialization from constructor 'TooltipLabelPointStyle()'.
 
 $ctor__org_pepstock_charba_client_items_TooltipLabelPointStyle__() {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
 }
 //Factory method corresponding to constructor 'TooltipLabelPointStyle(NativeObject)'.
 /** @return {!TooltipLabelPointStyle} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  TooltipLabelPointStyle.$clinit();
  let $instance = new TooltipLabelPointStyle();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipLabelPointStyle__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'TooltipLabelPointStyle(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_TooltipLabelPointStyle__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 /** @return {PointStyle} */
 m_getPointStyle__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_STRING__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType__())) {
   return /**@type {PointStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_items_TooltipLabelPointStyle_Property, PointStyle.m_values__(), PointStyle.f_CIRCLE__org_pepstock_charba_client_enums_PointStyle), PointStyle));
  }
  return PointStyle.f_CIRCLE__org_pepstock_charba_client_enums_PointStyle;
 }
 /** @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_IMAGE__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType__())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_POINT_STYLE__org_pepstock_charba_client_items_TooltipLabelPointStyle_Property, Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined);
  }
  return Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {HTMLCanvasElement} */
 m_getPointStyleAsCanvas__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_CANVAS__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType__())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Canvas(Property.f_POINT_STYLE__org_pepstock_charba_client_items_TooltipLabelPointStyle_Property, Undefined.f_CANVAS_ELEMENT__org_pepstock_charba_client_items_Undefined);
  }
  return Undefined.f_CANVAS_ELEMENT__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {PointStyleType} */
 m_getPointStyleType__() {
  return PointStyleType.m_getType__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_Key(this, Property.f_POINT_STYLE__org_pepstock_charba_client_items_TooltipLabelPointStyle_Property);
 }
 
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ pointStyle) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_items_TooltipLabelPointStyle_Property, pointStyle);
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ pointStyle) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_POINT_STYLE__org_pepstock_charba_client_items_TooltipLabelPointStyle_Property, pointStyle);
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Canvas(/** HTMLCanvasElement */ pointStyle) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Canvas(Property.f_POINT_STYLE__org_pepstock_charba_client_items_TooltipLabelPointStyle_Property, pointStyle);
 }
 
 m_setRotation__double(/** number */ rotation) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_items_TooltipLabelPointStyle_Property, rotation);
 }
 /** @return {number} */
 m_getRotation__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_ROTATION__org_pepstock_charba_client_items_TooltipLabelPointStyle_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {?} */
 m_getObject__() {
  return this.m_getNativeObject__();
 }
 /** @return {TooltipLabelPointStyleFactory} */
 static get f_FACTORY__org_pepstock_charba_client_items_TooltipLabelPointStyle() {
  return (TooltipLabelPointStyle.$clinit(), TooltipLabelPointStyle.$static_FACTORY__org_pepstock_charba_client_items_TooltipLabelPointStyle);
 }
 
 static $clinit() {
  TooltipLabelPointStyle.$clinit = () =>{};
  TooltipLabelPointStyle.$loadModules();
  NativeObjectContainer.$clinit();
  TooltipLabelPointStyle.$static_FACTORY__org_pepstock_charba_client_items_TooltipLabelPointStyle = TooltipLabelPointStyleFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipLabelPointStyle;
 }
 
 static $loadModules() {
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  PointStyleType = goog.module.get('org.pepstock.charba.client.enums.PointStyleType$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.TooltipLabelPointStyle.Property$impl');
  TooltipLabelPointStyleFactory = goog.module.get('org.pepstock.charba.client.items.TooltipLabelPointStyle.TooltipLabelPointStyleFactory$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@private {TooltipLabelPointStyleFactory}*/
TooltipLabelPointStyle.$static_FACTORY__org_pepstock_charba_client_items_TooltipLabelPointStyle;
$Util.$setClassMetadata(TooltipLabelPointStyle, "org.pepstock.charba.client.items.TooltipLabelPointStyle");

exports = TooltipLabelPointStyle;

//# sourceMappingURL=TooltipLabelPointStyle.js.map
