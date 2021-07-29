goog.module('org.pepstock.charba.client.geo.enums.ClipMap$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ClipMap>}
 * @implements {Key}
 */
class ClipMap extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_geo_enums_ClipMap_;
 }
 /** @return {!ClipMap} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new ClipMap();
  $instance.$ctor__org_pepstock_charba_client_geo_enums_ClipMap__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_enums_ClipMap__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_geo_enums_ClipMap_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_geo_enums_ClipMap_;
 }
 /** @return {!ClipMap} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ClipMap.$clinit();
  if ($Equality.$same(ClipMap.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_ClipMap_, null)) {
   ClipMap.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_ClipMap_ = $Enums.createMapFromValues(ClipMap.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ClipMap.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_ClipMap_);
 }
 /** @return {!Array<!ClipMap>} */
 static m_values__() {
  ClipMap.$clinit();
  return /**@type {!Array<ClipMap>}*/ ($Arrays.$init([ClipMap.$static_OUTLINE__org_pepstock_charba_client_geo_enums_ClipMap, ClipMap.$static_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap, ClipMap.$static_OUTLINE_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap, ClipMap.$static_ITEMS__org_pepstock_charba_client_geo_enums_ClipMap, ClipMap.$static_TRUE__org_pepstock_charba_client_geo_enums_ClipMap, ClipMap.$static_FALSE__org_pepstock_charba_client_geo_enums_ClipMap], ClipMap));
 }
 /** @return {!ClipMap} */
 static get f_OUTLINE__org_pepstock_charba_client_geo_enums_ClipMap() {
  return (ClipMap.$clinit(), ClipMap.$static_OUTLINE__org_pepstock_charba_client_geo_enums_ClipMap);
 }
 /** @return {!ClipMap} */
 static get f_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap() {
  return (ClipMap.$clinit(), ClipMap.$static_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap);
 }
 /** @return {!ClipMap} */
 static get f_OUTLINE_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap() {
  return (ClipMap.$clinit(), ClipMap.$static_OUTLINE_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap);
 }
 /** @return {!ClipMap} */
 static get f_ITEMS__org_pepstock_charba_client_geo_enums_ClipMap() {
  return (ClipMap.$clinit(), ClipMap.$static_ITEMS__org_pepstock_charba_client_geo_enums_ClipMap);
 }
 /** @return {!ClipMap} */
 static get f_TRUE__org_pepstock_charba_client_geo_enums_ClipMap() {
  return (ClipMap.$clinit(), ClipMap.$static_TRUE__org_pepstock_charba_client_geo_enums_ClipMap);
 }
 /** @return {!ClipMap} */
 static get f_FALSE__org_pepstock_charba_client_geo_enums_ClipMap() {
  return (ClipMap.$clinit(), ClipMap.$static_FALSE__org_pepstock_charba_client_geo_enums_ClipMap);
 }
 
 static $clinit() {
  ClipMap.$clinit = () =>{};
  ClipMap.$loadModules();
  Enum.$clinit();
  ClipMap.$static_OUTLINE__org_pepstock_charba_client_geo_enums_ClipMap = ClipMap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OUTLINE"), ClipMap.$ordinal_OUTLINE__org_pepstock_charba_client_geo_enums_ClipMap, "outline");
  ClipMap.$static_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap = ClipMap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GRATICULE"), ClipMap.$ordinal_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap, "graticule");
  ClipMap.$static_OUTLINE_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap = ClipMap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OUTLINE_GRATICULE"), ClipMap.$ordinal_OUTLINE_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap, "outline+graticule");
  ClipMap.$static_ITEMS__org_pepstock_charba_client_geo_enums_ClipMap = ClipMap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ITEMS"), ClipMap.$ordinal_ITEMS__org_pepstock_charba_client_geo_enums_ClipMap, "items");
  ClipMap.$static_TRUE__org_pepstock_charba_client_geo_enums_ClipMap = ClipMap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TRUE"), ClipMap.$ordinal_TRUE__org_pepstock_charba_client_geo_enums_ClipMap, "true");
  ClipMap.$static_FALSE__org_pepstock_charba_client_geo_enums_ClipMap = ClipMap.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FALSE"), ClipMap.$ordinal_FALSE__org_pepstock_charba_client_geo_enums_ClipMap, "false");
  ClipMap.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_ClipMap_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ClipMap;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ClipMap}*/
ClipMap.$static_OUTLINE__org_pepstock_charba_client_geo_enums_ClipMap;
/**@private {!ClipMap}*/
ClipMap.$static_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap;
/**@private {!ClipMap}*/
ClipMap.$static_OUTLINE_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap;
/**@private {!ClipMap}*/
ClipMap.$static_ITEMS__org_pepstock_charba_client_geo_enums_ClipMap;
/**@private {!ClipMap}*/
ClipMap.$static_TRUE__org_pepstock_charba_client_geo_enums_ClipMap;
/**@private {!ClipMap}*/
ClipMap.$static_FALSE__org_pepstock_charba_client_geo_enums_ClipMap;
/**@type {Map<?string, !ClipMap>}*/
ClipMap.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_ClipMap_;
/**@const {number}*/
ClipMap.$ordinal_OUTLINE__org_pepstock_charba_client_geo_enums_ClipMap = 0;
/**@const {number}*/
ClipMap.$ordinal_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap = 1;
/**@const {number}*/
ClipMap.$ordinal_OUTLINE_GRATICULE__org_pepstock_charba_client_geo_enums_ClipMap = 2;
/**@const {number}*/
ClipMap.$ordinal_ITEMS__org_pepstock_charba_client_geo_enums_ClipMap = 3;
/**@const {number}*/
ClipMap.$ordinal_TRUE__org_pepstock_charba_client_geo_enums_ClipMap = 4;
/**@const {number}*/
ClipMap.$ordinal_FALSE__org_pepstock_charba_client_geo_enums_ClipMap = 5;
Key.$markImplementor(ClipMap);
$Util.$setClassMetadataForEnum(ClipMap, "org.pepstock.charba.client.geo.enums.ClipMap");

exports = ClipMap;

//# sourceMappingURL=ClipMap.js.map
