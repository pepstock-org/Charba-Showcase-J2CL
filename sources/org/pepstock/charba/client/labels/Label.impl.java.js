goog.module('org.pepstock.charba.client.labels.Label$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const IsDefaultLabel = goog.require('org.pepstock.charba.client.labels.IsDefaultLabel$impl');
const IsScriptableFontProvider = goog.require('org.pepstock.charba.client.options.IsScriptableFontProvider$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let FontCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FontCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayImage_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayImage.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Img_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let DefaultLabel = goog.forwardDeclare('org.pepstock.charba.client.labels.DefaultLabel$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.labels.Font$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.labels.Label.Property$impl');
let LabelId = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelId$impl');
let LabelsContext = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsContext$impl');
let LabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.labels.LabelsPlugin$impl');
let RenderCallback = goog.forwardDeclare('org.pepstock.charba.client.labels.callbacks.RenderCallback$impl');
let Position = goog.forwardDeclare('org.pepstock.charba.client.labels.enums.Position$impl');
let Render = goog.forwardDeclare('org.pepstock.charba.client.labels.enums.Render$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {IsDefaultLabel}
 * @implements {IsScriptableFontProvider<LabelsContext>}
 */
class Label extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_renderCallbackProxy__org_pepstock_charba_client_labels_Label_;
  /**@type {CharbaCallbackProxy<?function(?):?>}*/
  this.f_fontCallbackProxy__org_pepstock_charba_client_labels_Label_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_colorCallbackProxy__org_pepstock_charba_client_labels_Label_;
  /**@type {IsDefaultLabel}*/
  this.f_defaultOptions__org_pepstock_charba_client_labels_Label_;
  /**@type {Font}*/
  this.f_font__org_pepstock_charba_client_labels_Label_;
 }
 //Factory method corresponding to constructor 'Label()'.
 /** @return {!Label} */
 static $create__() {
  Label.$clinit();
  let $instance = new Label();
  $instance.$ctor__org_pepstock_charba_client_labels_Label__();
  return $instance;
 }
 //Initialization from constructor 'Label()'.
 
 $ctor__org_pepstock_charba_client_labels_Label__() {
  this.$ctor__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_labels_LabelId(Label.f_TEMPORARY_ID__org_pepstock_charba_client_labels_Label_);
 }
 //Factory method corresponding to constructor 'Label(String)'.
 /** @return {!Label} */
 static $create__java_lang_String(/** ?string */ id) {
  Label.$clinit();
  let $instance = new Label();
  $instance.$ctor__org_pepstock_charba_client_labels_Label__java_lang_String(id);
  return $instance;
 }
 //Initialization from constructor 'Label(String)'.
 
 $ctor__org_pepstock_charba_client_labels_Label__java_lang_String(/** ?string */ id) {
  this.$ctor__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_labels_LabelId(LabelId.m_create__java_lang_String(id));
 }
 //Factory method corresponding to constructor 'Label(LabelId)'.
 /** @return {!Label} */
 static $create__org_pepstock_charba_client_labels_LabelId(/** LabelId */ id) {
  Label.$clinit();
  let $instance = new Label();
  $instance.$ctor__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_labels_LabelId(id);
  return $instance;
 }
 //Initialization from constructor 'Label(LabelId)'.
 
 $ctor__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_labels_LabelId(/** LabelId */ id) {
  this.$ctor__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_labels_LabelId__org_pepstock_charba_client_labels_IsDefaultLabel__org_pepstock_charba_client_commons_NativeObject(id, DefaultLabel.f_INSTANCE__org_pepstock_charba_client_labels_DefaultLabel, null);
 }
 //Factory method corresponding to constructor 'Label(LabelId, IsDefaultLabel, NativeObject)'.
 /** @return {!Label} */
 static $create__org_pepstock_charba_client_labels_LabelId__org_pepstock_charba_client_labels_IsDefaultLabel__org_pepstock_charba_client_commons_NativeObject(/** LabelId */ id, /** IsDefaultLabel */ defaultOptions, /** ? */ nativeObject) {
  Label.$clinit();
  let $instance = new Label();
  $instance.$ctor__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_labels_LabelId__org_pepstock_charba_client_labels_IsDefaultLabel__org_pepstock_charba_client_commons_NativeObject(id, defaultOptions, nativeObject);
  return $instance;
 }
 //Initialization from constructor 'Label(LabelId, IsDefaultLabel, NativeObject)'.
 
 $ctor__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_labels_LabelId__org_pepstock_charba_client_labels_IsDefaultLabel__org_pepstock_charba_client_commons_NativeObject(/** LabelId */ id, /** IsDefaultLabel */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.$init___$p_org_pepstock_charba_client_labels_Label();
  this.m_setNewIncrementalId__();
  Key.m_checkIfValid__org_pepstock_charba_client_commons_Key(id);
  if (Key.m_equals__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Label.f_TEMPORARY_ID__org_pepstock_charba_client_labels_Label_, id)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ID__org_pepstock_charba_client_labels_Label_Property, LabelId.m_create__java_lang_String(this.m_getIncrementalId__()));
  } else {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ID__org_pepstock_charba_client_labels_Label_Property, id);
  }
  if ($Equality.$same(defaultOptions, null)) {
   this.f_defaultOptions__org_pepstock_charba_client_labels_Label_ = DefaultLabel.f_INSTANCE__org_pepstock_charba_client_labels_DefaultLabel;
  } else {
   this.f_defaultOptions__org_pepstock_charba_client_labels_Label_ = defaultOptions;
  }
  this.f_font__org_pepstock_charba_client_labels_Label_ = Font.$create__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(this, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getFont__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_FONT__org_pepstock_charba_client_labels_Label_Property));
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_FONT__org_pepstock_charba_client_labels_Label_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_FONT__org_pepstock_charba_client_labels_Label_Property, this.f_font__org_pepstock_charba_client_labels_Label_);
  }
  this.f_renderCallbackProxy__org_pepstock_charba_client_labels_Label_.callback = (/** ? */ context) =>{
   return this.m_onRender__org_pepstock_charba_client_labels_LabelsContext_$p_org_pepstock_charba_client_labels_Label(LabelsContext.$create__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_commons_NativeObject(this, context));
  };
  this.f_fontCallbackProxy__org_pepstock_charba_client_labels_Label_.callback = (/** ? */ context_1) =>{
   return ScriptableUtils.m_getOptionValueAsFont__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_defaults_IsDefaultFont(LabelsContext.$create__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_commons_NativeObject(this, context_1), this.m_getFontCallback__(), this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getFont__()).m_nativeObject__();
  };
  this.f_colorCallbackProxy__org_pepstock_charba_client_labels_Label_.callback = (/** ? */ context_2) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(LabelsContext.$create__org_pepstock_charba_client_labels_Label__org_pepstock_charba_client_commons_NativeObject(this, context_2), this.m_getColorCallback__(), this.m_getColorAsString__());
  };
 }
 /** @return {LabelId} */
 m_getId__() {
  return LabelId.m_create__java_lang_String(this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_ID__org_pepstock_charba_client_labels_Label_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined));
 }
 /** @override @return {Font} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_labels_Label_;
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setColor__java_lang_String(/** ?string */ color) {
  this.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<LabelsContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_labels_Label_Property, color);
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_labels_Label_Property, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getColorAsString__());
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 m_setRender__org_pepstock_charba_client_labels_enums_Render(/** Render */ render) {
  this.m_setRender__org_pepstock_charba_client_labels_callbacks_RenderCallback(/**@type {RenderCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_RENDER__org_pepstock_charba_client_labels_Label_Property, render);
 }
 /** @override @return {Render} */
 m_getRender__() {
  return /**@type {Render}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_RENDER__org_pepstock_charba_client_labels_Label_Property, Render.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getRender__()), Render));
 }
 
 m_setPrecision__int(/** number */ precision) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_PRECISION__org_pepstock_charba_client_labels_Label_Property, Checker.m_positiveOrZero__int(precision));
 }
 /** @override @return {number} */
 m_getPrecision__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_PRECISION__org_pepstock_charba_client_labels_Label_Property, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getPrecision__());
 }
 
 m_setShowZero__boolean(/** boolean */ showZero) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_ZERO__org_pepstock_charba_client_labels_Label_Property, showZero);
 }
 /** @override @return {boolean} */
 m_isShowZero__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_ZERO__org_pepstock_charba_client_labels_Label_Property, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_isShowZero__());
 }
 
 m_setTextShadow__boolean(/** boolean */ textShadow) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_TEXT_SHADOW__org_pepstock_charba_client_labels_Label_Property, textShadow);
 }
 /** @override @return {boolean} */
 m_isTextShadow__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_TEXT_SHADOW__org_pepstock_charba_client_labels_Label_Property, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_isTextShadow__());
 }
 
 m_setShadowBlur__int(/** number */ shadowBlur) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_SHADOW_BLUR__org_pepstock_charba_client_labels_Label_Property, shadowBlur);
 }
 /** @override @return {number} */
 m_getShadowBlur__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_SHADOW_BLUR__org_pepstock_charba_client_labels_Label_Property, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getShadowBlur__());
 }
 
 m_setShadowOffsetX__int(/** number */ shadowOffsetX) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_SHADOW_OFFSET_X__org_pepstock_charba_client_labels_Label_Property, shadowOffsetX);
 }
 /** @override @return {number} */
 m_getShadowOffsetX__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_SHADOW_OFFSET_X__org_pepstock_charba_client_labels_Label_Property, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getShadowOffsetX__());
 }
 
 m_setShadowOffsetY__int(/** number */ shadowOffsetY) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_SHADOW_OFFSET_Y__org_pepstock_charba_client_labels_Label_Property, shadowOffsetY);
 }
 /** @override @return {number} */
 m_getShadowOffsetY__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_SHADOW_OFFSET_Y__org_pepstock_charba_client_labels_Label_Property, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getShadowOffsetY__());
 }
 
 m_setShadowColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ shadowColor) {
  this.m_setShadowColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(shadowColor));
 }
 
 m_setShadowColor__java_lang_String(/** ?string */ shadowColor) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_SHADOW_COLOR__org_pepstock_charba_client_labels_Label_Property, shadowColor);
 }
 /** @override @return {?string} */
 m_getShadowColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_SHADOW_COLOR__org_pepstock_charba_client_labels_Label_Property, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getShadowColorAsString__());
 }
 /** @return {IsColor} */
 m_getShadowColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getShadowColorAsString__());
 }
 
 m_setArc__boolean(/** boolean */ arc) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ARC__org_pepstock_charba_client_labels_Label_Property, arc);
 }
 /** @override @return {boolean} */
 m_isArc__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ARC__org_pepstock_charba_client_labels_Label_Property, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_isArc__());
 }
 
 m_setPosition__org_pepstock_charba_client_labels_enums_Position(/** Position */ position) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_labels_Label_Property, position);
 }
 /** @override @return {Position} */
 m_getPosition__() {
  return /**@type {Position}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_labels_Label_Property, Position.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getPosition__()), Position));
 }
 
 m_setOverlap__boolean(/** boolean */ overlap) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_OVERLAP__org_pepstock_charba_client_labels_Label_Property, overlap);
 }
 /** @override @return {boolean} */
 m_isOverlap__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_OVERLAP__org_pepstock_charba_client_labels_Label_Property, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_isOverlap__());
 }
 
 m_setShowActualPercentages__boolean(/** boolean */ showActualPercentages) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_ACTUAL_PERCENTAGES__org_pepstock_charba_client_labels_Label_Property, showActualPercentages);
 }
 /** @override @return {boolean} */
 m_isShowActualPercentages__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_SHOW_ACTUAL_PERCENTAGES__org_pepstock_charba_client_labels_Label_Property, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_isShowActualPercentages__());
 }
 
 m_setOutsidePadding__int(/** number */ outsidePadding) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_OUTSIDE_PADDING__org_pepstock_charba_client_labels_Label_Property, Checker.m_positiveOrZero__int(outsidePadding));
 }
 /** @override @return {number} */
 m_getOutsidePadding__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_OUTSIDE_PADDING__org_pepstock_charba_client_labels_Label_Property, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getOutsidePadding__());
 }
 
 m_setTextMargin__int(/** number */ textMargin) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_TEXT_MARGIN__org_pepstock_charba_client_labels_Label_Property, Checker.m_positiveOrZero__int(textMargin));
 }
 /** @override @return {number} */
 m_getTextMargin__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_TEXT_MARGIN__org_pepstock_charba_client_labels_Label_Property, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getTextMargin__());
 }
 
 m_setImages__arrayOf_org_pepstock_charba_client_dom_elements_Img(/** Array<HTMLImageElement> */ images) {
  this.m_setArrayValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_IMAGES__org_pepstock_charba_client_labels_Label_Property, ArrayImage_$Overlay.m_fromOrNull__arrayOf_org_pepstock_charba_client_dom_elements_Img(images));
 }
 /** @return {List<HTMLImageElement>} */
 m_getImages__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_IMAGES__org_pepstock_charba_client_labels_Label_Property), ArrayImage_$Overlay));
  return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayImage(array);
 }
 /** @override @return {RenderCallback} */
 m_getRenderCallback__() {
  return /**@type {RenderCallback}*/ ($Casts.$to(Label.f_RENDER_PROPERTY_HANDLER__org_pepstock_charba_client_labels_Label_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getRenderCallback__()), RenderCallback));
 }
 
 m_setRender__org_pepstock_charba_client_labels_callbacks_RenderCallback(/** RenderCallback */ renderCallback) {
  Label.f_RENDER_PROPERTY_HANDLER__org_pepstock_charba_client_labels_Label_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, LabelsPlugin.f_ID__org_pepstock_charba_client_labels_LabelsPlugin, renderCallback, this.f_renderCallbackProxy__org_pepstock_charba_client_labels_Label_.proxy);
 }
 
 m_setRender__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ renderCallback) {
  this.m_setRender__org_pepstock_charba_client_labels_callbacks_RenderCallback(/**@type {RenderCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_RENDER__org_pepstock_charba_client_labels_Label_Property, renderCallback);
 }
 /** @override @return {FontCallback<LabelsContext>} */
 m_getFontCallback__() {
  return /**@type {FontCallback<LabelsContext>}*/ ($Casts.$to(Label.f_FONT_PROPERTY_HANDLER__org_pepstock_charba_client_labels_Label_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getFontCallback__()), FontCallback));
 }
 /** @override */
 m_setFont__org_pepstock_charba_client_callbacks_FontCallback(/** FontCallback<LabelsContext> */ fontCallback) {
  Label.f_FONT_PROPERTY_HANDLER__org_pepstock_charba_client_labels_Label_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, LabelsPlugin.f_ID__org_pepstock_charba_client_labels_LabelsPlugin, fontCallback, this.f_fontCallbackProxy__org_pepstock_charba_client_labels_Label_.proxy);
 }
 /** @override */
 m_setFont__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ fontCallback) {
  this.m_setFont__org_pepstock_charba_client_callbacks_FontCallback(/**@type {FontCallback<LabelsContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_FONT__org_pepstock_charba_client_labels_Label_Property, fontCallback);
 }
 /** @override @return {ColorCallback<LabelsContext>} */
 m_getColorCallback__() {
  return /**@type {ColorCallback<LabelsContext>}*/ ($Casts.$to(Label.f_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_labels_Label_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_labels_Label_.m_getColorCallback__()), ColorCallback));
 }
 
 m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<LabelsContext> */ colorCallback) {
  Label.f_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_labels_Label_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, LabelsPlugin.f_ID__org_pepstock_charba_client_labels_LabelsPlugin, colorCallback, this.f_colorCallbackProxy__org_pepstock_charba_client_labels_Label_.proxy);
 }
 
 m_setColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ colorCallback) {
  this.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<LabelsContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_COLOR__org_pepstock_charba_client_labels_Label_Property, colorCallback);
 }
 /** @return {*} */
 m_onRender__org_pepstock_charba_client_labels_LabelsContext_$p_org_pepstock_charba_client_labels_Label(/** LabelsContext */ context) {
  let renderCallback = this.m_getRenderCallback__();
  if (ScriptableUtils.m_isContextConsistent__org_pepstock_charba_client_callbacks_ChartContext(context) && !$Equality.$same(renderCallback, null)) {
   let value = renderCallback.m_invoke__org_pepstock_charba_client_callbacks_ChartContext(context);
   if (!$Equality.$same(value, null)) {
    if (Img_$Overlay.$isInstance(value)) {
     return value;
    } else {
     return $Objects.m_toString__java_lang_Object(value);
    }
   }
  }
  return j_l_String.m_valueOf__double(context.m_getPercentage__());
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_labels_Label() {
  this.f_renderCallbackProxy__org_pepstock_charba_client_labels_Label_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_fontCallbackProxy__org_pepstock_charba_client_labels_Label_ = /**@type {CharbaCallbackProxy<?function(?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_colorCallbackProxy__org_pepstock_charba_client_labels_Label_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 /** @return {Render} */
 static get f_DEFAULT_RENDER__org_pepstock_charba_client_labels_Label() {
  return (Label.$clinit(), Label.$static_DEFAULT_RENDER__org_pepstock_charba_client_labels_Label);
 }
 /** @return {Position} */
 static get f_DEFAULT_POSITION__org_pepstock_charba_client_labels_Label() {
  return (Label.$clinit(), Label.$static_DEFAULT_POSITION__org_pepstock_charba_client_labels_Label);
 }
 
 static $clinit() {
  Label.$clinit = () =>{};
  Label.$loadModules();
  AbstractNode.$clinit();
  IsDefaultLabel.$clinit();
  Label.$static_DEFAULT_RENDER__org_pepstock_charba_client_labels_Label = Render.f_VALUE__org_pepstock_charba_client_labels_enums_Render;
  Label.$static_DEFAULT_POSITION__org_pepstock_charba_client_labels_Label = Position.f_DEFAULT__org_pepstock_charba_client_labels_enums_Position;
  Label.f_RENDER_PROPERTY_HANDLER__org_pepstock_charba_client_labels_Label_ = /**@type {!CallbackPropertyHandler<RenderCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_RENDER__org_pepstock_charba_client_labels_Label_Property));
  Label.f_FONT_PROPERTY_HANDLER__org_pepstock_charba_client_labels_Label_ = /**@type {!CallbackPropertyHandler<FontCallback<LabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_FONT__org_pepstock_charba_client_labels_Label_Property));
  Label.f_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_labels_Label_ = /**@type {!CallbackPropertyHandler<ColorCallback<LabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_COLOR__org_pepstock_charba_client_labels_Label_Property));
  Label.f_TEMPORARY_ID__org_pepstock_charba_client_labels_Label_ = LabelId.m_create__java_lang_String("charbaTemporaryLabelId");
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Label;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorCallback = goog.module.get('org.pepstock.charba.client.callbacks.ColorCallback$impl');
  FontCallback = goog.module.get('org.pepstock.charba.client.callbacks.FontCallback$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ArrayImage_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayImage.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Img_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  DefaultLabel = goog.module.get('org.pepstock.charba.client.labels.DefaultLabel$impl');
  Font = goog.module.get('org.pepstock.charba.client.labels.Font$impl');
  Property = goog.module.get('org.pepstock.charba.client.labels.Label.Property$impl');
  LabelId = goog.module.get('org.pepstock.charba.client.labels.LabelId$impl');
  LabelsContext = goog.module.get('org.pepstock.charba.client.labels.LabelsContext$impl');
  LabelsPlugin = goog.module.get('org.pepstock.charba.client.labels.LabelsPlugin$impl');
  RenderCallback = goog.module.get('org.pepstock.charba.client.labels.callbacks.RenderCallback$impl');
  Position = goog.module.get('org.pepstock.charba.client.labels.enums.Position$impl');
  Render = goog.module.get('org.pepstock.charba.client.labels.enums.Render$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@private {Render}*/
Label.$static_DEFAULT_RENDER__org_pepstock_charba_client_labels_Label;
/**@const {number}*/
Label.f_DEFAULT_PRECISION__org_pepstock_charba_client_labels_Label = 0;
/**@const {boolean}*/
Label.f_DEFAULT_SHOW_ZERO__org_pepstock_charba_client_labels_Label = false;
/**@const {boolean}*/
Label.f_DEFAULT_TEXT_SHADOW__org_pepstock_charba_client_labels_Label = false;
/**@const {number}*/
Label.f_DEFAULT_SHADOW_BLUR__org_pepstock_charba_client_labels_Label = 6;
/**@const {number}*/
Label.f_DEFAULT_SHADOW_OFFSET_X__org_pepstock_charba_client_labels_Label = 3;
/**@const {number}*/
Label.f_DEFAULT_SHADOW_OFFSET_Y__org_pepstock_charba_client_labels_Label = 3;
/**@const {?string}*/
Label.f_DEFAULT_SHADOW_COLOR__org_pepstock_charba_client_labels_Label = "rgba(0,0,0,0.3)";
/**@const {boolean}*/
Label.f_DEFAULT_ARC__org_pepstock_charba_client_labels_Label = false;
/**@private {Position}*/
Label.$static_DEFAULT_POSITION__org_pepstock_charba_client_labels_Label;
/**@const {boolean}*/
Label.f_DEFAULT_OVERLAP__org_pepstock_charba_client_labels_Label = true;
/**@const {boolean}*/
Label.f_DEFAULT_SHOW_ACTUAL_PERCENTAGES__org_pepstock_charba_client_labels_Label = false;
/**@const {number}*/
Label.f_DEFAULT_OUTSIDE_PADDING__org_pepstock_charba_client_labels_Label = 2;
/**@const {number}*/
Label.f_DEFAULT_TEXT_MARGIN__org_pepstock_charba_client_labels_Label = 2;
/**@type {CallbackPropertyHandler<RenderCallback>}*/
Label.f_RENDER_PROPERTY_HANDLER__org_pepstock_charba_client_labels_Label_;
/**@type {CallbackPropertyHandler<FontCallback<LabelsContext>>}*/
Label.f_FONT_PROPERTY_HANDLER__org_pepstock_charba_client_labels_Label_;
/**@type {CallbackPropertyHandler<ColorCallback<LabelsContext>>}*/
Label.f_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_labels_Label_;
/**@type {LabelId}*/
Label.f_TEMPORARY_ID__org_pepstock_charba_client_labels_Label_;
IsDefaultLabel.$markImplementor(Label);
IsScriptableFontProvider.$markImplementor(Label);
$Util.$setClassMetadata(Label, "org.pepstock.charba.client.labels.Label");

exports = Label;

//# sourceMappingURL=Label.js.map
