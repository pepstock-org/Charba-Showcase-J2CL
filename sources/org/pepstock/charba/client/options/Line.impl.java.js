goog.module('org.pepstock.charba.client.options.Line$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultLine = goog.require('org.pepstock.charba.client.defaults.IsDefaultLine$impl');
const AbstractElement = goog.require('org.pepstock.charba.client.options.AbstractElement$impl');
const HasFill = goog.require('org.pepstock.charba.client.options.HasFill$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let CapStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.CapStyle$impl');
let CubicInterpolationMode = goog.forwardDeclare('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');
let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');
let JoinStyle = goog.forwardDeclare('org.pepstock.charba.client.enums.JoinStyle$impl');
let Elements = goog.forwardDeclare('org.pepstock.charba.client.options.Elements$impl');
let FillHandler = goog.forwardDeclare('org.pepstock.charba.client.options.FillHandler$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.Line.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractElement<IsDefaultLine>}
 * @implements {IsDefaultLine}
 * @implements {HasFill}
 */
class Line extends AbstractElement {
 /** @protected */
 constructor() {
  super();
  /**@type {FillHandler}*/
  this.f_fillHandler__org_pepstock_charba_client_options_Line_;
 }
 /** @return {!Line} */
 static $create__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLine__org_pepstock_charba_client_commons_NativeObject(/** Elements */ elements, /** Key */ childKey, /** IsDefaultLine */ defaultValues, /** ? */ nativeObject) {
  Line.$clinit();
  let $instance = new Line();
  $instance.$ctor__org_pepstock_charba_client_options_Line__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLine__org_pepstock_charba_client_commons_NativeObject(elements, childKey, defaultValues, nativeObject);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_options_Line__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultLine__org_pepstock_charba_client_commons_NativeObject(/** Elements */ elements, /** Key */ childKey, /** IsDefaultLine */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractElement__org_pepstock_charba_client_options_Elements__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_defaults_IsDefaultOptionsElement__org_pepstock_charba_client_commons_NativeObject(elements, childKey, defaultValues, nativeObject);
  this.f_fillHandler__org_pepstock_charba_client_options_Line_ = FillHandler.$create__org_pepstock_charba_client_commons_AbstractNode__org_pepstock_charba_client_enums_IsFill__org_pepstock_charba_client_commons_NativeObject(this, /**@type {IsDefaultLine}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLine)).m_getFill__(), this.m_getNativeObject__());
 }
 /** @override @return {FillHandler} */
 m_getFillHandler__() {
  return this.f_fillHandler__org_pepstock_charba_client_options_Line_;
 }
 
 m_setTension__double(/** number */ tension) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_TENSION__org_pepstock_charba_client_options_Line_Property, tension);
 }
 /** @override @return {number} */
 m_getTension__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_TENSION__org_pepstock_charba_client_options_Line_Property, /**@type {IsDefaultLine}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLine)).m_getTension__());
 }
 
 m_setBorderCapStyle__org_pepstock_charba_client_enums_CapStyle(/** CapStyle */ borderCapStyle) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_CAP_STYLE__org_pepstock_charba_client_options_Line_Property, borderCapStyle);
 }
 /** @override @return {CapStyle} */
 m_getBorderCapStyle__() {
  return /**@type {CapStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_CAP_STYLE__org_pepstock_charba_client_options_Line_Property, CapStyle.m_values__(), /**@type {IsDefaultLine}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLine)).m_getBorderCapStyle__()), CapStyle));
 }
 
 m_setBorderDash__arrayOf_int(/** Array<number> */ borderDash) {
  this.m_setArrayValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_BORDER_DASH__org_pepstock_charba_client_options_Line_Property, ArrayInteger_$Overlay.m_fromOrNull__arrayOf_int(borderDash));
 }
 /** @return {List<Integer>} */
 m_getBorderDash__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_DASH__org_pepstock_charba_client_options_Line_Property), ArrayInteger_$Overlay));
  return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
 }
 
 m_setBorderDashOffset__double(/** number */ borderDashOffset) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_options_Line_Property, borderDashOffset);
 }
 /** @override @return {number} */
 m_getBorderDashOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_options_Line_Property, /**@type {IsDefaultLine}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLine)).m_getBorderDashOffset__());
 }
 
 m_setBorderJoinStyle__org_pepstock_charba_client_enums_JoinStyle(/** JoinStyle */ borderJoinStyle) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_JOIN_STYLE__org_pepstock_charba_client_options_Line_Property, borderJoinStyle);
 }
 /** @override @return {JoinStyle} */
 m_getBorderJoinStyle__() {
  return /**@type {JoinStyle}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_BORDER_JOIN_STYLE__org_pepstock_charba_client_options_Line_Property, JoinStyle.m_values__(), /**@type {IsDefaultLine}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLine)).m_getBorderJoinStyle__()), JoinStyle));
 }
 
 m_setCapBezierPoints__boolean(/** boolean */ capBezierPoints) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_CAP_BEZIER_POINTS__org_pepstock_charba_client_options_Line_Property, capBezierPoints);
 }
 /** @override @return {boolean} */
 m_isCapBezierPoints__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_CAP_BEZIER_POINTS__org_pepstock_charba_client_options_Line_Property, /**@type {IsDefaultLine}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLine)).m_isCapBezierPoints__());
 }
 
 m_setCubicInterpolationMode__org_pepstock_charba_client_enums_CubicInterpolationMode(/** CubicInterpolationMode */ mode) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_options_Line_Property, mode);
 }
 /** @override @return {CubicInterpolationMode} */
 m_getCubicInterpolationMode__() {
  return /**@type {CubicInterpolationMode}*/ ($Casts.$to(this.m_getValue__org_pepstock_charba_client_commons_Key__arrayOf_org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Key(Property.f_CUBIC_INTERPOLATION_MODE__org_pepstock_charba_client_options_Line_Property, CubicInterpolationMode.m_values__(), /**@type {IsDefaultLine}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLine)).m_getCubicInterpolationMode__()), CubicInterpolationMode));
 }
 
 m_setStepped__boolean(/** boolean */ stepped) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__boolean(Property.f_STEPPED__org_pepstock_charba_client_options_Line_Property, stepped);
 }
 /** @override @return {boolean} */
 m_isStepped__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__boolean(Property.f_STEPPED__org_pepstock_charba_client_options_Line_Property, /**@type {IsDefaultLine}*/ ($Casts.$to(this.m_getDefaultValues__(), IsDefaultLine)).m_isStepped__());
 }
 //Default method forwarding stub.
 /** @override @return {IsFill} */
 m_getFill__() {
  return HasFill.m_getFill__$default__org_pepstock_charba_client_options_HasFill(this);
 }
 //Default method forwarding stub.
 /** @override */
 m_setFill__boolean(/** boolean */ arg0) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__boolean(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setFill__int(/** number */ arg0) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__int(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setFill__java_lang_String(/** ?string */ arg0) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__java_lang_String(this, arg0);
 }
 //Default method forwarding stub.
 /** @override */
 m_setFill__org_pepstock_charba_client_enums_IsFill(/** IsFill */ arg0) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__org_pepstock_charba_client_enums_IsFill(this, arg0);
 }
 
 static $clinit() {
  Line.$clinit = () =>{};
  Line.$loadModules();
  AbstractElement.$clinit();
  HasFill.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Line;
 }
 
 static $loadModules() {
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  CapStyle = goog.module.get('org.pepstock.charba.client.enums.CapStyle$impl');
  CubicInterpolationMode = goog.module.get('org.pepstock.charba.client.enums.CubicInterpolationMode$impl');
  JoinStyle = goog.module.get('org.pepstock.charba.client.enums.JoinStyle$impl');
  FillHandler = goog.module.get('org.pepstock.charba.client.options.FillHandler$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.Line.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultLine.$markImplementor(Line);
HasFill.$markImplementor(Line);
$Util.$setClassMetadata(Line, "org.pepstock.charba.client.options.Line");

exports = Line;

//# sourceMappingURL=Line.js.map
