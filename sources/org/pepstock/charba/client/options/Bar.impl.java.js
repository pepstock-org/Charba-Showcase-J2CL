goog.module('org.pepstock.charba.client.options.Bar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultBar = goog.require('org.pepstock.charba.client.defaults.IsDefaultBar$impl');
const AbstractElement = goog.require('org.pepstock.charba.client.options.AbstractElement$impl');
const HasPointStyle = goog.require('org.pepstock.charba.client.options.HasPointStyle$impl');

let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let IsDefaultPointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
let BorderSkipped = goog.forwardDeclare('org.pepstock.charba.client.enums.BorderSkipped$impl');
let PointStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyle$impl');
let PointStyleType = goog.forwardDeclare('org.pepstock.charba.client.enums.PointStyleType$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Bar.Property$impl');
let Elements = goog.forwardDeclare('org.pepstock.charba.client.options.Elements$impl');
let PointStyleHandler = goog.forwardDeclare('org.pepstock.charba.client.options.PointStyleHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @extends {AbstractElement<IsDefaultBar>}
 * @implements {IsDefaultBar}
 * @implements {HasPointStyle}
 */
class Bar extends AbstractElement {
 /** @protected */
 constructor() {
  super();
  /**@type {PointStyleHandler}*/
  this.f_pointStyleHandler__org_pepstock_charba_client_options_Bar_;
 }
 /** @return {!Bar} */
 static $create__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultBar__org_pepstock_charba_client_commons_NativeObject(/** Elements */ elements, /** Key */ childKey, /** IsDefaultBar */ defaultValues, /** ? */ nativeObject) {
  Bar.$clinit();
  let $instance = new Bar();
  $instance.$ctor__org_pepstock_charba_client_options_Bar__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultBar__org_pepstock_charba_client_commons_NativeObject(elements, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Bar__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultBar__org_pepstock_charba_client_commons_NativeObject(/** Elements */ elements, /** Key */ childKey, /** IsDefaultBar */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractElement__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultOptionsElement__org_pepstock_charba_client_commons_NativeObject(elements, childKey, defaultValues, nativeObject);
  this.f_pointStyleHandler__org_pepstock_charba_client_options_Bar_ = PointStyleHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultPointStyleHandler__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultBar}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultBar)), this.m_getNativeObject__());
 }
 /** @override @return {PointStyleHandler} */
 m_getPointStyleHandler__() {
  return this.f_pointStyleHandler__org_pepstock_charba_client_options_Bar_;
 }
 
 m_setEnableBorderRadius__boolean(/** boolean */ enableBorderRadius) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_options_Bar_Property, enableBorderRadius);
 }
 /** @override @return {boolean} */
 m_isEnableBorderRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLE_BORDER_RADIUS__org_pepstock_charba_client_options_Bar_Property, /**@type {IsDefaultBar}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultBar)).m_isEnableBorderRadius__());
 }
 
 m_setBorderSkipped__boolean(/** boolean */ borderskip) {
  if (!borderskip) {
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_options_Bar_Property, BorderSkipped.f_FALSE__org_pepstock_charba_client_enums_BorderSkipped);
  }
 }
 
 m_setBorderSkipped__org_pepstock_charba_client_enums_BorderSkipped(/** BorderSkipped */ position) {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(BorderSkipped.f_FALSE__org_pepstock_charba_client_enums_BorderSkipped, position)) {
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_options_Bar_Property, false);
  } else {
   this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_options_Bar_Property, position);
  }
 }
 /** @override @return {BorderSkipped} */
 m_getBorderSkipped__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_options_Bar_Property, ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType)) {
   return BorderSkipped.f_FALSE__org_pepstock_charba_client_enums_BorderSkipped;
  }
  return /**@type {BorderSkipped}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_SKIPPED__org_pepstock_charba_client_options_Bar_Property, BorderSkipped.m_values__(), /**@type {IsDefaultBar}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultBar)).m_getBorderSkipped__()), BorderSkipped));
 }
 
 m_setBorderRadius__int(/** number */ borderRadius) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_RADIUS__org_pepstock_charba_client_options_Bar_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @override @return {number} */
 m_getBorderRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_RADIUS__org_pepstock_charba_client_options_Bar_Property, /**@type {IsDefaultBar}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultBar)).m_getBorderRadius__());
 }
 
 m_setHoverBorderRadius__int(/** number */ borderRadius) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_HOVER_BORDER_RADIUS__org_pepstock_charba_client_options_Bar_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @override @return {number} */
 m_getHoverBorderRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_HOVER_BORDER_RADIUS__org_pepstock_charba_client_options_Bar_Property, /**@type {IsDefaultBar}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultBar)).m_getHoverBorderRadius__());
 }
 //Default method forwarding stub.
 /** @override @return {PointStyle} */
 m_getPointStyle__() {
  return HasPointStyle.m_getPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {HTMLCanvasElement} */
 m_getPointStyleAsCanvas__() {
  return HasPointStyle.m_getPointStyleAsCanvas__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {HTMLImageElement} */
 m_getPointStyleAsImage__() {
  return HasPointStyle.m_getPointStyleAsImage__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override @return {PointStyleType} */
 m_getPointStyleType__() {
  return HasPointStyle.m_getPointStyleType__$default__org_pepstock_charba_client_options_HasPointStyle(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__org_pepstock_charba_client_enums_PointStyle(/** PointStyle */ arg0) {
  HasPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle__org_pepstock_charba_client_enums_PointStyle(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ arg0) {
  HasPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle__org_pepstock_charba_client_dom_elements_Img(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setPointStyle__org_pepstock_charba_client_dom_elements_Canvas(/** HTMLCanvasElement */ arg0) {
  HasPointStyle.m_setPointStyle__$default__org_pepstock_charba_client_options_HasPointStyle__org_pepstock_charba_client_dom_elements_Canvas(this, arg0);
 }
 
 static $clinit() {
  Bar.$clinit = () =>{};
  Bar.$loadModules();
  AbstractElement.$clinit();
  IsDefaultPointStyleHandler.$clinit();
  HasPointStyle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Bar;
 }
 
 static $loadModules() {
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  IsDefaultPointStyleHandler = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultPointStyleHandler$impl');
  BorderSkipped = goog.module.get('org.pepstock.charba.client.enums.BorderSkipped$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Bar.Property$impl');
  PointStyleHandler = goog.module.get('org.pepstock.charba.client.options.PointStyleHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
IsDefaultBar.$markImplementor(Bar);
HasPointStyle.$markImplementor(Bar);
$Util.$setClassMetadata(Bar, "org.pepstock.charba.client.options.Bar");

exports = Bar;

//# sourceMappingURL=Bar.js.map
