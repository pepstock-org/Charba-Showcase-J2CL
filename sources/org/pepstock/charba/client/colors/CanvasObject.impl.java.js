goog.module('org.pepstock.charba.client.colors.CanvasObject$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let InternalGradient = goog.forwardDeclare('org.pepstock.charba.client.colors.CanvasObject.InternalGradient$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.colors.CanvasObject.Property$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 */
class CanvasObject extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Initialization from constructor 'CanvasObject(String)'.
 
 $ctor__org_pepstock_charba_client_colors_CanvasObject__java_lang_String(/** ?string */ id) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
  this.m_setId__java_lang_String_$p_org_pepstock_charba_client_colors_CanvasObject(/**@type {?string}*/ ($Casts.$to(Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(id, "Id argument"), j_l_String)));
 }
 //Initialization from constructor 'CanvasObject(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_colors_CanvasObject__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.m_checkNativeObject__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType_$pp_org_pepstock_charba_client_colors(Property.f_CHARBA_OBJECT_ID__org_pepstock_charba_client_colors_CanvasObject_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType);
 }
 
 m_checkNativeObject__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType_$pp_org_pepstock_charba_client_colors(/** Key */ property, /** ObjectType */ type) {
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(property);
  Checker.m_assertCheck__boolean__java_lang_String(this.m_has__org_pepstock_charba_client_commons_Key(property), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(CanvasObject.f_MISSING_PROPERTY__org_pepstock_charba_client_colors_CanvasObject, [property.m_value__()]));
  Checker.m_assertCheck__boolean__java_lang_String(this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(property, type), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(CanvasObject.f_WRONG_PROPERTY_TYPE__org_pepstock_charba_client_colors_CanvasObject, [property.m_value__()]));
 }
 
 m_setId__java_lang_String_$p_org_pepstock_charba_client_colors_CanvasObject(/** ?string */ id) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_CHARBA_OBJECT_ID__org_pepstock_charba_client_colors_CanvasObject_Property, id);
 }
 /** @return {boolean} */
 m_hasId___$p_org_pepstock_charba_client_colors_CanvasObject() {
  return this.m_has__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_OBJECT_ID__org_pepstock_charba_client_colors_CanvasObject_Property);
 }
 /** @return {?string} */
 m_getId__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_CHARBA_OBJECT_ID__org_pepstock_charba_client_colors_CanvasObject_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 
 m_store__org_pepstock_charba_client_dom_IsCastable_$pp_org_pepstock_charba_client_colors(/** Object */ canvasObject) {
  if (!$Equality.$same(canvasObject, null)) {
   let internal = InternalGradient.$create__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(canvasObject)));
   internal.m_setId__java_lang_String_$pp_org_pepstock_charba_client_colors(this.m_getId__());
  }
 }
 /** @override @return {number} */
 hashCode() {
  let prime = 31;
  let result = 1;
  result = Math.imul(prime, result) + (this.m_hasId___$p_org_pepstock_charba_client_colors_CanvasObject() ? 0 : j_l_String.m_hashCode__java_lang_String(this.m_getId__())) | 0;
  return result;
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  if ($Equality.$same(this, obj)) {
   return true;
  }
  if ($Equality.$same(obj, null)) {
   return false;
  }
  if (!$Equality.$same(this.m_getClass__(), $Objects.m_getClass__java_lang_Object(obj))) {
   return false;
  }
  let other = /**@type {CanvasObject}*/ ($Casts.$to(obj, CanvasObject));
  if (this.m_hasId___$p_org_pepstock_charba_client_colors_CanvasObject()) {
   return j_l_String.m_equals__java_lang_String__java_lang_Object(this.m_getId__(), other.m_getId__());
  }
  return !other.m_hasId___$p_org_pepstock_charba_client_colors_CanvasObject();
 }
 
 static $clinit() {
  CanvasObject.$clinit = () =>{};
  CanvasObject.$loadModules();
  NativeObjectContainer.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CanvasObject;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  InternalGradient = goog.module.get('org.pepstock.charba.client.colors.CanvasObject.InternalGradient$impl');
  Property = goog.module.get('org.pepstock.charba.client.colors.CanvasObject.Property$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {?string}*/
CanvasObject.f_MISSING_PROPERTY__org_pepstock_charba_client_colors_CanvasObject = "The mandatory '{0}' is missing";
/**@const {?string}*/
CanvasObject.f_WRONG_PROPERTY_TYPE__org_pepstock_charba_client_colors_CanvasObject = "The type of '{0}' property is invalid";
$Util.$setClassMetadata(CanvasObject, "org.pepstock.charba.client.colors.CanvasObject");

exports = CanvasObject;

//# sourceMappingURL=CanvasObject.js.map
