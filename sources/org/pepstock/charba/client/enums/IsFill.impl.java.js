goog.module('org.pepstock.charba.client.enums.IsFill$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let FillingMode = goog.forwardDeclare('org.pepstock.charba.client.enums.FillingMode$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @interface
 * @extends {Key}
 */
class IsFill {
 /** @return {boolean} */
 static m_isValid__org_pepstock_charba_client_enums_IsFill(/** IsFill */ fill) {
  IsFill.$clinit();
  return Key.m_isValid__org_pepstock_charba_client_commons_Key(fill) && !$Equality.$same(fill.m_getMode__(), null);
 }
 /** @return {*} */
 static m_transform__java_lang_Object(/** * */ object) {
  IsFill.$clinit();
  if (Boolean.$isInstance(object)) {
   return object;
  } else if (Integer.$isInstance(object)) {
   let resultAsInt = /**@type {Integer}*/ ($Casts.$to(object, Integer));
   return IsFill.m_toObject__org_pepstock_charba_client_enums_IsFill(Fill.m_getFill__int(resultAsInt.m_intValue__()));
  } else if (IsFill.$isInstance(object)) {
   let resultAsFill = /**@type {IsFill}*/ ($Casts.$to(object, IsFill));
   return IsFill.m_toObject__org_pepstock_charba_client_enums_IsFill(resultAsFill);
  } else if (!$Equality.$same(object, null)) {
   return IsFill.m_toObject__org_pepstock_charba_client_enums_IsFill(Fill.m_getFill__java_lang_String($Objects.m_toString__java_lang_Object(object)));
  }
  return null;
 }
 /** @return {*} */
 static m_toObject__org_pepstock_charba_client_enums_IsFill(/** IsFill */ fill) {
  IsFill.$clinit();
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Fill.f_FALSE__org_pepstock_charba_client_enums_Fill, fill)) {
   return false;
  } else if (Fill.m_isPredefined__org_pepstock_charba_client_enums_IsFill(fill)) {
   return fill.m_value__();
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(FillingMode.f_ABSOLUTE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode, fill.m_getMode__())) {
   return Integer.m_valueOf__int(fill.m_getValueAsInt__());
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(FillingMode.f_RELATIVE_DATASET_INDEX__org_pepstock_charba_client_enums_FillingMode, fill.m_getMode__())) {
   return fill.m_getValue__();
  }
  return false;
 }
 /** @abstract @return {FillingMode} */
 m_getMode__() {}
 /** @abstract @return {number} */
 m_getValueAsInt__() {}
 /** @abstract @return {?string} */
 m_getValue__() {}
 
 static $clinit() {
  IsFill.$clinit = () =>{};
  IsFill.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  Key.$markImplementor(ctor);
  ctor.prototype.$implements__org_pepstock_charba_client_enums_IsFill = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_pepstock_charba_client_enums_IsFill;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  FillingMode = goog.module.get('org.pepstock.charba.client.enums.FillingMode$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
IsFill.$markImplementor(/**@type {Function}*/ (IsFill));
$Util.$setClassMetadataForInterface(IsFill, "org.pepstock.charba.client.enums.IsFill");

exports = IsFill;

//# sourceMappingURL=IsFill.js.map
