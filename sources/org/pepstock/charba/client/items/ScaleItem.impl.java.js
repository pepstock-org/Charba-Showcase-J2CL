goog.module('org.pepstock.charba.client.items.ScaleItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseBoxNodeItem = goog.require('org.pepstock.charba.client.items.BaseBoxNodeItem$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Date = goog.forwardDeclare('java.util.Date$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CallbacksEnvelop = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');
let Array_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.Array.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayMixedObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayMixedObject.$Overlay$impl');
let ArrayObject_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let ImmutableDate = goog.forwardDeclare('org.pepstock.charba.client.commons.ImmutableDate$impl');
let IsEnvelop = goog.forwardDeclare('org.pepstock.charba.client.commons.IsEnvelop$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let ControllersEnvelop = goog.forwardDeclare('org.pepstock.charba.client.controllers.ControllersEnvelop$impl');
let AxisKind = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisKind$impl');
let AxisType = goog.forwardDeclare('org.pepstock.charba.client.enums.AxisType$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.enums.Position$impl');
let ScaleDataType = goog.forwardDeclare('org.pepstock.charba.client.enums.ScaleDataType$impl');
let JsItemsHelper = goog.forwardDeclare('org.pepstock.charba.client.items.JsItemsHelper$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleItem.Property$impl');
let ScaleTickItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleTickItem$impl');
let ScaleValueItem = goog.forwardDeclare('org.pepstock.charba.client.items.ScaleValueItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let IsScaleId = goog.forwardDeclare('org.pepstock.charba.client.options.IsScaleId$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class ScaleItem extends BaseBoxNodeItem {
 /** @protected */
 constructor() {
  super();
  /**@type {IsScaleId}*/
  this.f_scaleId__org_pepstock_charba_client_items_ScaleItem_;
 }
 //Factory method corresponding to constructor 'ScaleItem(IsScaleId, NativeObject)'.
 /** @return {!ScaleItem} */
 static $create__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_commons_NativeObject(/** IsScaleId */ scaleId, /** ? */ nativeObject) {
  ScaleItem.$clinit();
  let $instance = new ScaleItem();
  $instance.$ctor__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_commons_NativeObject(scaleId, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'ScaleItem(IsScaleId, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_options_IsScaleId__org_pepstock_charba_client_commons_NativeObject(/** IsScaleId */ scaleId, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_items_BaseBoxNodeItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  IsScaleId.m_checkIfValid__org_pepstock_charba_client_options_IsScaleId(scaleId);
  this.f_scaleId__org_pepstock_charba_client_items_ScaleItem_ = scaleId;
 }
 //Factory method corresponding to constructor 'ScaleItem(ControllersEnvelop)'.
 /** @return {!ScaleItem} */
 static $create__org_pepstock_charba_client_controllers_ControllersEnvelop(/** ControllersEnvelop<?> */ envelop) {
  ScaleItem.$clinit();
  let $instance = new ScaleItem();
  $instance.$ctor__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_controllers_ControllersEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'ScaleItem(ControllersEnvelop)'.
 
 $ctor__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_controllers_ControllersEnvelop(/** ControllersEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {ControllersEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), ControllersEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'ScaleItem(CallbacksEnvelop)'.
 /** @return {!ScaleItem} */
 static $create__org_pepstock_charba_client_callbacks_CallbacksEnvelop(/** CallbacksEnvelop<?> */ envelop) {
  ScaleItem.$clinit();
  let $instance = new ScaleItem();
  $instance.$ctor__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_callbacks_CallbacksEnvelop(envelop);
  return $instance;
 }
 //Initialization from constructor 'ScaleItem(CallbacksEnvelop)'.
 
 $ctor__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_callbacks_CallbacksEnvelop(/** CallbacksEnvelop<?> */ envelop) {
  this.$ctor__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_commons_NativeObject(/**@type {?}*/ (/**@type {CallbacksEnvelop<?>}*/ ($Casts.$to(IsEnvelop.m_checkAndGetIfValid__org_pepstock_charba_client_commons_IsEnvelop(envelop), CallbacksEnvelop)).m_getContent__()));
 }
 //Factory method corresponding to constructor 'ScaleItem(NativeObject)'.
 /** @return {!ScaleItem} */
 static $create__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  ScaleItem.$clinit();
  let $instance = new ScaleItem();
  $instance.$ctor__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  return $instance;
 }
 //Initialization from constructor 'ScaleItem(NativeObject)'.
 
 $ctor__org_pepstock_charba_client_items_ScaleItem__org_pepstock_charba_client_commons_NativeObject(/** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_items_BaseBoxNodeItem__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.f_scaleId__org_pepstock_charba_client_items_ScaleItem_ = null;
 }
 /** @return {IsScaleId} */
 m_getId__() {
  if ($Equality.$same(this.f_scaleId__org_pepstock_charba_client_items_ScaleItem_, null)) {
   let storedId = this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_ID__org_pepstock_charba_client_items_ScaleItem_Property, this.m_getType__().m_getDefaultScaleId__().m_value__());
   this.f_scaleId__org_pepstock_charba_client_items_ScaleItem_ = IsScaleId.m_create__java_lang_String(storedId);
  }
  return this.f_scaleId__org_pepstock_charba_client_items_ScaleItem_;
 }
 /** @return {number} */
 m_getCharbaId__() {
  if (this.m_has__org_pepstock_charba_client_commons_Key(Property.f_OPTIONS__org_pepstock_charba_client_items_ScaleItem_Property)) {
   let object = this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_OPTIONS__org_pepstock_charba_client_items_ScaleItem_Property);
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType, JsHelper.m_get__().m_typeOf__java_lang_Object__java_lang_String(object, Property.f_CHARBA_ID__org_pepstock_charba_client_items_ScaleItem_Property.m_value__()))) {
    return JsHelper.m_get__().m_propertyAsInt__org_pepstock_charba_client_commons_NativeObject__java_lang_String(object, Property.f_CHARBA_ID__org_pepstock_charba_client_items_ScaleItem_Property.m_value__());
   }
  }
  return Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {AxisKind} */
 m_getAxis__() {
  return /**@type {AxisKind}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_AXIS__org_pepstock_charba_client_items_ScaleItem_Property, AxisKind.m_values__(), this.m_getType__().m_getDefaultScaleId__().m_getAxisKind__()), AxisKind));
 }
 /** @return {AxisType} */
 m_getType__() {
  return /**@type {AxisType}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TYPE__org_pepstock_charba_client_items_ScaleItem_Property, AxisType.m_values__(), AxisType.f_CATEGORY__org_pepstock_charba_client_enums_AxisType), AxisType));
 }
 /** @return {number} */
 m_getMax__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(Property.f_MAX__org_pepstock_charba_client_items_ScaleItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getMin__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__double(Property.f_MIN__org_pepstock_charba_client_items_ScaleItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {?string} */
 m_getMaxAsString__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_MAX__org_pepstock_charba_client_items_ScaleItem_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {?string} */
 m_getMinAsString__() {
  return this.m_getValueForMultipleKeyTypes__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_MIN__org_pepstock_charba_client_items_ScaleItem_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {Date} */
 m_getMaxAsDate__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(AxisType.f_TIME__org_pepstock_charba_client_enums_AxisType, this.m_getType__()) || $Objects.m_equals__java_lang_Object__java_lang_Object(AxisType.f_TIMESERIES__org_pepstock_charba_client_enums_AxisType, this.m_getType__())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_MAX__org_pepstock_charba_client_items_ScaleItem_Property, /**@type {Date}*/ (null));
  }
  return null;
 }
 /** @return {Date} */
 m_getMinAsDate__() {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(AxisType.f_TIME__org_pepstock_charba_client_enums_AxisType, this.m_getType__()) || $Objects.m_equals__java_lang_Object__java_lang_Object(AxisType.f_TIMESERIES__org_pepstock_charba_client_enums_AxisType, this.m_getType__())) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_util_Date(Property.f_MIN__org_pepstock_charba_client_items_ScaleItem_Property, /**@type {Date}*/ (null));
  }
  return null;
 }
 /** @return {List<ScaleTickItem>} */
 m_getTicks__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_TICKS__org_pepstock_charba_client_items_ScaleItem_Property), ArrayObject_$Overlay));
  return /**@type {List<ScaleTickItem>}*/ (ArrayListHelper.m_unmodifiableList__org_pepstock_charba_client_commons_ArrayObject__org_pepstock_charba_client_commons_NativeObjectContainerFactory(array, ScaleTickItem.f_FACTORY__org_pepstock_charba_client_items_ScaleTickItem));
 }
 /** @return {number} */
 m_getLabelRotation__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_LABEL_ROTATION__org_pepstock_charba_client_items_ScaleItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getStart__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_START__org_pepstock_charba_client_items_ScaleItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getEnd__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_END__org_pepstock_charba_client_items_ScaleItem_Property, Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getXCenter__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_X_CENTER__org_pepstock_charba_client_items_ScaleItem_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getYCenter__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_Y_CENTER__org_pepstock_charba_client_items_ScaleItem_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {number} */
 m_getDrawingArea__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_DRAWING_AREA__org_pepstock_charba_client_items_ScaleItem_Property, Undefined.f_INTEGER__org_pepstock_charba_client_items_Undefined);
 }
 /** @return {List<?string>} */
 m_getPointLabels__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_POINT_LABELS__org_pepstock_charba_client_items_ScaleItem_Property), ArrayMixedObject_$Overlay));
  if (!$Equality.$same(array, null) && !Array_$Overlay.m_isEmpty__$devirt__org_pepstock_charba_client_commons_Array(array)) {
   let result = /**@type {!LinkedList<?string>}*/ (LinkedList.$create__());
   for (let i = 0; i < array.length; i = i + 1 | 0) {
    result.add(this.m_getPointLabelAsString__java_lang_Object_$p_org_pepstock_charba_client_items_ScaleItem(ArrayMixedObject_$Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayMixedObject__int(array, i)));
   }
   return /**@type {List<?string>}*/ (Collections.m_unmodifiableList__java_util_List(result));
  }
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @return {?string} */
 m_getPointLabelAsString__java_lang_Object_$p_org_pepstock_charba_client_items_ScaleItem(/** * */ element) {
  if (Array.isArray(element)) {
   let internalArray = /**@type {Array}*/ ($Casts.$to(element, ArrayString_$Overlay));
   let result = StringBuilder.$create__();
   for (let i = 0; i < internalArray.length; i = i + 1 | 0) {
    if (i > 0) {
     result.m_append__java_lang_String(Constants.f_LINE_SEPARATOR__org_pepstock_charba_client_commons_Constants);
    }
    result.m_append__java_lang_String(ArrayString_$Overlay.m_get__$devirt__org_pepstock_charba_client_commons_ArrayString__int(internalArray, i));
   }
   return result.toString();
  }
  return /**@type {?string}*/ ($Casts.$to(element, j_l_String));
 }
 /** @return {?string} */
 m_getPositionAsString__() {
  let value = this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_POSITION__org_pepstock_charba_client_items_ScaleItem_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
  if (!$Equality.$same(value, null) && !Key.m_hasKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String(Position.m_values__(), value)) {
   return value;
  }
  return super.m_getPosition__().m_value__();
 }
 /** @return {ScaleValueItem} */
 m_getValueAtEvent__org_pepstock_charba_client_dom_BaseNativeEvent(/** Object */ event) {
  if (!$Equality.$same(event, null)) {
   let position = $Objects.m_equals__java_lang_Object__java_lang_Object(AxisKind.f_X__org_pepstock_charba_client_enums_AxisKind, this.m_getAxis__()) ? event.layerX : event.layerY;
   return this.m_getValueAtPixel__double(position);
  }
  return null;
 }
 /** @return {ScaleValueItem} */
 m_getValueAtPixel__double(/** number */ position) {
  if (Undefined.m_isNot__double(position)) {
   let value = this.m_getValueForPixel__double(position);
   let label = this.m_getLabelForValue__double(value);
   let /** ScaleValueItem */ result;
   if ($Objects.m_equals__java_lang_Object__java_lang_Object(ScaleDataType.f_NUMBER__org_pepstock_charba_client_enums_ScaleDataType, this.m_getType__().m_getDataType__())) {
    result = ScaleValueItem.$create__double__java_lang_String(value, label);
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ScaleDataType.f_DATE__org_pepstock_charba_client_enums_ScaleDataType, this.m_getType__().m_getDataType__())) {
    let dateValue = Undefined.m_is__double(value) ? null : ImmutableDate.$create__long($Primitives.$narrowDoubleToLong(value));
    result = ScaleValueItem.$create__org_pepstock_charba_client_commons_ImmutableDate__java_lang_String(dateValue, label);
   } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ScaleDataType.f_STRING__org_pepstock_charba_client_enums_ScaleDataType, this.m_getType__().m_getDataType__())) {
    result = ScaleValueItem.$create__java_lang_String__java_lang_String(label, label);
   } else {
    result = null;
   }
   return result;
  }
  return null;
 }
 /** @return {number} */
 m_getDecimalForPixel__double(/** number */ pixel) {
  return JsItemsHelper.m_get__().m_getDecimalForPixel__org_pepstock_charba_client_items_ScaleItem__double_$pp_org_pepstock_charba_client_items(this, pixel);
 }
 /** @return {number} */
 m_getPixelForDecimal__double(/** number */ decimal) {
  return JsItemsHelper.m_get__().m_getPixelForDecimal__org_pepstock_charba_client_items_ScaleItem__double_$pp_org_pepstock_charba_client_items(this, decimal);
 }
 /** @return {number} */
 m_getPixelForTick__double(/** number */ index) {
  return JsItemsHelper.m_get__().m_getPixelForTick__org_pepstock_charba_client_items_ScaleItem__double_$pp_org_pepstock_charba_client_items(this, index);
 }
 /** @return {?string} */
 m_getLabelForValue__double(/** number */ value) {
  return JsItemsHelper.m_get__().m_getLabelForValue__org_pepstock_charba_client_items_ScaleItem__double_$pp_org_pepstock_charba_client_items(this, value);
 }
 /** @return {number} */
 m_getPixelForStringValue__java_lang_String(/** ?string */ value) {
  return this.m_getPixelForStringValue__java_lang_String__double(value, Double.f_NaN__java_lang_Double);
 }
 /** @return {number} */
 m_getPixelForStringValue__java_lang_String__double(/** ?string */ value, /** number */ index) {
  return JsItemsHelper.m_get__().m_getPixelForStringValue__org_pepstock_charba_client_items_ScaleItem__java_lang_String__double_$pp_org_pepstock_charba_client_items(this, value, index);
 }
 /** @return {number} */
 m_getPixelForDateValue__java_util_Date(/** Date */ value) {
  return this.m_getPixelForDateValue__java_util_Date__double(value, Double.f_NaN__java_lang_Double);
 }
 /** @return {number} */
 m_getPixelForDateValue__java_util_Date__double(/** Date */ value, /** number */ index) {
  if (!$Equality.$same(value, null)) {
   return JsItemsHelper.m_get__().m_getPixelForValue__org_pepstock_charba_client_items_ScaleItem__double__double_$pp_org_pepstock_charba_client_items(this, $Primitives.$widenLongToDouble(value.m_getTime__()), index);
  }
  return Undefined.f_DOUBLE__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {number} */
 m_getPixelForValue__double(/** number */ value) {
  return this.m_getPixelForValue__double__double(value, Double.f_NaN__java_lang_Double);
 }
 /** @return {number} */
 m_getPixelForValue__double__double(/** number */ value, /** number */ index) {
  return JsItemsHelper.m_get__().m_getPixelForValue__org_pepstock_charba_client_items_ScaleItem__double__double_$pp_org_pepstock_charba_client_items(this, value, index);
 }
 /** @return {number} */
 m_getValueForPixel__double(/** number */ pixel) {
  return JsItemsHelper.m_get__().m_getValueForPixel__org_pepstock_charba_client_items_ScaleItem__double_$pp_org_pepstock_charba_client_items(this, pixel);
 }
 /** @return {number} */
 m_getBaseValue__() {
  return JsItemsHelper.m_get__().m_getBaseValue__org_pepstock_charba_client_items_ScaleItem_$pp_org_pepstock_charba_client_items(this);
 }
 /** @return {number} */
 m_getBasePixel__() {
  return JsItemsHelper.m_get__().m_getBasePixel__org_pepstock_charba_client_items_ScaleItem_$pp_org_pepstock_charba_client_items(this);
 }
 /** @return {?} */
 m_nativeObject___$pp_org_pepstock_charba_client_items() {
  return super.m_getNativeObject__();
 }
 
 static $clinit() {
  ScaleItem.$clinit = () =>{};
  ScaleItem.$loadModules();
  BaseBoxNodeItem.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScaleItem;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CallbacksEnvelop = goog.module.get('org.pepstock.charba.client.callbacks.CallbacksEnvelop$impl');
  Array_$Overlay = goog.module.get('org.pepstock.charba.client.commons.Array.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayMixedObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayMixedObject.$Overlay$impl');
  ArrayObject_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayObject.$Overlay$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  ImmutableDate = goog.module.get('org.pepstock.charba.client.commons.ImmutableDate$impl');
  IsEnvelop = goog.module.get('org.pepstock.charba.client.commons.IsEnvelop$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  ControllersEnvelop = goog.module.get('org.pepstock.charba.client.controllers.ControllersEnvelop$impl');
  AxisKind = goog.module.get('org.pepstock.charba.client.enums.AxisKind$impl');
  AxisType = goog.module.get('org.pepstock.charba.client.enums.AxisType$impl');
  Position = goog.module.get('org.pepstock.charba.client.enums.Position$impl');
  ScaleDataType = goog.module.get('org.pepstock.charba.client.enums.ScaleDataType$impl');
  JsItemsHelper = goog.module.get('org.pepstock.charba.client.items.JsItemsHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.items.ScaleItem.Property$impl');
  ScaleTickItem = goog.module.get('org.pepstock.charba.client.items.ScaleTickItem$impl');
  ScaleValueItem = goog.module.get('org.pepstock.charba.client.items.ScaleValueItem$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  IsScaleId = goog.module.get('org.pepstock.charba.client.options.IsScaleId$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(ScaleItem, "org.pepstock.charba.client.items.ScaleItem");

exports = ScaleItem;

//# sourceMappingURL=ScaleItem.js.map
