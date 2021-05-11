goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationsEventsOnTimeSeriesCase.MyEventsHandler');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.annotation.AbstractAnnotation');
goog.require('org.pepstock.charba.client.annotation.listeners.ClickCallback');
goog.require('org.pepstock.charba.client.annotation.listeners.DoubleClickCallback');
goog.require('org.pepstock.charba.client.annotation.listeners.EnterCallback');
goog.require('org.pepstock.charba.client.annotation.listeners.LeaveCallback');
goog.require('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationsEventsOnTimeSeriesCase');

const MyEventsHandler = goog.require('org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationsEventsOnTimeSeriesCase.MyEventsHandler$impl');
exports = MyEventsHandler;

