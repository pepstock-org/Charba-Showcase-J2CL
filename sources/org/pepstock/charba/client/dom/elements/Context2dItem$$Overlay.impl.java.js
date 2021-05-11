goog.module('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ColorBuilder = goog.forwardDeclare('org.pepstock.charba.client.colors.ColorBuilder$impl');
let HtmlColor = goog.forwardDeclare('org.pepstock.charba.client.colors.HtmlColor$impl');
let IsColor = goog.forwardDeclare('org.pepstock.charba.client.colors.IsColor$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let Checker = goog.forwardDeclare('org.pepstock.charba.client.commons.Checker$impl');
let JsHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.JsHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let Canvas_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
let CanvasGradientItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay$impl');
let CanvasPatternItem_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay$impl');
let Img_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
let Repetition = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.Repetition$impl');
let TextBaseline = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.TextBaseline$impl');
let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');
let TextAlign = goog.forwardDeclare('org.pepstock.charba.client.enums.TextAlign$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $Overlay {
 
 static m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(/** !CanvasRenderingContext2D */ $thisArg, /** ?string */ color) {
  $Overlay.$clinit();
  if (!$Equality.$same(color, null)) {
   $thisArg.fillStyle = color;
  }
 }
 
 static m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_colors_IsColor(/** !CanvasRenderingContext2D */ $thisArg, /** IsColor */ color) {
  $Overlay.$clinit();
  if (IsColor.m_isValid__org_pepstock_charba_client_colors_IsColor(color)) {
   $Overlay.m_setFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String($thisArg, color.m_toRGBA__());
  }
 }
 
 static m_setFillGradient__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_CanvasGradientItem(/** !CanvasRenderingContext2D */ $thisArg, /** CanvasGradient */ gradient) {
  $Overlay.$clinit();
  if (!$Equality.$same(gradient, null)) {
   $thisArg.fillStyle = gradient;
  }
 }
 
 static m_setFillPattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_CanvasPatternItem(/** !CanvasRenderingContext2D */ $thisArg, /** CanvasPattern */ pattern) {
  $Overlay.$clinit();
  if (!$Equality.$same(pattern, null)) {
   $thisArg.fillStyle = pattern;
  }
 }
 /** @return {?string} */
 static m_getFillColorAsString__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem(/** !CanvasRenderingContext2D */ $thisArg) {
  $Overlay.$clinit();
  return $Overlay.m_getColorAsString__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, $thisArg.fillStyle);
 }
 /** @return {IsColor} */
 static m_getFillColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem(/** !CanvasRenderingContext2D */ $thisArg) {
  $Overlay.$clinit();
  return $Overlay.m_getColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, $thisArg.fillStyle);
 }
 /** @return {CanvasGradient} */
 static m_getFillGradient__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem(/** !CanvasRenderingContext2D */ $thisArg) {
  $Overlay.$clinit();
  return $Overlay.m_getGradient__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, $thisArg.fillStyle);
 }
 /** @return {CanvasPattern} */
 static m_getFillPattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem(/** !CanvasRenderingContext2D */ $thisArg) {
  $Overlay.$clinit();
  return $Overlay.m_getPattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, $thisArg.fillStyle);
 }
 
 static m_setLineCap__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_enums_CapStyle(/** !CanvasRenderingContext2D */ $thisArg, /** CapStyle */ lineCap) {
  $Overlay.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(lineCap)) {
   $thisArg.lineCap = lineCap.m_value__();
  }
 }
 /** @return {CapStyle} */
 static m_getLineCap__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem(/** !CanvasRenderingContext2D */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {CapStyle}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String__org_pepstock_charba_client_commons_Key(CapStyle.m_values__(), $thisArg.lineCap, CapStyle.f_BUTT__org_pepstock_charba_client_enums_CapStyle), CapStyle));
 }
 
 static m_setLineJoin__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_enums_JoinStyle(/** !CanvasRenderingContext2D */ $thisArg, /** JoinStyle */ lineJoin) {
  $Overlay.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(lineJoin)) {
   $thisArg.lineJoin = lineJoin.m_value__();
  }
 }
 /** @return {JoinStyle} */
 static m_getLineJoin__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem(/** !CanvasRenderingContext2D */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {JoinStyle}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String__org_pepstock_charba_client_commons_Key(JoinStyle.m_values__(), $thisArg.lineJoin, JoinStyle.f_BEVEL__org_pepstock_charba_client_enums_JoinStyle), JoinStyle));
 }
 
 static m_setLineDash__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__arrayOf_int(/** !CanvasRenderingContext2D */ $thisArg, /** Array<number> */ lineDash) {
  $Overlay.$clinit();
  $thisArg.setLineDash(ArrayInteger_$Overlay.m_fromOrEmpty__arrayOf_int(lineDash));
 }
 
 static m_setLineDash__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_util_List(/** !CanvasRenderingContext2D */ $thisArg, /** List<Integer> */ lineDash) {
  $Overlay.$clinit();
  $thisArg.setLineDash(ArrayInteger_$Overlay.m_fromOrEmpty__java_util_List(lineDash));
 }
 
 static m_setStrokeColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String(/** !CanvasRenderingContext2D */ $thisArg, /** ?string */ color) {
  $Overlay.$clinit();
  if (!$Equality.$same(color, null)) {
   $thisArg.strokeStyle = color;
  }
 }
 
 static m_setStrokeColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_colors_IsColor(/** !CanvasRenderingContext2D */ $thisArg, /** IsColor */ color) {
  $Overlay.$clinit();
  if (IsColor.m_isValid__org_pepstock_charba_client_colors_IsColor(color)) {
   $Overlay.m_setStrokeColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_String($thisArg, color.m_toRGBA__());
  }
 }
 
 static m_setStrokeGradient__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_CanvasGradientItem(/** !CanvasRenderingContext2D */ $thisArg, /** CanvasGradient */ gradient) {
  $Overlay.$clinit();
  if (!$Equality.$same(gradient, null)) {
   $thisArg.strokeStyle = gradient;
  }
 }
 
 static m_setStrokePattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_CanvasPatternItem(/** !CanvasRenderingContext2D */ $thisArg, /** CanvasPattern */ pattern) {
  $Overlay.$clinit();
  if (!$Equality.$same(pattern, null)) {
   $thisArg.strokeStyle = pattern;
  }
 }
 /** @return {?string} */
 static m_getStrokeColorAsString__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem(/** !CanvasRenderingContext2D */ $thisArg) {
  $Overlay.$clinit();
  return $Overlay.m_getColorAsString__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, $thisArg.strokeStyle);
 }
 /** @return {IsColor} */
 static m_getStrokeColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem(/** !CanvasRenderingContext2D */ $thisArg) {
  $Overlay.$clinit();
  return $Overlay.m_getColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, $thisArg.strokeStyle);
 }
 /** @return {CanvasGradient} */
 static m_getStrokeGradient__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem(/** !CanvasRenderingContext2D */ $thisArg) {
  $Overlay.$clinit();
  return $Overlay.m_getGradient__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, $thisArg.strokeStyle);
 }
 /** @return {CanvasPattern} */
 static m_getStrokePattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem(/** !CanvasRenderingContext2D */ $thisArg) {
  $Overlay.$clinit();
  return $Overlay.m_getPattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, $thisArg.fillStyle);
 }
 
 static m_setTextAlign__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_enums_TextAlign(/** !CanvasRenderingContext2D */ $thisArg, /** TextAlign */ textAlign) {
  $Overlay.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(textAlign)) {
   $thisArg.textAlign = textAlign.m_value__();
  }
 }
 /** @return {TextAlign} */
 static m_getTextAlign__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem(/** !CanvasRenderingContext2D */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {TextAlign}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String__org_pepstock_charba_client_commons_Key(TextAlign.m_values__(), $thisArg.textAlign, TextAlign.f_START__org_pepstock_charba_client_enums_TextAlign), TextAlign));
 }
 
 static m_setTextBaseline__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_enums_TextBaseline(/** !CanvasRenderingContext2D */ $thisArg, /** TextBaseline */ textBaseline) {
  $Overlay.$clinit();
  if (Key.m_isValid__org_pepstock_charba_client_commons_Key(textBaseline)) {
   $thisArg.textBaseline = textBaseline.m_value__();
  }
 }
 /** @return {TextBaseline} */
 static m_getTextBaseline__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem(/** !CanvasRenderingContext2D */ $thisArg) {
  $Overlay.$clinit();
  return /**@type {TextBaseline}*/ ($Casts.$to(Key.m_getKeyByValue__arrayOf_org_pepstock_charba_client_commons_Key__java_lang_String__org_pepstock_charba_client_commons_Key(TextBaseline.m_values__(), $thisArg.textBaseline, TextBaseline.f_ALPHABETIC__org_pepstock_charba_client_dom_enums_TextBaseline), TextBaseline));
 }
 /** @return {CanvasPattern} */
 static m_createPattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Canvas__org_pepstock_charba_client_dom_enums_Repetition(/** !CanvasRenderingContext2D */ $thisArg, /** HTMLCanvasElement */ canvas, /** Repetition */ repetition) {
  $Overlay.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(canvas, "Canvas element");
  let checkedRepetition = Key.m_isValid__org_pepstock_charba_client_commons_Key(repetition) ? repetition : Repetition.f_NO_REPEAT__org_pepstock_charba_client_dom_enums_Repetition;
  return $thisArg.createPattern(canvas, checkedRepetition.m_value__());
 }
 /** @return {CanvasPattern} */
 static m_createPattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Img__org_pepstock_charba_client_dom_enums_Repetition(/** !CanvasRenderingContext2D */ $thisArg, /** HTMLImageElement */ image, /** Repetition */ repetition) {
  $Overlay.$clinit();
  Checker.m_checkIfValid__java_lang_Object__java_lang_String(image, "Image element");
  let checkedRepetition = Key.m_isValid__org_pepstock_charba_client_commons_Key(repetition) ? repetition : Repetition.f_NO_REPEAT__org_pepstock_charba_client_dom_enums_Repetition;
  return $thisArg.createPattern(image, checkedRepetition.m_value__());
 }
 
 static m_drawImage__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Canvas__double__double__double__double(/** !CanvasRenderingContext2D */ $thisArg, /** HTMLCanvasElement */ canvas, /** number */ dx, /** number */ dy, /** number */ dWidth, /** number */ dHeight) {
  $Overlay.$clinit();
  $thisArg.drawImage(/**@type {HTMLCanvasElement}*/ ($Casts.$to($Overlay.m_checkAndGetDrawImageArgument__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, canvas), Canvas_$Overlay)), dx, dy, dWidth, dHeight);
 }
 
 static m_drawImage__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Canvas__double__double__double(/** !CanvasRenderingContext2D */ $thisArg, /** HTMLCanvasElement */ canvas, /** number */ dx, /** number */ dy, /** number */ dWidth) {
  $Overlay.$clinit();
  $thisArg.drawImage(/**@type {HTMLCanvasElement}*/ ($Casts.$to($Overlay.m_checkAndGetDrawImageArgument__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, canvas), Canvas_$Overlay)), dx, dy, dWidth);
 }
 
 static m_drawImage__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Canvas__double__double(/** !CanvasRenderingContext2D */ $thisArg, /** HTMLCanvasElement */ canvas, /** number */ dx, /** number */ dy) {
  $Overlay.$clinit();
  $thisArg.drawImage(/**@type {HTMLCanvasElement}*/ ($Casts.$to($Overlay.m_checkAndGetDrawImageArgument__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, canvas), Canvas_$Overlay)), dx, dy);
 }
 
 static m_drawImage__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Img__double__double__double__double(/** !CanvasRenderingContext2D */ $thisArg, /** HTMLImageElement */ image, /** number */ dx, /** number */ dy, /** number */ dWidth, /** number */ dHeight) {
  $Overlay.$clinit();
  $thisArg.drawImage(/**@type {HTMLImageElement}*/ ($Casts.$to($Overlay.m_checkAndGetDrawImageArgument__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, image), Img_$Overlay)), dx, dy, dWidth, dHeight);
 }
 
 static m_drawImage__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Img__double__double__double(/** !CanvasRenderingContext2D */ $thisArg, /** HTMLImageElement */ image, /** number */ dx, /** number */ dy, /** number */ dWidth) {
  $Overlay.$clinit();
  $thisArg.drawImage(/**@type {HTMLImageElement}*/ ($Casts.$to($Overlay.m_checkAndGetDrawImageArgument__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, image), Img_$Overlay)), dx, dy, dWidth);
 }
 
 static m_drawImage__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__org_pepstock_charba_client_dom_elements_Img__double__double(/** !CanvasRenderingContext2D */ $thisArg, /** HTMLImageElement */ image, /** number */ dx, /** number */ dy) {
  $Overlay.$clinit();
  $thisArg.drawImage(/**@type {HTMLImageElement}*/ ($Casts.$to($Overlay.m_checkAndGetDrawImageArgument__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, image), Img_$Overlay)), dx, dy);
 }
 /** @template T @return {T} */
 static m_checkAndGetDrawImageArgument__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object(/** !CanvasRenderingContext2D */ $thisArg, /** T */ object) {
  return Checker.m_checkAndGetIfValid__java_lang_Object__java_lang_String(object, "Object to draw");
 }
 /** @return {?string} */
 static m_getColorAsString__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object(/** !CanvasRenderingContext2D */ $thisArg, /** * */ value) {
  if (j_l_String.$isInstance(value)) {
   return /**@type {?string}*/ ($Casts.$to(value, j_l_String));
  } else if ($Equality.$same(value, null)) {
   return HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor.m_toHex__();
  }
  return Undefined.f_STRING__org_pepstock_charba_client_items_Undefined;
 }
 /** @return {IsColor} */
 static m_getColor__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object(/** !CanvasRenderingContext2D */ $thisArg, /** * */ value) {
  let valueAsString = $Overlay.m_getColorAsString__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object($thisArg, value);
  if (!$Equality.$same(valueAsString, null)) {
   return ColorBuilder.m_parse__java_lang_String(valueAsString);
  }
  return HtmlColor.f_BLACK__org_pepstock_charba_client_colors_HtmlColor;
 }
 /** @return {CanvasGradient} */
 static m_getGradient__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object(/** !CanvasRenderingContext2D */ $thisArg, /** * */ value) {
  if (JsHelper.m_get__().m_isCanvasGradient__java_lang_Object(value)) {
   return /**@type {CanvasGradient}*/ ($Casts.$to(JsHelper.m_get__().m_cast__java_lang_Object(value), CanvasGradientItem_$Overlay));
  }
  return null;
 }
 /** @return {CanvasPattern} */
 static m_getPattern__$devirt__org_pepstock_charba_client_dom_elements_Context2dItem__java_lang_Object(/** !CanvasRenderingContext2D */ $thisArg, /** * */ value) {
  if (JsHelper.m_get__().m_isCanvasPattern__java_lang_Object(value)) {
   return /**@type {CanvasPattern}*/ ($Casts.$to(JsHelper.m_get__().m_cast__java_lang_Object(value), CanvasPatternItem_$Overlay));
  }
  return null;
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CanvasRenderingContext2D;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ColorBuilder = goog.module.get('org.pepstock.charba.client.colors.ColorBuilder$impl');
  HtmlColor = goog.module.get('org.pepstock.charba.client.colors.HtmlColor$impl');
  IsColor = goog.module.get('org.pepstock.charba.client.colors.IsColor$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  Checker = goog.module.get('org.pepstock.charba.client.commons.Checker$impl');
  JsHelper = goog.module.get('org.pepstock.charba.client.commons.JsHelper$impl');
  Key = goog.module.get('org.pepstock.charba.client.commons.Key$impl');
  Canvas_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Canvas.$Overlay$impl');
  CanvasGradientItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.CanvasGradientItem.$Overlay$impl');
  CanvasPatternItem_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.CanvasPatternItem.$Overlay$impl');
  Img_$Overlay = goog.module.get('org.pepstock.charba.client.dom.elements.Img.$Overlay$impl');
  Repetition = goog.module.get('org.pepstock.charba.client.dom.enums.Repetition$impl');
  TextBaseline = goog.module.get('org.pepstock.charba.client.dom.enums.TextBaseline$impl');
  CapStyle = goog.module.get('org.pepstock.charba.client.enums.CapStyle$impl');
  JoinStyle = goog.module.get('org.pepstock.charba.client.enums.JoinStyle$impl');
  TextAlign = goog.module.get('org.pepstock.charba.client.enums.TextAlign$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata($Overlay, "CanvasRenderingContext2D");

exports = $Overlay;

//# sourceMappingURL=Context2dItem$$Overlay.js.map
