goog.module('org.pepstock.charba.client.resources.LuxonAdapterResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractInjectableResource = goog.require('org.pepstock.charba.client.resources.AbstractInjectableResource$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ResourceName = goog.forwardDeclare('org.pepstock.charba.client.resources.ResourceName$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class LuxonAdapterResource extends AbstractInjectableResource {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LuxonAdapterResource} */
 static $create__() {
  LuxonAdapterResource.$clinit();
  let $instance = new LuxonAdapterResource();
  $instance.$ctor__org_pepstock_charba_client_resources_LuxonAdapterResource__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_client_resources_LuxonAdapterResource__() {
  this.$ctor__org_pepstock_charba_client_resources_AbstractInjectableResource__org_pepstock_charba_client_commons_Key__arrayOf_java_lang_String(ResourceName.f_DATE_TIME_ADAPTER__org_pepstock_charba_client_resources_ResourceName, LuxonAdapterResource.f_CONTENT__org_pepstock_charba_client_resources_LuxonAdapterResource_);
 }
 
 static $clinit() {
  LuxonAdapterResource.$clinit = () =>{};
  LuxonAdapterResource.$loadModules();
  AbstractInjectableResource.$clinit();
  LuxonAdapterResource.f_CONTENT__org_pepstock_charba_client_resources_LuxonAdapterResource_ = /**@type {!Array<?string>}*/ ($Arrays.$init(["/*!", " * chartjs-adapter-luxon v1.0.0", " * https://www.chartjs.org", " * (c) 2021 chartjs-adapter-luxon Contributors", " * Released under the MIT license", " */", "!function(e,t){\"object\"==typeof exports&&\"undefined\"!=typeof module?t(require(\"chart.js\"),require(\"luxon\")):\"function\"==typeof define&&define.amd?define([\"chart.js\",\"luxon\"],t):t((e=\"undefined\"!=typeof globalThis?globalThis:e||self).Chart,e.luxon)}(this,(function(e,t){\"use strict\";const n={datetime:t.DateTime.DATETIME_MED_WITH_SECONDS,millisecond:\"h:mm:ss.SSS a\",second:t.DateTime.TIME_WITH_SECONDS,minute:t.DateTime.TIME_SIMPLE,hour:{hour:\"numeric\"},day:{day:\"numeric\",month:\"short\"},week:\"DD\",month:{month:\"short\",year:\"numeric\"},quarter:\"'Q'q - yyyy\",year:{year:\"numeric\"}};e._adapters._date.override({_id:\"luxon\",_create:function(e){return t.DateTime.fromMillis(e,this.options)},formats:function(){return n},parse:function(e,n){const r=this.options;if(null==e)return null;const i=typeof e;return\"number\"===i?e=this._create(e):\"string\"===i?e=\"string\"==typeof n?t.DateTime.fromFormat(e,n,r):t.DateTime.fromISO(e,r):e instanceof Date?e=t.DateTime.fromJSD", "ate(e,r):\"object\"!==i||e instanceof t.DateTime||(e=t.DateTime.fromObject(e)),e.isValid?e.valueOf():null},format:function(e,t){const n=this._create(e);return\"string\"==typeof t?n.toFormat(t,this.options):n.toLocaleString(t)},add:function(e,t,n){const r={};return r[n]=t,this._create(e).plus(r).valueOf()},diff:function(e,t,n){return this._create(e).diff(this._create(t)).as(n).valueOf()},startOf:function(e,t,n){if(\"isoWeek\"===t){n=Math.trunc(Math.min(Math.max(0,n),6));const t=this._create(e);return t.minus({days:(7 + t.weekday - n) % 7}).startOf(\"day\").valueOf()}return t?this._create(e).startOf(t).valueOf():e},endOf:function(e,t){return this._create(e).endOf(t).valueOf()}})}));", "//# sourceMappingURL=chartjs-adapter-luxon.min.js.map"], j_l_String));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LuxonAdapterResource;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ResourceName = goog.module.get('org.pepstock.charba.client.resources.ResourceName$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@type {Array<?string>}*/
LuxonAdapterResource.f_CONTENT__org_pepstock_charba_client_resources_LuxonAdapterResource_;
$Util.$setClassMetadata(LuxonAdapterResource, "org.pepstock.charba.client.resources.LuxonAdapterResource");

exports = LuxonAdapterResource;

//# sourceMappingURL=LuxonAdapterResource.js.map
