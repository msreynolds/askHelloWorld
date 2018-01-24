/**
 * Created by Matt Reynolds (matt@mtnlabs.com) and Justin Degonda (jmdegonda@gmail.com).
 *
 * Project: AskHelloWorld
 * An Amazon Alexa Skill for the humble developer.
 */

'use strict';

require('dotenv').load();

var Alexa = require('alexa-sdk');
const util = require('util');

exports.handler = function (event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = process.env.AMAZON_ALEXA_APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        console.log('Launch Request Intent');
        this.emit(':tell', 'This is the launch intent handler.');
    },
    'SessionStartedRequest': function () {
        console.log('Session Started Intent');
    },
    'SessionEndedRequest': function () {
        console.log('Session Ended Intent');
    },
    'AMAZON.HelpIntent': function () {
        console.log('AMAZON Help Intent');
        this.emit(':tell', 'This is the help intent handler.');
    },
    'AMAZON.CancelIntent': function () {
        console.log('AMAZON Cancel Intent');
        this.emit(':tell', 'Cancelling.');
    },
    'AMAZON.StopIntent': function () {
        console.log('AMAZON Stop Intent');
        this.emit(':tell', 'Ok, Goodbye!');
    },
    'CustomHelloWorldIntent': function () {
        console.log(util.inspect(this.event.request, {showHidden: false, depth: null}));

        var slotName = this.event.request.intent.slots.TheSlotName.value;

        var sound = 'moo'; // default for a cow

        if (slotName === 'pig') {
            sound = 'oink oink!'
        } else if (slotName === 'chicken') {
            sound = 'caw caw!'
        } else if (slotName === 'developer') {
            sound = 'I like money';
        }

        var speechOutput = 'A ' + slotName + ' says ' + sound;

        this.emit(':tell', speechOutput);
    }
};