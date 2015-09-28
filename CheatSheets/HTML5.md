HTML tags consist of:
* An opening tag:
 - left angle bracket `<` a character (indicates the purpose of a tag) `p` and a right angle bracket `>`.
* Optional content
* A closing tag:
- `<` forward slash `/` character `p` `>`

Ex: `<p>Optional content</p>`

Unless an element is an "empty element" like an `<img>` then it must contain both an opening and closing tag.
Empty elements are self closing. Ex: `<img src="url" title />`


## `<html>`

the main enchilada, the whole `document`, that which wraps all the others...
except for [`<!DOCTYPE>`](#doctype), for some reason.

* _parents_: none, it's the top
* _content_: _only_ [`<head>`](#head) and [`<body>`](#body)
* _display_: `block`, maybe? I mean, I can see it... RESEARCH!

### [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

* `class` -- a space-separated list of category names
* `id` -- global; Unique to one element. Used with CSS to style the specific element.
* `lang` -- global; Specifies the language used in an element.



## `<div>`

A generic page division that should only be used if no other, more semantic choice is appropriate...
and because @al-the-x might kill me if I do when I could use [`<section>`](#section) instead.

* _parents_: anything that accepts [Flow Content][1], which is apparently a lot of things.
* _content_: any [Flow Contant][1], palpable content (WTF?)
* _display_: `block`


## `<!DOCTYPE>`

Document type declaration. First thing in an HTML document. It tells the web browser what
version of HTML is on the page.

* _parents_: None
* _content_: Everything
* _display_: none

## `<!-- -->`

Conditional comments. Used to hide code or other text.

* _parents_: N/A
* _content_: N/A
* _display_: N/A



## `<head>`

  Provides general info about the document. Usually includes a title and external links to
  things such as stylesheets, fonts, and icons. Information is not displayed in the viewport.

  * _parents_: first child of `<html>`
  * _content_: `<title>`, `<links>`
  * _display_: none



## [`<body>`] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)

  The content of an HTML document. It contains everything that is displayed on a page.

  * _parents_: Must be the second element of `<html>`
  * _content_: Flow content or content that usually contains text or embedded content i.e. `<a>`, `<div>`, `<h1>`, `<p>` etc.
  * _display_: block




## `<h1>`

  Largest of all heading elements. It is given the most importance.

  * _parents_: Any element that accepts flow content.
  * _content_: Phrasing content i.e. content that defines the text and the mark-up. `<span>`, `<cite>`, `<math>` etc.
  * _display_: block



## [`<p>`] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)

  Represents a paragraph of text.

  * _parents_: Any element that accepts flow content.
  * _content_: Phrasing content
  * _display_: block


## [`<span>`] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)

  Generic inline container for phrasing content. Classes and ids can be added to aid
  css in adding styling to the selected text.

  * _parents_: Any element that accepts phrasing or flow content
  * _content_: Phrasing content
  * _display_: inline


#Lists

## `<ul>`

  Unordered list. A list thats order is meaningless.
  Usually represented by bullet points.

  * _parents_: Any element that accepts flow content.
  * _content_: <li>
  * _display_: block


## `<ol>`

  Ordered (numbered) list.

  * _parents_: Any element that accepts flow content
  * _content_: <li>
  * _display_: block



##[`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)

  List Item. In ordered lists they are displayed (usually) with numbers.
  In unordered lists they are displayed with bullets.

  * _parents_: `<ul>` or `<ol>` or `<menu>`
  * _content_: flow content
  * _display_: block


#Dictionary

##[`<dl>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)  

Description list element. Encloses a list of pairs of terms and descriptions. Commonly used in glossaries or to display meta-data.

* _parents_: Any element that accepts flow content.
* _content_: 0 or more `<dt>` elements that are followed by one or more `<dd>` elements.
* _display_: block

##[`<dt>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt)

Dictionary term. Used to identify a term in a definition list. Occurs only as a child of `<dl>`.

* _parents_: `<dl>`
* _content_: Flow content
* _display_: block

##[`<dd>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd)

Dictionary definition. Description of a term in a `<dl>`.

* _parents_: `<dl>` or `<dd>` inside a `<dl>`
* _content_: Flow content
* _display_: block


#Form

##[`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

A document section in which interactive controls/fields submit info to a webserver.

* _parents_: Any element that accepts flow elements
* _content_: Flow Content
* _display_: block


##[`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

Creates interactive controls that accept data from a user. How it works/appears varies on the value of its `type` attribute. Does not have a closing tag.

* _parents_: Any element that accepts Phrasing content
* _content_: None. Empty element.
* _display_: block


##[`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

Creates captions for an item in an interface. Can have control elements placed inside of can be used with the `for` attribute.

ex:
`<label>Click me <input type="text"></label>`

`<label for="username">Click me</label>
<input type="text" id="username">`


* _parents_: Any element that accepts phrasing content
* _content_: Phrasing Content but no descendant label elements.
* _display_: block


##[`<fieldset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)

Groups several controls within a form.

ex:
```
<form>
  <fieldset>
    <legend>Title</legend>
    <input type="radio" id="radio"> <label for="radio">Click me</label>
  </fieldset>
</form>
```
* _parents_: Any element that accepts flow content
* _content_: An optional <legend> element, followed by flow content.
* _display_: block


##[`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)

Caption for its parent element.

* _parents_: `<fieldset>` with a 1st child of this `<legend>`
* _content_: Phrasing content
* _display_: block

##[`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

Form element that provides a menu (usually dropdown) with `<option>` elements that list the options for that particular menu.

* _parents_: any element that accepts phrasing content
* _content_: `<option>` 0+, `<optgroup>`
* _display_: block


##[`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)

Groups `<option>`s within a `<select>`

* _parents_: `<select>`
* _content_: `<option>`
* _display_: none


##[`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

Multi-line text box.

* _parents_: Any element that accepts phrasing content
* _content_: Character data
* _display_: block


#Tables

##[`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

Represents a table.

ex:
```
In this order:
1. an optional <caption> element,
2. zero or more <colgroup> elements,
3. an optional <thead> element,
4. one of the two alternatives:
 one <tfoot> element, followed by:
 zero or more <tbody> elements,
 or one or more <tr> elements,
8. a second alternative followed by an optional <tfoot> element:
9. either zero or more <tbody> elements,
or one or more <tr> elements
```
* _parents_: Any that accept flow content
* _content_: See ex
* _display_: [table](https://developer.mozilla.org/en-US/docs/Web/CSS/display)


##[`<caption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)

Optional title of a table.


* _parents_: Always first child of `<table>`
* _content_: Flow content
* _display_: table-caption


##[`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup)

Defines a group of columns.

* _parents_: A `<table>` element. The `<colgroup>` must appear after any optional `<caption>` element but before any `<thead>`, `<th>`,`<tbody>`, `<tfoot>` and `<tr>` element.
* _content_: If the span attribute is present: none, it is an empty element.
If the attribute is not present: zero or more `<col>` element
* _display_: table-column-group


##[`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col)

Defines a column in a table. Used for styling the column.

* _parents_: `<colgroup>`
* _content_: None. Empty element.
* _display_: table column


##[`<tbody>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)

Table body element. Defines the body of a table to be 1+ `<tr>` elements. Used semantically with `<thead>`, `<tfoot>`. Enables scrolling of the body if longer than the page.

* _parents_: Within the required parent `<table>` element, the `<tbody>` element can be added after a `<caption>`, `<colgroup>`, `<thead>` and a `<tfoot>` element.
* _content_: 0+ `<tr>` elements.
* _display_: table-row-group


##[`<thead>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)

Table head. Defines a set of rows that are the head of the columns of the table.

* _parents_: A <table> element. The <thead> must appear after any <caption> or <colgroup> element, even implicitly defined, but before any <tbody>, <tfoot> and <tr> element.
* _content_: 0+ `<tr>`
* _display_: table-header-group


##[`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)

Table header cell. Header for a group of cells. Defined by the `scope` and `headers` attributes.

`scope`: Defines the cells related to the header. Has values:
-`row`: header relates to all of the cells in that row.
-`col`: header relates to all the cells in that column.
-`rowgroup`: header relates to all of the remaining cells in the row group (those to hte right of this element or to the left).
-`colgroup`: header relates to all the remaining ells in the column group that this element belongs to.

`header`: This attributes a list of space-separated strings, each corresponding to the `id` attribute of the `<th>` elements that applies to this element.

* _parents_: `<tr>` element
* _content_: Phrasing content
* _display_: table-head


##[`<tfoot>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)

Table foot Element. Defines a set of rows summarizing the columns of a table.

* _parents_: A `<table>` element. The `<tfoot>` must appear after any `<caption>`, `<colgroup>` or `<thead>` element. It can be before or after all `<tbody>` and `<tr>` elements, but not intermixed with them.
HTML 4 The `<tfoot>` element cannot be placed after any `<tbody>` and `<tr>` element. This restriction has been softened in HTML5.

* _content_: 0+ `<tr>` elements
* _display_: table-footer-group




##[`<tr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)

Table row. Can be a mix of `<td>` and `<th>` elements.

* _parents_: A `<table>`, `<thead>`, `<tbody>` or `<tfoot>` element.
* _content_: 0+ `<td>` and `<th>` elements.
* _display_: table-row


##[`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)

Table cell. Defines one cell that contains data.

* _parents_: `<tr>`
* _content_: Flow content
* _display_: table-cell



##[``]()
* _parents_:
* _content_:
* _display_:
###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
[2](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
[3](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content)
[4](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
[5](http://colintoh.com/blog/display-table-anti-hero)
