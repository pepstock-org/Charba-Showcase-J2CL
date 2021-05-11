goog.module('org.pepstock.charba.client.defaults.chart.DefaultChartElements$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DefaultElements = goog.require('org.pepstock.charba.client.defaults.globals.DefaultElements$impl');

let IsDefaultElements = goog.forwardDeclare('org.pepstock.charba.client.defaults.IsDefaultElements$impl');
let DefaultChartArc = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartArc$impl');
let DefaultChartBar = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartBar$impl');
let DefaultChartLine = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartLine$impl');
let DefaultChartPoint = goog.forwardDeclare('org.pepstock.charba.client.defaults.chart.DefaultChartPoint$impl');

class DefaultChartElements extends DefaultElements {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultChartElements} */
 static $create__org_pepstock_charba_client_defaults_IsDefaultElements(/** IsDefaultElements */ elements) {
  DefaultChartElements.$clinit();
  let $instance = new DefaultChartElements();
  $instance.$ctor__org_pepstock_charba_client_defaults_chart_DefaultChartElements__org_pepstock_charba_client_defaults_IsDefaultElements(elements);
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_defaults_chart_DefaultChartElements__org_pepstock_charba_client_defaults_IsDefaultElements(/** IsDefaultElements */ elements) {
  this.$ctor__org_pepstock_charba_client_defaults_globals_DefaultElements__org_pepstock_charba_client_defaults_IsDefaultArc__org_pepstock_charba_client_defaults_IsDefaultLine__org_pepstock_charba_client_defaults_IsDefaultPoint__org_pepstock_charba_client_defaults_IsDefaultBar(DefaultChartArc.$create__org_pepstock_charba_client_defaults_IsDefaultArc(elements.m_getArc__()), DefaultChartLine.$create__org_pepstock_charba_client_defaults_IsDefaultLine(elements.m_getLine__()), DefaultChartPoint.$create__org_pepstock_charba_client_defaults_IsDefaultPoint(elements.m_getPoint__()), DefaultChartBar.$create__org_pepstock_charba_client_defaults_IsDefaultBar(elements.m_getBar__()));
 }
 
 static $clinit() {
  DefaultChartElements.$clinit = () =>{};
  DefaultChartElements.$loadModules();
  DefaultElements.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultChartElements;
 }
 
 static $loadModules() {
  DefaultChartArc = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartArc$impl');
  DefaultChartBar = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartBar$impl');
  DefaultChartLine = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartLine$impl');
  DefaultChartPoint = goog.module.get('org.pepstock.charba.client.defaults.chart.DefaultChartPoint$impl');
 }
}
$Util.$setClassMetadata(DefaultChartElements, "org.pepstock.charba.client.defaults.chart.DefaultChartElements");

exports = DefaultChartElements;

//# sourceMappingURL=DefaultChartElements.js.map
