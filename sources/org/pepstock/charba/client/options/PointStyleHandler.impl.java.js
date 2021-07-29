goog.module('org.pepstock.charba.client.options.PointStyleHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyHandler = goog.require('org.pepstock.charba.client.commons.PropertyHandler$impl');

let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let IsDefaultPointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.PointStyleHandler.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {PropertyHandler<IsDefaultPointStyleHandler>}
 */
class PointStyleHandler extends PropertyHandler {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!PointStyleHandler} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsDefaultPointStyleHandler */ defaultValues, /** ? */ nativeObject) {
  PointStyleHandler.$clinit();
  let $instance = new PointStyleHandler();
  $instance.$ctor__org_pepstock_charba_client_options_PointStyleHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_PointStyleHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsDefaultPointStyleHandler */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_PropertyHandler__org_pepstock_charba_client_commons_AbstractNode__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
 }
 
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle_$pp_org_pepstock_charba_client_options(/** PointStyle */ pointStyle) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property, pointStyle);
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img_$pp_org_pepstock_charba_client_options(/** HTMLImageElement */ pointStyle) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property, pointStyle);
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Canvas_$pp_org_pepstock_charba_client_options(/** HTMLCanvasElement */ pointStyle) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Canvas(Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property, pointStyle);
 }
 /** @return {PointStyleType} */
 m_getPointStyleType___$pp_org_pepstock_charba_client_options() {
  return PointStyleType.m_getType__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_Key(this.m_getParent__(), Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property);
 }
 /** @return {PointStyle} */
 m_getPointStyle___$pp_org_pepstock_charba_client_options() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_STRING__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType___$pp_org_pepstock_charba_client_options())) {
   return /**@type {PointStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property, PointStyle.m_values__(), /**@type {IsDefaultPointStyleHandler}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPointStyleHandler)).m_getPointStyle__()), PointStyle));
  }
  return /**@type {IsDefaultPointStyleHandler}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPointStyleHandler)).m_getPointStyle__();
 }
 /** @return {HTMLImageElement} */
 m_getPointStyleAsImage___$pp_org_pepstock_charba_client_options() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_IMAGE__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType___$pp_org_pepstock_charba_client_options())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property, /**@type {IsDefaultPointStyleHandler}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPointStyleHandler)).m_getPointStyleAsImage__());
  }
  return this.m_has__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property) ? Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined : /**@type {IsDefaultPointStyleHandler}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPointStyleHandler)).m_getPointStyleAsImage__();
 }
 /** @return {HTMLCanvasElement} */
 m_getPointStyleAsCanvas___$pp_org_pepstock_charba_client_options() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(PointStyleType.f_CANVAS__org_pepstock_charba_client_enums_PointStyleType, this.m_getPointStyleType___$pp_org_pepstock_charba_client_options())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Canvas(Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property, /**@type {IsDefaultPointStyleHandler}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPointStyleHandler)).m_getPointStyleAsCanvas__());
  }
  return this.m_has__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property) ? Undefined.f_CANVAS_ELEMENT__org_pepstock_charba_client_items_Undefined : /**@type {IsDefaultPointStyleHandler}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPointStyleHandler)).m_getPointStyleAsCanvas__();
 }
 
 static $clinit() {
  PointStyleHandler.$clinit = () =>{};
  PointStyleHandler.$loadModules();
  PropertyHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PointStyleHandler;
 }
 
 static $loadModules() {
  IsDefaultPointStyleHandler = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  PointStyleType = goog.module.get('org.pepstock.charba.client.enums.PointStyleType$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.PointStyleHandler.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(PointStyleHandler, "org.pepstock.charba.client.options.PointStyleHandler");

exports = PointStyleHandler;

//# sourceMappingURL=PointStyleHandler.js.map
