goog.module('org.pepstock.charba.client.impl.plugins.ChartPointerDefaultOptions$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsChartPointerDefaultOptions = goog.require('org.pepstock.charba.client.impl.plugins.IsChartPointerDefaultOptions$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let CursorType = goog.forwardDeclare('org.pepstock.charba.client.dom.enums.CursorType$impl');
let IsDefaultCursorPointerOptions = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.IsDefaultCursorPointerOptions$impl');
let PointerElement = goog.forwardDeclare('org.pepstock.charba.client.impl.plugins.enums.PointerElement$impl');

/**
 * @implements {IsChartPointerDefaultOptions}
 */
class ChartPointerDefaultOptions extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ChartPointerDefaultOptions} */
 static $create__() {
  let $instance = new ChartPointerDefaultOptions();
  $instance.$ctor__org_pepstock_charba_client_impl_plugins_ChartPointerDefaultOptions__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_impl_plugins_ChartPointerDefaultOptions__() {
  this.$ctor__java_lang_Object__();
 }
 //Default method forwarding stub.
 /** @override @return {CursorType} */
 m_getCursorPointer__() {
  return IsDefaultCursorPointerOptions.m_getCursorPointer__$default__org_pepstock_charba_client_impl_plugins_IsDefaultCursorPointerOptions(this);
 }
 //Default method forwarding stub.
 /** @override @return {List<PointerElement>} */
 m_getElements__() {
  return IsChartPointerDefaultOptions.m_getElements__$default__org_pepstock_charba_client_impl_plugins_IsChartPointerDefaultOptions(this);
 }
 /** @return {ChartPointerDefaultOptions} */
 static get f_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartPointerDefaultOptions() {
  return (ChartPointerDefaultOptions.$clinit(), ChartPointerDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartPointerDefaultOptions);
 }
 
 static $clinit() {
  ChartPointerDefaultOptions.$clinit = () =>{};
  ChartPointerDefaultOptions.$loadModules();
  j_l_Object.$clinit();
  IsChartPointerDefaultOptions.$clinit();
  ChartPointerDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartPointerDefaultOptions = ChartPointerDefaultOptions.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ChartPointerDefaultOptions;
 }
 
 static $loadModules() {
  IsDefaultCursorPointerOptions = goog.module.get('org.pepstock.charba.client.impl.plugins.IsDefaultCursorPointerOptions$impl');
 }
}
/**@private {ChartPointerDefaultOptions}*/
ChartPointerDefaultOptions.$static_INSTANCE__org_pepstock_charba_client_impl_plugins_ChartPointerDefaultOptions;
IsChartPointerDefaultOptions.$markImplementor(ChartPointerDefaultOptions);
$Util.$setClassMetadata(ChartPointerDefaultOptions, "org.pepstock.charba.client.impl.plugins.ChartPointerDefaultOptions");

exports = ChartPointerDefaultOptions;

//# sourceMappingURL=ChartPointerDefaultOptions.js.map
