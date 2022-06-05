/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2012, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

/* This file was autogenerated from alk.tmLanguage.json (uuid: ) */
/****************************************************************************************
 * IT MIGHT NOT BE PERFECT ...But it's a good start from an existing *.tmlanguage file. *
 * fileTypes                                                                            *
 ****************************************************************************************/

define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var alkHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
        start: [{
            include: "#keywords"
        }, {
            include: "#strings"
        }],
        "#keywords": [{
            token: "keyword.control.alk",
            regex: /\b(?:if|else|while|do|for|foreach|in|from|out|havoc|choose|uniform|repeat|return|success|until|failure|assert|assume|symbolic|invariant|forall|exists|continue|break)\b/
        }, {
            token: "keyword.struct.alk",
            regex: /\b(?:emptySet|emptyList|emptyStructure|array|set)\b/
        }, {
            token: "keyword.includes.alk",
            regex: /\b(?:modifies|uses|includes)\b/
        }, {
            token: "keyword.math.alk",
            regex: /\b(?:xor|abs|acos|asin|atan|cos|log|pi|pow|sin|sqrt|tan|len)\b/
        }, {
            token: "keyword.builtin.alk",
            regex: /\b(?:at|belongsTo|delete|empty|end|first|float|insert|int|print|popBack|popFront|pushBack|pushFront|remove|removeAllEqTo|removeAt|singletonSet|size|split|topBack|topFront|update)\b/
        }, {
            token: "keyword.prob.alk",
            regex: /\b(?:uniformNat|flip|uniformFloat|uniformPerm|Count|s.t.)\b/
        }, {
            token: "comment.line",
            regex: /\/\/.*/
        }, {
            token: "comment.block",
            regex: /\/\*/,
            push: [{
                token: "comment.block",
                regex: /\*\//,
                next: "pop"
            }, {
                defaultToken: "comment.block"
            }]
        }],
        "#strings": [{
            token: "string.quoted.double.alk",
            regex: /"/,
            push: [{
                token: "string.quoted.double.alk",
                regex: /"/,
                next: "pop"
            }, {
                token: "constant.character.escape.alk",
                regex: /\\./
            }, {
                defaultToken: "string.quoted.double.alk"
            }]
        }]
    }
    
    this.normalizeRules();
};

alkHighlightRules.metaData = {
    name: "alk",
    scopeName: "source.alk"
}


oop.inherits(alkHighlightRules, TextHighlightRules);

exports.alkHighlightRules = alkHighlightRules;
});