goog.module('org.pepstock.charba.client.impl.callbacks.PercentageCallback$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const FormatterCallback = goog.require('org.pepstock.charba.client.datalabels.callbacks.FormatterCallback$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Constants = goog.forwardDeclare('org.pepstock.charba.client.commons.Constants$impl');
let DataLabelsContext = goog.forwardDeclare('org.pepstock.charba.client.datalabels.DataLabelsContext$impl');
let DataType = goog.forwardDeclare('org.pepstock.charba.client.enums.DataType$impl');
let Percentage = goog.forwardDeclare('org.pepstock.charba.client.impl.callbacks.Percentage$impl');
let DataItem = goog.forwardDeclare('org.pepstock.charba.client.items.DataItem$impl');
let Undefined = goog.forwardDeclare('org.pepstock.charba.client.items.Undefined$impl');
let Utilities = goog.forwardDeclare('org.pepstock.charba.client.utils.Utilities$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @implements {FormatterCallback}
 */
class PercentageCallback extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_precision__org_pepstock_charba_client_impl_callbacks_PercentageCallback_ = 0;
  /**@type {boolean}*/
  this.f_stacked__org_pepstock_charba_client_impl_callbacks_PercentageCallback_ = false;
 }
 //Factory method corresponding to constructor 'PercentageCallback()'.
 /** @return {!PercentageCallback} */
 static $create__() {
  PercentageCallback.$clinit();
  let $instance = new PercentageCallback();
  $instance.$ctor__org_pepstock_charba_client_impl_callbacks_PercentageCallback__();
  return $instance;
 }
 //Initialization from constructor 'PercentageCallback()'.
 
 $ctor__org_pepstock_charba_client_impl_callbacks_PercentageCallback__() {
  this.$ctor__org_pepstock_charba_client_impl_callbacks_PercentageCallback__int__boolean(PercentageCallback.f_DEFAULT_PRECISION__org_pepstock_charba_client_impl_callbacks_PercentageCallback, PercentageCallback.f_DEFAULT_STACKED__org_pepstock_charba_client_impl_callbacks_PercentageCallback_);
 }
 //Factory method corresponding to constructor 'PercentageCallback(int)'.
 /** @return {!PercentageCallback} */
 static $create__int(/** number */ precision) {
  PercentageCallback.$clinit();
  let $instance = new PercentageCallback();
  $instance.$ctor__org_pepstock_charba_client_impl_callbacks_PercentageCallback__int(precision);
  return $instance;
 }
 //Initialization from constructor 'PercentageCallback(int)'.
 
 $ctor__org_pepstock_charba_client_impl_callbacks_PercentageCallback__int(/** number */ precision) {
  this.$ctor__org_pepstock_charba_client_impl_callbacks_PercentageCallback__int__boolean(precision, PercentageCallback.f_DEFAULT_STACKED__org_pepstock_charba_client_impl_callbacks_PercentageCallback_);
 }
 //Factory method corresponding to constructor 'PercentageCallback(boolean)'.
 /** @return {!PercentageCallback} */
 static $create__boolean(/** boolean */ stacked) {
  PercentageCallback.$clinit();
  let $instance = new PercentageCallback();
  $instance.$ctor__org_pepstock_charba_client_impl_callbacks_PercentageCallback__boolean(stacked);
  return $instance;
 }
 //Initialization from constructor 'PercentageCallback(boolean)'.
 
 $ctor__org_pepstock_charba_client_impl_callbacks_PercentageCallback__boolean(/** boolean */ stacked) {
  this.$ctor__org_pepstock_charba_client_impl_callbacks_PercentageCallback__int__boolean(PercentageCallback.f_DEFAULT_PRECISION__org_pepstock_charba_client_impl_callbacks_PercentageCallback, stacked);
 }
 //Factory method corresponding to constructor 'PercentageCallback(int, boolean)'.
 /** @return {!PercentageCallback} */
 static $create__int__boolean(/** number */ precision, /** boolean */ stacked) {
  PercentageCallback.$clinit();
  let $instance = new PercentageCallback();
  $instance.$ctor__org_pepstock_charba_client_impl_callbacks_PercentageCallback__int__boolean(precision, stacked);
  return $instance;
 }
 //Initialization from constructor 'PercentageCallback(int, boolean)'.
 
 $ctor__org_pepstock_charba_client_impl_callbacks_PercentageCallback__int__boolean(/** number */ precision, /** boolean */ stacked) {
  this.$ctor__java_lang_Object__();
  this.f_precision__org_pepstock_charba_client_impl_callbacks_PercentageCallback_ = precision;
  this.f_stacked__org_pepstock_charba_client_impl_callbacks_PercentageCallback_ = stacked;
 }
 /** @return {number} */
 m_getPrecision__() {
  return this.f_precision__org_pepstock_charba_client_impl_callbacks_PercentageCallback_;
 }
 /** @return {boolean} */
 m_isStacked__() {
  return this.f_stacked__org_pepstock_charba_client_impl_callbacks_PercentageCallback_;
 }
 /** @override @return {?string} */
 m_invoke__org_pepstock_charba_client_datalabels_DataLabelsContext__org_pepstock_charba_client_items_DataItem(/** DataLabelsContext */ context, /** DataItem */ dataItem) {
  if ($Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_NUMBERS__org_pepstock_charba_client_enums_DataType, dataItem.m_getDataType__()) || $Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_ARRAYS__org_pepstock_charba_client_enums_DataType, dataItem.m_getDataType__())) {
   let value = $Objects.m_equals__java_lang_Object__java_lang_Object(DataType.f_ARRAYS__org_pepstock_charba_client_enums_DataType, dataItem.m_getDataType__()) ? dataItem.m_getValueAsFloatingData__().m_getAbsValue__() : dataItem.m_getValue__();
   let percentage = Percentage.m_compute__org_pepstock_charba_client_IsChart__double__org_pepstock_charba_client_callbacks_AbstractDatasetContext__boolean(context.m_getChart__(), value, context, this.f_stacked__org_pepstock_charba_client_impl_callbacks_PercentageCallback_);
   if (Undefined.m_is__double(percentage)) {
    return PercentageCallback.f_NAN_AS_STRING__org_pepstock_charba_client_impl_callbacks_PercentageCallback;
   }
   return j_l_String.m_valueOf__java_lang_Object(Utilities.m_applyPrecision__double__int(value, this.f_precision__org_pepstock_charba_client_impl_callbacks_PercentageCallback_)) + j_l_String.m_valueOf__java_lang_Object(Constants.f_PERCENT__org_pepstock_charba_client_commons_Constants);
  }
  return PercentageCallback.f_NAN_AS_STRING__org_pepstock_charba_client_impl_callbacks_PercentageCallback;
 }
 
 static $clinit() {
  PercentageCallback.$clinit = () =>{};
  PercentageCallback.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PercentageCallback;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Constants = goog.module.get('org.pepstock.charba.client.commons.Constants$impl');
  DataType = goog.module.get('org.pepstock.charba.client.enums.DataType$impl');
  Percentage = goog.module.get('org.pepstock.charba.client.impl.callbacks.Percentage$impl');
  Undefined = goog.module.get('org.pepstock.charba.client.items.Undefined$impl');
  Utilities = goog.module.get('org.pepstock.charba.client.utils.Utilities$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@const {?string}*/
PercentageCallback.f_NAN_AS_STRING__org_pepstock_charba_client_impl_callbacks_PercentageCallback = "NaN";
/**@const {number}*/
PercentageCallback.f_DEFAULT_PRECISION__org_pepstock_charba_client_impl_callbacks_PercentageCallback = 2;
/**@const {boolean}*/
PercentageCallback.f_DEFAULT_STACKED__org_pepstock_charba_client_impl_callbacks_PercentageCallback_ = false;
FormatterCallback.$markImplementor(PercentageCallback);
$Util.$setClassMetadata(PercentageCallback, "org.pepstock.charba.client.impl.callbacks.PercentageCallback");

exports = PercentageCallback;

//# sourceMappingURL=PercentageCallback.js.map
