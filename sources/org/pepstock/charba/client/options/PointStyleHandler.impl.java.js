goog.module('org.pepstock.charba.client.options.PointStyleHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyHandler = goog.require('org.pepstock.charba.client.commons.PropertyHandler$impl');

let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let IsDefaultPointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.PointStyleHandler.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

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
 /** @return {PointStyle} */
 m_getPointStyle___$pp_org_pepstock_charba_client_options() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return /**@type {PointStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property, PointStyle.m_values__(), /**@type {IsDefaultPointStyleHandler}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPointStyleHandler)).m_getPointStyle__()), PointStyle));
  }
  return /**@type {IsDefaultPointStyleHandler}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultPointStyleHandler)).m_getPointStyle__();
 }
 
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img_$pp_org_pepstock_charba_client_options(/** HTMLImageElement */ pointStyle) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property, pointStyle);
 }
 /** @return {boolean} */
 m_isPointStyleAsImage___$pp_org_pepstock_charba_client_options() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {HTMLImageElement} */
 m_getPointStyleAsImage___$pp_org_pepstock_charba_client_options() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_POINT_STYLE__org_pepstock_charba_client_options_PointStyleHandler_Property, Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined);
  }
  return Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined;
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
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  IsDefaultPointStyleHandler = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
  PointStyle = goog.module.get('org.pepstock.charba.client.enums.PointStyle$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.PointStyleHandler.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(PointStyleHandler, "org.pepstock.charba.client.options.PointStyleHandler");

exports = PointStyleHandler;

//# sourceMappingURL=PointStyleHandler.js.map
