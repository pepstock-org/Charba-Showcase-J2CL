goog.module('org.pepstock.charba.client.geo.enums.Interpolate$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Interpolate>}
 * @implements {Key}
 */
class Interpolate extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_geo_enums_Interpolate_;
 }
 /** @return {!Interpolate} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Interpolate();
  $instance.$ctor__org_pepstock_charba_client_geo_enums_Interpolate__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_geo_enums_Interpolate__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_geo_enums_Interpolate_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_geo_enums_Interpolate_;
 }
 /** @return {!Interpolate} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Interpolate.$clinit();
  if ($Equality.$same(Interpolate.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Interpolate_, null)) {
   Interpolate.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Interpolate_ = $Enums.createMapFromValues(Interpolate.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Interpolate.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Interpolate_);
 }
 /** @return {!Array<!Interpolate>} */
 static m_values__() {
  Interpolate.$clinit();
  return /**@type {!Array<Interpolate>}*/ ($Arrays.$init([Interpolate.$static_BLUES__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_BR_B_G__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_BU_GN__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_BU_PU__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_CIVIDIS__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_COOL__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_CUBEHELIX_DEFAULT__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_GN_BU__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_GREENS__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_GREYS__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_INFERNO__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_MAGMA__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_OR_RD__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_ORANGES__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_P_R_GN__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_PI_Y_G__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_PLASMA__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_PU_BU__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_PU_BU_GN__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_PU_OR__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_PU_RD__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_PURPLES__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_RAINBOW__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_RD_BU__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_RD_GY__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_RD_PU__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_RD_YL_BU__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_RD_YL_GN__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_REDS__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_SINEBOW__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_SPECTRAL__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_TURBO__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_VIRIDIS__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_WARM__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_YL_GN__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_YL_GN_BU__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_YL_OR_BR__org_pepstock_charba_client_geo_enums_Interpolate, Interpolate.$static_YL_OR_RD__org_pepstock_charba_client_geo_enums_Interpolate], Interpolate));
 }
 /** @return {!Interpolate} */
 static get f_BLUES__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_BLUES__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_BR_B_G__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_BR_B_G__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_BU_GN__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_BU_GN__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_BU_PU__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_BU_PU__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_CIVIDIS__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_CIVIDIS__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_COOL__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_COOL__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_CUBEHELIX_DEFAULT__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_CUBEHELIX_DEFAULT__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_GN_BU__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_GN_BU__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_GREENS__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_GREENS__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_GREYS__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_GREYS__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_INFERNO__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_INFERNO__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_MAGMA__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_MAGMA__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_OR_RD__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_OR_RD__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_ORANGES__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_ORANGES__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_P_R_GN__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_P_R_GN__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_PI_Y_G__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_PI_Y_G__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_PLASMA__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_PLASMA__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_PU_BU__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_PU_BU__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_PU_BU_GN__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_PU_BU_GN__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_PU_OR__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_PU_OR__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_PU_RD__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_PU_RD__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_PURPLES__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_PURPLES__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_RAINBOW__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_RAINBOW__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_RD_BU__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_RD_BU__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_RD_GY__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_RD_GY__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_RD_PU__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_RD_PU__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_RD_YL_BU__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_RD_YL_BU__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_RD_YL_GN__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_RD_YL_GN__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_REDS__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_REDS__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_SINEBOW__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_SINEBOW__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_SPECTRAL__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_SPECTRAL__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_TURBO__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_TURBO__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_VIRIDIS__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_VIRIDIS__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_WARM__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_WARM__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_YL_GN__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_YL_GN__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_YL_GN_BU__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_YL_GN_BU__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_YL_OR_BR__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_YL_OR_BR__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 /** @return {!Interpolate} */
 static get f_YL_OR_RD__org_pepstock_charba_client_geo_enums_Interpolate() {
  return (Interpolate.$clinit(), Interpolate.$static_YL_OR_RD__org_pepstock_charba_client_geo_enums_Interpolate);
 }
 
 static $clinit() {
  Interpolate.$clinit = () =>{};
  Interpolate.$loadModules();
  Enum.$clinit();
  Interpolate.$static_BLUES__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BLUES"), Interpolate.$ordinal_BLUES__org_pepstock_charba_client_geo_enums_Interpolate, "blues");
  Interpolate.$static_BR_B_G__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BR_B_G"), Interpolate.$ordinal_BR_B_G__org_pepstock_charba_client_geo_enums_Interpolate, "brBG");
  Interpolate.$static_BU_GN__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BU_GN"), Interpolate.$ordinal_BU_GN__org_pepstock_charba_client_geo_enums_Interpolate, "buGn");
  Interpolate.$static_BU_PU__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BU_PU"), Interpolate.$ordinal_BU_PU__org_pepstock_charba_client_geo_enums_Interpolate, "buPu");
  Interpolate.$static_CIVIDIS__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CIVIDIS"), Interpolate.$ordinal_CIVIDIS__org_pepstock_charba_client_geo_enums_Interpolate, "cividis");
  Interpolate.$static_COOL__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COOL"), Interpolate.$ordinal_COOL__org_pepstock_charba_client_geo_enums_Interpolate, "cool");
  Interpolate.$static_CUBEHELIX_DEFAULT__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CUBEHELIX_DEFAULT"), Interpolate.$ordinal_CUBEHELIX_DEFAULT__org_pepstock_charba_client_geo_enums_Interpolate, "cubehelixDefault");
  Interpolate.$static_GN_BU__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GN_BU"), Interpolate.$ordinal_GN_BU__org_pepstock_charba_client_geo_enums_Interpolate, "gnBu");
  Interpolate.$static_GREENS__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GREENS"), Interpolate.$ordinal_GREENS__org_pepstock_charba_client_geo_enums_Interpolate, "greens");
  Interpolate.$static_GREYS__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GREYS"), Interpolate.$ordinal_GREYS__org_pepstock_charba_client_geo_enums_Interpolate, "greys");
  Interpolate.$static_INFERNO__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("INFERNO"), Interpolate.$ordinal_INFERNO__org_pepstock_charba_client_geo_enums_Interpolate, "inferno");
  Interpolate.$static_MAGMA__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MAGMA"), Interpolate.$ordinal_MAGMA__org_pepstock_charba_client_geo_enums_Interpolate, "magma");
  Interpolate.$static_OR_RD__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("OR_RD"), Interpolate.$ordinal_OR_RD__org_pepstock_charba_client_geo_enums_Interpolate, "orRd");
  Interpolate.$static_ORANGES__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ORANGES"), Interpolate.$ordinal_ORANGES__org_pepstock_charba_client_geo_enums_Interpolate, "oranges");
  Interpolate.$static_P_R_GN__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("P_R_GN"), Interpolate.$ordinal_P_R_GN__org_pepstock_charba_client_geo_enums_Interpolate, "pRGn");
  Interpolate.$static_PI_Y_G__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PI_Y_G"), Interpolate.$ordinal_PI_Y_G__org_pepstock_charba_client_geo_enums_Interpolate, "piYG");
  Interpolate.$static_PLASMA__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PLASMA"), Interpolate.$ordinal_PLASMA__org_pepstock_charba_client_geo_enums_Interpolate, "plasma");
  Interpolate.$static_PU_BU__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PU_BU"), Interpolate.$ordinal_PU_BU__org_pepstock_charba_client_geo_enums_Interpolate, "puBu");
  Interpolate.$static_PU_BU_GN__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PU_BU_GN"), Interpolate.$ordinal_PU_BU_GN__org_pepstock_charba_client_geo_enums_Interpolate, "puBuGn");
  Interpolate.$static_PU_OR__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PU_OR"), Interpolate.$ordinal_PU_OR__org_pepstock_charba_client_geo_enums_Interpolate, "puOr");
  Interpolate.$static_PU_RD__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PU_RD"), Interpolate.$ordinal_PU_RD__org_pepstock_charba_client_geo_enums_Interpolate, "puRd");
  Interpolate.$static_PURPLES__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PURPLES"), Interpolate.$ordinal_PURPLES__org_pepstock_charba_client_geo_enums_Interpolate, "purples");
  Interpolate.$static_RAINBOW__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RAINBOW"), Interpolate.$ordinal_RAINBOW__org_pepstock_charba_client_geo_enums_Interpolate, "rainbow");
  Interpolate.$static_RD_BU__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RD_BU"), Interpolate.$ordinal_RD_BU__org_pepstock_charba_client_geo_enums_Interpolate, "rdBu");
  Interpolate.$static_RD_GY__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RD_GY"), Interpolate.$ordinal_RD_GY__org_pepstock_charba_client_geo_enums_Interpolate, "rdGy");
  Interpolate.$static_RD_PU__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RD_PU"), Interpolate.$ordinal_RD_PU__org_pepstock_charba_client_geo_enums_Interpolate, "rdPu");
  Interpolate.$static_RD_YL_BU__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RD_YL_BU"), Interpolate.$ordinal_RD_YL_BU__org_pepstock_charba_client_geo_enums_Interpolate, "rdYlBu");
  Interpolate.$static_RD_YL_GN__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RD_YL_GN"), Interpolate.$ordinal_RD_YL_GN__org_pepstock_charba_client_geo_enums_Interpolate, "rdYlGn");
  Interpolate.$static_REDS__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REDS"), Interpolate.$ordinal_REDS__org_pepstock_charba_client_geo_enums_Interpolate, "reds");
  Interpolate.$static_SINEBOW__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SINEBOW"), Interpolate.$ordinal_SINEBOW__org_pepstock_charba_client_geo_enums_Interpolate, "sinebow");
  Interpolate.$static_SPECTRAL__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SPECTRAL"), Interpolate.$ordinal_SPECTRAL__org_pepstock_charba_client_geo_enums_Interpolate, "spectral");
  Interpolate.$static_TURBO__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TURBO"), Interpolate.$ordinal_TURBO__org_pepstock_charba_client_geo_enums_Interpolate, "turbo");
  Interpolate.$static_VIRIDIS__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("VIRIDIS"), Interpolate.$ordinal_VIRIDIS__org_pepstock_charba_client_geo_enums_Interpolate, "viridis");
  Interpolate.$static_WARM__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WARM"), Interpolate.$ordinal_WARM__org_pepstock_charba_client_geo_enums_Interpolate, "warm");
  Interpolate.$static_YL_GN__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("YL_GN"), Interpolate.$ordinal_YL_GN__org_pepstock_charba_client_geo_enums_Interpolate, "ylGn");
  Interpolate.$static_YL_GN_BU__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("YL_GN_BU"), Interpolate.$ordinal_YL_GN_BU__org_pepstock_charba_client_geo_enums_Interpolate, "ylGnBu");
  Interpolate.$static_YL_OR_BR__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("YL_OR_BR"), Interpolate.$ordinal_YL_OR_BR__org_pepstock_charba_client_geo_enums_Interpolate, "ylOrBr");
  Interpolate.$static_YL_OR_RD__org_pepstock_charba_client_geo_enums_Interpolate = Interpolate.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("YL_OR_RD"), Interpolate.$ordinal_YL_OR_RD__org_pepstock_charba_client_geo_enums_Interpolate, "ylOrRd");
  Interpolate.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Interpolate_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Interpolate;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!Interpolate}*/
Interpolate.$static_BLUES__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_BR_B_G__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_BU_GN__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_BU_PU__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_CIVIDIS__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_COOL__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_CUBEHELIX_DEFAULT__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_GN_BU__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_GREENS__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_GREYS__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_INFERNO__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_MAGMA__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_OR_RD__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_ORANGES__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_P_R_GN__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_PI_Y_G__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_PLASMA__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_PU_BU__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_PU_BU_GN__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_PU_OR__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_PU_RD__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_PURPLES__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_RAINBOW__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_RD_BU__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_RD_GY__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_RD_PU__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_RD_YL_BU__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_RD_YL_GN__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_REDS__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_SINEBOW__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_SPECTRAL__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_TURBO__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_VIRIDIS__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_WARM__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_YL_GN__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_YL_GN_BU__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_YL_OR_BR__org_pepstock_charba_client_geo_enums_Interpolate;
/**@private {!Interpolate}*/
Interpolate.$static_YL_OR_RD__org_pepstock_charba_client_geo_enums_Interpolate;
/**@type {Map<?string, !Interpolate>}*/
Interpolate.f_namesToValuesMap__org_pepstock_charba_client_geo_enums_Interpolate_;
/**@const {number}*/
Interpolate.$ordinal_BLUES__org_pepstock_charba_client_geo_enums_Interpolate = 0;
/**@const {number}*/
Interpolate.$ordinal_BR_B_G__org_pepstock_charba_client_geo_enums_Interpolate = 1;
/**@const {number}*/
Interpolate.$ordinal_BU_GN__org_pepstock_charba_client_geo_enums_Interpolate = 2;
/**@const {number}*/
Interpolate.$ordinal_BU_PU__org_pepstock_charba_client_geo_enums_Interpolate = 3;
/**@const {number}*/
Interpolate.$ordinal_CIVIDIS__org_pepstock_charba_client_geo_enums_Interpolate = 4;
/**@const {number}*/
Interpolate.$ordinal_COOL__org_pepstock_charba_client_geo_enums_Interpolate = 5;
/**@const {number}*/
Interpolate.$ordinal_CUBEHELIX_DEFAULT__org_pepstock_charba_client_geo_enums_Interpolate = 6;
/**@const {number}*/
Interpolate.$ordinal_GN_BU__org_pepstock_charba_client_geo_enums_Interpolate = 7;
/**@const {number}*/
Interpolate.$ordinal_GREENS__org_pepstock_charba_client_geo_enums_Interpolate = 8;
/**@const {number}*/
Interpolate.$ordinal_GREYS__org_pepstock_charba_client_geo_enums_Interpolate = 9;
/**@const {number}*/
Interpolate.$ordinal_INFERNO__org_pepstock_charba_client_geo_enums_Interpolate = 10;
/**@const {number}*/
Interpolate.$ordinal_MAGMA__org_pepstock_charba_client_geo_enums_Interpolate = 11;
/**@const {number}*/
Interpolate.$ordinal_OR_RD__org_pepstock_charba_client_geo_enums_Interpolate = 12;
/**@const {number}*/
Interpolate.$ordinal_ORANGES__org_pepstock_charba_client_geo_enums_Interpolate = 13;
/**@const {number}*/
Interpolate.$ordinal_P_R_GN__org_pepstock_charba_client_geo_enums_Interpolate = 14;
/**@const {number}*/
Interpolate.$ordinal_PI_Y_G__org_pepstock_charba_client_geo_enums_Interpolate = 15;
/**@const {number}*/
Interpolate.$ordinal_PLASMA__org_pepstock_charba_client_geo_enums_Interpolate = 16;
/**@const {number}*/
Interpolate.$ordinal_PU_BU__org_pepstock_charba_client_geo_enums_Interpolate = 17;
/**@const {number}*/
Interpolate.$ordinal_PU_BU_GN__org_pepstock_charba_client_geo_enums_Interpolate = 18;
/**@const {number}*/
Interpolate.$ordinal_PU_OR__org_pepstock_charba_client_geo_enums_Interpolate = 19;
/**@const {number}*/
Interpolate.$ordinal_PU_RD__org_pepstock_charba_client_geo_enums_Interpolate = 20;
/**@const {number}*/
Interpolate.$ordinal_PURPLES__org_pepstock_charba_client_geo_enums_Interpolate = 21;
/**@const {number}*/
Interpolate.$ordinal_RAINBOW__org_pepstock_charba_client_geo_enums_Interpolate = 22;
/**@const {number}*/
Interpolate.$ordinal_RD_BU__org_pepstock_charba_client_geo_enums_Interpolate = 23;
/**@const {number}*/
Interpolate.$ordinal_RD_GY__org_pepstock_charba_client_geo_enums_Interpolate = 24;
/**@const {number}*/
Interpolate.$ordinal_RD_PU__org_pepstock_charba_client_geo_enums_Interpolate = 25;
/**@const {number}*/
Interpolate.$ordinal_RD_YL_BU__org_pepstock_charba_client_geo_enums_Interpolate = 26;
/**@const {number}*/
Interpolate.$ordinal_RD_YL_GN__org_pepstock_charba_client_geo_enums_Interpolate = 27;
/**@const {number}*/
Interpolate.$ordinal_REDS__org_pepstock_charba_client_geo_enums_Interpolate = 28;
/**@const {number}*/
Interpolate.$ordinal_SINEBOW__org_pepstock_charba_client_geo_enums_Interpolate = 29;
/**@const {number}*/
Interpolate.$ordinal_SPECTRAL__org_pepstock_charba_client_geo_enums_Interpolate = 30;
/**@const {number}*/
Interpolate.$ordinal_TURBO__org_pepstock_charba_client_geo_enums_Interpolate = 31;
/**@const {number}*/
Interpolate.$ordinal_VIRIDIS__org_pepstock_charba_client_geo_enums_Interpolate = 32;
/**@const {number}*/
Interpolate.$ordinal_WARM__org_pepstock_charba_client_geo_enums_Interpolate = 33;
/**@const {number}*/
Interpolate.$ordinal_YL_GN__org_pepstock_charba_client_geo_enums_Interpolate = 34;
/**@const {number}*/
Interpolate.$ordinal_YL_GN_BU__org_pepstock_charba_client_geo_enums_Interpolate = 35;
/**@const {number}*/
Interpolate.$ordinal_YL_OR_BR__org_pepstock_charba_client_geo_enums_Interpolate = 36;
/**@const {number}*/
Interpolate.$ordinal_YL_OR_RD__org_pepstock_charba_client_geo_enums_Interpolate = 37;
Key.$markImplementor(Interpolate);
$Util.$setClassMetadataForEnum(Interpolate, "org.pepstock.charba.client.geo.enums.Interpolate");

exports = Interpolate;

//# sourceMappingURL=Interpolate.js.map
