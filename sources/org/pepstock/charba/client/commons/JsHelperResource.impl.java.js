goog.module('org.pepstock.charba.client.commons.JsHelperResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractInjectableResource = goog.require('org.pepstock.charba.client.resources.AbstractInjectableResource$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ResourceName = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourceName$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class JsHelperResource extends AbstractInjectableResource {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JsHelperResource} */
 static $create__() {
  JsHelperResource.$clinit();
  let $instance = new JsHelperResource();
  $instance.$ctor__org_pepstock_charba_client_commons_JsHelperResource__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_commons_JsHelperResource__() {
  this.$ctor__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(ResourceName.f_CHARBA_HELPER__org_pepstock_charba_client_resources_ResourceName, JsHelperResource.f_CONTENT__org_pepstock_charba_client_commons_JsHelperResource_);
 }
 
 static $clinit() {
  JsHelperResource.$clinit = () =>{};
  JsHelperResource.$loadModules();
  AbstractInjectableResource.$clinit();
  JsHelperResource.f_CONTENT__org_pepstock_charba_client_commons_JsHelperResource_ = /**@type {!Array<?string>}*/ ($Arrays.$init(["var CharbaCallbackProxy={callback:null,proxy:null,ignoreFunctionContext:!0};function CharbaJsObjectArrayHelper(){}CharbaJsObjectArrayHelper.set=function($obj$$,$key$$,$value$$){$obj$$[$key$$]=$value$$};CharbaJsObjectArrayHelper.get=function($obj$$,$key$$){return $obj$$[$key$$]};function CharbaJsObjectBooleanHelper(){}CharbaJsObjectBooleanHelper.set=function($obj$$,$key$$,$value$$){$obj$$[$key$$]=$value$$};CharbaJsObjectBooleanHelper.get=function($obj$$,$key$$){return $obj$$[$key$$]};", "function CharbaJsObjectCallbackProxyHelper(){}CharbaJsObjectCallbackProxyHelper.set=function($obj$$,$key$$,$value$$){$obj$$[$key$$]=$value$$};CharbaJsObjectCallbackProxyHelper.get=function($obj$$,$key$$){return $obj$$[$key$$]};function CharbaJsObjectCallbackHelper(){}CharbaJsObjectCallbackHelper.set=function($obj$$,$key$$,$value$$){$obj$$[$key$$]=$value$$};CharbaJsObjectCallbackHelper.get=function($obj$$,$key$$){return $obj$$[$key$$]};function CharbaJsObjectChartHelper(){}", "CharbaJsObjectChartHelper.set=function($obj$$,$key$$,$value$$){$obj$$[$key$$]=$value$$};CharbaJsObjectChartHelper.get=function($obj$$,$key$$){return $obj$$[$key$$]};function CharbaJsObjectDoubleHelper(){}CharbaJsObjectDoubleHelper.set=function($obj$$,$key$$,$value$$){$obj$$[$key$$]=$value$$};CharbaJsObjectDoubleHelper.get=function($obj$$,$key$$){return $obj$$[$key$$]};function CharbaJsObjectIntegerHelper(){}CharbaJsObjectIntegerHelper.set=function($obj$$,$key$$,$value$$){$obj$$[$key$$]=$value$$};", "CharbaJsObjectIntegerHelper.get=function($obj$$,$key$$){return $obj$$[$key$$]};function CharbaJsObjectGradientHelper(){}CharbaJsObjectGradientHelper.set=function($obj$$,$key$$,$value$$){$obj$$[$key$$]=$value$$};CharbaJsObjectGradientHelper.get=function($obj$$,$key$$){return $obj$$[$key$$]};function CharbaJsObjectImageHelper(){}CharbaJsObjectImageHelper.set=function($obj$$,$key$$,$value$$){$obj$$[$key$$]=$value$$};CharbaJsObjectImageHelper.get=function($obj$$,$key$$){return $obj$$[$key$$]};", "function CharbaJsObjectNativeObjectHelper(){}CharbaJsObjectNativeObjectHelper.set=function($obj$$,$key$$,$value$$){$obj$$[$key$$]=$value$$};CharbaJsObjectNativeObjectHelper.get=function($obj$$,$key$$){return $obj$$[$key$$]};function CharbaJsObjectNativeEventHelper(){}CharbaJsObjectNativeEventHelper.set=function($obj$$,$key$$,$value$$){$obj$$[$key$$]=$value$$};CharbaJsObjectNativeEventHelper.get=function($obj$$,$key$$){return $obj$$[$key$$]};function CharbaJsObjectPatternHelper(){}", "CharbaJsObjectPatternHelper.set=function($obj$$,$key$$,$value$$){$obj$$[$key$$]=$value$$};CharbaJsObjectPatternHelper.get=function($obj$$,$key$$){return $obj$$[$key$$]};function CharbaJsObjectStringHelper(){}CharbaJsObjectStringHelper.set=function($obj$$,$key$$,$value$$){$obj$$[$key$$]=$value$$};CharbaJsObjectStringHelper.get=function($obj$$,$key$$){return $obj$$[$key$$]};function CharbaJsHelper(){}CharbaJsHelper.create=function(){return{}};CharbaJsHelper.cast=function($object$$){return $object$$};", "CharbaJsHelper.has=function($obj$$,$key$$){return $key$$ in $obj$$};CharbaJsHelper.remove=function($obj$$,$key$$){delete $obj$$[$key$$]};CharbaJsHelper.typeOf=function($obj$$){return typeof $obj$$};CharbaJsHelper.type=function($obj$$,$key$$){return typeof $obj$$[$key$$]};CharbaJsHelper.isArray=function($obj$$,$key$$){return Array.isArray($obj$$[$key$$])};", "CharbaJsHelper.newCallbackProxy=function(){var $obj$$=Object.create(CharbaCallbackProxy);$obj$$.callback=null;$obj$$.proxy=function(){if(\"function\"===typeof $obj$$.callback){if($obj$$.ignoreFunctionContext)return $obj$$.callback.apply(this,arguments);var $args$$=[this].concat(Array.prototype.slice.call(arguments));return $obj$$.callback.apply(this,$args$$)}};return $obj$$};CharbaJsHelper.isCanvasPattern=function($obj$$){return $obj$$ instanceof CanvasPattern};", "CharbaJsHelper.isCanvasGradient=function($obj$$){return $obj$$ instanceof CanvasGradient};function CharbaJsPluginHelper(){}CharbaJsPluginHelper.register=function($obj$$){Chart.register($obj$$)};CharbaJsPluginHelper.unregister=function($obj$$){Chart.registry.remove([$obj$$])};CharbaJsPluginHelper.getAll=function(){return Chart.registry.plugins.items};function CharbaJsControllerHelper(){}", "CharbaJsControllerHelper.register=function($controllerType$$,$chartType$$,$obj$$){\"undefined\"===typeof CharbaJsControllerHelper.wrappers&&Object.defineProperty(CharbaJsControllerHelper,\"wrappers\",{value:{},configurable:!1,enumerable:!1,writable:!1});CharbaJsControllerHelper.wrappers[$controllerType$$]=$obj$$};CharbaJsControllerHelper.initialize=function($controllerType$$,$context$$){Chart.controllers[$controllerType$$].prototype.initialize.call($context$$)};", "CharbaJsControllerHelper.parse=function($controllerType$$,$context$$,$start$$,$count$$){Chart.controllers[$controllerType$$].prototype.parse.call($context$$,$start$$,$count$$)};CharbaJsControllerHelper.draw=function($controllerType$$,$context$$){Chart.controllers[$controllerType$$].prototype.draw.call($context$$)};CharbaJsControllerHelper.update=function($controllerType$$,$context$$,$mode$$){Chart.controllers[$controllerType$$].prototype.update.call($context$$,$mode$$)};", "CharbaJsControllerHelper.linkScales=function($controllerType$$,$context$$){Chart.controllers[$controllerType$$].prototype.linkScales.call($context$$)};function CharbaJsPositionerHelper(){}CharbaJsPositionerHelper.register=function($name$$,$module$$){null!=$module$$&&\"function\"===typeof $module$$&&(Chart.registry.getPlugin(\"tooltip\").positioners[$name$$]=$module$$)};", "CharbaJsPositionerHelper.unregister=function($name$$){var $tooltipPlugin$$=Chart.registry.getPlugin(\"tooltip\");\"undefined\"!=$tooltipPlugin$$.positioners[$name$$]&&delete $tooltipPlugin$$.positioners[$name$$]};CharbaJsPositionerHelper.invoke=function($name$$,$context$$,$elements$$,$eventPoint$$){var $tooltipPlugin$$=Chart.registry.getPlugin(\"tooltip\");return\"undefined\"!=$tooltipPlugin$$.positioners[$name$$]?$tooltipPlugin$$.positioners[$name$$].apply($context$$,[$elements$$,$eventPoint$$]):null};", "function CharbaJsChartHelper(){}CharbaJsChartHelper.generateDefaultLabels=function($chart$$,$options$$){return null!=$options$$&&\"object\"===typeof $options$$.plugins&&\"object\"===typeof $options$$.plugins.legend&&\"object\"===typeof $options$$.plugins.legend.labels&&\"function\"===typeof $options$$.plugins.legend.labels.generateLabels?$options$$.plugins.legend.labels.generateLabels.call($chart$$,$chart$$):null};", "CharbaJsChartHelper.invokeDefaultLegendEvent=function($options$$,$key$$,$chart$$,$event$$,$item$$){null!=$options$$&&\"object\"===typeof $options$$.plugins&&\"object\"===typeof $options$$.plugins.legend&&\"function\"===typeof $options$$.plugins.legend[$key$$]&&$options$$.plugins.legend[$key$$].call($chart$$,$event$$,$item$$,$chart$$.legend)};", "CharbaJsChartHelper.invokeDefaultChartEvent=function($options$$,$key$$,$chart$$,$event$$,$items$$){null!=$options$$&&\"function\"===typeof $options$$[$key$$]&&$options$$[$key$$].call($chart$$,$event$$,$items$$,$chart$$)};function CharbaJsZoomHelper(){}CharbaJsZoomHelper.resetZoom=function($chart$$,$mode$$){null!=$chart$$&&\"function\"===typeof $chart$$.resetZoom&&$chart$$.resetZoom.call($chart$$,$mode$$)};", "CharbaJsZoomHelper.pan=function($chart$$,$amount$$,$mode$$){null!=$chart$$&&\"function\"===typeof $chart$$.pan&&$chart$$.pan.call($chart$$,$amount$$,void 0,$mode$$)};CharbaJsZoomHelper.zoom=function($chart$$,$amount$$,$mode$$){null!=$chart$$&&\"function\"===typeof $chart$$.zoom&&$chart$$.zoom.call($chart$$,$amount$$,$mode$$)};", "CharbaJsZoomHelper.zoomScale=function($chart$$,$scaleId$$,$range$$,$mode$$){null!=$chart$$&&\"function\"===typeof $chart$$.zoomScale&&$chart$$.zoomScale.call($chart$$,$scaleId$$,$range$$,$mode$$)};function CharbaJsDataLabelsHelper(){}CharbaJsDataLabelsHelper.register=function(){Chart.register(ChartDataLabels)};function CharbaJsItemsHelper(){}CharbaJsItemsHelper.isCanvasPattern=function($obj$$,$key$$){return $obj$$[$key$$]instanceof CanvasPattern};", "CharbaJsItemsHelper.isCanvasGradient=function($obj$$,$key$$){return $obj$$[$key$$]instanceof CanvasGradient};CharbaJsItemsHelper.getDecimalForPixel=function($obj$$,$pixel$$){return $obj$$.getDecimalForPixel($pixel$$)};CharbaJsItemsHelper.getPixelForDecimal=function($obj$$,$decimal$$){return $obj$$.getPixelForDecimal($decimal$$)};CharbaJsItemsHelper.getPixelForTick=function($obj$$,$index$$){return $obj$$.getPixelForTick($index$$)};CharbaJsItemsHelper.getLabelForValue=function($obj$$,$value$$){return $obj$$.getLabelForValue($value$$)};", "CharbaJsItemsHelper.getPixelForStringValue=function($obj$$,$value$$,$index$$){return $obj$$.getPixelForValue($value$$,$index$$)};CharbaJsItemsHelper.getPixelForValue=function($obj$$,$value$$,$index$$){return $obj$$.getPixelForValue($value$$,$index$$)};CharbaJsItemsHelper.getValueForPixel=function($obj$$,$pixel$$){return $obj$$.getValueForPixel($pixel$$)};CharbaJsItemsHelper.getBaseValue=function($obj$$){return $obj$$.getBaseValue()};CharbaJsItemsHelper.getBasePixel=function($obj$$){return $obj$$.getBasePixel()};", "CharbaJsItemsHelper.getDatasetControllerStyle=function($controller$$,$dataIndex$$){return $controller$$.getStyle($dataIndex$$)};function CharbaJsDateAdapterHelper(){}CharbaJsDateAdapterHelper.create=function($options$$){return new Chart._adapters._date($options$$)};"], j_l_String));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsHelperResource;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ResourceName = goog.module.get('org.pepstock.charba.client.resources.ResourceName$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@type {Array<?string>}*/
JsHelperResource.f_CONTENT__org_pepstock_charba_client_commons_JsHelperResource_;
$Util.$setClassMetadata(JsHelperResource, "org.pepstock.charba.client.commons.JsHelperResource");

exports = JsHelperResource;

//# sourceMappingURL=JsHelperResource.js.map
