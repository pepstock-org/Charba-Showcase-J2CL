goog.module('org.pepstock.charba.client.options.Grid$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultGrid = goog.require('org.pepstock.charba.client.defaults.IsDefaultGrid$impl');
const AbstractScaleLines = goog.require('org.pepstock.charba.client.options.AbstractScaleLines$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Array_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.Array.$Overlay$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let AbstractScale = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractScale$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Grid.Property$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');

/**
 * @extends {AbstractScaleLines<IsDefaultGrid>}
 * @implements {IsDefaultGrid}
 */
class Grid extends AbstractScaleLines {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Grid} */
 static $create__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultGrid__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** IsDefaultGrid */ defaultValues, /** ? */ nativeObject) {
  Grid.$clinit();
  let $instance = new Grid();
  $instance.$ctor__org_pepstock_charba_client_options_Grid__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultGrid__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Grid__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultGrid__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** IsDefaultGrid */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractScaleLines__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
 }
 /** @override @return {number} */
 m_getDefaultBorderDashOffset___$pp_org_pepstock_charba_client_options() {
  return /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getBorderDashOffset__();
 }
 /** @override @return {List<Integer>} */
 m_getDefaultBorderDash___$pp_org_pepstock_charba_client_options() {
  return /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getBorderDash__();
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_Grid_Property, display);
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_isDisplay__());
 }
 
 m_setCircular__boolean(/** boolean */ circular) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_CIRCULAR__org_pepstock_charba_client_options_Grid_Property, circular);
 }
 /** @override @return {boolean} */
 m_isCircular__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CIRCULAR__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_isCircular__());
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setBorderColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setBorderColor__java_lang_String(/** ?string */ color) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_options_Grid_Property, color);
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getBorderColorAsString__());
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBorderColorAsString__());
 }
 
 m_setColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ color) {
  this.m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor(Property.f_COLOR__org_pepstock_charba_client_options_Grid_Property, color);
 }
 
 m_setColor__arrayOf_java_lang_String(/** Array<?string> */ color) {
  this.m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(Property.f_COLOR__org_pepstock_charba_client_options_Grid_Property, color);
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_COLOR__org_pepstock_charba_client_options_Grid_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType) || !this.m_has__org_pepstock_charba_client_commons_Key(Property.f_COLOR__org_pepstock_charba_client_options_Grid_Property)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getColorAsString__());
  } else {
   return /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getColorAsString__();
  }
 }
 /** @return {List<?string>} */
 m_getColorsAsString__() {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(Property.f_COLOR__org_pepstock_charba_client_options_Grid_Property);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType, type) || !this.m_has__org_pepstock_charba_client_commons_Key(Property.f_COLOR__org_pepstock_charba_client_options_Grid_Property)) {
   return /**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<?string>}*/ ($Arrays.$init([this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getColorAsString__())], j_l_String))));
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_COLOR__org_pepstock_charba_client_options_Grid_Property), ArrayString_$Overlay));
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
  }
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<IsColor>} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_util_List(this.m_getColorsAsString__());
 }
 
 m_setBorderWidth__int(/** number */ borderWidth) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_options_Grid_Property, Checker.m_positiveOrZero__int(borderWidth));
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getBorderWidth__());
 }
 
 m_setLineWidth__arrayOf_int(/** Array<number> */ lineWidth) {
  this.m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_int(Property.f_LINE_WIDTH__org_pepstock_charba_client_options_Grid_Property, lineWidth);
 }
 /** @override @return {number} */
 m_getLineWidth__() {
  let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__int(Property.f_LINE_WIDTH__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getLineWidth__());
  return Array_$Overlay.m_isEmpty__$devirt__org_pepstock_charba_client_commons_Array(array) ? /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getLineWidth__() : ArrayInteger_$Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayInteger__int(array, 0);
 }
 /** @return {List<Integer>} */
 m_getLinesWidth__() {
  let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__int(Property.f_LINE_WIDTH__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getLineWidth__());
  return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
 }
 
 m_setDrawBorder__boolean(/** boolean */ drawBorder) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_DRAW_BORDER__org_pepstock_charba_client_options_Grid_Property, drawBorder);
 }
 /** @override @return {boolean} */
 m_isDrawBorder__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DRAW_BORDER__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_isDrawBorder__());
 }
 
 m_setDrawOnChartArea__boolean(/** boolean */ drawOnChartArea) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_DRAW_ON_CHART_AREA__org_pepstock_charba_client_options_Grid_Property, drawOnChartArea);
 }
 /** @override @return {boolean} */
 m_isDrawOnChartArea__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DRAW_ON_CHART_AREA__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_isDrawOnChartArea__());
 }
 
 m_setDrawTicks__boolean(/** boolean */ drawTicks) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_DRAW_TICKS__org_pepstock_charba_client_options_Grid_Property, drawTicks);
 }
 /** @override @return {boolean} */
 m_isDrawTicks__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DRAW_TICKS__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_isDrawTicks__());
 }
 
 m_setTickLength__int(/** number */ tickLength) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_TICK_LENGTH__org_pepstock_charba_client_options_Grid_Property, Checker.m_positiveOrZero__int(tickLength));
 }
 /** @override @return {number} */
 m_getTickLength__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_TICK_LENGTH__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getTickLength__());
 }
 
 m_setOffset__boolean(/** boolean */ offset) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_OFFSET__org_pepstock_charba_client_options_Grid_Property, offset);
 }
 /** @override @return {boolean} */
 m_isOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_OFFSET__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_isOffset__());
 }
 
 m_setZ__int(/** number */ z) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__int(Property.f_Z__org_pepstock_charba_client_options_Grid_Property, z);
 }
 /** @override @return {number} */
 m_getZ__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_Z__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getZ__());
 }
 
 m_setTickBorderDash__int(/** number */ tickBorderDash) {
  this.m_setArrayValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_TICK_BORDER_DASH__org_pepstock_charba_client_options_Grid_Property, ArrayInteger_$Overlay.m_fromOrNull__arrayOf_int(/**@type {!Array<number>}*/ ($Arrays.$init([tickBorderDash], $int))));
 }
 /** @return {List<Integer>} */
 m_getTickBorderDash__() {
  if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_TICK_BORDER_DASH__org_pepstock_charba_client_options_Grid_Property)) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_TICK_BORDER_DASH__org_pepstock_charba_client_options_Grid_Property), ArrayInteger_$Overlay));
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
  }
  return this.m_getBorderDash__();
 }
 
 m_setTickBorderDashOffset__double(/** number */ tickBorderDashOffset) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_TICK_BORDER_DASH_OFFSET__org_pepstock_charba_client_options_Grid_Property, tickBorderDashOffset);
 }
 /** @override @return {number} */
 m_getTickBorderDashOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_TICK_BORDER_DASH_OFFSET__org_pepstock_charba_client_options_Grid_Property, this.m_getDefaultBorderDashOffset___$pp_org_pepstock_charba_client_options());
 }
 
 m_setTickColor__arrayOf_org_pepstock_charba_client_colors_IsColor(/** Array<IsColor> */ color) {
  this.m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_colors_IsColor(Property.f_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property, color);
 }
 
 m_setTickColor__arrayOf_java_lang_String(/** Array<?string> */ color) {
  this.m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(Property.f_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property, color);
 }
 /** @override @return {?string} */
 m_getTickColorAsString__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType) || !this.m_has__org_pepstock_charba_client_commons_Key(Property.f_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getTickColorAsString__());
  } else {
   return /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getTickColorAsString__();
  }
 }
 /** @return {List<?string>} */
 m_getTickColorsAsString__() {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(Property.f_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType, type) || !this.m_has__org_pepstock_charba_client_commons_Key(Property.f_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property)) {
   return /**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object(/**@type {!Array<?string>}*/ ($Arrays.$init([this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getTickColorAsString__())], j_l_String))));
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_ARRAY__org_pepstock_charba_client_commons_ObjectType, type)) {
   let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_TICK_COLOR__org_pepstock_charba_client_options_Grid_Property), ArrayString_$Overlay));
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
  }
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @return {List<IsColor>} */
 m_getTickColor__() {
  return ColorBuilder.m_parse__java_util_List(this.m_getTickColorsAsString__());
 }
 
 m_setTickWidth__arrayOf_int(/** Array<number> */ tickWidth) {
  this.m_setValueOrArrayAndAddToParent__org_pepstock_charba_client_commons_Key__arrayOf_int(Property.f_TICK_WIDTH__org_pepstock_charba_client_options_Grid_Property, tickWidth);
 }
 /** @override @return {number} */
 m_getTickWidth__() {
  let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__int(Property.f_TICK_WIDTH__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getTickWidth__());
  return Array_$Overlay.m_isEmpty__$devirt__org_pepstock_charba_client_commons_Array(array) ? /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getTickWidth__() : ArrayInteger_$Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayInteger__int(array, 0);
 }
 /** @return {List<Integer>} */
 m_getTicksWidth__() {
  let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__int(Property.f_TICK_WIDTH__org_pepstock_charba_client_options_Grid_Property, /**@type {IsDefaultGrid}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultGrid)).m_getTickWidth__());
  return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
 }
 
 static $clinit() {
  Grid.$clinit = () =>{};
  Grid.$loadModules();
  AbstractScaleLines.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Grid;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Array_$Overlay = goog.module.get('org.pepstock.charba.client.commons.Array.$Overlay$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Grid.Property$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $int = goog.module.get('vmbootstrap.primitives.$int$impl');
 }
}
IsDefaultGrid.$markImplementor(Grid);
$Util.$setClassMetadata(Grid, "org.pepstock.charba.client.options.Grid");

exports = Grid;

//# sourceMappingURL=Grid.js.map
