goog.module('org.pepstock.charba.client.options.TextDirectionHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const PropertyHandler = goog.require('org.pepstock.charba.client.commons.PropertyHandler$impl');

let AbstractNode = goog.forwardDeclare('org.pepstock.charba.client.commons.AbstractNode$impl');
let IsDefaultTextDirectionHandler = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultTextDirectionHandler$impl');
let TextDirection = goog.forwardDeclare('org.pepstock.charba.client.enums.TextDirection$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.TextDirectionHandler.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {PropertyHandler<IsDefaultTextDirectionHandler>}
 */
class TextDirectionHandler extends PropertyHandler {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TextDirectionHandler} */
 static $create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultTextDirectionHandler__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsDefaultTextDirectionHandler */ defaultValues, /** ? */ nativeObject) {
  TextDirectionHandler.$clinit();
  let $instance = new TextDirectionHandler();
  $instance.$ctor__org_pepstock_charba_client_options_TextDirectionHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultTextDirectionHandler__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_TextDirectionHandler__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_defaults_IsDefaultTextDirectionHandler__org_pepstock_charba_client_commons_NativeObject(/** AbstractNode */ parent, /** IsDefaultTextDirectionHandler */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_PropertyHandler__org_pepstock_charba_client_commons_AbstractNode__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(parent, defaultValues, nativeObject);
 }
 
 m_setRtl__boolean_$pp_org_pepstock_charba_client_options(/** boolean */ rtl) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_RTL__org_pepstock_charba_client_options_TextDirectionHandler_Property, rtl);
 }
 /** @return {boolean} */
 m_isRtl___$pp_org_pepstock_charba_client_options() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_RTL__org_pepstock_charba_client_options_TextDirectionHandler_Property, /**@type {IsDefaultTextDirectionHandler}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTextDirectionHandler)).m_isRtl__());
 }
 
 m_setTextDirection__org_pepstock_charba_client_enums_TextDirection_$pp_org_pepstock_charba_client_options(/** TextDirection */ textDirection) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TEXT_DIRECTION__org_pepstock_charba_client_options_TextDirectionHandler_Property, textDirection);
 }
 /** @return {TextDirection} */
 m_getTextDirection___$pp_org_pepstock_charba_client_options() {
  return /**@type {TextDirection}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TEXT_DIRECTION__org_pepstock_charba_client_options_TextDirectionHandler_Property, TextDirection.m_values__(), /**@type {IsDefaultTextDirectionHandler}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultTextDirectionHandler)).m_getTextDirection__()), TextDirection));
 }
 
 static $clinit() {
  TextDirectionHandler.$clinit = () =>{};
  TextDirectionHandler.$loadModules();
  PropertyHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextDirectionHandler;
 }
 
 static $loadModules() {
  IsDefaultTextDirectionHandler = goog.module.get('org.pepstock.charba.client.defaults.IsDefaultTextDirectionHandler$impl');
  TextDirection = goog.module.get('org.pepstock.charba.client.enums.TextDirection$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.TextDirectionHandler.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TextDirectionHandler, "org.pepstock.charba.client.options.TextDirectionHandler");

exports = TextDirectionHandler;

//# sourceMappingURL=TextDirectionHandler.js.map
