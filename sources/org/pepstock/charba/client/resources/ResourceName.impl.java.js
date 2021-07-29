goog.module('org.pepstock.charba.client.resources.ResourceName$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<ResourceName>}
 * @implements {Key}
 */
class ResourceName extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_resources_ResourceName_;
  /**@type {boolean}*/
  this.f_override__org_pepstock_charba_client_resources_ResourceName_ = false;
  /**@type {?string}*/
  this.f_className__org_pepstock_charba_client_resources_ResourceName_;
 }
 /** @return {!ResourceName} */
 static $create__java_lang_String__int__java_lang_String__boolean__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** boolean */ override, /** ?string */ className) {
  let $instance = new ResourceName();
  $instance.$ctor__org_pepstock_charba_client_resources_ResourceName__java_lang_String__int__java_lang_String__boolean__java_lang_String($name, $ordinal, value, override, className);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_resources_ResourceName__java_lang_String__int__java_lang_String__boolean__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value, /** boolean */ override, /** ?string */ className) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_resources_ResourceName_ = value;
  this.f_override__org_pepstock_charba_client_resources_ResourceName_ = override;
  this.f_className__org_pepstock_charba_client_resources_ResourceName_ = className;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_resources_ResourceName_;
 }
 /** @return {boolean} */
 m_isOverride___$pp_org_pepstock_charba_client_resources() {
  return this.f_override__org_pepstock_charba_client_resources_ResourceName_;
 }
 /** @return {?string} */
 m_getClassName___$pp_org_pepstock_charba_client_resources() {
  return this.f_className__org_pepstock_charba_client_resources_ResourceName_;
 }
 /** @return {!ResourceName} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ResourceName.$clinit();
  if ($Equality.$same(ResourceName.f_namesToValuesMap__org_pepstock_charba_client_resources_ResourceName_, null)) {
   ResourceName.f_namesToValuesMap__org_pepstock_charba_client_resources_ResourceName_ = $Enums.createMapFromValues(ResourceName.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ResourceName.f_namesToValuesMap__org_pepstock_charba_client_resources_ResourceName_);
 }
 /** @return {!Array<!ResourceName>} */
 static m_values__() {
  ResourceName.$clinit();
  return /**@type {!Array<ResourceName>}*/ ($Arrays.$init([ResourceName.$static_CHART__org_pepstock_charba_client_resources_ResourceName, ResourceName.$static_DATE_TIME_ADAPTER__org_pepstock_charba_client_resources_ResourceName, ResourceName.$static_DATE_TIME_LIBRARY__org_pepstock_charba_client_resources_ResourceName, ResourceName.$static_CHARBA_HELPER__org_pepstock_charba_client_resources_ResourceName, ResourceName.$static_DATALABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName, ResourceName.$static_ZOOM_PLUGIN__org_pepstock_charba_client_resources_ResourceName, ResourceName.$static_HAMMER_LIBRARY__org_pepstock_charba_client_resources_ResourceName, ResourceName.$static_LABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName, ResourceName.$static_ANNOTATION_PLUGIN__org_pepstock_charba_client_resources_ResourceName, ResourceName.$static_GEO_CONTROLLER__org_pepstock_charba_client_resources_ResourceName], ResourceName));
 }
 /** @return {!ResourceName} */
 static get f_CHART__org_pepstock_charba_client_resources_ResourceName() {
  return (ResourceName.$clinit(), ResourceName.$static_CHART__org_pepstock_charba_client_resources_ResourceName);
 }
 /** @return {!ResourceName} */
 static get f_DATE_TIME_ADAPTER__org_pepstock_charba_client_resources_ResourceName() {
  return (ResourceName.$clinit(), ResourceName.$static_DATE_TIME_ADAPTER__org_pepstock_charba_client_resources_ResourceName);
 }
 /** @return {!ResourceName} */
 static get f_DATE_TIME_LIBRARY__org_pepstock_charba_client_resources_ResourceName() {
  return (ResourceName.$clinit(), ResourceName.$static_DATE_TIME_LIBRARY__org_pepstock_charba_client_resources_ResourceName);
 }
 /** @return {!ResourceName} */
 static get f_CHARBA_HELPER__org_pepstock_charba_client_resources_ResourceName() {
  return (ResourceName.$clinit(), ResourceName.$static_CHARBA_HELPER__org_pepstock_charba_client_resources_ResourceName);
 }
 /** @return {!ResourceName} */
 static get f_DATALABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName() {
  return (ResourceName.$clinit(), ResourceName.$static_DATALABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName);
 }
 /** @return {!ResourceName} */
 static get f_ZOOM_PLUGIN__org_pepstock_charba_client_resources_ResourceName() {
  return (ResourceName.$clinit(), ResourceName.$static_ZOOM_PLUGIN__org_pepstock_charba_client_resources_ResourceName);
 }
 /** @return {!ResourceName} */
 static get f_HAMMER_LIBRARY__org_pepstock_charba_client_resources_ResourceName() {
  return (ResourceName.$clinit(), ResourceName.$static_HAMMER_LIBRARY__org_pepstock_charba_client_resources_ResourceName);
 }
 /** @return {!ResourceName} */
 static get f_LABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName() {
  return (ResourceName.$clinit(), ResourceName.$static_LABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName);
 }
 /** @return {!ResourceName} */
 static get f_ANNOTATION_PLUGIN__org_pepstock_charba_client_resources_ResourceName() {
  return (ResourceName.$clinit(), ResourceName.$static_ANNOTATION_PLUGIN__org_pepstock_charba_client_resources_ResourceName);
 }
 /** @return {!ResourceName} */
 static get f_GEO_CONTROLLER__org_pepstock_charba_client_resources_ResourceName() {
  return (ResourceName.$clinit(), ResourceName.$static_GEO_CONTROLLER__org_pepstock_charba_client_resources_ResourceName);
 }
 
 static $clinit() {
  ResourceName.$clinit = () =>{};
  ResourceName.$loadModules();
  Enum.$clinit();
  ResourceName.$static_CHART__org_pepstock_charba_client_resources_ResourceName = ResourceName.$create__java_lang_String__int__java_lang_String__boolean__java_lang_String($Util.$makeEnumName("CHART"), ResourceName.$ordinal_CHART__org_pepstock_charba_client_resources_ResourceName, "chartJs", false, "org.pepstock.charba.client.resources.ChartJsResource");
  ResourceName.$static_DATE_TIME_ADAPTER__org_pepstock_charba_client_resources_ResourceName = ResourceName.$create__java_lang_String__int__java_lang_String__boolean__java_lang_String($Util.$makeEnumName("DATE_TIME_ADAPTER"), ResourceName.$ordinal_DATE_TIME_ADAPTER__org_pepstock_charba_client_resources_ResourceName, "datetimeAdapter", false, "org.pepstock.charba.client.resources.LuxonAdapterResource");
  ResourceName.$static_DATE_TIME_LIBRARY__org_pepstock_charba_client_resources_ResourceName = ResourceName.$create__java_lang_String__int__java_lang_String__boolean__java_lang_String($Util.$makeEnumName("DATE_TIME_LIBRARY"), ResourceName.$ordinal_DATE_TIME_LIBRARY__org_pepstock_charba_client_resources_ResourceName, "datetimeLibrary", true, "org.pepstock.charba.client.resources.LuxonLibraryResource");
  ResourceName.$static_CHARBA_HELPER__org_pepstock_charba_client_resources_ResourceName = ResourceName.$create__java_lang_String__int__java_lang_String__boolean__java_lang_String($Util.$makeEnumName("CHARBA_HELPER"), ResourceName.$ordinal_CHARBA_HELPER__org_pepstock_charba_client_resources_ResourceName, "charbaHelper", false, "org.pepstock.charba.client.commons.JsHelperResource");
  ResourceName.$static_DATALABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName = ResourceName.$create__java_lang_String__int__java_lang_String__boolean__java_lang_String($Util.$makeEnumName("DATALABELS_PLUGIN"), ResourceName.$ordinal_DATALABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName, "datalabels", false, "org.pepstock.charba.client.datalabels.DataLabelsPluginResource");
  ResourceName.$static_ZOOM_PLUGIN__org_pepstock_charba_client_resources_ResourceName = ResourceName.$create__java_lang_String__int__java_lang_String__boolean__java_lang_String($Util.$makeEnumName("ZOOM_PLUGIN"), ResourceName.$ordinal_ZOOM_PLUGIN__org_pepstock_charba_client_resources_ResourceName, "zoom", false, "org.pepstock.charba.client.zoom.ZoomPluginResource");
  ResourceName.$static_HAMMER_LIBRARY__org_pepstock_charba_client_resources_ResourceName = ResourceName.$create__java_lang_String__int__java_lang_String__boolean__java_lang_String($Util.$makeEnumName("HAMMER_LIBRARY"), ResourceName.$ordinal_HAMMER_LIBRARY__org_pepstock_charba_client_resources_ResourceName, "hammerjs", true, "org.pepstock.charba.client.zoom.ZoomPluginHammerResource");
  ResourceName.$static_LABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName = ResourceName.$create__java_lang_String__int__java_lang_String__boolean__java_lang_String($Util.$makeEnumName("LABELS_PLUGIN"), ResourceName.$ordinal_LABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName, "labels", false, "org.pepstock.charba.client.labels.LabelsPluginResource");
  ResourceName.$static_ANNOTATION_PLUGIN__org_pepstock_charba_client_resources_ResourceName = ResourceName.$create__java_lang_String__int__java_lang_String__boolean__java_lang_String($Util.$makeEnumName("ANNOTATION_PLUGIN"), ResourceName.$ordinal_ANNOTATION_PLUGIN__org_pepstock_charba_client_resources_ResourceName, "annotation", false, "org.pepstock.charba.client.annotation.AnnotationPluginResource");
  ResourceName.$static_GEO_CONTROLLER__org_pepstock_charba_client_resources_ResourceName = ResourceName.$create__java_lang_String__int__java_lang_String__boolean__java_lang_String($Util.$makeEnumName("GEO_CONTROLLER"), ResourceName.$ordinal_GEO_CONTROLLER__org_pepstock_charba_client_resources_ResourceName, "geo", false, "org.pepstock.charba.client.geo.GeoControllerResource");
  ResourceName.f_namesToValuesMap__org_pepstock_charba_client_resources_ResourceName_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResourceName;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!ResourceName}*/
ResourceName.$static_CHART__org_pepstock_charba_client_resources_ResourceName;
/**@private {!ResourceName}*/
ResourceName.$static_DATE_TIME_ADAPTER__org_pepstock_charba_client_resources_ResourceName;
/**@private {!ResourceName}*/
ResourceName.$static_DATE_TIME_LIBRARY__org_pepstock_charba_client_resources_ResourceName;
/**@private {!ResourceName}*/
ResourceName.$static_CHARBA_HELPER__org_pepstock_charba_client_resources_ResourceName;
/**@private {!ResourceName}*/
ResourceName.$static_DATALABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName;
/**@private {!ResourceName}*/
ResourceName.$static_ZOOM_PLUGIN__org_pepstock_charba_client_resources_ResourceName;
/**@private {!ResourceName}*/
ResourceName.$static_HAMMER_LIBRARY__org_pepstock_charba_client_resources_ResourceName;
/**@private {!ResourceName}*/
ResourceName.$static_LABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName;
/**@private {!ResourceName}*/
ResourceName.$static_ANNOTATION_PLUGIN__org_pepstock_charba_client_resources_ResourceName;
/**@private {!ResourceName}*/
ResourceName.$static_GEO_CONTROLLER__org_pepstock_charba_client_resources_ResourceName;
/**@type {Map<?string, !ResourceName>}*/
ResourceName.f_namesToValuesMap__org_pepstock_charba_client_resources_ResourceName_;
/**@const {number}*/
ResourceName.$ordinal_CHART__org_pepstock_charba_client_resources_ResourceName = 0;
/**@const {number}*/
ResourceName.$ordinal_DATE_TIME_ADAPTER__org_pepstock_charba_client_resources_ResourceName = 1;
/**@const {number}*/
ResourceName.$ordinal_DATE_TIME_LIBRARY__org_pepstock_charba_client_resources_ResourceName = 2;
/**@const {number}*/
ResourceName.$ordinal_CHARBA_HELPER__org_pepstock_charba_client_resources_ResourceName = 3;
/**@const {number}*/
ResourceName.$ordinal_DATALABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName = 4;
/**@const {number}*/
ResourceName.$ordinal_ZOOM_PLUGIN__org_pepstock_charba_client_resources_ResourceName = 5;
/**@const {number}*/
ResourceName.$ordinal_HAMMER_LIBRARY__org_pepstock_charba_client_resources_ResourceName = 6;
/**@const {number}*/
ResourceName.$ordinal_LABELS_PLUGIN__org_pepstock_charba_client_resources_ResourceName = 7;
/**@const {number}*/
ResourceName.$ordinal_ANNOTATION_PLUGIN__org_pepstock_charba_client_resources_ResourceName = 8;
/**@const {number}*/
ResourceName.$ordinal_GEO_CONTROLLER__org_pepstock_charba_client_resources_ResourceName = 9;
Key.$markImplementor(ResourceName);
$Util.$setClassMetadataForEnum(ResourceName, "org.pepstock.charba.client.resources.ResourceName");

exports = ResourceName;

//# sourceMappingURL=ResourceName.js.map
