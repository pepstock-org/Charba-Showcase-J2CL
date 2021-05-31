goog.module('org.pepstock.charba.client.data.ScatterDataset$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LineDataset = goog.require('org.pepstock.charba.client.data.LineDataset$impl');

let ChartType = goog.forwardDeclare('org.pepstock.charba.client.ChartType$impl');
let Type = goog.forwardDeclare('org.pepstock.charba.client.Type$impl');
let FillCallback = goog.forwardDeclare('org.pepstock.charba.client.callbacks.FillCallback$impl');
let Dataset = goog.forwardDeclare('org.pepstock.charba.client.data.Dataset$impl');
let IsDefaultOptions = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultOptions$impl');
let Fill = goog.forwardDeclare('org.pepstock.charba.client.enums.Fill$impl');
let IsFill = goog.forwardDeclare('org.pepstock.charba.client.enums.IsFill$impl');
let HasFill = goog.forwardDeclare('org.pepstock.charba.client.options.HasFill$impl');

class ScatterDataset extends LineDataset {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ScatterDataset()'.
 /** @return {!ScatterDataset} */
 static $create__() {
  ScatterDataset.$clinit();
  let $instance = new ScatterDataset();
  $instance.$ctor__org_pepstock_charba_client_data_ScatterDataset__();
  return $instance;
 }
 //Initialization from constructor 'ScatterDataset()'.
 
 $ctor__org_pepstock_charba_client_data_ScatterDataset__() {
  this.$ctor__org_pepstock_charba_client_data_ScatterDataset__boolean(Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'ScatterDataset(boolean)'.
 /** @return {!ScatterDataset} */
 static $create__boolean(/** boolean */ hidden) {
  ScatterDataset.$clinit();
  let $instance = new ScatterDataset();
  $instance.$ctor__org_pepstock_charba_client_data_ScatterDataset__boolean(hidden);
  return $instance;
 }
 //Initialization from constructor 'ScatterDataset(boolean)'.
 
 $ctor__org_pepstock_charba_client_data_ScatterDataset__boolean(/** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_ScatterDataset__org_pepstock_charba_client_Type__boolean(ChartType.f_SCATTER__org_pepstock_charba_client_ChartType, hidden);
 }
 //Factory method corresponding to constructor 'ScatterDataset(IsDefaultOptions)'.
 /** @return {!ScatterDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  ScatterDataset.$clinit();
  let $instance = new ScatterDataset();
  $instance.$ctor__org_pepstock_charba_client_data_ScatterDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(defaultValues);
  return $instance;
 }
 //Initialization from constructor 'ScatterDataset(IsDefaultOptions)'.
 
 $ctor__org_pepstock_charba_client_data_ScatterDataset__org_pepstock_charba_client_defaults_IsDefaultOptions(/** IsDefaultOptions */ defaultValues) {
  this.$ctor__org_pepstock_charba_client_data_ScatterDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, Dataset.f_DEFAULT_HIDDEN__org_pepstock_charba_client_data_Dataset);
 }
 //Factory method corresponding to constructor 'ScatterDataset(IsDefaultOptions, boolean)'.
 /** @return {!ScatterDataset} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  ScatterDataset.$clinit();
  let $instance = new ScatterDataset();
  $instance.$ctor__org_pepstock_charba_client_data_ScatterDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'ScatterDataset(IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_ScatterDataset__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_ScatterDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(ChartType.f_SCATTER__org_pepstock_charba_client_ChartType, defaultValues, hidden);
 }
 //Factory method corresponding to constructor 'ScatterDataset(Type, boolean)'.
 /** @return {!ScatterDataset} */
 static $create__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  ScatterDataset.$clinit();
  let $instance = new ScatterDataset();
  $instance.$ctor__org_pepstock_charba_client_data_ScatterDataset__org_pepstock_charba_client_Type__boolean(type, hidden);
  return $instance;
 }
 //Initialization from constructor 'ScatterDataset(Type, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_ScatterDataset__org_pepstock_charba_client_Type__boolean(/** Type */ type, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_ScatterDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, null, hidden);
 }
 //Factory method corresponding to constructor 'ScatterDataset(Type, IsDefaultOptions, boolean)'.
 /** @return {!ScatterDataset} */
 static $create__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  ScatterDataset.$clinit();
  let $instance = new ScatterDataset();
  $instance.$ctor__org_pepstock_charba_client_data_ScatterDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  return $instance;
 }
 //Initialization from constructor 'ScatterDataset(Type, IsDefaultOptions, boolean)'.
 
 $ctor__org_pepstock_charba_client_data_ScatterDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(/** Type */ type, /** IsDefaultOptions */ defaultValues, /** boolean */ hidden) {
  this.$ctor__org_pepstock_charba_client_data_LineDataset__org_pepstock_charba_client_Type__org_pepstock_charba_client_defaults_IsDefaultOptions__boolean(type, defaultValues, hidden);
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__org_pepstock_charba_client_enums_IsFill(this, Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
  super.m_setShowLine__boolean(false);
 }
 /** @override @return {boolean} */
 m_mustUseDataPoints___$pp_org_pepstock_charba_client_data() {
  return true;
 }
 /** @override */
 m_setFill__org_pepstock_charba_client_enums_IsFill(/** IsFill */ fill) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__org_pepstock_charba_client_enums_IsFill(this, Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
 }
 /** @override */
 m_setFill__org_pepstock_charba_client_callbacks_FillCallback(/** FillCallback */ fillCallback) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__org_pepstock_charba_client_enums_IsFill(this, Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
 }
 /** @override */
 m_setFill__org_pepstock_charba_client_callbacks_NativeCallback(/** Function */ fillCallback) {
  HasFill.m_setFill__$default__org_pepstock_charba_client_options_HasFill__org_pepstock_charba_client_enums_IsFill(this, Fill.f_FALSE__org_pepstock_charba_client_enums_Fill);
 }
 
 static $clinit() {
  ScatterDataset.$clinit = () =>{};
  ScatterDataset.$loadModules();
  LineDataset.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScatterDataset;
 }
 
 static $loadModules() {
  ChartType = goog.module.get('org.pepstock.charba.client.ChartType$impl');
  Dataset = goog.module.get('org.pepstock.charba.client.data.Dataset$impl');
  Fill = goog.module.get('org.pepstock.charba.client.enums.Fill$impl');
  HasFill = goog.module.get('org.pepstock.charba.client.options.HasFill$impl');
 }
}
$Util.$setClassMetadata(ScatterDataset, "org.pepstock.charba.client.data.ScatterDataset");

exports = ScatterDataset;

//# sourceMappingURL=ScatterDataset.js.map
