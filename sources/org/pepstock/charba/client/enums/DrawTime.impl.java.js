goog.module('org.pepstock.charba.client.enums.DrawTime$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DrawTime>}
 * @implements {Key}
 */
class DrawTime extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_DrawTime_;
 }
 /** @return {!DrawTime} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new DrawTime();
  $instance.$ctor__org_pepstock_charba_client_enums_DrawTime__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_DrawTime__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_DrawTime_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_DrawTime_;
 }
 /** @return {!DrawTime} */
 static m_valueOf__java_lang_String(/** string */ name) {
  DrawTime.$clinit();
  if ($Equality.$same(DrawTime.f_namesToValuesMap__org_pepstock_charba_client_enums_DrawTime_, null)) {
   DrawTime.f_namesToValuesMap__org_pepstock_charba_client_enums_DrawTime_ = $Enums.createMapFromValues(DrawTime.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DrawTime.f_namesToValuesMap__org_pepstock_charba_client_enums_DrawTime_);
 }
 /** @return {!Array<!DrawTime>} */
 static m_values__() {
  DrawTime.$clinit();
  return /**@type {!Array<DrawTime>}*/ ($Arrays.$init([DrawTime.$static_BEFORE_DRAW__org_pepstock_charba_client_enums_DrawTime, DrawTime.$static_BEFORE_DATASET_DRAW__org_pepstock_charba_client_enums_DrawTime, DrawTime.$static_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_enums_DrawTime], DrawTime));
 }
 /** @return {!DrawTime} */
 static get f_BEFORE_DRAW__org_pepstock_charba_client_enums_DrawTime() {
  return (DrawTime.$clinit(), DrawTime.$static_BEFORE_DRAW__org_pepstock_charba_client_enums_DrawTime);
 }
 /** @return {!DrawTime} */
 static get f_BEFORE_DATASET_DRAW__org_pepstock_charba_client_enums_DrawTime() {
  return (DrawTime.$clinit(), DrawTime.$static_BEFORE_DATASET_DRAW__org_pepstock_charba_client_enums_DrawTime);
 }
 /** @return {!DrawTime} */
 static get f_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_enums_DrawTime() {
  return (DrawTime.$clinit(), DrawTime.$static_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_enums_DrawTime);
 }
 
 static $clinit() {
  DrawTime.$clinit = () =>{};
  DrawTime.$loadModules();
  Enum.$clinit();
  DrawTime.$static_BEFORE_DRAW__org_pepstock_charba_client_enums_DrawTime = DrawTime.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_DRAW"), DrawTime.$ordinal_BEFORE_DRAW__org_pepstock_charba_client_enums_DrawTime, "beforeDraw");
  DrawTime.$static_BEFORE_DATASET_DRAW__org_pepstock_charba_client_enums_DrawTime = DrawTime.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_DATASET_DRAW"), DrawTime.$ordinal_BEFORE_DATASET_DRAW__org_pepstock_charba_client_enums_DrawTime, "beforeDatasetDraw");
  DrawTime.$static_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_enums_DrawTime = DrawTime.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEFORE_DATASETS_DRAW"), DrawTime.$ordinal_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_enums_DrawTime, "beforeDatasetsDraw");
  DrawTime.f_namesToValuesMap__org_pepstock_charba_client_enums_DrawTime_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DrawTime;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!DrawTime}*/
DrawTime.$static_BEFORE_DRAW__org_pepstock_charba_client_enums_DrawTime;
/**@private {!DrawTime}*/
DrawTime.$static_BEFORE_DATASET_DRAW__org_pepstock_charba_client_enums_DrawTime;
/**@private {!DrawTime}*/
DrawTime.$static_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_enums_DrawTime;
/**@type {Map<?string, !DrawTime>}*/
DrawTime.f_namesToValuesMap__org_pepstock_charba_client_enums_DrawTime_;
/**@const {number}*/
DrawTime.$ordinal_BEFORE_DRAW__org_pepstock_charba_client_enums_DrawTime = 0;
/**@const {number}*/
DrawTime.$ordinal_BEFORE_DATASET_DRAW__org_pepstock_charba_client_enums_DrawTime = 1;
/**@const {number}*/
DrawTime.$ordinal_BEFORE_DATASETS_DRAW__org_pepstock_charba_client_enums_DrawTime = 2;
Key.$markImplementor(DrawTime);
$Util.$setClassMetadataForEnum(DrawTime, "org.pepstock.charba.client.enums.DrawTime");

exports = DrawTime;

//# sourceMappingURL=DrawTime.js.map
