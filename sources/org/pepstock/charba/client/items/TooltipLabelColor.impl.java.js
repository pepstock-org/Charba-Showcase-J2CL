goog.module('org.pepstock.charba.client.items.TooltipLabelColor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeObjectContainer = goog.require('org.pepstock.charba.client.commons.NativeObjectContainer$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Defaults = goog.forwardDeclare('org.pepstock.charba.client.Defaults$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let GradientBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.GradientBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let PatternBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.PatternBuilder$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let DatasetCanvasObjectFactory = goog.forwardDeclare('org.pepstock.charba.client.data.DatasetCanvasObjectFactory$impl');
let JsItemsHelper = goog.forwardDeclare('org.pepstock.charba.client.items.JsItemsHelper$impl');
let TooltipItem = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipItem$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelColor.Property$impl');
let TooltipLabelColorFactory = goog.forwardDeclare('org.pepstock.charba.client.items.TooltipLabelColor.TooltipLabelColorFactory$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TooltipLabelColor extends NativeObjectContainer {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'TooltipLabelColor()'.
 /** @return {!TooltipLabelColor} */
 static $create__() {
  TooltipLabelColor.$clinit();
  let $instance = new TooltipLabelColor();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipLabelColor__();
  return $instance;
 }
 //Initialization from constructor 'TooltipLabelColor()'.
 
 $ctor__org_pepstock_charba_client_items_TooltipLabelColor__() {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__();
 }
 //Factory method corresponding to constructor 'TooltipLabelColor(NativeObject)'.
 /** @return {!TooltipLabelColor} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  TooltipLabelColor.$clinit();
  let $instance = new TooltipLabelColor();
  $instance.$ctor__org_pepstock_charba_client_items_TooltipLabelColor__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'TooltipLabelColor(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_TooltipLabelColor__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_NativeObjectContainer__org_pepstock_charba_client_commons_NativeObject(nativeObject);
 }
 
 m_setBackgroundColor__java_lang_String_$pp_org_pepstock_charba_client_items(/** ?string */ backgroundColor) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property, backgroundColor);
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ backgroundColor) {
  this.m_setBackgroundColor__java_lang_String_$pp_org_pepstock_charba_client_items(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(backgroundColor));
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_dom_elements_CanvasPatternItem_$pp_org_pepstock_charba_client_items(/** CanvasPattern */ pattern) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property, pattern);
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_items_TooltipItem__org_pepstock_charba_client_colors_Pattern(/** TooltipItem */ tooltipItem, /** Pattern */ pattern) {
  if (!$Equality.$same(pattern, null)) {
   if (!$Equality.$same(pattern.m_getCanvasPattern__(), null)) {
    this.m_setBackgroundColor__org_pepstock_charba_client_dom_elements_CanvasPatternItem_$pp_org_pepstock_charba_client_items(pattern.m_getCanvasPattern__());
   } else {
    this.m_setBackgroundColor__org_pepstock_charba_client_dom_elements_CanvasPatternItem_$pp_org_pepstock_charba_client_items(DatasetCanvasObjectFactory.m_get__().m_createPattern__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Pattern(tooltipItem.m_getChart__(), pattern));
   }
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property);
  }
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_dom_elements_CanvasGradientItem_$pp_org_pepstock_charba_client_items(/** CanvasGradient */ gradient) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property, gradient);
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_items_TooltipItem__org_pepstock_charba_client_colors_Gradient(/** TooltipItem */ tooltipItem, /** Gradient */ gradient) {
  if (!$Equality.$same(gradient, null) && !$Equality.$same(tooltipItem, null)) {
   let datasetIndex = Math.max(0, tooltipItem.m_getDatasetIndex__());
   let index = Math.max(0, tooltipItem.m_getDataIndex__());
   this.m_setBackgroundColor__org_pepstock_charba_client_dom_elements_CanvasGradientItem_$pp_org_pepstock_charba_client_items(DatasetCanvasObjectFactory.m_get__().m_createGradient__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(tooltipItem.m_getChart__(), gradient, datasetIndex, index));
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property);
  }
 }
 /** @return {boolean} */
 m_isBackgroundColorAsColor__() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {boolean} */
 m_isBackgroundColorAsGradient__() {
  return JsItemsHelper.m_get__().m_isCanvasGradient__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_items(this.m_nativeObject__(), Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property);
 }
 /** @return {boolean} */
 m_isBackgroundColorAsPattern__() {
  return JsItemsHelper.m_get__().m_isCanvasPattern__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_items(this.m_nativeObject__(), Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property);
 }
 /** @return {?string} */
 m_getBackgroundColorAsString___$p_org_pepstock_charba_client_items_TooltipLabelColor() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property, Defaults.m_get__().m_getGlobal__().m_getTooltips__().m_getBackgroundColorAsString__());
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBackgroundColorAsString___$p_org_pepstock_charba_client_items_TooltipLabelColor());
 }
 /** @return {Gradient} */
 m_getBackgroundColorAsGradient__() {
  return GradientBuilder.m_retrieve__org_pepstock_charba_client_dom_elements_CanvasGradientItem(this.m_getBackgroundColorAsCanvasGradient__());
 }
 /** @return {CanvasGradient} */
 m_getBackgroundColorAsCanvasGradient__() {
  if (this.m_isBackgroundColorAsGradient__()) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property, /**@type {CanvasGradient}*/ (null));
  }
  return null;
 }
 /** @return {Pattern} */
 m_getBackgroundColorAsPattern__() {
  return PatternBuilder.m_retrieve__org_pepstock_charba_client_dom_elements_CanvasPatternItem(this.m_getBackgroundColorAsCanvasPattern__());
 }
 /** @return {CanvasPattern} */
 m_getBackgroundColorAsCanvasPattern__() {
  if (this.m_isBackgroundColorAsPattern__()) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasPatternItem(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property, /**@type {CanvasPattern}*/ (null));
  }
  return null;
 }
 /** @return {boolean} */
 m_isBorderColorAsColor__() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_BORDER_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {boolean} */
 m_isBorderColorAsGradient__() {
  return JsItemsHelper.m_get__().m_isCanvasGradient__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_commons_Key_$pp_org_pepstock_charba_client_items(this.m_nativeObject__(), Property.f_BORDER_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property);
 }
 
 m_setBorderColor__java_lang_String_$pp_org_pepstock_charba_client_items(/** ?string */ borderColor) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property, borderColor);
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ borderColor) {
  this.m_setBorderColor__java_lang_String_$pp_org_pepstock_charba_client_items(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(borderColor));
 }
 
 m_setBorderColor__org_pepstock_charba_client_dom_elements_CanvasGradientItem_$pp_org_pepstock_charba_client_items(/** CanvasGradient */ gradient) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(Property.f_BORDER_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property, gradient);
 }
 
 m_setBorderColor__org_pepstock_charba_client_items_TooltipItem__org_pepstock_charba_client_colors_Gradient(/** TooltipItem */ tooltipItem, /** Gradient */ gradient) {
  if (!$Equality.$same(gradient, null) && !$Equality.$same(tooltipItem, null)) {
   let datasetIndex = Math.max(0, tooltipItem.m_getDatasetIndex__());
   let index = Math.max(0, tooltipItem.m_getDataIndex__());
   this.m_setBorderColor__org_pepstock_charba_client_dom_elements_CanvasGradientItem_$pp_org_pepstock_charba_client_items(DatasetCanvasObjectFactory.m_get__().m_createGradient__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(tooltipItem.m_getChart__(), gradient, datasetIndex, index));
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_BORDER_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property);
  }
 }
 /** @return {?string} */
 m_getBorderColorAsString___$p_org_pepstock_charba_client_items_TooltipLabelColor() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property, Defaults.m_get__().m_getGlobal__().m_getTooltips__().m_getBorderColorAsString__());
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getBorderColorAsString___$p_org_pepstock_charba_client_items_TooltipLabelColor());
 }
 /** @return {Gradient} */
 m_getBorderColorAsGradient__() {
  return GradientBuilder.m_retrieve__org_pepstock_charba_client_dom_elements_CanvasGradientItem(this.m_getBackgroundColorAsCanvasGradient__());
 }
 /** @return {CanvasGradient} */
 m_getBorderColorAsCanvasGradient__() {
  if (this.m_isBorderColorAsGradient__()) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_CanvasGradientItem(Property.f_BORDER_COLOR__org_pepstock_charba_client_items_TooltipLabelColor_Property, /**@type {CanvasGradient}*/ (null));
  }
  return null;
 }
 
 m_setBorderWidth__int(/** number */ borderWidth) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_items_TooltipLabelColor_Property, Checker.m_positiveOrZero__int(borderWidth));
 }
 /** @return {number} */
 m_getBorderWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_items_TooltipLabelColor_Property, Defaults.m_get__().m_getGlobal__().m_getTooltips__().m_getBorderWidth__());
 }
 
 m_setBorderRadius__int(/** number */ borderRadius) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_RADIUS__org_pepstock_charba_client_items_TooltipLabelColor_Property, Checker.m_positiveOrZero__int(borderRadius));
 }
 /** @return {number} */
 m_getBorderRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_RADIUS__org_pepstock_charba_client_items_TooltipLabelColor_Property, 0);
 }
 
 m_setBorderDash__arrayOf_int(/** Array<number> */ borderDash) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_BORDER_DASH__org_pepstock_charba_client_items_TooltipLabelColor_Property, ArrayInteger_$Overlay.m_fromOrNull__arrayOf_int(borderDash));
 }
 /** @return {List<Integer>} */
 m_getBorderDash__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_DASH__org_pepstock_charba_client_items_TooltipLabelColor_Property), ArrayInteger_$Overlay));
  return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
 }
 /** @return {?} */
 m_nativeObject__() {
  return this.m_getNativeObject__();
 }
 /** @return {TooltipLabelColorFactory} */
 static get f_FACTORY__org_pepstock_charba_client_items_TooltipLabelColor() {
  return (TooltipLabelColor.$clinit(), TooltipLabelColor.$static_FACTORY__org_pepstock_charba_client_items_TooltipLabelColor);
 }
 
 static $clinit() {
  TooltipLabelColor.$clinit = () =>{};
  TooltipLabelColor.$loadModules();
  NativeObjectContainer.$clinit();
  TooltipLabelColor.$static_FACTORY__org_pepstock_charba_client_items_TooltipLabelColor = TooltipLabelColorFactory.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipLabelColor;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Defaults = goog.module.get('org.pepstock.charba.client.Defaults$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  GradientBuilder = goog.module.get('org.pepstock.charba.client.colors.GradientBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  PatternBuilder = goog.module.get('org.pepstock.charba.client.colors.PatternBuilder$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  DatasetCanvasObjectFactory = goog.module.get('org.pepstock.charba.client.data.DatasetCanvasObjectFactory$impl');
  JsItemsHelper = goog.module.get('org.pepstock.charba.client.items.JsItemsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.TooltipLabelColor.Property$impl');
  TooltipLabelColorFactory = goog.module.get('org.pepstock.charba.client.items.TooltipLabelColor.TooltipLabelColorFactory$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {TooltipLabelColorFactory}*/
TooltipLabelColor.$static_FACTORY__org_pepstock_charba_client_items_TooltipLabelColor;
$Util.$setClassMetadata(TooltipLabelColor, "org.pepstock.charba.client.items.TooltipLabelColor");

exports = TooltipLabelColor;

//# sourceMappingURL=TooltipLabelColor.js.map
