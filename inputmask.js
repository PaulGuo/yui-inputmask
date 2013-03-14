/*
    Author: Guokai (liuhuo.gk)
    Gtalk: badkaikai@gmail.com
    Blog: http://benben.cc
    Licence: MIT License
    Version: 0.1.0
*/

YUI.namespace('InputMask');
YUI.add('inputmask', function(Y) {

    function InputMask(userCONFIG) {
        InputMask.superclass.constructor.apply(this, arguments);
    };

    InputMask.NAME = 'inputmask';
    InputMask.ATTRS = {};

    Y.extend(InputMask, Y.Base, {
        initializer: function(userCONFIG) {
            var that = this;
            var GUID = Y.guid();

            var CONFIG = {
                GUID: GUID,
                SELF_UID: '#J_InputMask_' + GUID
            };

            CONFIG = Y.merge(CONFIG, userCONFIG);
            that._updateCONFIG(CONFIG);
        },

        setConfig: function(CONFIG) {
            var that = this;

            return that._updateCONFIG(CONFIG);
        },
        
        _updateCONFIG: function(CONFIG) {
            var that = this;

            Y.Object.each(CONFIG, function(o, i, r) {
                that.set(i, o);
            });

            return that._getCONFIG();
        },

        _getCONFIG: function() {
            var that = this;

            return that.getAttrs();
        }
    });

    Y.InputMask = InputMask;

}, '1.0.0', {requires:['node', 'base', 'event', 'dom', 'anim']});
