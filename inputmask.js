/*
    Author: Guokai (liuhuo.gk)
    Gtalk: badkaikai@gmail.com
    Blog: http://benben.cc
    Licence: MIT License
    Version: 0.1.0
*/

YUI.namespace('InputMask');
YUI.add('inputmask', function(Y) {

    function InputMask(node) {
        this.initializer.apply(this, arguments);
    };

    InputMask.prototype = {
        initializer: function(node) {
            console.log(arguments);
        }
    };

    Y.InputMask = InputMask;

}, '1.0.0', {requires:['node', 'base', 'event', 'dom', 'anim']});
