goog.module('org.pepstock.charba.client.dom.enums.CursorType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Key = goog.require('org.pepstock.charba.client.commons.Key$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<CursorType>}
 * @implements {Key}
 */
class CursorType extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_pepstock_charba_client_dom_enums_CursorType_;
 }
 /** @return {!CursorType} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new CursorType();
  $instance.$ctor__org_pepstock_charba_client_dom_enums_CursorType__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_dom_enums_CursorType__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_pepstock_charba_client_dom_enums_CursorType_ = value;
 }
 /** @override @return {?string} */
 m_value__() {
  return this.f_value__org_pepstock_charba_client_dom_enums_CursorType_;
 }
 /** @return {!CursorType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  CursorType.$clinit();
  if ($Equality.$same(CursorType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_CursorType_, null)) {
   CursorType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_CursorType_ = $Enums.createMapFromValues(CursorType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, CursorType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_CursorType_);
 }
 /** @return {!Array<!CursorType>} */
 static m_values__() {
  CursorType.$clinit();
  return /**@type {!Array<CursorType>}*/ ($Arrays.$init([CursorType.$static_AUTO__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_DEFAULT__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_NONE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_CONTEXT_MENU__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_HELP__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_POINTER__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_PROGRESS__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_WAIT__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_CELL__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_CROSSHAIR__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_TEXT__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_VERTICAL_TEXT__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_ALIAS__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_COPY__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_MOVE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_NO_DROP__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_NOT_ALLOWED__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_GRAB__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_GRABBING__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_ALL_SCROLL__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_COL_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_ROW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_N_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_E_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_S_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_W_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_NE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_NW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_SE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_SW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_EW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_NS_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_NESW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_NWSE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_ZOOM_IN__org_pepstock_charba_client_dom_enums_CursorType, CursorType.$static_ZOOM_OUT__org_pepstock_charba_client_dom_enums_CursorType], CursorType));
 }
 /** @return {!CursorType} */
 static get f_AUTO__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_AUTO__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_DEFAULT__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_DEFAULT__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_NONE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_NONE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_CONTEXT_MENU__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_CONTEXT_MENU__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_HELP__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_HELP__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_POINTER__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_POINTER__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_PROGRESS__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_PROGRESS__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_WAIT__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_WAIT__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_CELL__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_CELL__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_CROSSHAIR__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_CROSSHAIR__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_TEXT__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_TEXT__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_VERTICAL_TEXT__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_VERTICAL_TEXT__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_ALIAS__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_ALIAS__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_COPY__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_COPY__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_MOVE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_MOVE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_NO_DROP__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_NO_DROP__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_NOT_ALLOWED__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_NOT_ALLOWED__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_GRAB__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_GRAB__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_GRABBING__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_GRABBING__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_ALL_SCROLL__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_ALL_SCROLL__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_COL_RESIZE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_COL_RESIZE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_ROW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_ROW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_N_RESIZE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_N_RESIZE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_E_RESIZE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_E_RESIZE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_S_RESIZE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_S_RESIZE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_W_RESIZE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_W_RESIZE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_NE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_NE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_NW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_NW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_SE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_SE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_SW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_SW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_EW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_EW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_NS_RESIZE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_NS_RESIZE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_NESW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_NESW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_NWSE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_NWSE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_ZOOM_IN__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_ZOOM_IN__org_pepstock_charba_client_dom_enums_CursorType);
 }
 /** @return {!CursorType} */
 static get f_ZOOM_OUT__org_pepstock_charba_client_dom_enums_CursorType() {
  return (CursorType.$clinit(), CursorType.$static_ZOOM_OUT__org_pepstock_charba_client_dom_enums_CursorType);
 }
 
 static $clinit() {
  CursorType.$clinit = () =>{};
  CursorType.$loadModules();
  Enum.$clinit();
  CursorType.$static_AUTO__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AUTO"), CursorType.$ordinal_AUTO__org_pepstock_charba_client_dom_enums_CursorType, "auto");
  CursorType.$static_DEFAULT__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DEFAULT"), CursorType.$ordinal_DEFAULT__org_pepstock_charba_client_dom_enums_CursorType, "default");
  CursorType.$static_NONE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NONE"), CursorType.$ordinal_NONE__org_pepstock_charba_client_dom_enums_CursorType, "none");
  CursorType.$static_CONTEXT_MENU__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONTEXT_MENU"), CursorType.$ordinal_CONTEXT_MENU__org_pepstock_charba_client_dom_enums_CursorType, "context-menu");
  CursorType.$static_HELP__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("HELP"), CursorType.$ordinal_HELP__org_pepstock_charba_client_dom_enums_CursorType, "help");
  CursorType.$static_POINTER__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("POINTER"), CursorType.$ordinal_POINTER__org_pepstock_charba_client_dom_enums_CursorType, "pointer");
  CursorType.$static_PROGRESS__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PROGRESS"), CursorType.$ordinal_PROGRESS__org_pepstock_charba_client_dom_enums_CursorType, "progress");
  CursorType.$static_WAIT__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WAIT"), CursorType.$ordinal_WAIT__org_pepstock_charba_client_dom_enums_CursorType, "wait");
  CursorType.$static_CELL__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CELL"), CursorType.$ordinal_CELL__org_pepstock_charba_client_dom_enums_CursorType, "cell");
  CursorType.$static_CROSSHAIR__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CROSSHAIR"), CursorType.$ordinal_CROSSHAIR__org_pepstock_charba_client_dom_enums_CursorType, "crosshair");
  CursorType.$static_TEXT__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("TEXT"), CursorType.$ordinal_TEXT__org_pepstock_charba_client_dom_enums_CursorType, "text");
  CursorType.$static_VERTICAL_TEXT__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("VERTICAL_TEXT"), CursorType.$ordinal_VERTICAL_TEXT__org_pepstock_charba_client_dom_enums_CursorType, "vertical-text");
  CursorType.$static_ALIAS__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALIAS"), CursorType.$ordinal_ALIAS__org_pepstock_charba_client_dom_enums_CursorType, "alias");
  CursorType.$static_COPY__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COPY"), CursorType.$ordinal_COPY__org_pepstock_charba_client_dom_enums_CursorType, "copy");
  CursorType.$static_MOVE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MOVE"), CursorType.$ordinal_MOVE__org_pepstock_charba_client_dom_enums_CursorType, "move");
  CursorType.$static_NO_DROP__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NO_DROP"), CursorType.$ordinal_NO_DROP__org_pepstock_charba_client_dom_enums_CursorType, "no-drop");
  CursorType.$static_NOT_ALLOWED__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NOT_ALLOWED"), CursorType.$ordinal_NOT_ALLOWED__org_pepstock_charba_client_dom_enums_CursorType, "not-allowed");
  CursorType.$static_GRAB__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GRAB"), CursorType.$ordinal_GRAB__org_pepstock_charba_client_dom_enums_CursorType, "grab");
  CursorType.$static_GRABBING__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("GRABBING"), CursorType.$ordinal_GRABBING__org_pepstock_charba_client_dom_enums_CursorType, "grabbing");
  CursorType.$static_ALL_SCROLL__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALL_SCROLL"), CursorType.$ordinal_ALL_SCROLL__org_pepstock_charba_client_dom_enums_CursorType, "all-scroll");
  CursorType.$static_COL_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COL_RESIZE"), CursorType.$ordinal_COL_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, "col-resize");
  CursorType.$static_ROW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROW_RESIZE"), CursorType.$ordinal_ROW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, "row-resize");
  CursorType.$static_N_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("N_RESIZE"), CursorType.$ordinal_N_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, "n-resize");
  CursorType.$static_E_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("E_RESIZE"), CursorType.$ordinal_E_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, "e-resize");
  CursorType.$static_S_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("S_RESIZE"), CursorType.$ordinal_S_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, "s-resize");
  CursorType.$static_W_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("W_RESIZE"), CursorType.$ordinal_W_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, "w-resize");
  CursorType.$static_NE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NE_RESIZE"), CursorType.$ordinal_NE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, "ne-resize");
  CursorType.$static_NW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NW_RESIZE"), CursorType.$ordinal_NW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, "nw-resize");
  CursorType.$static_SE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SE_RESIZE"), CursorType.$ordinal_SE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, "se-resize");
  CursorType.$static_SW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SW_RESIZE"), CursorType.$ordinal_SW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, "sw-resize");
  CursorType.$static_EW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EW_RESIZE"), CursorType.$ordinal_EW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, "ew-resize");
  CursorType.$static_NS_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NS_RESIZE"), CursorType.$ordinal_NS_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, "ns-resize");
  CursorType.$static_NESW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NESW_RESIZE"), CursorType.$ordinal_NESW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, "nesw-resize");
  CursorType.$static_NWSE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NWSE_RESIZE"), CursorType.$ordinal_NWSE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType, "nwse-resize");
  CursorType.$static_ZOOM_IN__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ZOOM_IN"), CursorType.$ordinal_ZOOM_IN__org_pepstock_charba_client_dom_enums_CursorType, "zoom-in");
  CursorType.$static_ZOOM_OUT__org_pepstock_charba_client_dom_enums_CursorType = CursorType.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ZOOM_OUT"), CursorType.$ordinal_ZOOM_OUT__org_pepstock_charba_client_dom_enums_CursorType, "zoom-out");
  CursorType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_CursorType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CursorType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@private {!CursorType}*/
CursorType.$static_AUTO__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_DEFAULT__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_NONE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_CONTEXT_MENU__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_HELP__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_POINTER__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_PROGRESS__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_WAIT__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_CELL__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_CROSSHAIR__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_TEXT__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_VERTICAL_TEXT__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_ALIAS__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_COPY__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_MOVE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_NO_DROP__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_NOT_ALLOWED__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_GRAB__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_GRABBING__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_ALL_SCROLL__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_COL_RESIZE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_ROW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_N_RESIZE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_E_RESIZE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_S_RESIZE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_W_RESIZE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_NE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_NW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_SE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_SW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_EW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_NS_RESIZE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_NESW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_NWSE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_ZOOM_IN__org_pepstock_charba_client_dom_enums_CursorType;
/**@private {!CursorType}*/
CursorType.$static_ZOOM_OUT__org_pepstock_charba_client_dom_enums_CursorType;
/**@type {Map<?string, !CursorType>}*/
CursorType.f_namesToValuesMap__org_pepstock_charba_client_dom_enums_CursorType_;
/**@const {number}*/
CursorType.$ordinal_AUTO__org_pepstock_charba_client_dom_enums_CursorType = 0;
/**@const {number}*/
CursorType.$ordinal_DEFAULT__org_pepstock_charba_client_dom_enums_CursorType = 1;
/**@const {number}*/
CursorType.$ordinal_NONE__org_pepstock_charba_client_dom_enums_CursorType = 2;
/**@const {number}*/
CursorType.$ordinal_CONTEXT_MENU__org_pepstock_charba_client_dom_enums_CursorType = 3;
/**@const {number}*/
CursorType.$ordinal_HELP__org_pepstock_charba_client_dom_enums_CursorType = 4;
/**@const {number}*/
CursorType.$ordinal_POINTER__org_pepstock_charba_client_dom_enums_CursorType = 5;
/**@const {number}*/
CursorType.$ordinal_PROGRESS__org_pepstock_charba_client_dom_enums_CursorType = 6;
/**@const {number}*/
CursorType.$ordinal_WAIT__org_pepstock_charba_client_dom_enums_CursorType = 7;
/**@const {number}*/
CursorType.$ordinal_CELL__org_pepstock_charba_client_dom_enums_CursorType = 8;
/**@const {number}*/
CursorType.$ordinal_CROSSHAIR__org_pepstock_charba_client_dom_enums_CursorType = 9;
/**@const {number}*/
CursorType.$ordinal_TEXT__org_pepstock_charba_client_dom_enums_CursorType = 10;
/**@const {number}*/
CursorType.$ordinal_VERTICAL_TEXT__org_pepstock_charba_client_dom_enums_CursorType = 11;
/**@const {number}*/
CursorType.$ordinal_ALIAS__org_pepstock_charba_client_dom_enums_CursorType = 12;
/**@const {number}*/
CursorType.$ordinal_COPY__org_pepstock_charba_client_dom_enums_CursorType = 13;
/**@const {number}*/
CursorType.$ordinal_MOVE__org_pepstock_charba_client_dom_enums_CursorType = 14;
/**@const {number}*/
CursorType.$ordinal_NO_DROP__org_pepstock_charba_client_dom_enums_CursorType = 15;
/**@const {number}*/
CursorType.$ordinal_NOT_ALLOWED__org_pepstock_charba_client_dom_enums_CursorType = 16;
/**@const {number}*/
CursorType.$ordinal_GRAB__org_pepstock_charba_client_dom_enums_CursorType = 17;
/**@const {number}*/
CursorType.$ordinal_GRABBING__org_pepstock_charba_client_dom_enums_CursorType = 18;
/**@const {number}*/
CursorType.$ordinal_ALL_SCROLL__org_pepstock_charba_client_dom_enums_CursorType = 19;
/**@const {number}*/
CursorType.$ordinal_COL_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = 20;
/**@const {number}*/
CursorType.$ordinal_ROW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = 21;
/**@const {number}*/
CursorType.$ordinal_N_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = 22;
/**@const {number}*/
CursorType.$ordinal_E_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = 23;
/**@const {number}*/
CursorType.$ordinal_S_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = 24;
/**@const {number}*/
CursorType.$ordinal_W_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = 25;
/**@const {number}*/
CursorType.$ordinal_NE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = 26;
/**@const {number}*/
CursorType.$ordinal_NW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = 27;
/**@const {number}*/
CursorType.$ordinal_SE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = 28;
/**@const {number}*/
CursorType.$ordinal_SW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = 29;
/**@const {number}*/
CursorType.$ordinal_EW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = 30;
/**@const {number}*/
CursorType.$ordinal_NS_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = 31;
/**@const {number}*/
CursorType.$ordinal_NESW_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = 32;
/**@const {number}*/
CursorType.$ordinal_NWSE_RESIZE__org_pepstock_charba_client_dom_enums_CursorType = 33;
/**@const {number}*/
CursorType.$ordinal_ZOOM_IN__org_pepstock_charba_client_dom_enums_CursorType = 34;
/**@const {number}*/
CursorType.$ordinal_ZOOM_OUT__org_pepstock_charba_client_dom_enums_CursorType = 35;
Key.$markImplementor(CursorType);
$Util.$setClassMetadataForEnum(CursorType, "org.pepstock.charba.client.dom.enums.CursorType");

exports = CursorType;

//# sourceMappingURL=CursorType.js.map
