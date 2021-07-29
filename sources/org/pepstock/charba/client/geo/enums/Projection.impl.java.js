goog.module('org.pepstock.charba.client.geo.enums.Projection$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Projection>}
 * @implements {Key}
 */
class Projection extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_geo_enums_Projection_;
 }
 /** @return {!Projection} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Projection();
  $instance.$ctor__org_pepstock_charba_client_geo_enums_Projection__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_enums_Projection__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_geo_enums_Projection_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_geo_enums_Projection_;
 }
 /** @return {!Projection} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Projection.$clinit();
  if ($Equality.$same(Projection.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Projection_, null)) {
   Projection.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Projection_ = $Enums.createMapFromValues(Projection.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Projection.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Projection_);
 }
 /** @return {!Array<!Projection>} */
 static m_values__() {
  Projection.$clinit();
  return /**@type {!Array<Projection>}*/ ($Arrays.$init([Projection.$static_AZIMUTHAL_EQUAL_AREA__org_pepstock_charba_client_geo_enums_Projection, Projection.$static_AZIMUTHAL_EQUIDISTANT__org_pepstock_charba_client_geo_enums_Projection, Projection.$static_GNOMONIC__org_pepstock_charba_client_geo_enums_Projection, Projection.$static_ORTHOGRAPHIC__org_pepstock_charba_client_geo_enums_Projection, Projection.$static_STEREOGRAPHIC__org_pepstock_charba_client_geo_enums_Projection, Projection.$static_EQUAL_EARTH__org_pepstock_charba_client_geo_enums_Projection, Projection.$static_ALBERS__org_pepstock_charba_client_geo_enums_Projection, Projection.$static_ALBERS_USA__org_pepstock_charba_client_geo_enums_Projection, Projection.$static_CONIC_CONFORMAL__org_pepstock_charba_client_geo_enums_Projection, Projection.$static_CONIC_EQUAL_AREA__org_pepstock_charba_client_geo_enums_Projection, Projection.$static_CONIC_EQUIDISTANT__org_pepstock_charba_client_geo_enums_Projection, Projection.$static_EQUIRECTANGULAR__org_pepstock_charba_client_geo_enums_Projection, Projection.$static_MERCATOR__org_pepstock_charba_client_geo_enums_Projection, Projection.$static_TRANSVERSE_MERCATOR__org_pepstock_charba_client_geo_enums_Projection, Projection.$static_NATURAL_EARTH1__org_pepstock_charba_client_geo_enums_Projection], Projection));
 }
 /** @return {!Projection} */
 static get f_AZIMUTHAL_EQUAL_AREA__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_AZIMUTHAL_EQUAL_AREA__org_pepstock_charba_client_geo_enums_Projection);
 }
 /** @return {!Projection} */
 static get f_AZIMUTHAL_EQUIDISTANT__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_AZIMUTHAL_EQUIDISTANT__org_pepstock_charba_client_geo_enums_Projection);
 }
 /** @return {!Projection} */
 static get f_GNOMONIC__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_GNOMONIC__org_pepstock_charba_client_geo_enums_Projection);
 }
 /** @return {!Projection} */
 static get f_ORTHOGRAPHIC__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_ORTHOGRAPHIC__org_pepstock_charba_client_geo_enums_Projection);
 }
 /** @return {!Projection} */
 static get f_STEREOGRAPHIC__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_STEREOGRAPHIC__org_pepstock_charba_client_geo_enums_Projection);
 }
 /** @return {!Projection} */
 static get f_EQUAL_EARTH__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_EQUAL_EARTH__org_pepstock_charba_client_geo_enums_Projection);
 }
 /** @return {!Projection} */
 static get f_ALBERS__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_ALBERS__org_pepstock_charba_client_geo_enums_Projection);
 }
 /** @return {!Projection} */
 static get f_ALBERS_USA__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_ALBERS_USA__org_pepstock_charba_client_geo_enums_Projection);
 }
 /** @return {!Projection} */
 static get f_CONIC_CONFORMAL__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_CONIC_CONFORMAL__org_pepstock_charba_client_geo_enums_Projection);
 }
 /** @return {!Projection} */
 static get f_CONIC_EQUAL_AREA__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_CONIC_EQUAL_AREA__org_pepstock_charba_client_geo_enums_Projection);
 }
 /** @return {!Projection} */
 static get f_CONIC_EQUIDISTANT__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_CONIC_EQUIDISTANT__org_pepstock_charba_client_geo_enums_Projection);
 }
 /** @return {!Projection} */
 static get f_EQUIRECTANGULAR__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_EQUIRECTANGULAR__org_pepstock_charba_client_geo_enums_Projection);
 }
 /** @return {!Projection} */
 static get f_MERCATOR__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_MERCATOR__org_pepstock_charba_client_geo_enums_Projection);
 }
 /** @return {!Projection} */
 static get f_TRANSVERSE_MERCATOR__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_TRANSVERSE_MERCATOR__org_pepstock_charba_client_geo_enums_Projection);
 }
 /** @return {!Projection} */
 static get f_NATURAL_EARTH1__org_pepstock_charba_client_geo_enums_Projection() {
  return (Projection.$clinit(), Projection.$static_NATURAL_EARTH1__org_pepstock_charba_client_geo_enums_Projection);
 }
 
 static $clinit() {
  Projection.$clinit = () =>{};
  Projection.$loadModules();
  Enum.$clinit();
  Projection.$static_AZIMUTHAL_EQUAL_AREA__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AZIMUTHAL_EQUAL_AREA"), Projection.$ordinal_AZIMUTHAL_EQUAL_AREA__org_pepstock_charba_client_geo_enums_Projection, "azimuthalEqualArea");
  Projection.$static_AZIMUTHAL_EQUIDISTANT__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AZIMUTHAL_EQUIDISTANT"), Projection.$ordinal_AZIMUTHAL_EQUIDISTANT__org_pepstock_charba_client_geo_enums_Projection, "azimuthalEquidistant");
  Projection.$static_GNOMONIC__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GNOMONIC"), Projection.$ordinal_GNOMONIC__org_pepstock_charba_client_geo_enums_Projection, "gnomonic");
  Projection.$static_ORTHOGRAPHIC__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ORTHOGRAPHIC"), Projection.$ordinal_ORTHOGRAPHIC__org_pepstock_charba_client_geo_enums_Projection, "orthographic");
  Projection.$static_STEREOGRAPHIC__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STEREOGRAPHIC"), Projection.$ordinal_STEREOGRAPHIC__org_pepstock_charba_client_geo_enums_Projection, "stereographic");
  Projection.$static_EQUAL_EARTH__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EQUAL_EARTH"), Projection.$ordinal_EQUAL_EARTH__org_pepstock_charba_client_geo_enums_Projection, "equalEarth");
  Projection.$static_ALBERS__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALBERS"), Projection.$ordinal_ALBERS__org_pepstock_charba_client_geo_enums_Projection, "albers");
  Projection.$static_ALBERS_USA__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALBERS_USA"), Projection.$ordinal_ALBERS_USA__org_pepstock_charba_client_geo_enums_Projection, "albersUsa");
  Projection.$static_CONIC_CONFORMAL__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONIC_CONFORMAL"), Projection.$ordinal_CONIC_CONFORMAL__org_pepstock_charba_client_geo_enums_Projection, "conicConformal");
  Projection.$static_CONIC_EQUAL_AREA__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONIC_EQUAL_AREA"), Projection.$ordinal_CONIC_EQUAL_AREA__org_pepstock_charba_client_geo_enums_Projection, "conicEqualArea");
  Projection.$static_CONIC_EQUIDISTANT__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONIC_EQUIDISTANT"), Projection.$ordinal_CONIC_EQUIDISTANT__org_pepstock_charba_client_geo_enums_Projection, "conicEquidistant");
  Projection.$static_EQUIRECTANGULAR__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EQUIRECTANGULAR"), Projection.$ordinal_EQUIRECTANGULAR__org_pepstock_charba_client_geo_enums_Projection, "equirectangular");
  Projection.$static_MERCATOR__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MERCATOR"), Projection.$ordinal_MERCATOR__org_pepstock_charba_client_geo_enums_Projection, "mercator");
  Projection.$static_TRANSVERSE_MERCATOR__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TRANSVERSE_MERCATOR"), Projection.$ordinal_TRANSVERSE_MERCATOR__org_pepstock_charba_client_geo_enums_Projection, "transverseMercator");
  Projection.$static_NATURAL_EARTH1__org_pepstock_charba_client_geo_enums_Projection = Projection.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NATURAL_EARTH1"), Projection.$ordinal_NATURAL_EARTH1__org_pepstock_charba_client_geo_enums_Projection, "naturalEarth1");
  Projection.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Projection_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Projection;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Projection}*/
Projection.$static_AZIMUTHAL_EQUAL_AREA__org_pepstock_charba_client_geo_enums_Projection;
/**@private {!Projection}*/
Projection.$static_AZIMUTHAL_EQUIDISTANT__org_pepstock_charba_client_geo_enums_Projection;
/**@private {!Projection}*/
Projection.$static_GNOMONIC__org_pepstock_charba_client_geo_enums_Projection;
/**@private {!Projection}*/
Projection.$static_ORTHOGRAPHIC__org_pepstock_charba_client_geo_enums_Projection;
/**@private {!Projection}*/
Projection.$static_STEREOGRAPHIC__org_pepstock_charba_client_geo_enums_Projection;
/**@private {!Projection}*/
Projection.$static_EQUAL_EARTH__org_pepstock_charba_client_geo_enums_Projection;
/**@private {!Projection}*/
Projection.$static_ALBERS__org_pepstock_charba_client_geo_enums_Projection;
/**@private {!Projection}*/
Projection.$static_ALBERS_USA__org_pepstock_charba_client_geo_enums_Projection;
/**@private {!Projection}*/
Projection.$static_CONIC_CONFORMAL__org_pepstock_charba_client_geo_enums_Projection;
/**@private {!Projection}*/
Projection.$static_CONIC_EQUAL_AREA__org_pepstock_charba_client_geo_enums_Projection;
/**@private {!Projection}*/
Projection.$static_CONIC_EQUIDISTANT__org_pepstock_charba_client_geo_enums_Projection;
/**@private {!Projection}*/
Projection.$static_EQUIRECTANGULAR__org_pepstock_charba_client_geo_enums_Projection;
/**@private {!Projection}*/
Projection.$static_MERCATOR__org_pepstock_charba_client_geo_enums_Projection;
/**@private {!Projection}*/
Projection.$static_TRANSVERSE_MERCATOR__org_pepstock_charba_client_geo_enums_Projection;
/**@private {!Projection}*/
Projection.$static_NATURAL_EARTH1__org_pepstock_charba_client_geo_enums_Projection;
/**@type {Map<?string, !Projection>}*/
Projection.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Projection_;
/**@const {number}*/
Projection.$ordinal_AZIMUTHAL_EQUAL_AREA__org_pepstock_charba_client_geo_enums_Projection = 0;
/**@const {number}*/
Projection.$ordinal_AZIMUTHAL_EQUIDISTANT__org_pepstock_charba_client_geo_enums_Projection = 1;
/**@const {number}*/
Projection.$ordinal_GNOMONIC__org_pepstock_charba_client_geo_enums_Projection = 2;
/**@const {number}*/
Projection.$ordinal_ORTHOGRAPHIC__org_pepstock_charba_client_geo_enums_Projection = 3;
/**@const {number}*/
Projection.$ordinal_STEREOGRAPHIC__org_pepstock_charba_client_geo_enums_Projection = 4;
/**@const {number}*/
Projection.$ordinal_EQUAL_EARTH__org_pepstock_charba_client_geo_enums_Projection = 5;
/**@const {number}*/
Projection.$ordinal_ALBERS__org_pepstock_charba_client_geo_enums_Projection = 6;
/**@const {number}*/
Projection.$ordinal_ALBERS_USA__org_pepstock_charba_client_geo_enums_Projection = 7;
/**@const {number}*/
Projection.$ordinal_CONIC_CONFORMAL__org_pepstock_charba_client_geo_enums_Projection = 8;
/**@const {number}*/
Projection.$ordinal_CONIC_EQUAL_AREA__org_pepstock_charba_client_geo_enums_Projection = 9;
/**@const {number}*/
Projection.$ordinal_CONIC_EQUIDISTANT__org_pepstock_charba_client_geo_enums_Projection = 10;
/**@const {number}*/
Projection.$ordinal_EQUIRECTANGULAR__org_pepstock_charba_client_geo_enums_Projection = 11;
/**@const {number}*/
Projection.$ordinal_MERCATOR__org_pepstock_charba_client_geo_enums_Projection = 12;
/**@const {number}*/
Projection.$ordinal_TRANSVERSE_MERCATOR__org_pepstock_charba_client_geo_enums_Projection = 13;
/**@const {number}*/
Projection.$ordinal_NATURAL_EARTH1__org_pepstock_charba_client_geo_enums_Projection = 14;
Key.$markImplementor(Projection);
$Util.$setClassMetadataForEnum(Projection, "org.pepstock.charba.client.geo.enums.Projection");

exports = Projection;

//# sourceMappingURL=Projection.js.map
