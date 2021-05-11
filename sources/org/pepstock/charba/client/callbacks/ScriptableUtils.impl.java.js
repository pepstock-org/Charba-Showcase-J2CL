goog.module('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IsChart = goog.forwardDeclare('org.pepstock.charba.client.IsChart$impl');
let AbstractDatasetContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.AbstractDatasetContext$impl');
let ChartContext = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ChartContext$impl');
let Scriptable = goog.forwardDeclare('org.pepstock.charba.client.callbacks.Scriptable$impl');
let Gradient = goog.forwardDeclare('org.pepstock.charba.client.colors.Gradient$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let Pattern = goog.forwardDeclare('org.pepstock.charba.client.colors.Pattern$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let DatasetCanvasObjectFactory = goog.forwardDeclare('org.pepstock.charba.client.data.DatasetCanvasObjectFactory$impl');
let IsDefaultFont = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultFont$impl');
let IsDefaultPadding = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultPadding$impl');
let $Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay$impl');
let CanvasPatternItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay$impl');
let FontItem = goog.forwardDeclare('org.pepstock.charba.client.items.FontItem$impl');
let PaddingItem = goog.forwardDeclare('org.pepstock.charba.client.items.PaddingItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class ScriptableUtils extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ScriptableUtils} */
 static $create__() {
  let $instance = new ScriptableUtils();
  $instance.$ctor__org_pepstock_charba_client_callbacks_ScriptableUtils__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_callbacks_ScriptableUtils__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {boolean} */
 static m_isContextConsistent__org_pepstock_charba_client_callbacks_ChartContext(/** ChartContext */ context) {
  ScriptableUtils.$clinit();
  return !$Equality.$same(context, null) && context.m_isConsistent__();
 }
 /** @return {IsChart} */
 static m_retrieveChart__org_pepstock_charba_client_callbacks_ChartContext(/** ChartContext */ context) {
  ScriptableUtils.$clinit();
  if (ScriptableUtils.m_isContextConsistent__org_pepstock_charba_client_callbacks_ChartContext(context)) {
   return context.m_getChart__();
  }
  return null;
 }
 /** @template C @return {PaddingItem} */
 static m_getOptionValueAsPadding__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_defaults_IsDefaultPadding(/** C */ context, /** Scriptable<PaddingItem, C> */ callback, /** IsDefaultPadding */ defaultValue) {
  ScriptableUtils.$clinit();
  return /**@type {PaddingItem}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(context, callback, !$Equality.$same(defaultValue, null) ? defaultValue.m_create__() : ScriptableUtils.f_DEFAULT_PADDING_FOR_CALLBACK__org_pepstock_charba_client_callbacks_ScriptableUtils_.m_create__()), PaddingItem));
 }
 /** @template C @return {FontItem} */
 static m_getOptionValueAsFont__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_defaults_IsDefaultFont(/** C */ context, /** Scriptable<FontItem, C> */ callback, /** IsDefaultFont */ defaultValue) {
  ScriptableUtils.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(defaultValue, "Default font item");
  return /**@type {FontItem}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(context, callback, defaultValue.m_create__()), FontItem));
 }
 /** @template T, C @return {T} */
 static m_getOptionValueAsString__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(/** C */ context, /** Scriptable<T, C> */ callback) {
  ScriptableUtils.$clinit();
  return ScriptableUtils.m_getOptionValueAsString__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_Key(context, callback, null);
 }
 /** @template T, C @return {T} */
 static m_getOptionValueAsString__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_Key(/** C */ context, /** Scriptable<T, C> */ callback, /** T */ defaultValue) {
  ScriptableUtils.$clinit();
  if (ScriptableUtils.m_isContextConsistent__org_pepstock_charba_client_callbacks_ChartContext(context) && !$Equality.$same(callback, null)) {
   let result = /**@type {T}*/ ($Casts.$to(callback.m_invoke__org_pepstock_charba_client_callbacks_ChartContext(context), Key));
   if (!$Equality.$same(result, null)) {
    return result;
   }
  }
  return defaultValue;
 }
 /** @template T, C @return {T} */
 static m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(/** C */ context, /** Scriptable<T, C> */ callback) {
  ScriptableUtils.$clinit();
  return ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(context, callback, null);
 }
 /** @template T, C @return {T} */
 static m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(/** C */ context, /** Scriptable<T, C> */ callback, /** T */ defaultValue) {
  ScriptableUtils.$clinit();
  if (ScriptableUtils.m_isContextConsistent__org_pepstock_charba_client_callbacks_ChartContext(context) && !$Equality.$same(callback, null)) {
   let result = callback.m_invoke__org_pepstock_charba_client_callbacks_ChartContext(context);
   if (!$Equality.$same(result, null)) {
    return result;
   }
  }
  return defaultValue;
 }
 /** @template C @return {*} */
 static m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(/** C */ context, /** Scriptable<?, C> */ callback, /** ?string */ defaultValue) {
  ScriptableUtils.$clinit();
  return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String__boolean(context, callback, defaultValue, true);
 }
 /** @template C @return {*} */
 static m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String__boolean(/** C */ context, /** Scriptable<?, C> */ callback, /** ?string */ defaultValue, /** boolean */ hasPattern) {
  ScriptableUtils.$clinit();
  if (ScriptableUtils.m_isContextConsistent__org_pepstock_charba_client_callbacks_ChartContext(context) && !$Equality.$same(callback, null)) {
   let result = callback.m_invoke__org_pepstock_charba_client_callbacks_ChartContext(context);
   return ScriptableUtils.m_handleCallbackResultAsColor__org_pepstock_charba_client_callbacks_ChartContext__java_lang_Object__java_lang_String__boolean(context, result, defaultValue, hasPattern);
  }
  return defaultValue;
 }
 /** @template C @return {*} */
 static m_handleCallbackResultAsColor__org_pepstock_charba_client_callbacks_ChartContext__java_lang_Object__java_lang_String__boolean(/** C */ context, /** * */ result, /** ?string */ defaultValue, /** boolean */ hasPattern) {
  ScriptableUtils.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(context, "Context argument");
  let checkedResult = ScriptableUtils.m_doHandleCallbackResultAsColor__org_pepstock_charba_client_callbacks_ChartContext__java_lang_Object__java_lang_String__boolean(context, result, defaultValue, hasPattern);
  if (Gradient.$isInstance(result) && AbstractDatasetContext.$isInstance(context)) {
   let datasetContext = /**@type {AbstractDatasetContext}*/ ($Casts.$to(context, AbstractDatasetContext));
   let gradient = /**@type {Gradient}*/ ($Casts.$to(result, Gradient));
   return DatasetCanvasObjectFactory.m_get__().m_createGradient__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Gradient__int__int(/**@type {ChartContext}*/ (context).m_getChart__(), gradient, datasetContext.m_getDatasetIndex__(), datasetContext.m_getDataIndex__());
  }
  return checkedResult;
 }
 /** @return {*} */
 static m_doHandleCallbackResultAsColor__org_pepstock_charba_client_callbacks_ChartContext__java_lang_Object__java_lang_String__boolean(/** ChartContext */ context, /** * */ result, /** ?string */ defaultValue, /** boolean */ hasPattern) {
  if (!$Equality.$same(context, null) && IsChart.m_isValid__org_pepstock_charba_client_IsChart(context.m_getChart__()) && !$Equality.$same(result, null)) {
   let chart = context.m_getChart__();
   if (IsColor.$isInstance(result)) {
    let color = /**@type {IsColor}*/ ($Casts.$to(result, IsColor));
    if (IsColor.m_isConsistent__org_pepstock_charba_client_colors_IsColor(color)) {
     return color.m_toRGBA__();
    }
   } else if (j_l_String.$isInstance(result)) {
    return result;
   } else if (Pattern.$isInstance(result) && hasPattern) {
    let pattern = /**@type {Pattern}*/ ($Casts.$to(result, Pattern));
    return DatasetCanvasObjectFactory.m_get__().m_createPattern__org_pepstock_charba_client_IsChart__org_pepstock_charba_client_colors_Pattern(chart, pattern);
   } else if (Gradient.$isInstance(result) || $Overlay.$isInstance(result)) {
    return result;
   } else if (CanvasPatternItem_$Overlay.$isInstance(result) && hasPattern) {
    return result;
   } else if (hasPattern) {
    return $Objects.m_toString__java_lang_Object(result);
   }
  }
  return defaultValue;
 }
 
 static $clinit() {
  ScriptableUtils.$clinit = () =>{};
  ScriptableUtils.$loadModules();
  j_l_Object.$clinit();
  ScriptableUtils.f_DEFAULT_PADDING_FOR_CALLBACK__org_pepstock_charba_client_callbacks_ScriptableUtils_ = PaddingItem.$create__int(0);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScriptableUtils;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsChart = goog.module.get('org.pepstock.charba.client.IsChart$impl');
  AbstractDatasetContext = goog.module.get('org.pepstock.charba.client.callbacks.AbstractDatasetContext$impl');
  Gradient = goog.module.get('org.pepstock.charba.client.colors.Gradient$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  Pattern = goog.module.get('org.pepstock.charba.client.colors.Pattern$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  DatasetCanvasObjectFactory = goog.module.get('org.pepstock.charba.client.data.DatasetCanvasObjectFactory$impl');
  $Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay$impl');
  CanvasPatternItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay$impl');
  FontItem = goog.module.get('org.pepstock.charba.client.items.FontItem$impl');
  PaddingItem = goog.module.get('org.pepstock.charba.client.items.PaddingItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {PaddingItem}*/
ScriptableUtils.f_DEFAULT_PADDING_FOR_CALLBACK__org_pepstock_charba_client_callbacks_ScriptableUtils_;
$Util.$setClassMetadata(ScriptableUtils, "org.pepstock.charba.client.callbacks.ScriptableUtils");

exports = ScriptableUtils;

//# sourceMappingURL=ScriptableUtils.js.map
