goog.module('org.pepstock.charba.client.datalabels.LabelItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultDataLabelsItem = goog.require('org.pepstock.charba.client.datalabels.IsDefaultDataLabelsItem$impl');
const IsScriptableFontProvider = goog.require('org.pepstock.charba.client.options.IsScriptableFontProvider$impl');
const IsScriptablePaddingProvider = goog.require('org.pepstock.charba.client.options.IsScriptablePaddingProvider$impl');
const AbstractPluginOptions = goog.require('org.pepstock.charba.client.plugins.AbstractPluginOptions$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let FontCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FontCallback$impl');
let OffsetCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.OffsetCallback$impl');
let PaddingCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.PaddingCallback$impl');
let RadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RadiusCallback$impl');
let RotationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RotationCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let TextAlignCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TextAlignCallback$impl');
let WidthCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.WidthCallback$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataLabelsOptions = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
let DataLabelsPlugin = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.datalabels.Font$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.datalabels.LabelItem.Property$impl');
let Listeners = goog.forwardDeclare('org.pepstock.charba.client.datalabels.Listeners$impl');
let Padding = goog.forwardDeclare('org.pepstock.charba.client.datalabels.Padding$impl');
let AlignCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.AlignCallback$impl');
let AnchorCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.AnchorCallback$impl');
let ClampCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.ClampCallback$impl');
let ClipCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.ClipCallback$impl');
let DisplayCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.DisplayCallback$impl');
let FormatterCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');
let OpacityCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.OpacityCallback$impl');
let TextShadowBlurCallback = goog.forwardDeclare('org.pepstock.charba.client.datalabels.callbacks.TextShadowBlurCallback$impl');
let Align = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Align$impl');
let Anchor = goog.forwardDeclare('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
let AbstractEventHandler = goog.forwardDeclare('org.pepstock.charba.client.datalabels.events.AbstractEventHandler$impl');
let Display = goog.forwardDeclare('org.pepstock.charba.client.enums.Display$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {IsDefaultDataLabelsItem}
 * @implements {IsScriptableFontProvider<DataLabelsContext>}
 * @implements {IsScriptablePaddingProvider<DataLabelsContext>}
 */
class LabelItem extends AbstractPluginOptions {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(Object, *, ?):?string>}*/
  this.f_formatterCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_colorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_alignCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_anchorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/
  this.f_clampCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/
  this.f_clipCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_displayCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_offsetCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_opacityCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_rotationCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/
  this.f_textAlignCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_textStrokeColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_textStrokeWidthCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/
  this.f_textShadowBlurCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/
  this.f_textShadowColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?>}*/
  this.f_fontCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {CharbaCallbackProxy<?function(Object, ?):?>}*/
  this.f_paddingCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {IsDefaultDataLabelsItem}*/
  this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {Listeners}*/
  this.f_listeners__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {Padding}*/
  this.f_padding__org_pepstock_charba_client_datalabels_LabelItem_;
  /**@type {Font}*/
  this.f_font__org_pepstock_charba_client_datalabels_LabelItem_;
 }
 /** @return {!LabelItem} */
 static $create__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultDataLabelsItem */ defaultOptions, /** ? */ nativeObject) {
  LabelItem.$clinit();
  let $instance = new LabelItem();
  $instance.$ctor__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem__org_pepstock_charba_client_commons_NativeObject(defaultOptions, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_datalabels_IsDefaultDataLabelsItem__org_pepstock_charba_client_commons_NativeObject(/** IsDefaultDataLabelsItem */ defaultOptions, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_plugins_AbstractPluginOptions__java_lang_String__org_pepstock_charba_client_commons_NativeObject(DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, nativeObject);
  this.$init___$p_org_pepstock_charba_client_datalabels_LabelItem();
  if ($Equality.$same(defaultOptions, null)) {
   this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {DataLabelsOptions}*/ ($Casts.$to(this.m_loadGlobalsPluginOptions__org_pepstock_charba_client_plugins_AbstractPluginOptionsFactory(DataLabelsPlugin.f_DEFAULTS_FACTORY__org_pepstock_charba_client_datalabels_DataLabelsPlugin), DataLabelsOptions));
  } else {
   this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_ = defaultOptions;
  }
  this.m_setNewIncrementalId__();
  this.f_padding__org_pepstock_charba_client_datalabels_LabelItem_ = Padding.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_defaults_IsDefaultPadding__org_pepstock_charba_client_commons_NativeObject(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getPadding__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_PADDING__org_pepstock_charba_client_datalabels_LabelItem_Property));
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_PADDING__org_pepstock_charba_client_datalabels_LabelItem_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_PADDING__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_padding__org_pepstock_charba_client_datalabels_LabelItem_);
  }
  this.f_font__org_pepstock_charba_client_datalabels_LabelItem_ = Font.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getFont__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_FONT__org_pepstock_charba_client_datalabels_LabelItem_Property));
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_FONT__org_pepstock_charba_client_datalabels_LabelItem_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_FONT__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_font__org_pepstock_charba_client_datalabels_LabelItem_);
  }
  this.f_listeners__org_pepstock_charba_client_datalabels_LabelItem_ = Listeners.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_datalabels_IsDefaultListeners__org_pepstock_charba_client_commons_NativeObject(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getListeners__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_LISTENERS__org_pepstock_charba_client_datalabels_LabelItem_Property));
  if (!this.m_has__org_pepstock_charba_client_commons_Key(Property.f_LISTENERS__org_pepstock_charba_client_datalabels_LabelItem_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_LISTENERS__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_listeners__org_pepstock_charba_client_datalabels_LabelItem_);
  }
  this.f_formatterCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction, /** * */ value, /** ? */ context) =>{
   return this.m_onFormatter__org_pepstock_charba_client_datalabels_DataLabelsContext__java_lang_Object_$p_org_pepstock_charba_client_datalabels_LabelItem(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context), value);
  };
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_1, /** ? */ context_1) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_1), this.m_getBackgroundColorCallback__(), this.m_getBackgroundColorAsString__());
  };
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_2, /** ? */ context_2) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_2), this.m_getBorderColorCallback__(), this.m_getBorderColorAsString__());
  };
  this.f_colorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_3, /** ? */ context_3) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_3), this.m_getColorCallback__(), this.m_getColorAsString__());
  };
  this.f_alignCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_4, /** ? */ context_4) =>{
   return /**@type {Align}*/ ($Casts.$to(ScriptableUtils.m_getOptionValueAsString__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_Key(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_4), this.m_getAlignCallback__(), this.m_getAlign__()), Align)).m_value__();
  };
  this.f_anchorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_5, /** ? */ context_5) =>{
   return /**@type {Anchor}*/ ($Casts.$to(ScriptableUtils.m_getOptionValueAsString__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_Key(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_5), this.m_getAnchorCallback__(), this.m_getAnchor__()), Anchor)).m_value__();
  };
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_6, /** ? */ context_6) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_6), this.m_getBorderRadiusCallback__(), this.m_getBorderRadius__()), Double)));
  };
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_7, /** ? */ context_7) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_7), this.m_getBorderWidthCallback__(), Integer.m_valueOf__int(this.m_getBorderWidth__())), Integer)).m_intValue__();
  };
  this.f_clampCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_8, /** ? */ context_8) =>{
   return Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_8), this.m_getClampCallback__(), this.m_isClamp__()), Boolean)));
  };
  this.f_clipCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_9, /** ? */ context_9) =>{
   return Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_9), this.m_getClipCallback__(), this.m_isClip__()), Boolean)));
  };
  this.f_displayCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_10, /** ? */ context_10) =>{
   return this.m_onDisplay__org_pepstock_charba_client_datalabels_DataLabelsContext_$p_org_pepstock_charba_client_datalabels_LabelItem(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_10));
  };
  this.f_offsetCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_11, /** ? */ context_11) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_11), this.m_getOffsetCallback__(), Integer.m_valueOf__int(this.m_getOffset__())), Integer)).m_intValue__();
  };
  this.f_opacityCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_12, /** ? */ context_12) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_12), this.m_getOpacityCallback__(), this.m_getOpacity__()), Double)));
  };
  this.f_rotationCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_13, /** ? */ context_13) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_13), this.m_getRotationCallback__(), this.m_getRotation__()), Double)));
  };
  this.f_textAlignCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_14, /** ? */ context_14) =>{
   return /**@type {TextAlign}*/ ($Casts.$to(ScriptableUtils.m_getOptionValueAsString__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_Key(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_14), this.m_getTextAlignCallback__(), this.m_getTextAlign__()), TextAlign)).m_value__();
  };
  this.f_textStrokeColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_15, /** ? */ context_15) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_15), this.m_getTextStrokeColorCallback__(), this.m_getTextStrokeColorAsString__());
  };
  this.f_textStrokeWidthCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_16, /** ? */ context_16) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_16), this.m_getTextStrokeWidthCallback__(), Integer.m_valueOf__int(this.m_getTextStrokeWidth__())), Integer)).m_intValue__();
  };
  this.f_textShadowBlurCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_17, /** ? */ context_17) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_17), this.m_getTextShadowBlurCallback__(), this.m_getTextShadowBlur__()), Double)));
  };
  this.f_textShadowColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_18, /** ? */ context_18) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_18), this.m_getTextShadowColorCallback__(), this.m_getTextShadowColorAsString__());
  };
  this.f_fontCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_19, /** ? */ context_19) =>{
   return ScriptableUtils.m_getOptionValueAsFont__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_defaults_IsDefaultFont(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_19), this.m_getFontCallback__(), this.m_getFont__()).m_nativeObject__();
  };
  this.f_paddingCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.callback = (/** Object */ contextFunction_20, /** ? */ context_20) =>{
   return ScriptableUtils.m_getOptionValueAsPadding__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_defaults_IsDefaultPadding(DataLabelsContext.$create__org_pepstock_charba_client_datalabels_LabelItem__org_pepstock_charba_client_commons_NativeObject(this, context_20), this.m_getPaddingCallback__(), this.m_getPadding__()).m_nativeObject__();
  };
 }
 /** @override */
 m_applyingDefaults__() {}
 /** @return {IsDefaultDataLabelsItem} */
 m_getDefaultsOptions___$pp_org_pepstock_charba_client_datalabels() {
  return this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_;
 }
 /** @override @return {Padding} */
 m_getPadding__() {
  return this.f_padding__org_pepstock_charba_client_datalabels_LabelItem_;
 }
 /** @override @return {Font} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_datalabels_LabelItem_;
 }
 /** @override @return {Listeners} */
 m_getListeners__() {
  return this.f_listeners__org_pepstock_charba_client_datalabels_LabelItem_;
 }
 
 m_setListenersHandler__org_pepstock_charba_client_datalabels_events_AbstractEventHandler(/** AbstractEventHandler */ handler) {
  this.m_getListeners__().m_setClickEventHandler__org_pepstock_charba_client_datalabels_events_ClickEventHandler(handler);
  this.m_getListeners__().m_setEnterEventHandler__org_pepstock_charba_client_datalabels_events_EnterEventHandler(handler);
  this.m_getListeners__().m_setLeaveEventHandler__org_pepstock_charba_client_datalabels_events_LeaveEventHandler(handler);
 }
 
 m_setAlign__org_pepstock_charba_client_datalabels_enums_Align(/** Align */ align) {
  this.m_setAlign__org_pepstock_charba_client_datalabels_callbacks_AlignCallback(/**@type {AlignCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property, align);
 }
 /** @override @return {Align} */
 m_getAlign__() {
  return /**@type {Align}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property, Align.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getAlign__()), Align));
 }
 
 m_setAnchor__org_pepstock_charba_client_datalabels_enums_Anchor(/** Anchor */ anchor) {
  this.m_setAnchor__org_pepstock_charba_client_datalabels_callbacks_AnchorCallback(/**@type {AnchorCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ANCHOR__org_pepstock_charba_client_datalabels_LabelItem_Property, anchor);
 }
 /** @override @return {Anchor} */
 m_getAnchor__() {
  return /**@type {Anchor}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_ANCHOR__org_pepstock_charba_client_datalabels_LabelItem_Property, Anchor.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getAnchor__()), Anchor));
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setBackgroundColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setBackgroundColor__java_lang_String(/** ?string */ color) {
  this.m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DataLabelsContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, color);
 }
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getBackgroundColorAsString__());
 }
 /** @return {IsColor} */
 m_getBackgroundColor__() {
  let color = this.m_getBackgroundColorAsString__();
  return !$Equality.$same(color, null) ? ColorBuilder.m_parse__java_lang_String(color) : null;
 }
 
 m_setBorderColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setBorderColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setBorderColor__java_lang_String(/** ?string */ color) {
  this.m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DataLabelsContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, color);
 }
 /** @override @return {?string} */
 m_getBorderColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_BORDER_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getBorderColorAsString__());
 }
 /** @return {IsColor} */
 m_getBorderColor__() {
  let color = this.m_getBorderColorAsString__();
  return !$Equality.$same(color, null) ? ColorBuilder.m_parse__java_lang_String(color) : null;
 }
 
 m_setBorderRadius__double(/** number */ radius) {
  this.m_setBorderRadius__org_pepstock_charba_client_callbacks_RadiusCallback(null);
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_BORDER_RADIUS__org_pepstock_charba_client_datalabels_LabelItem_Property, Checker.m_positiveOrZero__double(radius));
 }
 /** @override @return {number} */
 m_getBorderRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_BORDER_RADIUS__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getBorderRadius__());
 }
 
 m_setBorderWidth__int(/** number */ width) {
  this.m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(null);
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property, Checker.m_positiveOrZero__int(width));
 }
 /** @override @return {number} */
 m_getBorderWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_BORDER_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getBorderWidth__());
 }
 
 m_setClamp__boolean(/** boolean */ clamp) {
  this.m_setClamp__org_pepstock_charba_client_datalabels_callbacks_ClampCallback(null);
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CLAMP__org_pepstock_charba_client_datalabels_LabelItem_Property, clamp);
 }
 /** @override @return {boolean} */
 m_isClamp__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CLAMP__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_isClamp__());
 }
 
 m_setClip__boolean(/** boolean */ clip) {
  this.m_setClip__org_pepstock_charba_client_datalabels_callbacks_ClipCallback(null);
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CLIP__org_pepstock_charba_client_datalabels_LabelItem_Property, clip);
 }
 /** @override @return {boolean} */
 m_isClip__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CLIP__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_isClip__());
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setColor__java_lang_String(/** ?string */ color) {
  this.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DataLabelsContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, color);
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getColorAsString__());
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_setDisplay__org_pepstock_charba_client_datalabels_callbacks_DisplayCallback(/**@type {DisplayCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_datalabels_LabelItem_Property, display);
 }
 
 m_setDisplay__org_pepstock_charba_client_enums_Display(/** Display */ display) {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Display.f_AUTO__org_pepstock_charba_client_enums_Display, display)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_DISPLAY__org_pepstock_charba_client_datalabels_LabelItem_Property, display);
  } else {
   this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_datalabels_LabelItem_Property, $Objects.m_equals__java_lang_Object__java_lang_Object(Display.f_TRUE__org_pepstock_charba_client_enums_Display, display));
  }
 }
 /** @override @return {Display} */
 m_getDisplay__() {
  let type = this.m_type__org_pepstock_charba_client_commons_Key(Property.f_DISPLAY__org_pepstock_charba_client_datalabels_LabelItem_Property);
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_BOOLEAN__org_pepstock_charba_client_commons_ObjectType, type)) {
   let value = this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_DISPLAY__org_pepstock_charba_client_datalabels_LabelItem_Property, true);
   return value ? Display.f_TRUE__org_pepstock_charba_client_enums_Display : Display.f_FALSE__org_pepstock_charba_client_enums_Display;
  } else if ($Objects.m_equals__java_lang_Object__java_lang_Object(ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType, type)) {
   return /**@type {Display}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_DISPLAY__org_pepstock_charba_client_datalabels_LabelItem_Property, Display.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getDisplay__()), Display));
  }
  return this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getDisplay__();
 }
 
 m_setOffset__int(/** number */ offset) {
  this.m_setOffset__org_pepstock_charba_client_callbacks_OffsetCallback(null);
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_OFFSET__org_pepstock_charba_client_datalabels_LabelItem_Property, offset);
 }
 /** @override @return {number} */
 m_getOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_OFFSET__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getOffset__());
 }
 
 m_setOpacity__double(/** number */ opacity) {
  this.m_setOpacity__org_pepstock_charba_client_datalabels_callbacks_OpacityCallback(null);
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_OPACITY__org_pepstock_charba_client_datalabels_LabelItem_Property, Checker.m_betweenOrMaximum__double__double__double(opacity, 0, 1));
 }
 /** @override @return {number} */
 m_getOpacity__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_OPACITY__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getOpacity__());
 }
 
 m_setRotation__double(/** number */ rotation) {
  this.m_setRotation__org_pepstock_charba_client_callbacks_RotationCallback(null);
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_datalabels_LabelItem_Property, rotation);
 }
 /** @override @return {number} */
 m_getRotation__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getRotation__());
 }
 
 m_setTextAlign__org_pepstock_charba_client_enums_TextAlign(/** TextAlign */ textAlign) {
  this.m_setTextAlign__org_pepstock_charba_client_callbacks_TextAlignCallback(/**@type {TextAlignCallback<DataLabelsContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TEXT_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property, textAlign);
 }
 /** @override @return {TextAlign} */
 m_getTextAlign__() {
  return /**@type {TextAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TEXT_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property, TextAlign.m_values__(), this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getTextAlign__()), TextAlign));
 }
 
 m_setTextStrokeColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setTextStrokeColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setTextStrokeColor__java_lang_String(/** ?string */ color) {
  this.m_setTextStrokeColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DataLabelsContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TEXT_STROKE_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, color);
 }
 /** @override @return {?string} */
 m_getTextStrokeColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TEXT_STROKE_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getTextStrokeColorAsString__());
 }
 /** @return {IsColor} */
 m_getTextStrokeColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getTextStrokeColorAsString__());
 }
 
 m_setTextStrokeWidth__int(/** number */ textStrokeWidth) {
  this.m_setTextStrokeWidth__org_pepstock_charba_client_callbacks_WidthCallback(null);
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_TEXT_STROKE_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property, Checker.m_positiveOrZero__int(textStrokeWidth));
 }
 /** @override @return {number} */
 m_getTextStrokeWidth__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_TEXT_STROKE_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getTextStrokeWidth__());
 }
 
 m_setTextShadowBlur__double(/** number */ textShadowBlur) {
  this.m_setTextShadowBlur__org_pepstock_charba_client_datalabels_callbacks_TextShadowBlurCallback(null);
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_TEXT_SHADOW_BLUR__org_pepstock_charba_client_datalabels_LabelItem_Property, textShadowBlur);
 }
 /** @override @return {number} */
 m_getTextShadowBlur__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_TEXT_SHADOW_BLUR__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getTextShadowBlur__());
 }
 
 m_setTextShadowColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ color) {
  this.m_setTextShadowColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(color));
 }
 
 m_setTextShadowColor__java_lang_String(/** ?string */ color) {
  this.m_setTextShadowColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<DataLabelsContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TEXT_SHADOW_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, color);
 }
 /** @override @return {?string} */
 m_getTextShadowColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TEXT_SHADOW_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getTextShadowColorAsString__());
 }
 /** @return {IsColor} */
 m_getTextShadowColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getTextShadowColorAsString__());
 }
 /** @override @return {ColorCallback<DataLabelsContext>} */
 m_getBackgroundColorCallback__() {
  return /**@type {ColorCallback<DataLabelsContext>}*/ ($Casts.$to(LabelItem.f_BACKGROUND_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getBackgroundColorCallback__()), ColorCallback));
 }
 
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DataLabelsContext> */ backgroundColorCallback) {
  LabelItem.f_BACKGROUND_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, backgroundColorCallback, this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {ColorCallback<DataLabelsContext>} */
 m_getBorderColorCallback__() {
  return /**@type {ColorCallback<DataLabelsContext>}*/ ($Casts.$to(LabelItem.f_BORDER_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getBorderColorCallback__()), ColorCallback));
 }
 
 m_setBorderColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DataLabelsContext> */ borderColorCallback) {
  LabelItem.f_BORDER_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, borderColorCallback, this.f_borderColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {ColorCallback<DataLabelsContext>} */
 m_getColorCallback__() {
  return /**@type {ColorCallback<DataLabelsContext>}*/ ($Casts.$to(LabelItem.f_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getColorCallback__()), ColorCallback));
 }
 
 m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DataLabelsContext> */ colorCallback) {
  LabelItem.f_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, colorCallback, this.f_colorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {FormatterCallback} */
 m_getFormatterCallback__() {
  return /**@type {FormatterCallback}*/ ($Casts.$to(LabelItem.f_FORMATTER_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getFormatterCallback__()), FormatterCallback));
 }
 
 m_setFormatter__org_pepstock_charba_client_datalabels_callbacks_FormatterCallback(/** FormatterCallback */ formatterCallback) {
  LabelItem.f_FORMATTER_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, formatterCallback, this.f_formatterCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {AlignCallback} */
 m_getAlignCallback__() {
  return /**@type {AlignCallback}*/ ($Casts.$to(LabelItem.f_ALIGN_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getAlignCallback__()), AlignCallback));
 }
 
 m_setAlign__org_pepstock_charba_client_datalabels_callbacks_AlignCallback(/** AlignCallback */ alignCallback) {
  LabelItem.f_ALIGN_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, alignCallback, this.f_alignCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {AnchorCallback} */
 m_getAnchorCallback__() {
  return /**@type {AnchorCallback}*/ ($Casts.$to(LabelItem.f_ANCHOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getAnchorCallback__()), AnchorCallback));
 }
 
 m_setAnchor__org_pepstock_charba_client_datalabels_callbacks_AnchorCallback(/** AnchorCallback */ anchorCallback) {
  LabelItem.f_ANCHOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, anchorCallback, this.f_anchorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {RadiusCallback<DataLabelsContext>} */
 m_getBorderRadiusCallback__() {
  return /**@type {RadiusCallback<DataLabelsContext>}*/ ($Casts.$to(LabelItem.f_BORDER_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getBorderRadiusCallback__()), RadiusCallback));
 }
 
 m_setBorderRadius__org_pepstock_charba_client_callbacks_RadiusCallback(/** RadiusCallback<DataLabelsContext> */ borderRadiusCallback) {
  LabelItem.f_BORDER_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, borderRadiusCallback, this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {WidthCallback<DataLabelsContext>} */
 m_getBorderWidthCallback__() {
  return /**@type {WidthCallback<DataLabelsContext>}*/ ($Casts.$to(LabelItem.f_BORDER_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getBorderWidthCallback__()), WidthCallback));
 }
 
 m_setBorderWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<DataLabelsContext> */ borderWidthCallback) {
  LabelItem.f_BORDER_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, borderWidthCallback, this.f_borderWidthCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {ClampCallback} */
 m_getClampCallback__() {
  return /**@type {ClampCallback}*/ ($Casts.$to(LabelItem.f_CLAMP_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getClampCallback__()), ClampCallback));
 }
 
 m_setClamp__org_pepstock_charba_client_datalabels_callbacks_ClampCallback(/** ClampCallback */ clampCallback) {
  LabelItem.f_CLAMP_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, clampCallback, this.f_clampCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {ClipCallback} */
 m_getClipCallback__() {
  return /**@type {ClipCallback}*/ ($Casts.$to(LabelItem.f_CLIP_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getClipCallback__()), ClipCallback));
 }
 
 m_setClip__org_pepstock_charba_client_datalabels_callbacks_ClipCallback(/** ClipCallback */ clipCallback) {
  LabelItem.f_CLIP_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, clipCallback, this.f_clipCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {DisplayCallback} */
 m_getDisplayCallback__() {
  return /**@type {DisplayCallback}*/ ($Casts.$to(LabelItem.f_DISPLAY_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getDisplayCallback__()), DisplayCallback));
 }
 
 m_setDisplay__org_pepstock_charba_client_datalabels_callbacks_DisplayCallback(/** DisplayCallback */ displayCallback) {
  LabelItem.f_DISPLAY_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, displayCallback, this.f_displayCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {OffsetCallback<DataLabelsContext>} */
 m_getOffsetCallback__() {
  return /**@type {OffsetCallback<DataLabelsContext>}*/ ($Casts.$to(LabelItem.f_OFFSET_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getOffsetCallback__()), OffsetCallback));
 }
 
 m_setOffset__org_pepstock_charba_client_callbacks_OffsetCallback(/** OffsetCallback<DataLabelsContext> */ offsetCallback) {
  LabelItem.f_OFFSET_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, offsetCallback, this.f_offsetCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {OpacityCallback} */
 m_getOpacityCallback__() {
  return /**@type {OpacityCallback}*/ ($Casts.$to(LabelItem.f_OPACITY_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getOpacityCallback__()), OpacityCallback));
 }
 
 m_setOpacity__org_pepstock_charba_client_datalabels_callbacks_OpacityCallback(/** OpacityCallback */ opacityCallback) {
  LabelItem.f_OPACITY_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, opacityCallback, this.f_opacityCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {RotationCallback<DataLabelsContext>} */
 m_getRotationCallback__() {
  return /**@type {RotationCallback<DataLabelsContext>}*/ ($Casts.$to(LabelItem.f_ROTATION_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getRotationCallback__()), RotationCallback));
 }
 
 m_setRotation__org_pepstock_charba_client_callbacks_RotationCallback(/** RotationCallback<DataLabelsContext> */ rotationCallback) {
  LabelItem.f_ROTATION_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, rotationCallback, this.f_rotationCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {TextAlignCallback<DataLabelsContext>} */
 m_getTextAlignCallback__() {
  return /**@type {TextAlignCallback<DataLabelsContext>}*/ ($Casts.$to(LabelItem.f_TEXT_ALIGN_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getTextAlignCallback__()), TextAlignCallback));
 }
 
 m_setTextAlign__org_pepstock_charba_client_callbacks_TextAlignCallback(/** TextAlignCallback<DataLabelsContext> */ textAlignCallback) {
  LabelItem.f_TEXT_ALIGN_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, textAlignCallback, this.f_textAlignCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {ColorCallback<DataLabelsContext>} */
 m_getTextStrokeColorCallback__() {
  return /**@type {ColorCallback<DataLabelsContext>}*/ ($Casts.$to(LabelItem.f_TEXT_STROKE_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getTextStrokeColorCallback__()), ColorCallback));
 }
 
 m_setTextStrokeColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DataLabelsContext> */ textStrokeColorCallback) {
  LabelItem.f_TEXT_STROKE_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, textStrokeColorCallback, this.f_textStrokeColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {WidthCallback<DataLabelsContext>} */
 m_getTextStrokeWidthCallback__() {
  return /**@type {WidthCallback<DataLabelsContext>}*/ ($Casts.$to(LabelItem.f_TEXT_STROKE_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getTextStrokeWidthCallback__()), WidthCallback));
 }
 
 m_setTextStrokeWidth__org_pepstock_charba_client_callbacks_WidthCallback(/** WidthCallback<DataLabelsContext> */ textStrokeWidthCallback) {
  LabelItem.f_TEXT_STROKE_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, textStrokeWidthCallback, this.f_textStrokeWidthCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {TextShadowBlurCallback} */
 m_getTextShadowBlurCallback__() {
  return /**@type {TextShadowBlurCallback}*/ ($Casts.$to(LabelItem.f_TEXT_SHADOW_BLUR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getTextShadowBlurCallback__()), TextShadowBlurCallback));
 }
 
 m_setTextShadowBlur__org_pepstock_charba_client_datalabels_callbacks_TextShadowBlurCallback(/** TextShadowBlurCallback */ textShadowBlurCallback) {
  LabelItem.f_TEXT_SHADOW_BLUR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, textShadowBlurCallback, this.f_textShadowBlurCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {ColorCallback<DataLabelsContext>} */
 m_getTextShadowColorCallback__() {
  return /**@type {ColorCallback<DataLabelsContext>}*/ ($Casts.$to(LabelItem.f_TEXT_SHADOW_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getTextShadowColorCallback__()), ColorCallback));
 }
 
 m_setTextShadowColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<DataLabelsContext> */ textShadowColorCallback) {
  LabelItem.f_TEXT_SHADOW_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, textShadowColorCallback, this.f_textShadowColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {FontCallback<DataLabelsContext>} */
 m_getFontCallback__() {
  return /**@type {FontCallback<DataLabelsContext>}*/ ($Casts.$to(LabelItem.f_FONT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getFontCallback__()), FontCallback));
 }
 /** @override */
 m_setFont__org_pepstock_charba_client_callbacks_FontCallback(/** FontCallback<DataLabelsContext> */ fontCallback) {
  LabelItem.f_FONT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, fontCallback, this.f_fontCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
 }
 /** @override @return {PaddingCallback<DataLabelsContext>} */
 m_getPaddingCallback__() {
  return /**@type {PaddingCallback<DataLabelsContext>}*/ ($Casts.$to(LabelItem.f_PADDING_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultOptions__org_pepstock_charba_client_datalabels_LabelItem_.m_getPaddingCallback__()), PaddingCallback));
 }
 /** @override */
 m_setPadding__org_pepstock_charba_client_callbacks_PaddingCallback(/** PaddingCallback<DataLabelsContext> */ paddingCallback) {
  LabelItem.f_PADDING_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_.m_setCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, DataLabelsPlugin.f_ID__org_pepstock_charba_client_datalabels_DataLabelsPlugin, paddingCallback, this.f_paddingCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_.proxy);
  if ($Equality.$same(paddingCallback, null) && !this.m_has__org_pepstock_charba_client_commons_Key(Property.f_PADDING__org_pepstock_charba_client_datalabels_LabelItem_Property)) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_NativeObjectContainer(Property.f_PADDING__org_pepstock_charba_client_datalabels_LabelItem_Property, this.f_padding__org_pepstock_charba_client_datalabels_LabelItem_);
  }
 }
 /** @return {?string} */
 m_onFormatter__org_pepstock_charba_client_datalabels_DataLabelsContext__java_lang_Object_$p_org_pepstock_charba_client_datalabels_LabelItem(/** DataLabelsContext */ context, /** * */ value) {
  let formatterCallback = this.m_getFormatterCallback__();
  if (ScriptableUtils.m_isContextConsistent__org_pepstock_charba_client_callbacks_ChartContext(context) && !$Equality.$same(formatterCallback, null)) {
   let result = formatterCallback.m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(context, DataItem.$create__java_lang_Object(value));
   if (!$Equality.$same(result, null)) {
    return result;
   }
  }
  return j_l_String.m_valueOf__java_lang_Object(value);
 }
 /** @return {*} */
 m_onDisplay__org_pepstock_charba_client_datalabels_DataLabelsContext_$p_org_pepstock_charba_client_datalabels_LabelItem(/** DataLabelsContext */ context) {
  let value = /**@type {Display}*/ ($Casts.$to(ScriptableUtils.m_getOptionValueAsString__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, this.m_getDisplayCallback__()), Display));
  let result = $Equality.$same(value, null) ? this.m_getDisplay__() : value;
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(Display.f_AUTO__org_pepstock_charba_client_enums_Display, result)) {
   return Display.f_AUTO__org_pepstock_charba_client_enums_Display.m_value__();
  } else {
   return $Objects.m_equals__java_lang_Object__java_lang_Object(Display.f_TRUE__org_pepstock_charba_client_enums_Display, result);
  }
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_datalabels_LabelItem() {
  this.f_formatterCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, *, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_backgroundColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_colorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_alignCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_anchorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderRadiusCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_borderWidthCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_clampCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_clipCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_displayCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_offsetCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_opacityCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_rotationCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_textAlignCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_textStrokeColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_textStrokeWidthCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_textShadowBlurCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_textShadowColorCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_fontCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_paddingCallbackProxy__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {CharbaCallbackProxy<?function(Object, ?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
 }
 
 static $clinit() {
  LabelItem.$clinit = () =>{};
  LabelItem.$loadModules();
  AbstractPluginOptions.$clinit();
  IsDefaultDataLabelsItem.$clinit();
  LabelItem.f_FORMATTER_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<FormatterCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_FORMATTER__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_BACKGROUND_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<ColorCallback<DataLabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_BACKGROUND_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_BORDER_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<ColorCallback<DataLabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_BORDER_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<ColorCallback<DataLabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_ALIGN_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<AlignCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_ANCHOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<AnchorCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ANCHOR__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_BORDER_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<RadiusCallback<DataLabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_BORDER_RADIUS__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_BORDER_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<WidthCallback<DataLabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_BORDER_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_CLAMP_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<ClampCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_CLAMP__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_CLIP_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<ClipCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_CLIP__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_DISPLAY_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<DisplayCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_DISPLAY__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_OFFSET_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<OffsetCallback<DataLabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_OFFSET__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_OPACITY_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<OpacityCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_OPACITY__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_ROTATION_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<RotationCallback<DataLabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ROTATION__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_TEXT_ALIGN_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<TextAlignCallback<DataLabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_TEXT_ALIGN__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_TEXT_STROKE_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<ColorCallback<DataLabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_TEXT_STROKE_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_TEXT_STROKE_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<WidthCallback<DataLabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_TEXT_STROKE_WIDTH__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_TEXT_SHADOW_BLUR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<TextShadowBlurCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_TEXT_SHADOW_BLUR__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_TEXT_SHADOW_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<ColorCallback<DataLabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_TEXT_SHADOW_COLOR__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_FONT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<FontCallback<DataLabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_FONT__org_pepstock_charba_client_datalabels_LabelItem_Property));
  LabelItem.f_PADDING_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_ = /**@type {!CallbackPropertyHandler<PaddingCallback<DataLabelsContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_PADDING__org_pepstock_charba_client_datalabels_LabelItem_Property));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LabelItem;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorCallback = goog.module.get('org.pepstock.charba.client.callbacks.ColorCallback$impl');
  FontCallback = goog.module.get('org.pepstock.charba.client.callbacks.FontCallback$impl');
  OffsetCallback = goog.module.get('org.pepstock.charba.client.callbacks.OffsetCallback$impl');
  PaddingCallback = goog.module.get('org.pepstock.charba.client.callbacks.PaddingCallback$impl');
  RadiusCallback = goog.module.get('org.pepstock.charba.client.callbacks.RadiusCallback$impl');
  RotationCallback = goog.module.get('org.pepstock.charba.client.callbacks.RotationCallback$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  TextAlignCallback = goog.module.get('org.pepstock.charba.client.callbacks.TextAlignCallback$impl');
  WidthCallback = goog.module.get('org.pepstock.charba.client.callbacks.WidthCallback$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  DataLabelsContext = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
  DataLabelsOptions = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsOptions$impl');
  DataLabelsPlugin = goog.module.get('org.pepstock.charba.client.datalabels.DataLabelsPlugin$impl');
  Font = goog.module.get('org.pepstock.charba.client.datalabels.Font$impl');
  Property = goog.module.get('org.pepstock.charba.client.datalabels.LabelItem.Property$impl');
  Listeners = goog.module.get('org.pepstock.charba.client.datalabels.Listeners$impl');
  Padding = goog.module.get('org.pepstock.charba.client.datalabels.Padding$impl');
  AlignCallback = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.AlignCallback$impl');
  AnchorCallback = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.AnchorCallback$impl');
  ClampCallback = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.ClampCallback$impl');
  ClipCallback = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.ClipCallback$impl');
  DisplayCallback = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.DisplayCallback$impl');
  FormatterCallback = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');
  OpacityCallback = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.OpacityCallback$impl');
  TextShadowBlurCallback = goog.module.get('org.pepstock.charba.client.datalabels.callbacks.TextShadowBlurCallback$impl');
  Align = goog.module.get('org.pepstock.charba.client.datalabels.enums.Align$impl');
  Anchor = goog.module.get('org.pepstock.charba.client.datalabels.enums.Anchor$impl');
  Display = goog.module.get('org.pepstock.charba.client.enums.Display$impl');
  TextAlign = goog.module.get('org.pepstock.charba.client.enums.TextAlign$impl');
  DataItem = goog.module.get('org.pepstock.charba.client.items.DataItem$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {CallbackPropertyHandler<FormatterCallback>}*/
LabelItem.f_FORMATTER_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<ColorCallback<DataLabelsContext>>}*/
LabelItem.f_BACKGROUND_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<ColorCallback<DataLabelsContext>>}*/
LabelItem.f_BORDER_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<ColorCallback<DataLabelsContext>>}*/
LabelItem.f_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<AlignCallback>}*/
LabelItem.f_ALIGN_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<AnchorCallback>}*/
LabelItem.f_ANCHOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<RadiusCallback<DataLabelsContext>>}*/
LabelItem.f_BORDER_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<WidthCallback<DataLabelsContext>>}*/
LabelItem.f_BORDER_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<ClampCallback>}*/
LabelItem.f_CLAMP_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<ClipCallback>}*/
LabelItem.f_CLIP_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<DisplayCallback>}*/
LabelItem.f_DISPLAY_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<OffsetCallback<DataLabelsContext>>}*/
LabelItem.f_OFFSET_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<OpacityCallback>}*/
LabelItem.f_OPACITY_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<RotationCallback<DataLabelsContext>>}*/
LabelItem.f_ROTATION_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<TextAlignCallback<DataLabelsContext>>}*/
LabelItem.f_TEXT_ALIGN_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<ColorCallback<DataLabelsContext>>}*/
LabelItem.f_TEXT_STROKE_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<WidthCallback<DataLabelsContext>>}*/
LabelItem.f_TEXT_STROKE_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<TextShadowBlurCallback>}*/
LabelItem.f_TEXT_SHADOW_BLUR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<ColorCallback<DataLabelsContext>>}*/
LabelItem.f_TEXT_SHADOW_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<FontCallback<DataLabelsContext>>}*/
LabelItem.f_FONT_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
/**@type {CallbackPropertyHandler<PaddingCallback<DataLabelsContext>>}*/
LabelItem.f_PADDING_PROPERTY_HANDLER__org_pepstock_charba_client_datalabels_LabelItem_;
IsDefaultDataLabelsItem.$markImplementor(LabelItem);
IsScriptableFontProvider.$markImplementor(LabelItem);
IsScriptablePaddingProvider.$markImplementor(LabelItem);
$Util.$setClassMetadata(LabelItem, "org.pepstock.charba.client.datalabels.LabelItem");

exports = LabelItem;

//# sourceMappingURL=LabelItem.js.map
