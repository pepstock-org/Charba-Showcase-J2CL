goog.module('org.pepstock.charba.client.options.AbstractScaleLines$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsDefaultScaleLines = goog.require('org.pepstock.charba.client.defaults.IsDefaultScaleLines$impl');
const AbstractModel = goog.require('org.pepstock.charba.client.options.AbstractModel$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ArrayInteger_$Overlay = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
let ArrayListHelper = goog.forwardDeclare('org.pepstock.charba.client.commons.ArrayListHelper$impl');
let Key = goog.forwardDeclare('org.pepstock.charba.client.commons.Key$impl');
let AbstractScale = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractScale$impl');
let Property = goog.forwardDeclare('org.pepstock.charba.client.options.AbstractScaleLines.Property$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template D
 * @extends {AbstractModel<AbstractScale, D>}
 * @implements {IsDefaultScaleLines}
 */
class AbstractScaleLines extends AbstractModel {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_pepstock_charba_client_options_AbstractScaleLines__org_pepstock_charba_client_options_AbstractScale__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(/** AbstractScale */ scale, /** Key */ childKey, /** D */ defaultValues, /** ? */ nativeObject) {
  this.$ctor__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_options_AbstractModel__org_pepstock_charba_client_commons_Key__java_lang_Object__org_pepstock_charba_client_commons_NativeObject(scale, childKey, defaultValues, nativeObject);
 }
 
 m_setBorderDash__arrayOf_int(/** Array<number> */ borderDash) {
  this.m_setArrayValueAndAddToParent__org_pepstock_charba_client_commons_Key__org_pepstock_charba_client_commons_Array(Property.f_BORDER_DASH__org_pepstock_charba_client_options_AbstractScaleLines_Property, ArrayInteger_$Overlay.m_fromOrNull__arrayOf_int(borderDash));
 }
 /** @override @return {List<Integer>} */
 m_getBorderDash__() {
  let array = /**@type {Array}*/ ($Casts.$to(this.m_getArrayValue__org_pepstock_charba_client_commons_Key(Property.f_BORDER_DASH__org_pepstock_charba_client_options_AbstractScaleLines_Property), ArrayInteger_$Overlay));
  if (!$Equality.$same(array, null)) {
   return ArrayListHelper.m_list__org_pepstock_charba_client_commons_ArrayInteger(array);
  }
  return this.m_getDefaultBorderDash___$pp_org_pepstock_charba_client_options();
 }
 
 m_setBorderDashOffset__double(/** number */ borderDashOffset) {
  this.m_setValueAndAddToParent__org_pepstock_charba_client_commons_Key__double(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_options_AbstractScaleLines_Property, borderDashOffset);
 }
 /** @override @return {number} */
 m_getBorderDashOffset__() {
  return this.m_getValue__org_pepstock_charba_client_commons_Key__double(Property.f_BORDER_DASH_OFFSET__org_pepstock_charba_client_options_AbstractScaleLines_Property, this.m_getDefaultBorderDashOffset___$pp_org_pepstock_charba_client_options());
 }
 /** @abstract @return {number} */
 m_getDefaultBorderDashOffset___$pp_org_pepstock_charba_client_options() {}
 /** @abstract @return {List<Integer>} */
 m_getDefaultBorderDash___$pp_org_pepstock_charba_client_options() {}
 
 static $clinit() {
  AbstractScaleLines.$clinit = () =>{};
  AbstractScaleLines.$loadModules();
  AbstractModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractScaleLines;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ArrayInteger_$Overlay = goog.module.get('org.pepstock.charba.client.commons.ArrayInteger.$Overlay$impl');
  ArrayListHelper = goog.module.get('org.pepstock.charba.client.commons.ArrayListHelper$impl');
  Property = goog.module.get('org.pepstock.charba.client.options.AbstractScaleLines.Property$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsDefaultScaleLines.$markImplementor(AbstractScaleLines);
$Util.$setClassMetadata(AbstractScaleLines, "org.pepstock.charba.client.options.AbstractScaleLines");

exports = AbstractScaleLines;

//# sourceMappingURL=AbstractScaleLines.js.map
