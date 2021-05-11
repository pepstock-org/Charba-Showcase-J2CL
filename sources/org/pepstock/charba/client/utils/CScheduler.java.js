goog.module('org.pepstock.charba.client.utils.CScheduler');

goog.require('java.lang.Object');
goog.require('java.lang.Runnable');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.utils.CScheduler.RunnableWrapper');
goog.require('org.pepstock.charba.client.utils.CSchedulerRegistration');

const CScheduler = goog.require('org.pepstock.charba.client.utils.CScheduler$impl');
exports = CScheduler;

