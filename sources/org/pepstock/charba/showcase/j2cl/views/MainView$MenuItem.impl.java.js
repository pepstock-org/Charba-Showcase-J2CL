goog.module('org.pepstock.charba.showcase.j2cl.views.MainView.MenuItem$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<MenuItem>}
 */
class MenuItem extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_label__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem_;
  /**@type {?string}*/
  this.f_imgSrc__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem_;
 }
 /** @return {!MenuItem} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** ?string */ imgSrc) {
  let $instance = new MenuItem();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem__java_lang_String__int__java_lang_String__java_lang_String($name, $ordinal, label, imgSrc);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ label, /** ?string */ imgSrc) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_label__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem_ = label;
  this.f_imgSrc__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem_ = imgSrc;
 }
 /** @return {?string} */
 m_getLabel__() {
  return this.f_label__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem_;
 }
 /** @return {?string} */
 m_getImgSrc__() {
  return this.f_imgSrc__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem_;
 }
 /** @return {!MenuItem} */
 static m_valueOf__java_lang_String(/** string */ name) {
  MenuItem.$clinit();
  if ($Equality.$same(MenuItem.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem_, null)) {
   MenuItem.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem_ = $Enums.createMapFromValues(MenuItem.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, MenuItem.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem_);
 }
 /** @return {!Array<!MenuItem>} */
 static m_values__() {
  MenuItem.$clinit();
  return /**@type {!Array<MenuItem>}*/ ($Arrays.$init([MenuItem.$static_CHARTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem, MenuItem.$static_ELEMENTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem, MenuItem.$static_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem, MenuItem.$static_COLORING__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem, MenuItem.$static_EXTENSIONS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem, MenuItem.$static_MISC__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem], MenuItem));
 }
 /** @return {!MenuItem} */
 static get f_CHARTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem() {
  return (MenuItem.$clinit(), MenuItem.$static_CHARTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem);
 }
 /** @return {!MenuItem} */
 static get f_ELEMENTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem() {
  return (MenuItem.$clinit(), MenuItem.$static_ELEMENTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem);
 }
 /** @return {!MenuItem} */
 static get f_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem() {
  return (MenuItem.$clinit(), MenuItem.$static_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem);
 }
 /** @return {!MenuItem} */
 static get f_COLORING__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem() {
  return (MenuItem.$clinit(), MenuItem.$static_COLORING__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem);
 }
 /** @return {!MenuItem} */
 static get f_EXTENSIONS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem() {
  return (MenuItem.$clinit(), MenuItem.$static_EXTENSIONS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem);
 }
 /** @return {!MenuItem} */
 static get f_MISC__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem() {
  return (MenuItem.$clinit(), MenuItem.$static_MISC__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem);
 }
 
 static $clinit() {
  MenuItem.$clinit = () =>{};
  MenuItem.$loadModules();
  Enum.$clinit();
  MenuItem.$static_CHARTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem = MenuItem.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("CHARTS"), MenuItem.$ordinal_CHARTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem, "Charts", "images/showcaseCharts.png");
  MenuItem.$static_ELEMENTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem = MenuItem.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("ELEMENTS"), MenuItem.$ordinal_ELEMENTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem, "Elements", "images/showcaseElements.png");
  MenuItem.$static_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem = MenuItem.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("PLUGINS"), MenuItem.$ordinal_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem, "Plugins", "images/showcasePlugins.png");
  MenuItem.$static_COLORING__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem = MenuItem.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("COLORING"), MenuItem.$ordinal_COLORING__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem, "Coloring", "images/showcaseColoring.png");
  MenuItem.$static_EXTENSIONS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem = MenuItem.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("EXTENSIONS"), MenuItem.$ordinal_EXTENSIONS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem, "Extensions", "images/showcaseExtensions.png");
  MenuItem.$static_MISC__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem = MenuItem.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName("MISC"), MenuItem.$ordinal_MISC__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem, "Miscellaneous", "images/showcaseMiscellaneous.png");
  MenuItem.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MenuItem;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!MenuItem}*/
MenuItem.$static_CHARTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem;
/**@private {!MenuItem}*/
MenuItem.$static_ELEMENTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem;
/**@private {!MenuItem}*/
MenuItem.$static_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem;
/**@private {!MenuItem}*/
MenuItem.$static_COLORING__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem;
/**@private {!MenuItem}*/
MenuItem.$static_EXTENSIONS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem;
/**@private {!MenuItem}*/
MenuItem.$static_MISC__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem;
/**@type {Map<?string, !MenuItem>}*/
MenuItem.f_namesToValuesMap__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem_;
/**@const {number}*/
MenuItem.$ordinal_CHARTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem = 0;
/**@const {number}*/
MenuItem.$ordinal_ELEMENTS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem = 1;
/**@const {number}*/
MenuItem.$ordinal_PLUGINS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem = 2;
/**@const {number}*/
MenuItem.$ordinal_COLORING__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem = 3;
/**@const {number}*/
MenuItem.$ordinal_EXTENSIONS__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem = 4;
/**@const {number}*/
MenuItem.$ordinal_MISC__org_pepstock_charba_showcase_j2cl_views_MainView_MenuItem = 5;
$Util.$setClassMetadataForEnum(MenuItem, "org.pepstock.charba.showcase.j2cl.views.MainView$MenuItem");

exports = MenuItem;

//# sourceMappingURL=MainView$MenuItem.js.map
