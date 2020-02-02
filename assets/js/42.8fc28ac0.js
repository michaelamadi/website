(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{302:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),s("h3",{attrs:{id:"problem-we-were-trying-to-solve"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problem-we-were-trying-to-solve"}},[t._v("#")]),t._v(" Problem We Were Trying To Solve")]),t._v(" "),s("p",[t._v("Stephen Eglen was looking to investigate the applicability of the Data Package concept to facilitate data reuse in the field of Computational Neuroscience. The following figure describes the kind of data he is collecting.  He was eventually seeking to get around 100–160 fields like this."),s("br"),t._v("\nEach circle is a cell drawn approximately to scale. The units of measurement are microns (micrometers).")]),t._v(" "),s("p",[s("img",{attrs:{src:"camimage1.png",alt:"ADBio"}})]),t._v(" "),s("p",[t._v("The basic data are quite simple: two columns of numbers that describes the center of each circle where each circle represents a"),s("br"),t._v(" "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Retinal_ganglion_cell",target:"_blank",rel:"noopener noreferrer"}},[t._v("retinal ganglion cell"),s("OutboundLink")],1),t._v(".  The metadata that adds context to this data are as"),s("br"),t._v("\nfollows: the radius of each circle is 10um representing the average radius of this cell type; the dashed line represents the sample window which is the region of space within which the"),s("br"),t._v("\ncells were sampled; the species from which the cells were sampled is a cat.")]),t._v(" "),s("p",[t._v("The key question posed by the collection of such data in large quantities is “where to store all these metadata”."),s("br"),t._v("\nMore formally, Stephen wanted a way to include the following metadata with sampled data:")]),t._v(" "),s("ol",[s("li",[t._v("Cell type: on center retinal ganglion cells")]),t._v(" "),s("li",[t._v("Species: cat")]),t._v(" "),s("li",[t._v("Radius of "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Soma_(biology)"}},[t._v("soma")]),t._v(": 10 um")]),t._v(" "),s("li",[t._v("Citation to original paper where data were presented: Wässle H, Boycott BB, Illing RB (1981) Morphology and mosaic of on- and off-beta cells in the cat retina and some functional considerations. Proc R Soc Lond B Biol Sci 212:177–195.")]),t._v(" "),s("li",[t._v("Unit of measurement: micron.")]),t._v(" "),s("li",[t._v("(Optionally) A raw image from where the data where taken. e.g. "),s("a",{attrs:{href:"http://www.damtp.cam.ac.uk/user/sje30/data/mosaics/w81_scan/w81all.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.damtp.cam.ac.uk/user/sje30/data/mosaics/w81_scan/w81all.png"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("The long-term goal was to build a website/repository containing about 100+ examples of these “retinal mosaics”. The website would allow people to view the mosaics, download the data files, or run online some simple analysis.")]),t._v(" "),s("h2",{attrs:{id:"the-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-work"}},[t._v("#")]),t._v(" The Work")]),t._v(" "),s("h3",{attrs:{id:"what-did-we-do"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-did-we-do"}},[t._v("#")]),t._v(" What Did We Do")]),t._v(" "),s("p",[t._v("The Data Package specification is meant to be a container for data providing a consistent interface to tabular data."),s("br"),t._v("\nThe Data Package specification outlines a number of different fields that can be stored within a descriptor file,  datapackage.json."),s("br"),t._v("\nFor instance, for this example, we can assign a title to this Data Package by setting the field "),s("code",[t._v("title")]),t._v(" to “Example Retinal Mosaic”:")]),t._v(" "),s("p",[s("code",[t._v('"title" : "Example Retinal Mosaic"')])]),t._v(" "),s("p",[t._v("We can also, for instance, set a "),s("code",[t._v("homepage")]),t._v(" for the dataset which is a URL for the home on the web that is related to this Data Package.")]),t._v(" "),s("p",[s("code",[t._v('"homepage": "http://www.damtp.cam.ac.uk/user/sje30/data/mosaics/w81_scan/"')])]),t._v(" "),s("p",[t._v("Some of the other metadata Stephen required do not, however, map well to existing specified fields in a Data Package.  For instance, as the Data Package is not specialized for storing biological data, there is no field for “species”.  (The Digital Curation Centre maintains a database of domain-specific metadata standards for biology and other fields.)  The specification is intended to be quite flexible in these circumstances:")]),t._v(" "),s("blockquote",[s("p",[t._v("Adherence to the specification does not imply that additional, non-specified properties cannot be used: a descriptor MAY include any number of properties in additional to those described as required and optional properties […] This flexibility enables specific communities to extend Data Packages as appropriate for the data they manage.")])]),t._v(" "),s("p",[t._v("As an example, we stored the radius in a new field called "),s("code",[t._v("soma-radius")]),t._v(" in the “root” level of the Data Package:")]),t._v(" "),s("p",[s("code",[t._v('"soma-radius": 10')])]),t._v(" "),s("p",[t._v("While there are many different ways in which this particular element of metadata could have been stored, this was a good start that would allow easy iteration.  In storing this metadata in the datapackage.json, Data Package-aware tooling could read it with the data.")]),t._v(" "),s("p",[t._v("For example, using the Data Package library (“datapkg”) written by ROpenSci, we can replace multiple calls to the data input functions (in this case, Stephen used the "),s("code",[t._v("read.table()")]),t._v(" and "),s("code",[t._v("scan()")]),t._v(" functions with a single call to "),s("code",[t._v("datapkg_read()")]),t._v(" and store the result in a new object which combines both metadata and data called rmdp.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# install_github("frictionlessdata/datapackage-r")')]),t._v("\nlibrary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datapkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrmdp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" datapkg_read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# read soma radius from rmdp")]),t._v("\nsoma.rad "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rmdp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("`soma"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("radius`\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# read other metadata from the same object")]),t._v("\non "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" rmdp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("points\nw "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" rmdp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("window\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# plot")]),t._v("\nplot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" asp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsymbols"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" circles"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("rep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("soma.rad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nrow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" add"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("inch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" rect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Below is the annotated datapackage.json with the metadata at the top followed by the resource information. As a start, we have included information on cell type, species, and units in the description, but we can easily create new fields to store these fields in a more structured way as we did with "),s("code",[t._v("soma-radius")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example-retinal-mosaic"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Retinal Mosaic"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Homepage"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.damtp.cam.ac.uk/user/sje30/data/mosaics/w81_scan/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Image"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.damtp.cam.ac.uk/user/sje30/data/mosaics/w81_scan/w81all.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is an example retinal mosaic Data Package."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cell type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on center"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"soma-radius"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("I’ve used a "),s("code",[t._v("sources")]),t._v(" array with a single source object:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sources"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wässle H, Boycott BB, Illing RB (1981) Morphology and mosaic of on- and off-beta cells in the cat retina and some functional considerations. Proc R Soc Lond B Biol Sci 212:177–195."')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("resources")]),t._v(" array in datapackage.json listed the files in the original datasets with "),s("code",[t._v("dialect")]),t._v(" and "),s("code",[t._v("schema")]),t._v(" information included. We named the first resource “points” with the filename set in "),s("code",[t._v("path")]),t._v(".  Because it is a space-delimited tabular file without a header, we needed to pass that information to the "),s("code",[t._v("dialect")]),t._v(" attribute so that "),s("code",[t._v("datapkg_read()")]),t._v(" can read the file. The "),s("code",[t._v("schema")]),t._v(" attribute specifies the "),s("code",[t._v("type")]),t._v(" of all the values in the table (e.g. “number”) as well as additional "),s("code",[t._v("constraints")]),t._v(" on the value. Stephen noted that you can’t have an x coordinate without the y, so we have set "),s("code",[t._v("required")]),t._v(" to true for both fields. In addition, Stephen noted that the “window” rectangle is a simple validation on the data, so I have translated the x and y bounds of the window to constraining conditions on each column. We do understand that assessing the validity of such data can be more complicated, however.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resources"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"points"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w81s1on.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dialect"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"delimiter"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\t"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"header"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schema"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fields"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"constraints"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"required"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minimum"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28.08")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"maximum"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("778.08")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"y"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"constraints"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"required"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"minimum"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"maximum"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1007.02")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("For the completeness of the example, we have also added a resource for the “window” rectangle even though (a) we have already stored this data in the "),s("code",[t._v("constraints")]),t._v(" key of the points matrix and (b) it is ideally stored as a vector not a data frame. The benefit of this method is the ability to load all the data files at once and reference them from a common datapackage.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"window"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w81s1w.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dialect"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"delimiter"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\t"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"header"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"schema"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fields"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xmin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xmax"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ymin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ymax"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"review"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#review"}},[t._v("#")]),t._v(" Review")]),t._v(" "),s("h3",{attrs:{id:"how-effective-was-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-effective-was-it"}},[t._v("#")]),t._v(" How Effective Was It")]),t._v(" "),s("p",[t._v("The pilot tackled an interesting use case: providing a generic “home” for metadata related to an experiment,"),s("br"),t._v("\nin a way that is clear and easy to read without the overhead of a more advanced, domain-specific specification."),s("br"),t._v("\nIn a more complicated example, storing the metadata with the data for each sample—paired with a tool that could"),s("br"),t._v("\nread this metadata—could provide an “object-oriented” style of working with experimental data.")]),t._v(" "),s("p",[t._v("We have not tried this out on multiple samples (this is forthcoming), so we don’t have much information yet on"),s("br"),t._v("\nthe usefulness of this approach, but the exercise raised several important issues to potentially address with the"),s("br"),t._v("\nData Package format:")]),t._v(" "),s("ol",[s("li",[t._v("Stephen’s request for a specified location for storing units in a structured way comes up often: "),s("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues/216",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/specs/issues/216"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("More iterations, with more of a variety of data sources could help in trialling this")]),t._v(" "),s("li",[t._v("Stephen wanted to store a non-tabular data file (an image) with the tabular datasets that comprise his datasets.  This is currently not allowed, but the subsequent definition of a Tabular Data Resource could pave the way for a method of specifying types of different resources and the kind of processing, validation or otherwise, that could be done with each.")])]),t._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),s("h3",{attrs:{id:"areas-for-future-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#areas-for-future-work"}},[t._v("#")]),t._v(" Areas for future work")]),t._v(" "),s("p",[t._v("Stephen now has about 100 retinal mosaics that might make for a nice use case of the Data Package."),s("br"),t._v("\nIn addition, The Frictionless Data Tool Fund has funded the development of the next version of the R Data Package."),s("br"),t._v("\nThis will make some of the improvements brought to the Data Package specifications  in the past few months available in the R library.")]),t._v(" "),s("h2",{attrs:{id:"find-out-more"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find-out-more"}},[t._v("#")]),t._v(" Find Out More")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/frictionlessdata/pilot-retinal-mosaics",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/pilot-retinal-mosaics"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);