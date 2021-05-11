goog.module('org.pepstock.charba.client.colors.Gradient$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CanvasObject = goog.require('org.pepstock.charba.client.colors.CanvasObject$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Color = goog.forwardDeclare('org.pepstock.charba.client.colors.Color$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient.Property$impl');
let GradientColor = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientColor$impl');
let GradientOrientation = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientOrientation$impl');
let GradientScope = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientScope$impl');
let GradientType = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientType$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let ArrayObjectContainerList = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class Gradient extends CanvasObject {
 /** @protected */
 constructor() {
  super();
  /**@type {ArrayObjectContainerList<GradientColor>}*/
  this.f_colors__org_pepstock_charba_client_colors_Gradient_;
 }
 //Factory method corresponding to constructor 'Gradient(String, GradientType, GradientOrientation, GradientScope, List)'.
 /** @return {!Gradient} */
 static $create__java_lang_String__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope__java_util_List(/** ?string */ id, /** GradientType */ type, /** GradientOrientation */ orientation, /** GradientScope */ scope, /** List<GradientColor> */ colors) {
  Gradient.$clinit();
  let $instance = new Gradient();
  $instance.$ctor__org_pepstock_charba_client_colors_Gradient__java_lang_String__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope__java_util_List(id, type, orientation, scope, colors);
  return $instance;
 }
 //Initialization from constructor 'Gradient(String, GradientType, GradientOrientation, GradientScope, List)'.
 
 $ctor__org_pepstock_charba_client_colors_Gradient__java_lang_String__org_pepstock_charba_client_colors_GradientType__org_pepstock_charba_client_colors_GradientOrientation__org_pepstock_charba_client_colors_GradientScope__java_util_List(/** ?string */ id, /** GradientType */ type, /** GradientOrientation */ orientation, /** GradientScope */ scope, /** List<GradientColor> */ colors) {
  this.$ctor__org_pepstock_charba_client_colors_CanvasObject__java_lang_String(id);
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(type, "Gradient type argument");
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(orientation, "Gradient orientation argument");
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(scope, "Gradient scope argument");
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(colors, "Gradient colors argument");
  Checker.m_assertCheck__boolean__java_lang_String(!colors.isEmpty(), "Gradient colors list is empty");
  this.f_colors__org_pepstock_charba_client_colors_Gradient_ = /**@type {!ArrayObjectContainerList<GradientColor>}*/ (ArrayObjectContainerList.$create__());
  this.f_colors__org_pepstock_charba_client_colors_Gradient_.addAll(colors);
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_GRADIENT_TYPE__org_pepstock_charba_client_colors_Gradient_Property, type);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(type, orientation.m_getType__())) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_GRADIENT_ORIENTATION__org_pepstock_charba_client_colors_Gradient_Property, orientation);
  } else {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_GRADIENT_ORIENTATION__org_pepstock_charba_client_colors_Gradient_Property, GradientOrientation.m_getDefaultByType__org_pepstock_charba_client_colors_GradientType(type));
  }
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_GRADIENT_SCOPE__org_pepstock_charba_client_colors_Gradient_Property, scope);
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ArrayObjectContainerList(Property.f_CHARBA_GRADIENT_COLORS__org_pepstock_charba_client_colors_Gradient_Property, this.f_colors__org_pepstock_charba_client_colors_Gradient_);
 }
 //Factory method corresponding to constructor 'Gradient(NativeObject)'.
 /** @return {!Gradient} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  Gradient.$clinit();
  let $instance = new Gradient();
  $instance.$ctor__org_pepstock_charba_client_colors_Gradient__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'Gradient(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_colors_Gradient__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_colors_CanvasObject__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  for (let $array = Property.m_values__(), $index = 0; $index < $array.length; $index++) {
   let property = $array[$index];
   {
    this.m_checkNativeObject__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType_$pp_org_pepstock_charba_client_colors(property, property.m_type___$pp_org_pepstock_charba_client_colors());
   }
  }
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_GRADIENT_COLORS__org_pepstock_charba_client_colors_Gradient_Property), ArrayObject_$Overlay));
  this.f_colors__org_pepstock_charba_client_colors_Gradient_ = /**@type {ArrayObjectContainerList<GradientColor>}*/ (ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, GradientColor.f_FACTORY__org_pepstock_charba_client_colors_GradientColor));
  Checker.m_assertCheck__boolean__java_lang_String(!this.f_colors__org_pepstock_charba_client_colors_Gradient_.isEmpty(), Gradient.f_MISSING_COLORS__org_pepstock_charba_client_colors_Gradient);
 }
 /** @return {GradientType} */
 m_getType__() {
  return /**@type {GradientType}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_GRADIENT_TYPE__org_pepstock_charba_client_colors_Gradient_Property, GradientType.m_values__(), GradientType.f_LINEAR__org_pepstock_charba_client_colors_GradientType), GradientType));
 }
 /** @return {GradientOrientation} */
 m_getOrientation__() {
  return /**@type {GradientOrientation}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_GRADIENT_ORIENTATION__org_pepstock_charba_client_colors_Gradient_Property, GradientOrientation.m_values__(), GradientOrientation.m_getDefaultByType__org_pepstock_charba_client_colors_GradientType(this.m_getType__())), GradientOrientation));
 }
 /** @return {GradientScope} */
 m_getScope__() {
  return /**@type {GradientScope}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CHARBA_GRADIENT_SCOPE__org_pepstock_charba_client_colors_Gradient_Property, GradientScope.m_values__(), GradientScope.f_CHART__org_pepstock_charba_client_colors_GradientScope), GradientScope));
 }
 /** @return {List<GradientColor>} */
 m_getColors__() {
  return /**@type {List<GradientColor>}*/ (Collections.m_unmodifiableList__java_util_List(this.f_colors__org_pepstock_charba_client_colors_Gradient_));
 }
 /** @override @return {number} */
 hashCode() {
  return super.hashCode();
 }
 /** @override @return {boolean} */
 equals(/** * */ obj) {
  return super.equals(obj);
 }
 /** @return {IsColor} */
 m_getInterpolatedColorByOffset__double(/** number */ offset) {
  GradientColor.m_checkOffsetWithinBounds__double(offset);
  Collections.m_sort__java_util_List__java_util_Comparator(this.f_colors__org_pepstock_charba_client_colors_Gradient_, Gradient.$static_COMPARATOR__org_pepstock_charba_client_colors_Gradient);
  let startColor = null;
  let endColor = null;
  for (let $iterator = this.f_colors__org_pepstock_charba_client_colors_Gradient_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let color = /**@type {GradientColor}*/ ($Casts.$to($iterator.m_next__(), GradientColor));
   {
    if (Double.m_compare__double__double(color.m_getOffset__(), offset) == 0) {
     return color.m_getColor__();
    }
    if (color.m_getOffset__() < offset) {
     startColor = color.m_getColor__();
    } else if (color.m_getOffset__() > offset && $Equality.$same(endColor, null)) {
     endColor = color.m_getColor__();
    }
   }
  }
  if ($Equality.$same(startColor, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("Unable to get the start and stop color based on passed offset " + offset));
  } else if ($Equality.$same(endColor, null)) {
   return startColor;
  }
  let startRGBs = startColor.m_toRGBs__();
  let startA = (startRGBs >> 24 & 255) / 255;
  let startR = this.m_fromRGBs__double_$p_org_pepstock_charba_client_colors_Gradient((startRGBs >> 16 & 255) / 255);
  let startG = this.m_fromRGBs__double_$p_org_pepstock_charba_client_colors_Gradient((startRGBs >> 8 & 255) / 255);
  let startB = this.m_fromRGBs__double_$p_org_pepstock_charba_client_colors_Gradient((startRGBs & 255) / 255);
  let endRGBs = endColor.m_toRGBs__();
  let endA = (endRGBs >> 24 & 255) / 255;
  let endR = this.m_fromRGBs__double_$p_org_pepstock_charba_client_colors_Gradient((endRGBs >> 16 & 255) / 255);
  let endG = this.m_fromRGBs__double_$p_org_pepstock_charba_client_colors_Gradient((endRGBs >> 8 & 255) / 255);
  let endB = this.m_fromRGBs__double_$p_org_pepstock_charba_client_colors_Gradient((endRGBs & 255) / 255);
  let a = startA + offset * (endA - startA);
  let r = $Primitives.$narrowLongToInt(j_l_Math.m_round__double(this.m_toRGBs__double_$p_org_pepstock_charba_client_colors_Gradient(startR + offset * (endR - startR)) * 255));
  let g = $Primitives.$narrowLongToInt(j_l_Math.m_round__double(this.m_toRGBs__double_$p_org_pepstock_charba_client_colors_Gradient(startG + offset * (endG - startG)) * 255));
  let b = $Primitives.$narrowLongToInt(j_l_Math.m_round__double(this.m_toRGBs__double_$p_org_pepstock_charba_client_colors_Gradient(startB + offset * (endB - startB)) * 255));
  return Color.$create__int__int__int__double(r, g, b, a);
 }
 /** @return {number} */
 m_toRGBs__double_$p_org_pepstock_charba_client_colors_Gradient(/** number */ linear) {
  return linear <= 0.0031308 ? linear * 12.92 : Math.pow(linear, 1 / 2.4) * 1.055 - 0.055;
 }
 /** @return {number} */
 m_fromRGBs__double_$p_org_pepstock_charba_client_colors_Gradient(/** number */ srgb) {
  return srgb <= 0.04045 ? srgb / 12.92 : Math.pow((srgb + 0.055) / 1.055, 2.4);
 }
 /** @return {Comparator<GradientColor>} */
 static get f_COMPARATOR__org_pepstock_charba_client_colors_Gradient() {
  return (Gradient.$clinit(), Gradient.$static_COMPARATOR__org_pepstock_charba_client_colors_Gradient);
 }
 
 static $clinit() {
  Gradient.$clinit = () =>{};
  Gradient.$loadModules();
  CanvasObject.$clinit();
  Gradient.$static_COMPARATOR__org_pepstock_charba_client_colors_Gradient = Comparator.$adapt((o1, o2) =>{
   let o1_1 = /**@type {GradientColor}*/ ($Casts.$to(o1, GradientColor));
   let o2_1 = /**@type {GradientColor}*/ ($Casts.$to(o2, GradientColor));
   return Double.m_compare__double__double(o1_1.m_getOffset__(), o2_1.m_getOffset__());
  });
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Gradient;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_Math = goog.module.get('java.lang.Math$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Color = goog.module.get('org.pepstock.charba.client.colors.Color$impl');
  Property = goog.module.get('org.pepstock.charba.client.colors.Gradient.Property$impl');
  GradientColor = goog.module.get('org.pepstock.charba.client.colors.GradientColor$impl');
  GradientOrientation = goog.module.get('org.pepstock.charba.client.colors.GradientOrientation$impl');
  GradientScope = goog.module.get('org.pepstock.charba.client.colors.GradientScope$impl');
  GradientType = goog.module.get('org.pepstock.charba.client.colors.GradientType$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  ArrayObjectContainerList = goog.module.get('org.pepstock.charba.client.commons.ArrayObjectContainerList$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
/**@private {Comparator<GradientColor>}*/
Gradient.$static_COMPARATOR__org_pepstock_charba_client_colors_Gradient;
/**@const {?string}*/
Gradient.f_MISSING_COLORS__org_pepstock_charba_client_colors_Gradient = "The gradient does not have any stop color";
$Util.$setClassMetadata(Gradient, "org.pepstock.charba.client.colors.Gradient");

exports = Gradient;

//# sourceMappingURL=Gradient.js.map
