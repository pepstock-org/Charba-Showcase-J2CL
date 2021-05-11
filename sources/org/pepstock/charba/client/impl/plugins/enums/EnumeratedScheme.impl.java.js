goog.module('org.pepstock.charba.client.impl.plugins.enums.EnumeratedScheme$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ColorScheme = goog.require('org.pepstock.charba.client.impl.plugins.ColorScheme$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');

/**
 * @implements {ColorScheme}
 */
class EnumeratedScheme extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_category__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_;
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_;
  /**@type {Array<?string>}*/
  this.f_colorsAsStrings__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_;
  /**@type {List<IsColor>}*/
  this.f_colors__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_;
 }
 //Factory method corresponding to constructor 'EnumeratedScheme(String, String, String...)'.
 /** @return {!EnumeratedScheme} */
 static $create__java_lang_String__java_lang_String__arrayOf_java_lang_String(/** ?string */ category, /** ?string */ value, /** Array<?string> */ colorsAsStrings) {
  EnumeratedScheme.$clinit();
  let $instance = new EnumeratedScheme();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme__java_lang_String__java_lang_String__arrayOf_java_lang_String(category, value, colorsAsStrings);
  return $instance;
 }
 //Initialization from constructor 'EnumeratedScheme(String, String, String...)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme__java_lang_String__java_lang_String__arrayOf_java_lang_String(/** ?string */ category, /** ?string */ value, /** Array<?string> */ colorsAsStrings) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme();
  this.f_category__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_ = category;
  this.f_value__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_ = value;
  this.f_colorsAsStrings__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_ = colorsAsStrings;
 }
 //Factory method corresponding to constructor 'EnumeratedScheme(String, String)'.
 /** @return {!EnumeratedScheme} */
 static $create__java_lang_String__java_lang_String(/** ?string */ category, /** ?string */ value) {
  EnumeratedScheme.$clinit();
  let $instance = new EnumeratedScheme();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme__java_lang_String__java_lang_String(category, value);
  return $instance;
 }
 //Initialization from constructor 'EnumeratedScheme(String, String)'.
 
 $ctor__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme__java_lang_String__java_lang_String(/** ?string */ category, /** ?string */ value) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme();
  this.f_category__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_ = category;
  this.f_value__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_ = value;
  this.f_colorsAsStrings__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_ = null;
 }
 
 m_addAll__java_util_List_$pp_org_pepstock_charba_client_impl_plugins_enums(/** List<IsColor> */ newColors) {
  if (this.f_colors__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_.isEmpty()) {
   this.f_colors__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_.addAll(newColors);
  }
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_;
 }
 /** @override @return {?string} */
 m_category__() {
  return this.f_category__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_;
 }
 /** @override @return {List<IsColor>} */
 m_getColors__() {
  if (this.f_colors__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_.isEmpty() && !$Equality.$same(this.f_colorsAsStrings__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_, null)) {
   for (let $array = this.f_colorsAsStrings__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_, $index = 0; $index < $array.length; $index++) {
    let color = $array[$index];
    {
     this.f_colors__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_.add(ColorBuilder.m_parse__java_lang_String(color));
    }
   }
  }
  return /**@type {List<IsColor>}*/ (Collections.m_unmodifiableList__java_util_List(this.f_colors__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_));
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme() {
  this.f_colors__org_pepstock_charba_client_impl_plugins_enums_EnumeratedScheme_ = /**@type {!LinkedList<IsColor>}*/ (LinkedList.$create__());
 }
 
 static $clinit() {
  EnumeratedScheme.$clinit = () =>{};
  EnumeratedScheme.$loadModules();
  j_l_Object.$clinit();
  ColorScheme.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EnumeratedScheme;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
 }
}
ColorScheme.$markImplementor(EnumeratedScheme);
$Util.$setClassMetadata(EnumeratedScheme, "org.pepstock.charba.client.impl.plugins.enums.EnumeratedScheme");

exports = EnumeratedScheme;

//# sourceMappingURL=EnumeratedScheme.js.map
