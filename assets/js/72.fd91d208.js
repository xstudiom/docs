(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{420:function(t,e,a){"use strict";a.r(e);var s=a(1),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"using-the-required-argument"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-required-argument","aria-hidden":"true"}},[t._v("#")]),t._v(" Using the "),a("code",[t._v("required")]),t._v(" Argument")]),t._v(" "),a("p",[t._v("Fields may be linked/required/folded according to a/multiple parent value(s). This is accomplished by appending a\n"),a("code",[t._v("required")]),t._v(" argument to the "),a("router-link",{attrs:{to:"/configuration/objects/field.html"}},[t._v("field")]),t._v(". Required can be very powerful, but due to the complexity requires\nsome careful consideration when using.")],1),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#example-declaration"}},[t._v("Example Declaration")])]),a("li",[a("a",{attrs:{href:"#operations-available"}},[t._v("Operations Available")])]),a("li",[a("a",{attrs:{href:"#nesting"}},[t._v("Nesting")])]),a("li",[a("a",{attrs:{href:"#css-output"}},[t._v("CSS Output")])])])]),a("p")]),t._v(" "),a("h2",{attrs:{id:"example-declaration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-declaration","aria-hidden":"true"}},[t._v("#")]),t._v(" Example Declaration")]),t._v(" "),a("p",[t._v("To link a field's visibility to the value of another:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'required'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'LINKED_FIELD_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPERATION'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'VALUE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Key")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("LINKED_FIELD_ID")])]),t._v(" "),a("td",[t._v("Field ID that will affect the visibility of this field")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("OPERATION")])]),t._v(" "),a("td",[t._v("Comparison operation to perform")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("VALUE")])]),t._v(" "),a("td",[t._v("Value is the value to compare against for visibility")])])])]),t._v(" "),a("p",[t._v('You can also link a field with multiple "parent" required values. If all of these conditions are not met, this\n'),a("router-link",{attrs:{to:"/configuration/objects/field.html"}},[t._v("field")]),t._v(" will not be visible and the "),a("router-link",{attrs:{to:"/configuration/objects/field.html#output"}},[t._v("field")]),t._v(" CSS will not be used.\nAn example is as follows:")],1),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'required'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'LINKED_FIELD_ID_1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPERATION_1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'VALUE_1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'LINKED_FIELD_ID_2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'OPERATION_2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'VALUE_2'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"operations-available"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operations-available","aria-hidden":"true"}},[t._v("#")]),t._v(" Operations Available")]),t._v(" "),a("p",[t._v("To attempt to support the various possibilities, a number of options have been coded. These operations have been found to\nsupport the majority of needs.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Operation")]),t._v(" "),a("th",[t._v("Test Equivalent")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("=")]),t._v(" "),a("td",[t._v("$a = $b")])]),t._v(" "),a("tr",[a("td",[t._v("equals")]),t._v(" "),a("td",[t._v("$a = $b")])]),t._v(" "),a("tr",[a("td",[t._v("!=")]),t._v(" "),a("td",[t._v("$a != $b")])]),t._v(" "),a("tr",[a("td",[t._v("not")]),t._v(" "),a("td",[t._v("$a != $b")])]),t._v(" "),a("tr",[a("td",[t._v(">")]),t._v(" "),a("td",[t._v("$a > $b")])]),t._v(" "),a("tr",[a("td",[t._v("greater")]),t._v(" "),a("td",[t._v("$a > $b")])]),t._v(" "),a("tr",[a("td",[t._v("is_larger")]),t._v(" "),a("td",[t._v("$a > $b")])]),t._v(" "),a("tr",[a("td",[t._v(">=")]),t._v(" "),a("td",[t._v("$a >= $b")])]),t._v(" "),a("tr",[a("td",[t._v("greater_equal")]),t._v(" "),a("td",[t._v("$a >= $b")])]),t._v(" "),a("tr",[a("td",[t._v("is_larger_equal")]),t._v(" "),a("td",[t._v("$a >= $b")])]),t._v(" "),a("tr",[a("td",[t._v("<")]),t._v(" "),a("td",[t._v("$a < $b")])]),t._v(" "),a("tr",[a("td",[t._v("less")]),t._v(" "),a("td",[t._v("$a < $b")])]),t._v(" "),a("tr",[a("td",[t._v("is_smaller")]),t._v(" "),a("td",[t._v("$a < $b")])]),t._v(" "),a("tr",[a("td",[t._v("<=")]),t._v(" "),a("td",[t._v("$a <= $b")])]),t._v(" "),a("tr",[a("td",[t._v("less_equal")]),t._v(" "),a("td",[t._v("$a <= $b")])]),t._v(" "),a("tr",[a("td",[t._v("is_smaller_equal")]),t._v(" "),a("td",[t._v("$a <= $b")])]),t._v(" "),a("tr",[a("td",[t._v("contains")]),t._v(" "),a("td",[t._v("(strpos($a, $b) !== false)")])]),t._v(" "),a("tr",[a("td",[t._v("doesnt_contain")]),t._v(" "),a("td",[t._v("(strpos($a, $b) === false)")])]),t._v(" "),a("tr",[a("td",[t._v("not_contain")]),t._v(" "),a("td",[t._v("(strpos($a, $b) === false)")])]),t._v(" "),a("tr",[a("td",[t._v("is_empty_or")]),t._v(" "),a("td",[t._v("if (empty($value1)")])]),t._v(" "),a("tr",[a("td",[t._v("not_empty_and")]),t._v(" "),a("td",[t._v("if (!empty($value1) && $value1 != $value2)")])])])]),t._v(" "),a("h2",{attrs:{id:"nesting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nesting","aria-hidden":"true"}},[t._v("#")]),t._v(" Nesting")]),t._v(" "),a("p",[t._v("As of Redux 3.2.0 nested requireds fully function. If any parent is hidden or doesn't match the value, all children are\nhidden and all CSS output from those children is hidden as well.")]),t._v(" "),a("h2",{attrs:{id:"css-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-output","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS Output")]),t._v(" "),a("p",[t._v("CSS output to both the head and compiler is removed from each field if the required value(s) is/are not met. You can,\nhowever, override this on a per field basis by setting "),a("code",[t._v("'force_output' => true")]),t._v(" for each field you want CSS to still be\noutput with. This way you can nest a field under another, and still have it output to the dynamic CSS.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("The CSS output will always be visible if items are within a "),a("code",[t._v("section")]),t._v(" field unless that specific field has the required value set to the required parent as well.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);