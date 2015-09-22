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



## [`<li>`] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)

  List Item. In ordered lists they are displayed (usually) with numbers.
  In unordered lists they are displayed with bullets.

  * _parents_: `<ul>` or `<ol>` or `<menu>`
  * _content_: flow content
  * _display_: block





###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
[2](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
[3](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content)
[4](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
