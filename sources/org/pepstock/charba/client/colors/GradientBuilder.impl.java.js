goog.module('org.pepstock.charba.client.colors.GradientBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CanvasObject = goog.forwardDeclare('org.pepstock.charba.client.colors.CanvasObject$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.colors.CanvasObject.Property$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientColor$impl');
let GradientOrientation = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientOrientation$impl');
let GradientScope = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientScope$impl');
let GradientType = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientType$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let Id = goog.forwardDeclare('org.pepstock.charba.client.commons.Id$impl');
let IsCastable_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class GradientBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {GradientType}*/
  this.f_type__org_pepstock_charba_client_colors_GradientBuilder_;
  /**@type {GradientOrientation}*/
  this.f_orientation__org_pepstock_charba_client_colors_GradientBuilder_;
  /**@type {GradientScope}*/
  this.f_scope__org_pepstock_charba_client_colors_GradientBuilder_;
  /**@type {List<GradientColor>}*/
  this.f_colors__org_pepstock_charba_client_colors_GradientBuilder_;
 }
 /** @return {!GradientBuilder} */
 static $create__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(/** GradientType */ type, /** GradientOrientation */ orientation, /** GradientScope */ scope) {
  let $instance = new GradientBuilder();
  $instance.$ctor__org_pepstock_charba_client_colors_GradientBuilder__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(type, orientation, scope);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_colors_GradientBuilder__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(/** GradientType */ type, /** GradientOrientation */ orientation, /** GradientScope */ scope) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_pepstock_charba_client_colors_GradientBuilder();
  this.f_type__org_pepstock_charba_client_colors_GradientBuilder_ = type;
  this.f_orientation__org_pepstock_charba_client_colors_GradientBuilder_ = orientation;
  this.f_scope__org_pepstock_charba_client_colors_GradientBuilder_ = scope;
 }
 /** @return {GradientBuilder} */
 static m_create__() {
  GradientBuilder.$clinit();
  return GradientBuilder.m_create__org_pepstock_charba_client_colors_GradientType(GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType);
 }
 /** @return {GradientBuilder} */
 static m_create__org_pepstock_charba_client_colors_GradientType(/** GradientType */ type) {
  GradientBuilder.$clinit();
  return GradientBuilder.m_create__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation(type, GradientOrientation.m_getDefaultByType__org_pepstock_charba_client_colors_GradientType(type));
 }
 /** @return {GradientBuilder} */
 static m_create__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation(/** GradientType */ type, /** GradientOrientation */ orientation) {
  GradientBuilder.$clinit();
  return GradientBuilder.m_create__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(type, orientation, GradientScope.f_CHART__org_pepstock_charba_client_colors_GradientScope);
 }
 /** @return {GradientBuilder} */
 static m_create__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientScope(/** GradientType */ type, /** GradientScope */ scope) {
  GradientBuilder.$clinit();
  return GradientBuilder.m_create__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(type, GradientOrientation.m_getDefaultByType__org_pepstock_charba_client_colors_GradientType(type), scope);
 }
 /** @return {GradientBuilder} */
 static m_create__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(/** GradientType */ type, /** GradientOrientation */ orientation, /** GradientScope */ scope) {
  GradientBuilder.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(type, "Gradient type argument");
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(orientation, "Gradient orientation argument");
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(scope, "Gradient scope argument");
  return GradientBuilder.$create__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope(type, orientation, scope);
 }
 /** @return {GradientBuilder} */
 m_addColorsStartStop__org_pepstock_charba_client_colors_IsColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ start, /** IsColor */ stop) {
  return this.m_addColorsStartStop__java_lang_String__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(start), IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(stop));
 }
 /** @return {GradientBuilder} */
 m_addColorsStartStop__java_lang_String__java_lang_String(/** ?string */ start, /** ?string */ stop) {
  this.f_colors__org_pepstock_charba_client_colors_GradientBuilder_.clear();
  return this.m_addColorStop__double__java_lang_String(GradientColor.f_DEFAULT_OFFSET_START__org_pepstock_charba_client_colors_GradientColor, start).m_addColorStop__double__java_lang_String(GradientColor.f_DEFAULT_OFFSET_STOP__org_pepstock_charba_client_colors_GradientColor, stop);
 }
 /** @return {GradientBuilder} */
 m_addColorStop__double__org_pepstock_charba_client_colors_IsColor(/** number */ offset, /** IsColor */ color) {
  return this.m_addColorStop__double__java_lang_String(offset, IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 /** @return {GradientBuilder} */
 m_addColorStop__double__java_lang_String(/** number */ offset, /** ?string */ color) {
  return this.m_addColorStop__org_pepstock_charba_client_colors_GradientColor(GradientColor.$create__double__java_lang_String(offset, color));
 }
 /** @return {GradientBuilder} */
 m_addColorStop__org_pepstock_charba_client_colors_GradientColor(/** GradientColor */ color) {
  if (!$Equality.$same(color, null)) {
   this.f_colors__org_pepstock_charba_client_colors_GradientBuilder_.add(color);
  }
  return this;
 }
 /** @return {GradientBuilder} */
 m_setColors__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ colors) {
  if (!$Equality.$same(colors, null) && colors.length > 0) {
   Checker.m_checkIfGreaterThan__int__int__java_lang_String(colors.length, 2, "Colors list");
   this.f_colors__org_pepstock_charba_client_colors_GradientBuilder_.clear();
   let lastCalculatedColorIndex = colors.length - 1 | 0;
   let offsetIncrement = GradientColor.f_DEFAULT_OFFSET_STOP__org_pepstock_charba_client_colors_GradientColor / lastCalculatedColorIndex;
   let offset = 0;
   for (let i = 0; i < lastCalculatedColorIndex; i = i + 1 | 0) {
    this.m_addColorStop__double__org_pepstock_charba_client_colors_IsColor(offset, colors[i]);
    offset += offsetIncrement;
   }
   this.m_addColorStop__double__org_pepstock_charba_client_colors_IsColor(GradientColor.f_DEFAULT_OFFSET_STOP__org_pepstock_charba_client_colors_GradientColor, colors[lastCalculatedColorIndex]);
  }
  return this;
 }
 /** @return {GradientBuilder} */
 m_setColors__java_util_List(/** List<IsColor> */ colors) {
  if (!$Equality.$same(colors, null) && !colors.isEmpty()) {
   return this.m_setColors__arrayOf_org_pepstock_charba_client_colors_IsColor(/**@type {Array<IsColor>}*/ ($Arrays.$castTo(colors.m_toArray__arrayOf_java_lang_Object(/**@type {!Array<IsColor>}*/ ($Arrays.$create([0], IsColor))), IsColor, 1)));
  }
  return this;
 }
 /** @return {Gradient} */
 m_build__() {
  Checker.m_assertCheck__boolean__java_lang_String(!this.f_colors__org_pepstock_charba_client_colors_GradientBuilder_.isEmpty(), Gradient.f_MISSING_COLORS__org_pepstock_charba_client_colors_Gradient);
  Collections.m_sort__java_util_List__java_util_Comparator(this.f_colors__org_pepstock_charba_client_colors_GradientBuilder_, Gradient.f_COMPARATOR__org_pepstock_charba_client_colors_Gradient);
  let id = this.m_generateId___$p_org_pepstock_charba_client_colors_GradientBuilder();
  if (GradientBuilder.f_GRADIENTS__org_pepstock_charba_client_colors_GradientBuilder_.containsKey(id)) {
   return /**@type {Gradient}*/ ($Casts.$to(GradientBuilder.f_GRADIENTS__org_pepstock_charba_client_colors_GradientBuilder_.get(id), Gradient));
  }
  let result = Gradient.$create__java_lang_String__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope__java_util_List(id, this.f_type__org_pepstock_charba_client_colors_GradientBuilder_, this.f_orientation__org_pepstock_charba_client_colors_GradientBuilder_, this.f_scope__org_pepstock_charba_client_colors_GradientBuilder_, this.f_colors__org_pepstock_charba_client_colors_GradientBuilder_);
  GradientBuilder.f_GRADIENTS__org_pepstock_charba_client_colors_GradientBuilder_.put(id, result);
  return result;
 }
 /** @return {Gradient} */
 static m_build__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  GradientBuilder.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(nativeObject, "Native object argument");
  let id = Id.m_getStringProperty__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObject(Property.f_CHARBA_OBJECT_ID__org_pepstock_charba_client_colors_CanvasObject_Property, nativeObject);
  Checker.m_assertCheck__boolean__java_lang_String(!$Equality.$same(id, null), Utilities.m_applyTemplate__java_lang_String__arrayOf_java_lang_Object(CanvasObject.f_MISSING_PROPERTY__org_pepstock_charba_client_colors_CanvasObject, [Property.f_CHARBA_OBJECT_ID__org_pepstock_charba_client_colors_CanvasObject_Property.m_value__()]));
  if (GradientBuilder.f_GRADIENTS__org_pepstock_charba_client_colors_GradientBuilder_.containsKey(id)) {
   return /**@type {Gradient}*/ ($Casts.$to(GradientBuilder.f_GRADIENTS__org_pepstock_charba_client_colors_GradientBuilder_.get(id), Gradient));
  }
  let result = Gradient.$create__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  GradientBuilder.f_GRADIENTS__org_pepstock_charba_client_colors_GradientBuilder_.put(id, result);
  return result;
 }
 /** @return {Gradient} */
 static m_retrieve__org_pepstock_charba_client_dom_elements_CanvasGradientItem(/** CanvasGradient */ canvasGradient) {
  GradientBuilder.$clinit();
  if (!$Equality.$same(canvasGradient, null)) {
   let id = Id.m_get__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (IsCastable_$Overlay.m_as__$devirt__org_pepstock_charba_client_dom_IsCastable(canvasGradient)));
   if (!$Equality.$same(id, null) && GradientBuilder.f_GRADIENTS__org_pepstock_charba_client_colors_GradientBuilder_.containsKey(id)) {
    return /**@type {Gradient}*/ ($Casts.$to(GradientBuilder.f_GRADIENTS__org_pepstock_charba_client_colors_GradientBuilder_.get(id), Gradient));
   }
  }
  return null;
 }
 /** @return {?string} */
 m_generateId___$p_org_pepstock_charba_client_colors_GradientBuilder() {
  let sb = StringBuilder.$create__();
  sb.m_append__java_lang_Object(this.f_type__org_pepstock_charba_client_colors_GradientBuilder_).m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants);
  sb.m_append__java_lang_Object(this.f_orientation__org_pepstock_charba_client_colors_GradientBuilder_).m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants);
  sb.m_append__java_lang_Object(this.f_scope__org_pepstock_charba_client_colors_GradientBuilder_).m_append__java_lang_String(Constants.f_MINUS__org_pepstock_charba_client_commons_Constants);
  sb.m_append__java_lang_String($Objects.m_toString__java_lang_Object(this.f_colors__org_pepstock_charba_client_colors_GradientBuilder_));
  return sb.toString();
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_colors_GradientBuilder() {
  this.f_colors__org_pepstock_charba_client_colors_GradientBuilder_ = /**@type {!LinkedList<GradientColor>}*/ (LinkedList.$create__());
 }
 
 static $clinit() {
  GradientBuilder.$clinit = () =>{};
  GradientBuilder.$loadModules();
  j_l_Object.$clinit();
  GradientBuilder.f_GRADIENTS__org_pepstock_charba_client_colors_GradientBuilder_ = /**@type {!HashMap<?string, Gradient>}*/ (HashMap.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GradientBuilder;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CanvasObject = goog.module.get('org.pepstock.charba.client.colors.CanvasObject$impl');
  Property = goog.module.get('org.pepstock.charba.client.colors.CanvasObject.Property$impl');
  Gradient = goog.module.get('org.pepstock.charba.client.colors.Gradient$impl');
  GradientColor = goog.module.get('org.pepstock.charba.client.colors.GradientColor$impl');
  GradientOrientation = goog.module.get('org.pepstock.charba.client.colors.GradientOrientation$impl');
  GradientScope = goog.module.get('org.pepstock.charba.client.colors.GradientScope$impl');
  GradientType = goog.module.get('org.pepstock.charba.client.colors.GradientType$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  Id = goog.module.get('org.pepstock.charba.client.commons.Id$impl');
  IsCastable_$Overlay = goog.module.get('org.pepstock.charba.client.dom.IsCastable.$Overlay$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {Map<?string, Gradient>}*/
GradientBuilder.f_GRADIENTS__org_pepstock_charba_client_colors_GradientBuilder_;
$Util.$setClassMetadata(GradientBuilder, "org.pepstock.charba.client.colors.GradientBuilder");

exports = GradientBuilder;

//# sourceMappingURL=GradientBuilder.js.map
