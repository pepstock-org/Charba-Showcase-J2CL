goog.module('org.pepstock.charba.client.options.BoxHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyHandler = goog.require('org.pepstock.charba.client.commons.PropertyHandler$impl');

let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let IsDefaultBoxHandler = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultBoxHandler$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.BoxHandler.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PropertyHandler<IsDefaultBoxHandler>}
 */
class BoxHandler extends PropertyHandler {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!BoxHandler} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultBoxHandler__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsDefaultBoxHandler */ defaultValues, /** ? */ nativeObject) {
  BoxHandler.$clinit();
  let $instance = new BoxHandler();
  $instance.$ctor__org_pepstock_charba_client_options_BoxHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultBoxHandler__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_BoxHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultBoxHandler__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsDefaultBoxHandler */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_PropertyHandler__org_pepstock_charba_client_commons_AbstractNode__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
 }
 
 m_setBoxWidth__int_$pp_org_pepstock_charba_client_options(/** number */ boxWidth) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_BOX_WIDTH__org_pepstock_charba_client_options_BoxHandler_Property, boxWidth);
 }
 /** @return {number} */
 m_getBoxWidth___$pp_org_pepstock_charba_client_options() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BOX_WIDTH__org_pepstock_charba_client_options_BoxHandler_Property, /**@type {IsDefaultBoxHandler}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultBoxHandler)).m_getBoxWidth__());
 }
 
 m_setBoxHeight__int_$pp_org_pepstock_charba_client_options(/** number */ boxHeight) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_BOX_HEIGHT__org_pepstock_charba_client_options_BoxHandler_Property, boxHeight);
 }
 /** @return {number} */
 m_getBoxHeight___$pp_org_pepstock_charba_client_options() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BOX_HEIGHT__org_pepstock_charba_client_options_BoxHandler_Property, /**@type {IsDefaultBoxHandler}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultBoxHandler)).m_getBoxHeight__());
 }
 
 static $clinit() {
  BoxHandler.$clinit = () =>{};
  BoxHandler.$loadModules();
  PropertyHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BoxHandler;
 }
 
 static $loadModules() {
  IsDefaultBoxHandler = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultBoxHandler$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.BoxHandler.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(BoxHandler, "org.pepstock.charba.client.options.BoxHandler");

exports = BoxHandler;

//# sourceMappingURL=BoxHandler.js.map
