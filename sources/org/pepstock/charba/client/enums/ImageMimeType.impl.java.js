goog.module('org.pepstock.charba.client.enums.ImageMimeType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ImageMimeType>}
 * @implements {Key}
 */
class ImageMimeType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_enums_ImageMimeType_;
 }
 /** @return {!ImageMimeType} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new ImageMimeType();
  $instance.$ctor__org_pepstock_charba_client_enums_ImageMimeType__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_enums_ImageMimeType__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_enums_ImageMimeType_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_enums_ImageMimeType_;
 }
 /** @return {!ImageMimeType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ImageMimeType.$clinit();
  if ($Equality.$same(ImageMimeType.f_namesToValuesMap__org_pepstock_charba_client_enums_ImageMimeType_, null)) {
   ImageMimeType.f_namesToValuesMap__org_pepstock_charba_client_enums_ImageMimeType_ = $Enums.createMapFromValues(ImageMimeType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ImageMimeType.f_namesToValuesMap__org_pepstock_charba_client_enums_ImageMimeType_);
 }
 /** @return {!Array<!ImageMimeType>} */
 static m_values__() {
  ImageMimeType.$clinit();
  return /**@type {!Array<ImageMimeType>}*/ ($Arrays.$init([ImageMimeType.$static_PNG__org_pepstock_charba_client_enums_ImageMimeType, ImageMimeType.$static_JPEG__org_pepstock_charba_client_enums_ImageMimeType], ImageMimeType));
 }
 /** @return {!ImageMimeType} */
 static get f_PNG__org_pepstock_charba_client_enums_ImageMimeType() {
  return (ImageMimeType.$clinit(), ImageMimeType.$static_PNG__org_pepstock_charba_client_enums_ImageMimeType);
 }
 /** @return {!ImageMimeType} */
 static get f_JPEG__org_pepstock_charba_client_enums_ImageMimeType() {
  return (ImageMimeType.$clinit(), ImageMimeType.$static_JPEG__org_pepstock_charba_client_enums_ImageMimeType);
 }
 
 static $clinit() {
  ImageMimeType.$clinit = () =>{};
  ImageMimeType.$loadModules();
  Enum.$clinit();
  ImageMimeType.$static_PNG__org_pepstock_charba_client_enums_ImageMimeType = ImageMimeType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PNG"), ImageMimeType.$ordinal_PNG__org_pepstock_charba_client_enums_ImageMimeType, "image/png");
  ImageMimeType.$static_JPEG__org_pepstock_charba_client_enums_ImageMimeType = ImageMimeType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("JPEG"), ImageMimeType.$ordinal_JPEG__org_pepstock_charba_client_enums_ImageMimeType, "image/jpeg");
  ImageMimeType.f_namesToValuesMap__org_pepstock_charba_client_enums_ImageMimeType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ImageMimeType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ImageMimeType}*/
ImageMimeType.$static_PNG__org_pepstock_charba_client_enums_ImageMimeType;
/**@private {!ImageMimeType}*/
ImageMimeType.$static_JPEG__org_pepstock_charba_client_enums_ImageMimeType;
/**@type {Map<?string, !ImageMimeType>}*/
ImageMimeType.f_namesToValuesMap__org_pepstock_charba_client_enums_ImageMimeType_;
/**@const {number}*/
ImageMimeType.$ordinal_PNG__org_pepstock_charba_client_enums_ImageMimeType = 0;
/**@const {number}*/
ImageMimeType.$ordinal_JPEG__org_pepstock_charba_client_enums_ImageMimeType = 1;
Key.$markImplementor(ImageMimeType);
$Util.$setClassMetadataForEnum(ImageMimeType, "org.pepstock.charba.client.enums.ImageMimeType");

exports = ImageMimeType;

//# sourceMappingURL=ImageMimeType.js.map
