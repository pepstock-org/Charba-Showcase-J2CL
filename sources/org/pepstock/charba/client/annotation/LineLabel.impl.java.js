goog.module('org.pepstock.charba.client.annotation.LineLabel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasBackgroundColor = goog.require('org.pepstock.charba.client.annotation.HasBackgroundColor$impl');
const IsDefaultsLineLabel = goog.require('org.pepstock.charba.client.annotation.IsDefaultsLineLabel$impl');
const AbstractNode = goog.require('org.pepstock.charba.client.commons.AbstractNode$impl');
const IsScriptableFontProvider = goog.require('org.pepstock.charba.client.options.IsScriptableFontProvider$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Number = goog.forwardDeclare('java.lang.Number$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AnnotationContext = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationContext$impl');
let AnnotationOptions_Property = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationOptions.Property$impl');
let AnnotationPlugin = goog.forwardDeclare('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
let BackgroundColorHandler = goog.forwardDeclare('org.pepstock.charba.client.annotation.BackgroundColorHandler$impl');
let Font = goog.forwardDeclare('org.pepstock.charba.client.annotation.Font$impl');
let LineAnnotation = goog.forwardDeclare('org.pepstock.charba.client.annotation.LineAnnotation$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.annotation.LineLabel.Property$impl');
let AdjustSizeCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.AdjustSizeCallback$impl');
let ContentCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ContentCallback$impl');
let ImageSizeCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.ImageSizeCallback$impl');
let LabelPositionCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.LabelPositionCallback$impl');
let PaddingSizeCallback = goog.forwardDeclare('org.pepstock.charba.client.annotation.callbacks.PaddingSizeCallback$impl');
let DrawTime = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
let LabelPosition = goog.forwardDeclare('org.pepstock.charba.client.annotation.enums.LabelPosition$impl');
let ColorCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ColorCallback$impl');
let CornerRadiusCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.CornerRadiusCallback$impl');
let DisplayCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.DisplayCallback$impl');
let FontCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FontCallback$impl');
let RotationCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.RotationCallback$impl');
let ScriptableUtils = goog.forwardDeclare('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
let TextAlignCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.TextAlignCallback$impl');
let Color = goog.forwardDeclare('org.pepstock.charba.client.colors.Color$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let ArrayString_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
let CallbackPropertyHandler = goog.forwardDeclare('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let ObjectType = goog.forwardDeclare('org.pepstock.charba.client.commons.ObjectType$impl');
let Img_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
let FontStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.FontStyle$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Numbers = goog.forwardDeclare('vmbootstrap.Numbers$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {IsDefaultsLineLabel}
 * @implements {HasBackgroundColor}
 * @implements {IsScriptableFontProvider<AnnotationContext>}
 */
class LineLabel extends AbstractNode {
 /** @protected */
 constructor() {
  super();
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_colorCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_contentCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {CharbaCallbackProxy<?function(?):boolean>}*/
  this.f_displayCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_rotationCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_cornerRadiusCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_imageWidthCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {CharbaCallbackProxy<?function(?):*>}*/
  this.f_imageHeightCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_positionCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {CharbaCallbackProxy<?function(?):?string>}*/
  this.f_textAlignCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_xPaddingCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_yPaddingCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_xAdjustCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {CharbaCallbackProxy<?function(?):number>}*/
  this.f_yAdjustCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {CharbaCallbackProxy<?function(?):?>}*/
  this.f_fontCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {LineAnnotation}*/
  this.f_parent__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {IsDefaultsLineLabel}*/
  this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {Font}*/
  this.f_font__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {BackgroundColorHandler}*/
  this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_LineLabel_;
  /**@type {DrawTime}*/
  this.f_parentDrawTime__org_pepstock_charba_client_annotation_LineLabel_;
 }
 //Factory method corresponding to constructor 'LineLabel(LineAnnotation, IsDefaultsLineLabel)'.
 /** @return {!LineLabel} */
 static $create__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** LineAnnotation */ parent, /** IsDefaultsLineLabel */ defaultValues) {
  LineLabel.$clinit();
  let $instance = new LineLabel();
  $instance.$ctor__org_pepstock_charba_client_annotation_LineLabel__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(parent, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'LineLabel(LineAnnotation, IsDefaultsLineLabel)'.
 
 $ctor__org_pepstock_charba_client_annotation_LineLabel__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** LineAnnotation */ parent, /** IsDefaultsLineLabel */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_annotation_LineLabel__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(parent, null, defaultValues);
 }
 //Factory method corresponding to constructor 'LineLabel(LineAnnotation, NativeObject, IsDefaultsLineLabel)'.
 /** @return {!LineLabel} */
 static $create__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** LineAnnotation */ parent, /** ? */ nativeObject, /** IsDefaultsLineLabel */ defaultValues) {
  LineLabel.$clinit();
  let $instance = new LineLabel();
  $instance.$ctor__org_pepstock_charba_client_annotation_LineLabel__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(parent, nativeObject, defaultValues);
  return $instance;
 }
 //Initialization from constructor 'LineLabel(LineAnnotation, NativeObject, IsDefaultsLineLabel)'.
 
 $ctor__org_pepstock_charba_client_annotation_LineLabel__org_pepstock_charba_client_annotation_LineAnnotation__org_pepstock_charba_client_commons_NativeObject__org_pepstock_charba_client_annotation_IsDefaultsLineLabel(/** LineAnnotation */ parent, /** ? */ nativeObject, /** IsDefaultsLineLabel */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_commons_NativeObject(nativeObject);
  this.$init___$p_org_pepstock_charba_client_annotation_LineLabel();
  this.f_parent__org_pepstock_charba_client_annotation_LineLabel_ = parent;
  this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {IsDefaultsLineLabel}*/ ($Casts.$to(this.m_checkDefaultValuesArgument__java_lang_Object(defaultValues), IsDefaultsLineLabel));
  this.m_setNewIncrementalId__();
  this.f_font__org_pepstock_charba_client_annotation_LineLabel_ = Font.$create__org_pepstock_charba_client_annotation_LineLabel__org_pepstock_charba_client_defaults_IsDefaultFont__org_pepstock_charba_client_commons_NativeObject(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getFont__(), this.m_getValue__org_pepstock_charba_client_commons_Key(Property.f_FONT__org_pepstock_charba_client_annotation_LineLabel_Property));
  this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_LineLabel_ = BackgroundColorHandler.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_annotation_IsDefaultsBackgroundColorHandler__org_pepstock_charba_client_commons_NativeObject__java_lang_String(parent, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_, this.m_getNativeObject__(), LineLabel.$static_DEFAULT_BACKGROUND_COLOR_AS_STRING__org_pepstock_charba_client_annotation_LineLabel);
  this.f_colorCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.callback = (/** ? */ context) =>{
   return ScriptableUtils.m_getOptionValueAsColor__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_String__boolean(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_annotation_LineLabel_, context), this.m_getColorCallback__(), defaultValues.m_getColorAsString__(), false);
  };
  this.f_contentCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.callback = (/** ? */ context_1) =>{
   return this.m_onContent__org_pepstock_charba_client_annotation_AnnotationContext_$p_org_pepstock_charba_client_annotation_LineLabel(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_annotation_LineLabel_, context_1));
  };
  this.f_displayCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.callback = (/** ? */ context_2) =>{
   return Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_annotation_LineLabel_, context_2), this.m_getDisplayCallback__(), defaultValues.m_isDisplay__()), Boolean)));
  };
  this.f_rotationCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.callback = (/** ? */ context_3) =>{
   return this.m_onRotation__org_pepstock_charba_client_annotation_AnnotationContext__double_$p_org_pepstock_charba_client_annotation_LineLabel(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_annotation_LineLabel_, context_3), defaultValues.m_getRotation__());
  };
  this.f_cornerRadiusCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.callback = (/** ? */ context_4) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_annotation_LineLabel_, context_4), this.m_getCornerRadiusCallback__(), Integer.m_valueOf__int(defaultValues.m_getCornerRadius__())), Integer)).m_intValue__();
  };
  this.f_imageWidthCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.callback = (/** ? */ context_5) =>{
   return this.m_onImageSize__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_annotation_callbacks_ImageSizeCallback__double__java_lang_String_$p_org_pepstock_charba_client_annotation_LineLabel(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_annotation_LineLabel_, context_5), this.m_getImageWidthCallback__(), defaultValues.m_getImageWidth__(), defaultValues.m_getImageWidthAsPercentage__());
  };
  this.f_imageHeightCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.callback = (/** ? */ context_6) =>{
   return this.m_onImageSize__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_annotation_callbacks_ImageSizeCallback__double__java_lang_String_$p_org_pepstock_charba_client_annotation_LineLabel(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_annotation_LineLabel_, context_6), this.m_getImageHeightCallback__(), defaultValues.m_getImageHeight__(), defaultValues.m_getImageHeightAsPercentage__());
  };
  this.f_positionCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.callback = (/** ? */ context_7) =>{
   return /**@type {LabelPosition}*/ ($Casts.$to(ScriptableUtils.m_getOptionValueAsString__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_commons_Key(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_annotation_LineLabel_, context_7), this.m_getPositionCallback__(), this.m_getPosition__()), LabelPosition)).m_value__();
  };
  this.f_xPaddingCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.callback = (/** ? */ context_8) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_annotation_LineLabel_, context_8), this.m_getXPaddingCallback__(), Integer.m_valueOf__int(defaultValues.m_getXPadding__())), Integer)).m_intValue__();
  };
  this.f_yPaddingCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.callback = (/** ? */ context_9) =>{
   return /**@type {Integer}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_annotation_LineLabel_, context_9), this.m_getYPaddingCallback__(), Integer.m_valueOf__int(defaultValues.m_getYPadding__())), Integer)).m_intValue__();
  };
  this.f_xAdjustCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.callback = (/** ? */ context_10) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_annotation_LineLabel_, context_10), this.m_getXAdjustCallback__(), defaultValues.m_getXAdjust__()), Double)));
  };
  this.f_yAdjustCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.callback = (/** ? */ context_11) =>{
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_annotation_LineLabel_, context_11), this.m_getYAdjustCallback__(), defaultValues.m_getYAdjust__()), Double)));
  };
  this.f_textAlignCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.callback = (/** ? */ context_12) =>{
   return this.m_onTextAlign__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_enums_TextAlign_$p_org_pepstock_charba_client_annotation_LineLabel(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_annotation_LineLabel_, context_12), defaultValues.m_getTextAlign__());
  };
  this.f_fontCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.callback = (/** ? */ context_13) =>{
   return ScriptableUtils.m_getOptionValueAsFont__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__org_pepstock_charba_client_defaults_IsDefaultFont(AnnotationContext.$create__org_pepstock_charba_client_annotation_AbstractAnnotation__org_pepstock_charba_client_commons_NativeObject(this.f_parent__org_pepstock_charba_client_annotation_LineLabel_, context_13), this.m_getFontCallback__(), this.m_getFont__()).m_nativeObject__();
  };
 }
 /** @override @return {BackgroundColorHandler} */
 m_getBackgroundColorHandler__() {
  return this.f_backgroundColorHandler__org_pepstock_charba_client_annotation_LineLabel_;
 }
 /** @override @return {Font} */
 m_getFont__() {
  return this.f_font__org_pepstock_charba_client_annotation_LineLabel_;
 }
 
 m_setDisplay__boolean(/** boolean */ display) {
  this.m_setDisplay__org_pepstock_charba_client_callbacks_DisplayCallback(/**@type {DisplayCallback<AnnotationContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_annotation_LineLabel_Property, display);
 }
 /** @override @return {boolean} */
 m_isDisplay__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_ENABLED__org_pepstock_charba_client_annotation_LineLabel_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_isDisplay__());
 }
 
 m_setColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ fontColor) {
  this.m_setColor__java_lang_String(IsColor.m_checkAndGetValue__org_pepstock_charba_client_colors_IsColor(fontColor));
 }
 
 m_setColor__java_lang_String(/** ?string */ fontColor) {
  this.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<AnnotationContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_annotation_LineLabel_Property, fontColor);
 }
 /** @override @return {?string} */
 m_getColorAsString__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_COLOR__org_pepstock_charba_client_annotation_LineLabel_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getColorAsString__());
 }
 /** @return {IsColor} */
 m_getColor__() {
  return ColorBuilder.m_parse__java_lang_String(this.m_getColorAsString__());
 }
 
 m_setXPadding__int(/** number */ xPadding) {
  this.m_setXPadding__org_pepstock_charba_client_annotation_callbacks_PaddingSizeCallback(/**@type {PaddingSizeCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_X_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property, Checker.m_positiveOrZero__int(xPadding));
 }
 /** @override @return {number} */
 m_getXPadding__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_X_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getXPadding__());
 }
 
 m_setYPadding__int(/** number */ yPadding) {
  this.m_setYPadding__org_pepstock_charba_client_annotation_callbacks_PaddingSizeCallback(/**@type {PaddingSizeCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_Y_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property, Checker.m_positiveOrZero__int(yPadding));
 }
 /** @override @return {number} */
 m_getYPadding__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_Y_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getYPadding__());
 }
 
 m_setCornerRadius__int(/** number */ cornerRadius) {
  this.m_setCornerRadius__org_pepstock_charba_client_callbacks_CornerRadiusCallback(/**@type {CornerRadiusCallback<AnnotationContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_CORNER_RADIUS__org_pepstock_charba_client_annotation_LineLabel_Property, Checker.m_positiveOrZero__int(cornerRadius));
 }
 /** @override @return {number} */
 m_getCornerRadius__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_CORNER_RADIUS__org_pepstock_charba_client_annotation_LineLabel_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getCornerRadius__());
 }
 
 m_setPosition__org_pepstock_charba_client_annotation_enums_LabelPosition(/** LabelPosition */ position) {
  this.m_setPosition__org_pepstock_charba_client_annotation_callbacks_LabelPositionCallback(/**@type {LabelPositionCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_annotation_LineLabel_Property, position);
 }
 /** @override @return {LabelPosition} */
 m_getPosition__() {
  return /**@type {LabelPosition}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_annotation_LineLabel_Property, LabelPosition.m_values__(), this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getPosition__()), LabelPosition));
 }
 
 m_setTextAlign__org_pepstock_charba_client_enums_TextAlign(/** TextAlign */ align) {
  this.m_setTextAlign__org_pepstock_charba_client_callbacks_TextAlignCallback(/**@type {TextAlignCallback<AnnotationContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel_Property, Key.m_isValid__org_pepstock_charba_client_commons_Key(align) ? align.m_getStartEndValue__() : null);
 }
 /** @override @return {TextAlign} */
 m_getTextAlign__() {
  return /**@type {TextAlign}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel_Property, TextAlign.m_values__(), this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getTextAlign__()), TextAlign));
 }
 
 m_setXAdjust__double(/** number */ xAdjust) {
  this.m_setXAdjust__org_pepstock_charba_client_annotation_callbacks_AdjustSizeCallback(/**@type {AdjustSizeCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_X_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property, xAdjust);
 }
 /** @override @return {number} */
 m_getXAdjust__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_X_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getXAdjust__());
 }
 
 m_setYAdjust__double(/** number */ yAdjust) {
  this.m_setYAdjust__org_pepstock_charba_client_annotation_callbacks_AdjustSizeCallback(/**@type {AdjustSizeCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property, yAdjust);
 }
 /** @override @return {number} */
 m_getYAdjust__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_Y_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getYAdjust__());
 }
 
 m_setRotation__double(/** number */ rotation) {
  this.m_setRotation__org_pepstock_charba_client_callbacks_RotationCallback(/**@type {RotationCallback<AnnotationContext>}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_annotation_LineLabel_Property, rotation);
 }
 /** @override @return {number} */
 m_getRotation__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_ROTATION__org_pepstock_charba_client_annotation_LineLabel_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getRotation__());
 }
 
 m_setAutoRotation__boolean(/** boolean */ autoRotation) {
  this.m_setRotation__org_pepstock_charba_client_callbacks_RotationCallback(/**@type {RotationCallback<AnnotationContext>}*/ (null));
  if (autoRotation) {
   this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_ROTATION__org_pepstock_charba_client_annotation_LineLabel_Property, LineLabel.f_AUTO_ROTATION_AS_STRING__org_pepstock_charba_client_annotation_LineLabel_);
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_ROTATION__org_pepstock_charba_client_annotation_LineLabel_Property);
  }
 }
 /** @override @return {boolean} */
 m_isAutoRotation__() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_ROTATION__org_pepstock_charba_client_annotation_LineLabel_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType);
 }
 
 m_setContent__java_util_List(/** List<?string> */ content) {
  this.m_setContent__org_pepstock_charba_client_annotation_callbacks_ContentCallback(/**@type {ContentCallback}*/ (null));
  if (!$Equality.$same(content, null)) {
   this.m_setContent__arrayOf_java_lang_String(/**@type {Array<?string>}*/ ($Arrays.$castTo(content.m_toArray__arrayOf_java_lang_Object(/**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), j_l_String, 1)));
  } else {
   this.m_remove__org_pepstock_charba_client_commons_Key(Property.f_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property);
  }
 }
 
 m_setContent__arrayOf_java_lang_String(/** Array<?string> */ content) {
  this.m_setContent__org_pepstock_charba_client_annotation_callbacks_ContentCallback(/**@type {ContentCallback}*/ (null));
  this.m_setValueOrArray__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(Property.f_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property, content);
 }
 
 m_setContent__org_pepstock_charba_client_dom_elements_Img(/** HTMLImageElement */ content) {
  this.m_setContent__org_pepstock_charba_client_annotation_callbacks_ContentCallback(/**@type {ContentCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property, content);
 }
 /** @return {boolean} */
 m_isContentAsImage___$pp_org_pepstock_charba_client_annotation() {
  return this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property, ObjectType.f_OBJECT__org_pepstock_charba_client_commons_ObjectType);
 }
 /** @return {List<?string>} */
 m_getContent__() {
  if (!this.m_isContentAsImage___$pp_org_pepstock_charba_client_annotation() && !this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property, ObjectType.f_FUNCTION__org_pepstock_charba_client_commons_ObjectType)) {
   let array = this.m_getValueOrArray__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property, Undefined.f_STRING__org_pepstock_charba_client_items_Undefined);
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayString(array);
  }
  return /**@type {List<?string>}*/ (Collections.m_emptyList__());
 }
 /** @return {HTMLImageElement} */
 m_getContentAsImage__() {
  if (this.m_isContentAsImage___$pp_org_pepstock_charba_client_annotation() && !this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property, ObjectType.f_FUNCTION__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_dom_elements_Img(Property.f_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property, Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined);
  }
  return Undefined.f_IMAGE_ELEMENT__org_pepstock_charba_client_items_Undefined;
 }
 
 m_setImageHeight__int(/** number */ height) {
  this.m_setImageHeight__org_pepstock_charba_client_annotation_callbacks_ImageSizeCallback(/**@type {ImageSizeCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property, Checker.m_positiveOrZero__int(height));
 }
 
 m_setImageHeightAsPercentage__java_lang_String(/** ?string */ heightPercentage) {
  this.m_setImageHeight__org_pepstock_charba_client_annotation_callbacks_ImageSizeCallback(/**@type {ImageSizeCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property, heightPercentage);
 }
 /** @override @return {number} */
 m_getImageHeight__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getImageHeight__());
  }
  return this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getImageHeight__();
 }
 /** @override @return {?string} */
 m_getImageHeightAsPercentage__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getImageHeightAsPercentage__());
  }
  return this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getImageHeightAsPercentage__();
 }
 
 m_setImageWidth__int(/** number */ width) {
  this.m_setImageWidth__org_pepstock_charba_client_annotation_callbacks_ImageSizeCallback(/**@type {ImageSizeCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__int(Property.f_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property, Checker.m_positiveOrZero__int(width));
 }
 
 m_setImageWidthAsPercentage__java_lang_String(/** ?string */ widthPercentage) {
  this.m_setImageWidth__org_pepstock_charba_client_annotation_callbacks_ImageSizeCallback(/**@type {ImageSizeCallback}*/ (null));
  this.m_setValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property, widthPercentage);
 }
 /** @override @return {number} */
 m_getImageWidth__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property, ObjectType.f_NUMBER__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__int(Property.f_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getImageWidth__());
  }
  return this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getImageWidth__();
 }
 /** @override @return {?string} */
 m_getImageWidthAsPercentage__() {
  if (this.m_isType__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_ObjectType(Property.f_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property, ObjectType.f_STRING__org_pepstock_charba_client_commons_ObjectType)) {
   return this.m_getValue__org_pepstock_charba_client_commons_Key__java_lang_String(Property.f_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getImageWidthAsPercentage__());
  }
  return this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getImageWidthAsPercentage__();
 }
 
 m_setParentDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime_$pp_org_pepstock_charba_client_annotation(/** DrawTime */ parentDrawTime) {
  this.f_parentDrawTime__org_pepstock_charba_client_annotation_LineLabel_ = parentDrawTime;
 }
 
 m_setDrawTime__org_pepstock_charba_client_annotation_enums_DrawTime(/** DrawTime */ drawTime) {
  this.m_setValue__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(AnnotationOptions_Property.f_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions_Property, drawTime);
 }
 /** @override @return {DrawTime} */
 m_getDrawTime__() {
  return /**@type {DrawTime}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(AnnotationOptions_Property.f_DRAW_TIME__org_pepstock_charba_client_annotation_AnnotationOptions_Property, DrawTime.m_values__(), !$Equality.$same(this.f_parentDrawTime__org_pepstock_charba_client_annotation_LineLabel_, null) ? this.f_parentDrawTime__org_pepstock_charba_client_annotation_LineLabel_ : this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getDrawTime__()), DrawTime));
 }
 /** @override @return {ColorCallback<AnnotationContext>} */
 m_getColorCallback__() {
  return /**@type {ColorCallback<AnnotationContext>}*/ ($Casts.$to(LineLabel.f_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getColorCallback__()), ColorCallback));
 }
 
 m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<AnnotationContext> */ colorCallback) {
  LineLabel.f_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, colorCallback, this.f_colorCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.proxy);
 }
 
 m_setColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ colorCallback) {
  this.m_setColor__org_pepstock_charba_client_callbacks_ColorCallback(/**@type {ColorCallback<AnnotationContext>}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_COLOR__org_pepstock_charba_client_annotation_LineLabel_Property, colorCallback);
 }
 /** @override @return {CornerRadiusCallback<AnnotationContext>} */
 m_getCornerRadiusCallback__() {
  return /**@type {CornerRadiusCallback<AnnotationContext>}*/ ($Casts.$to(LineLabel.f_CORNER_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getCornerRadiusCallback__()), CornerRadiusCallback));
 }
 
 m_setCornerRadius__org_pepstock_charba_client_callbacks_CornerRadiusCallback(/** CornerRadiusCallback<AnnotationContext> */ cornerRadiusCallback) {
  LineLabel.f_CORNER_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, cornerRadiusCallback, this.f_cornerRadiusCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.proxy);
 }
 
 m_setCornerRadius__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ cornerRadiusCallback) {
  this.m_setCornerRadius__org_pepstock_charba_client_callbacks_CornerRadiusCallback(/**@type {CornerRadiusCallback<AnnotationContext>}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_CORNER_RADIUS__org_pepstock_charba_client_annotation_LineLabel_Property, cornerRadiusCallback);
 }
 /** @override @return {ContentCallback} */
 m_getContentCallback__() {
  return /**@type {ContentCallback}*/ ($Casts.$to(LineLabel.f_CONTENT_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getContentCallback__()), ContentCallback));
 }
 
 m_setContent__org_pepstock_charba_client_annotation_callbacks_ContentCallback(/** ContentCallback */ contentCallback) {
  LineLabel.f_CONTENT_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, contentCallback, this.f_contentCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.proxy);
 }
 
 m_setContent__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ contentCallback) {
  this.m_setContent__org_pepstock_charba_client_annotation_callbacks_ContentCallback(/**@type {ContentCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property, contentCallback);
 }
 /** @override @return {DisplayCallback<AnnotationContext>} */
 m_getDisplayCallback__() {
  return /**@type {DisplayCallback<AnnotationContext>}*/ ($Casts.$to(LineLabel.f_DISPLAY_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getDisplayCallback__()), DisplayCallback));
 }
 
 m_setDisplay__org_pepstock_charba_client_callbacks_DisplayCallback(/** DisplayCallback<AnnotationContext> */ displayCallback) {
  LineLabel.f_DISPLAY_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, displayCallback, this.f_displayCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.proxy);
 }
 
 m_setDisplay__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ displayCallback) {
  this.m_setDisplay__org_pepstock_charba_client_callbacks_DisplayCallback(/**@type {DisplayCallback<AnnotationContext>}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_ENABLED__org_pepstock_charba_client_annotation_LineLabel_Property, displayCallback);
 }
 /** @override @return {RotationCallback<AnnotationContext>} */
 m_getRotationCallback__() {
  return /**@type {RotationCallback<AnnotationContext>}*/ ($Casts.$to(LineLabel.f_ROTATION_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getRotationCallback__()), RotationCallback));
 }
 
 m_setRotation__org_pepstock_charba_client_callbacks_RotationCallback(/** RotationCallback<AnnotationContext> */ rotationCallback) {
  LineLabel.f_ROTATION_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, rotationCallback, this.f_rotationCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.proxy);
 }
 
 m_setRotation__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ rotationCallback) {
  this.m_setRotation__org_pepstock_charba_client_callbacks_RotationCallback(/**@type {RotationCallback<AnnotationContext>}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_ROTATION__org_pepstock_charba_client_annotation_LineLabel_Property, rotationCallback);
 }
 /** @override @return {ImageSizeCallback} */
 m_getImageHeightCallback__() {
  return /**@type {ImageSizeCallback}*/ ($Casts.$to(LineLabel.f_IMAGE_HEIGHT_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getImageHeightCallback__()), ImageSizeCallback));
 }
 
 m_setImageHeight__org_pepstock_charba_client_annotation_callbacks_ImageSizeCallback(/** ImageSizeCallback */ imageSizeCallback) {
  LineLabel.f_IMAGE_HEIGHT_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, imageSizeCallback, this.f_imageHeightCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.proxy);
 }
 
 m_setImageHeight__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ imageSizeCallback) {
  this.m_setImageHeight__org_pepstock_charba_client_annotation_callbacks_ImageSizeCallback(/**@type {ImageSizeCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property, imageSizeCallback);
 }
 /** @override @return {ImageSizeCallback} */
 m_getImageWidthCallback__() {
  return /**@type {ImageSizeCallback}*/ ($Casts.$to(LineLabel.f_IMAGE_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getImageWidthCallback__()), ImageSizeCallback));
 }
 
 m_setImageWidth__org_pepstock_charba_client_annotation_callbacks_ImageSizeCallback(/** ImageSizeCallback */ imageSizeCallback) {
  LineLabel.f_IMAGE_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, imageSizeCallback, this.f_imageWidthCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.proxy);
 }
 
 m_setImageWidth__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ imageSizeCallback) {
  this.m_setImageWidth__org_pepstock_charba_client_annotation_callbacks_ImageSizeCallback(/**@type {ImageSizeCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property, imageSizeCallback);
 }
 /** @override @return {LabelPositionCallback} */
 m_getPositionCallback__() {
  return /**@type {LabelPositionCallback}*/ ($Casts.$to(LineLabel.f_POSITION_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getPositionCallback__()), LabelPositionCallback));
 }
 
 m_setPosition__org_pepstock_charba_client_annotation_callbacks_LabelPositionCallback(/** LabelPositionCallback */ positionCallback) {
  LineLabel.f_POSITION_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, positionCallback, this.f_positionCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.proxy);
 }
 
 m_setPosition__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ positionCallback) {
  this.m_setPosition__org_pepstock_charba_client_annotation_callbacks_LabelPositionCallback(/**@type {LabelPositionCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_POSITION__org_pepstock_charba_client_annotation_LineLabel_Property, positionCallback);
 }
 /** @override @return {TextAlignCallback<AnnotationContext>} */
 m_getTextAlignCallback__() {
  return /**@type {TextAlignCallback<AnnotationContext>}*/ ($Casts.$to(LineLabel.f_TEXT_ALIGN_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getTextAlignCallback__()), TextAlignCallback));
 }
 
 m_setTextAlign__org_pepstock_charba_client_callbacks_TextAlignCallback(/** TextAlignCallback<AnnotationContext> */ alignCallback) {
  LineLabel.f_TEXT_ALIGN_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, alignCallback, this.f_textAlignCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.proxy);
 }
 
 m_setTextAlign__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ alignCallback) {
  this.m_setTextAlign__org_pepstock_charba_client_callbacks_TextAlignCallback(/**@type {TextAlignCallback<AnnotationContext>}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel_Property, alignCallback);
 }
 /** @override @return {PaddingSizeCallback} */
 m_getXPaddingCallback__() {
  return /**@type {PaddingSizeCallback}*/ ($Casts.$to(LineLabel.f_X_PADDING_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getXPaddingCallback__()), PaddingSizeCallback));
 }
 
 m_setXPadding__org_pepstock_charba_client_annotation_callbacks_PaddingSizeCallback(/** PaddingSizeCallback */ paddingCallback) {
  LineLabel.f_X_PADDING_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, paddingCallback, this.f_xPaddingCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.proxy);
 }
 
 m_setXPadding__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ paddingCallback) {
  this.m_setXPadding__org_pepstock_charba_client_annotation_callbacks_PaddingSizeCallback(/**@type {PaddingSizeCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_X_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property, paddingCallback);
 }
 /** @override @return {PaddingSizeCallback} */
 m_getYPaddingCallback__() {
  return /**@type {PaddingSizeCallback}*/ ($Casts.$to(LineLabel.f_Y_PADDING_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getYPaddingCallback__()), PaddingSizeCallback));
 }
 
 m_setYPadding__org_pepstock_charba_client_annotation_callbacks_PaddingSizeCallback(/** PaddingSizeCallback */ paddingCallback) {
  LineLabel.f_Y_PADDING_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, paddingCallback, this.f_yPaddingCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.proxy);
 }
 
 m_setYPadding__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ paddingCallback) {
  this.m_setYPadding__org_pepstock_charba_client_annotation_callbacks_PaddingSizeCallback(/**@type {PaddingSizeCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_Y_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property, paddingCallback);
 }
 /** @override @return {AdjustSizeCallback} */
 m_getXAdjustCallback__() {
  return /**@type {AdjustSizeCallback}*/ ($Casts.$to(LineLabel.f_X_ADJUST_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getXAdjustCallback__()), AdjustSizeCallback));
 }
 
 m_setXAdjust__org_pepstock_charba_client_annotation_callbacks_AdjustSizeCallback(/** AdjustSizeCallback */ adjustCallback) {
  LineLabel.f_X_ADJUST_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, adjustCallback, this.f_xAdjustCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.proxy);
 }
 
 m_setXAdjust__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ adjustCallback) {
  this.m_setXAdjust__org_pepstock_charba_client_annotation_callbacks_AdjustSizeCallback(/**@type {AdjustSizeCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_X_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property, adjustCallback);
 }
 /** @override @return {AdjustSizeCallback} */
 m_getYAdjustCallback__() {
  return /**@type {AdjustSizeCallback}*/ ($Casts.$to(LineLabel.f_Y_ADJUST_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getYAdjustCallback__()), AdjustSizeCallback));
 }
 
 m_setYAdjust__org_pepstock_charba_client_annotation_callbacks_AdjustSizeCallback(/** AdjustSizeCallback */ adjustCallback) {
  LineLabel.f_Y_ADJUST_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, adjustCallback, this.f_yAdjustCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.proxy);
 }
 
 m_setYAdjust__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ adjustCallback) {
  this.m_setYAdjust__org_pepstock_charba_client_annotation_callbacks_AdjustSizeCallback(/**@type {AdjustSizeCallback}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_Y_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property, adjustCallback);
 }
 /** @override @return {FontCallback<AnnotationContext>} */
 m_getFontCallback__() {
  return /**@type {FontCallback<AnnotationContext>}*/ ($Casts.$to(LineLabel.f_FONT_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_getCallback__org_pepstock_charba_client_commons_NativeObjectContainer__java_lang_Object(this, this.f_defaultValues__org_pepstock_charba_client_annotation_LineLabel_.m_getFontCallback__()), FontCallback));
 }
 /** @override */
 m_setFont__org_pepstock_charba_client_callbacks_FontCallback(/** FontCallback<AnnotationContext> */ fontCallback) {
  LineLabel.f_FONT_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_.m_setCallback__org_pepstock_charba_client_commons_AbstractNode__java_lang_String__java_lang_Object__org_pepstock_charba_client_commons_CallbackProxy_Proxy(this, AnnotationPlugin.f_ID__org_pepstock_charba_client_annotation_AnnotationPlugin, fontCallback, this.f_fontCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_.proxy);
 }
 /** @override */
 m_setFont__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ fontCallback) {
  this.m_setFont__org_pepstock_charba_client_callbacks_FontCallback(/**@type {FontCallback<AnnotationContext>}*/ (null));
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_callbacks_NativeCallback(Property.f_FONT__org_pepstock_charba_client_annotation_LineLabel_Property, fontCallback);
 }
 /** @return {*} */
 m_onContent__org_pepstock_charba_client_annotation_AnnotationContext_$p_org_pepstock_charba_client_annotation_LineLabel(/** AnnotationContext */ context) {
  let result = ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, this.m_getContentCallback__());
  if (j_l_String.$isInstance(result) || Img_$Overlay.$isInstance(result)) {
   return result;
  } else if (List.$isInstance(result)) {
   let list = /**@type {List<*>}*/ ($Casts.$to(result, List));
   if (!list.isEmpty()) {
    let normalizedList = /**@type {!LinkedList<?string>}*/ (LinkedList.$create__());
    for (let $iterator = list.m_iterator__(); $iterator.m_hasNext__(); ) {
     let textItem = $iterator.m_next__();
     {
      normalizedList.add($Objects.m_toString__java_lang_Object(textItem));
     }
    }
    return normalizedList.size() == 1 ? /**@type {?string}*/ ($Casts.$to(normalizedList.getAtIndex(0), j_l_String)) : ArrayString_$Overlay.m_fromOrNull__java_util_List(normalizedList);
   }
  }
  return window.undefined;
 }
 /** @return {*} */
 m_onRotation__org_pepstock_charba_client_annotation_AnnotationContext__double_$p_org_pepstock_charba_client_annotation_LineLabel(/** AnnotationContext */ context, /** number */ defaultValue) {
  let result = /**@type {?number}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(context, this.m_getRotationCallback__(), defaultValue), Double));
  if (!$Equality.$same(result, null) && Undefined.m_is__double(Double.m_doubleValue__java_lang_Double(result))) {
   return LineLabel.f_AUTO_ROTATION_AS_STRING__org_pepstock_charba_client_annotation_LineLabel_;
  } else if (!$Equality.$same(result, null)) {
   return result;
  }
  return defaultValue;
 }
 /** @return {*} */
 m_onImageSize__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_annotation_callbacks_ImageSizeCallback__double__java_lang_String_$p_org_pepstock_charba_client_annotation_LineLabel(/** AnnotationContext */ context, /** ImageSizeCallback */ callback, /** number */ defaultValue, /** ?string */ defaultvalueAsPercentage) {
  let result = ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable(context, callback);
  if (Number.$isInstance(result)) {
   let number_1 = /**@type {(Number|number)}*/ ($Casts.$to(result, Number));
   return Integer.m_valueOf__int($Numbers.m_intValue__java_lang_Number(number_1));
  } else if (j_l_String.$isInstance(result)) {
   return result;
  }
  if (!$Equality.$same(defaultvalueAsPercentage, null)) {
   return defaultvalueAsPercentage;
  } else if (Undefined.m_isNot__double(defaultValue)) {
   return defaultValue;
  }
  return window.undefined;
 }
 /** @return {?string} */
 m_onTextAlign__org_pepstock_charba_client_annotation_AnnotationContext__org_pepstock_charba_client_enums_TextAlign_$p_org_pepstock_charba_client_annotation_LineLabel(/** AnnotationContext */ context, /** TextAlign */ defaultValue) {
  let result = /**@type {TextAlign}*/ ($Casts.$to(ScriptableUtils.m_getOptionValue__org_pepstock_charba_client_callbacks_ChartContext__org_pepstock_charba_client_callbacks_Scriptable__java_lang_Object(context, this.m_getTextAlignCallback__(), defaultValue), TextAlign));
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(result)) {
   return result.m_getStartEndValue__();
  }
  return defaultValue.m_value__();
 }
 //Default method forwarding stub.
 /** @override @return {ColorCallback<AnnotationContext>} */
 m_getBackgroundColorCallback__() {
  return HasBackgroundColor.m_getBackgroundColorCallback__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {IsColor} */
 m_getBackgroundColor__() {
  return HasBackgroundColor.m_getBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(this);
 }
 //Default method forwarding stub.
 /** @override @return {?string} */
 m_getBackgroundColorAsString__() {
  return HasBackgroundColor.m_getBackgroundColorAsString__$default__org_pepstock_charba_client_annotation_HasBackgroundColor(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBackgroundColor__org_pepstock_charba_client_colors_IsColor(/** IsColor */ arg0) {
  HasBackgroundColor.m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__org_pepstock_charba_client_colors_IsColor(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBackgroundColor__java_lang_String(/** ?string */ arg0) {
  HasBackgroundColor.m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(/** ColorCallback<AnnotationContext> */ arg0) {
  HasBackgroundColor.m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__org_pepstock_charba_client_callbacks_ColorCallback(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setBackgroundColor__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ arg0) {
  HasBackgroundColor.m_setBackgroundColor__$default__org_pepstock_charba_client_annotation_HasBackgroundColor__org_pepstock_charba_client_callbacks_NativeCallback(this, arg0);
 }
 /** @private */
 $init___$p_org_pepstock_charba_client_annotation_LineLabel() {
  this.f_colorCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_contentCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_displayCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {CharbaCallbackProxy<?function(?):boolean>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_rotationCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_cornerRadiusCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_imageWidthCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_imageHeightCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {CharbaCallbackProxy<?function(?):*>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_positionCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_textAlignCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {CharbaCallbackProxy<?function(?):?string>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_xPaddingCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_yPaddingCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_xAdjustCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_yAdjustCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {CharbaCallbackProxy<?function(?):number>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_fontCallbackProxy__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {CharbaCallbackProxy<?function(?):?>}*/ (JsHelper.m_get__().m_newCallbackProxy__());
  this.f_parentDrawTime__org_pepstock_charba_client_annotation_LineLabel_ = null;
 }
 /** @return {IsColor} */
 static get f_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_annotation_LineLabel() {
  return (LineLabel.$clinit(), LineLabel.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_annotation_LineLabel);
 }
 /** @return {?string} */
 static get f_DEFAULT_BACKGROUND_COLOR_AS_STRING__org_pepstock_charba_client_annotation_LineLabel() {
  return (LineLabel.$clinit(), LineLabel.$static_DEFAULT_BACKGROUND_COLOR_AS_STRING__org_pepstock_charba_client_annotation_LineLabel);
 }
 /** @return {FontStyle} */
 static get f_DEFAULT_FONT_STYLE__org_pepstock_charba_client_annotation_LineLabel() {
  return (LineLabel.$clinit(), LineLabel.$static_DEFAULT_FONT_STYLE__org_pepstock_charba_client_annotation_LineLabel);
 }
 /** @return {IsColor} */
 static get f_DEFAULT_COLOR__org_pepstock_charba_client_annotation_LineLabel() {
  return (LineLabel.$clinit(), LineLabel.$static_DEFAULT_COLOR__org_pepstock_charba_client_annotation_LineLabel);
 }
 /** @return {?string} */
 static get f_DEFAULT_FONT_COLOR_AS_STRING__org_pepstock_charba_client_annotation_LineLabel() {
  return (LineLabel.$clinit(), LineLabel.$static_DEFAULT_FONT_COLOR_AS_STRING__org_pepstock_charba_client_annotation_LineLabel);
 }
 /** @return {LabelPosition} */
 static get f_DEFAULT_POSITION__org_pepstock_charba_client_annotation_LineLabel() {
  return (LineLabel.$clinit(), LineLabel.$static_DEFAULT_POSITION__org_pepstock_charba_client_annotation_LineLabel);
 }
 /** @return {TextAlign} */
 static get f_DEFAULT_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel() {
  return (LineLabel.$clinit(), LineLabel.$static_DEFAULT_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel);
 }
 
 static $clinit() {
  LineLabel.$clinit = () =>{};
  LineLabel.$loadModules();
  AbstractNode.$clinit();
  IsDefaultsLineLabel.$clinit();
  HasBackgroundColor.$clinit();
  LineLabel.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_annotation_LineLabel = Color.$create__int__int__int(0, 0, 0).m_alpha__double(0.8);
  LineLabel.$static_DEFAULT_BACKGROUND_COLOR_AS_STRING__org_pepstock_charba_client_annotation_LineLabel = LineLabel.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_annotation_LineLabel.m_toRGBA__();
  LineLabel.$static_DEFAULT_FONT_STYLE__org_pepstock_charba_client_annotation_LineLabel = FontStyle.f_BOLD__org_pepstock_charba_client_enums_FontStyle;
  LineLabel.$static_DEFAULT_COLOR__org_pepstock_charba_client_annotation_LineLabel = HtmlColor.f_WHITE__org_pepstock_charba_client_colors_HtmlColor;
  LineLabel.$static_DEFAULT_FONT_COLOR_AS_STRING__org_pepstock_charba_client_annotation_LineLabel = LineLabel.$static_DEFAULT_COLOR__org_pepstock_charba_client_annotation_LineLabel.m_toRGB__();
  LineLabel.$static_DEFAULT_POSITION__org_pepstock_charba_client_annotation_LineLabel = LabelPosition.f_CENTER__org_pepstock_charba_client_annotation_enums_LabelPosition;
  LineLabel.$static_DEFAULT_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel = TextAlign.f_CENTER__org_pepstock_charba_client_enums_TextAlign;
  LineLabel.f_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {!CallbackPropertyHandler<ColorCallback<AnnotationContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_COLOR__org_pepstock_charba_client_annotation_LineLabel_Property));
  LineLabel.f_CONTENT_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {!CallbackPropertyHandler<ContentCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_CONTENT__org_pepstock_charba_client_annotation_LineLabel_Property));
  LineLabel.f_DISPLAY_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {!CallbackPropertyHandler<DisplayCallback<AnnotationContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ENABLED__org_pepstock_charba_client_annotation_LineLabel_Property));
  LineLabel.f_ROTATION_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {!CallbackPropertyHandler<RotationCallback<AnnotationContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_ROTATION__org_pepstock_charba_client_annotation_LineLabel_Property));
  LineLabel.f_CORNER_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {!CallbackPropertyHandler<CornerRadiusCallback<AnnotationContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_CORNER_RADIUS__org_pepstock_charba_client_annotation_LineLabel_Property));
  LineLabel.f_IMAGE_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {!CallbackPropertyHandler<ImageSizeCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_WIDTH__org_pepstock_charba_client_annotation_LineLabel_Property));
  LineLabel.f_IMAGE_HEIGHT_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {!CallbackPropertyHandler<ImageSizeCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_HEIGHT__org_pepstock_charba_client_annotation_LineLabel_Property));
  LineLabel.f_POSITION_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {!CallbackPropertyHandler<LabelPositionCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_POSITION__org_pepstock_charba_client_annotation_LineLabel_Property));
  LineLabel.f_TEXT_ALIGN_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {!CallbackPropertyHandler<TextAlignCallback<AnnotationContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel_Property));
  LineLabel.f_X_PADDING_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {!CallbackPropertyHandler<PaddingSizeCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_X_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property));
  LineLabel.f_Y_PADDING_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {!CallbackPropertyHandler<PaddingSizeCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_Y_PADDING__org_pepstock_charba_client_annotation_LineLabel_Property));
  LineLabel.f_X_ADJUST_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {!CallbackPropertyHandler<AdjustSizeCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_X_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property));
  LineLabel.f_Y_ADJUST_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {!CallbackPropertyHandler<AdjustSizeCallback>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_Y_ADJUST__org_pepstock_charba_client_annotation_LineLabel_Property));
  LineLabel.f_FONT_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_ = /**@type {!CallbackPropertyHandler<FontCallback<AnnotationContext>>}*/ (CallbackPropertyHandler.$create__org_pepstock_charba_client_commons_Key(Property.f_FONT__org_pepstock_charba_client_annotation_LineLabel_Property));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LineLabel;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Number = goog.module.get('java.lang.Number$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  List = goog.module.get('java.util.List$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AnnotationContext = goog.module.get('org.pepstock.charba.client.annotation.AnnotationContext$impl');
  AnnotationOptions_Property = goog.module.get('org.pepstock.charba.client.annotation.AnnotationOptions.Property$impl');
  AnnotationPlugin = goog.module.get('org.pepstock.charba.client.annotation.AnnotationPlugin$impl');
  BackgroundColorHandler = goog.module.get('org.pepstock.charba.client.annotation.BackgroundColorHandler$impl');
  Font = goog.module.get('org.pepstock.charba.client.annotation.Font$impl');
  Property = goog.module.get('org.pepstock.charba.client.annotation.LineLabel.Property$impl');
  AdjustSizeCallback = goog.module.get('org.pepstock.charba.client.annotation.callbacks.AdjustSizeCallback$impl');
  ContentCallback = goog.module.get('org.pepstock.charba.client.annotation.callbacks.ContentCallback$impl');
  ImageSizeCallback = goog.module.get('org.pepstock.charba.client.annotation.callbacks.ImageSizeCallback$impl');
  LabelPositionCallback = goog.module.get('org.pepstock.charba.client.annotation.callbacks.LabelPositionCallback$impl');
  PaddingSizeCallback = goog.module.get('org.pepstock.charba.client.annotation.callbacks.PaddingSizeCallback$impl');
  DrawTime = goog.module.get('org.pepstock.charba.client.annotation.enums.DrawTime$impl');
  LabelPosition = goog.module.get('org.pepstock.charba.client.annotation.enums.LabelPosition$impl');
  ColorCallback = goog.module.get('org.pepstock.charba.client.callbacks.ColorCallback$impl');
  CornerRadiusCallback = goog.module.get('org.pepstock.charba.client.callbacks.CornerRadiusCallback$impl');
  DisplayCallback = goog.module.get('org.pepstock.charba.client.callbacks.DisplayCallback$impl');
  FontCallback = goog.module.get('org.pepstock.charba.client.callbacks.FontCallback$impl');
  RotationCallback = goog.module.get('org.pepstock.charba.client.callbacks.RotationCallback$impl');
  ScriptableUtils = goog.module.get('org.pepstock.charba.client.callbacks.ScriptableUtils$impl');
  TextAlignCallback = goog.module.get('org.pepstock.charba.client.callbacks.TextAlignCallback$impl');
  Color = goog.module.get('org.pepstock.charba.client.colors.Color$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  ArrayString_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayString.$Overlay$impl');
  CallbackPropertyHandler = goog.module.get('org.pepstock.charba.client.commons.CallbackPropertyHandler$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  ObjectType = goog.module.get('org.pepstock.charba.client.commons.ObjectType$impl');
  Img_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
  FontStyle = goog.module.get('org.pepstock.charba.client.enums.FontStyle$impl');
  TextAlign = goog.module.get('org.pepstock.charba.client.enums.TextAlign$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Numbers = goog.module.get('vmbootstrap.Numbers$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {number}*/
LineLabel.f_AUTO_ROTATION__org_pepstock_charba_client_annotation_LineLabel = NaN;
/**@const {boolean}*/
LineLabel.f_DEFAULT_DISPLAY__org_pepstock_charba_client_annotation_LineLabel = false;
/**@private {IsColor}*/
LineLabel.$static_DEFAULT_BACKGROUND_COLOR__org_pepstock_charba_client_annotation_LineLabel;
/**@private {?string}*/
LineLabel.$static_DEFAULT_BACKGROUND_COLOR_AS_STRING__org_pepstock_charba_client_annotation_LineLabel;
/**@private {FontStyle}*/
LineLabel.$static_DEFAULT_FONT_STYLE__org_pepstock_charba_client_annotation_LineLabel;
/**@private {IsColor}*/
LineLabel.$static_DEFAULT_COLOR__org_pepstock_charba_client_annotation_LineLabel;
/**@private {?string}*/
LineLabel.$static_DEFAULT_FONT_COLOR_AS_STRING__org_pepstock_charba_client_annotation_LineLabel;
/**@const {number}*/
LineLabel.f_DEFAULT_X_PADDING__org_pepstock_charba_client_annotation_LineLabel = 6;
/**@const {number}*/
LineLabel.f_DEFAULT_Y_PADDING__org_pepstock_charba_client_annotation_LineLabel = 6;
/**@const {number}*/
LineLabel.f_DEFAULT_CORNER_RADIUS__org_pepstock_charba_client_annotation_LineLabel = 6;
/**@private {LabelPosition}*/
LineLabel.$static_DEFAULT_POSITION__org_pepstock_charba_client_annotation_LineLabel;
/**@const {number}*/
LineLabel.f_DEFAULT_X_ADJUST__org_pepstock_charba_client_annotation_LineLabel = 0;
/**@const {number}*/
LineLabel.f_DEFAULT_Y_ADJUST__org_pepstock_charba_client_annotation_LineLabel = 0;
/**@private {TextAlign}*/
LineLabel.$static_DEFAULT_TEXT_ALIGN__org_pepstock_charba_client_annotation_LineLabel;
/**@const {number}*/
LineLabel.f_DEFAULT_ROTATION__org_pepstock_charba_client_annotation_LineLabel = 0;
/**@const {?string}*/
LineLabel.f_AUTO_ROTATION_AS_STRING__org_pepstock_charba_client_annotation_LineLabel_ = "auto";
/**@type {CallbackPropertyHandler<ColorCallback<AnnotationContext>>}*/
LineLabel.f_COLOR_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_;
/**@type {CallbackPropertyHandler<ContentCallback>}*/
LineLabel.f_CONTENT_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_;
/**@type {CallbackPropertyHandler<DisplayCallback<AnnotationContext>>}*/
LineLabel.f_DISPLAY_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_;
/**@type {CallbackPropertyHandler<RotationCallback<AnnotationContext>>}*/
LineLabel.f_ROTATION_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_;
/**@type {CallbackPropertyHandler<CornerRadiusCallback<AnnotationContext>>}*/
LineLabel.f_CORNER_RADIUS_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_;
/**@type {CallbackPropertyHandler<ImageSizeCallback>}*/
LineLabel.f_IMAGE_WIDTH_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_;
/**@type {CallbackPropertyHandler<ImageSizeCallback>}*/
LineLabel.f_IMAGE_HEIGHT_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_;
/**@type {CallbackPropertyHandler<LabelPositionCallback>}*/
LineLabel.f_POSITION_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_;
/**@type {CallbackPropertyHandler<TextAlignCallback<AnnotationContext>>}*/
LineLabel.f_TEXT_ALIGN_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_;
/**@type {CallbackPropertyHandler<PaddingSizeCallback>}*/
LineLabel.f_X_PADDING_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_;
/**@type {CallbackPropertyHandler<PaddingSizeCallback>}*/
LineLabel.f_Y_PADDING_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_;
/**@type {CallbackPropertyHandler<AdjustSizeCallback>}*/
LineLabel.f_X_ADJUST_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_;
/**@type {CallbackPropertyHandler<AdjustSizeCallback>}*/
LineLabel.f_Y_ADJUST_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_;
/**@type {CallbackPropertyHandler<FontCallback<AnnotationContext>>}*/
LineLabel.f_FONT_PROPERTY_HANDLER__org_pepstock_charba_client_annotation_LineLabel_;
IsDefaultsLineLabel.$markImplementor(LineLabel);
HasBackgroundColor.$markImplementor(LineLabel);
IsScriptableFontProvider.$markImplementor(LineLabel);
$Util.$setClassMetadata(LineLabel, "org.pepstock.charba.client.annotation.LineLabel");

exports = LineLabel;

//# sourceMappingURL=LineLabel.js.map
