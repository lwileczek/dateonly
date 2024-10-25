# dateonly
A drop in replacement for Date objects in JavaScript without a time component.
This avoids any hassel having to do with timezones.

## Why?
If you find yourself only caring about dates, like a birthday, holiday, or vacation day
but the dates keep getting changed around because of timezones, this library avoids
the hassel. 

## Status
This project is in beta. It is stable under the "happy path" usage but still needs
to have added validation around inputs.

## Installation

```
npm install @patient-otter/dateonly
```

## Differences with Date Objects
There are some differences to with built in Date objects

 - The default date is `1970-01-01` not the current day.  e.g. `new DateOnly().toString() // 1970-01-01 `
 - The Constructor only takes numbers, you must use static methods to create from 
 a number, string, or Date object
 - The month properties are indexed at 1, so the range is `1-12` where 1 is January
 12 is December

## Usage
under construction...

```js
import DateOnly from "@patient-otter/dateonly";

const dt = new DateOnly() //1970-01-01

dt.setDate(dt.getDate() + 12)
//1970-01-13

dt.toJSON() //1970-01-13T:00:00.000Z

const dateWithTime = new Date();
const dateWithouttime = DateOnly.fromDate(dateWithTime);

const dateFromString = DateOnly.fromString('06/25/2030');

console.log(dateFromString.toString()) //'2030-06-25'
```

# API
## Classes

<dl>
<dt><a href="#Create a new DateOnly object">Create a new DateOnly object</a></dt>
<dd></dd>
<dt><a href="#DateOnly">DateOnly</a></dt>
<dd><p>A date object with without time</p>
</dd>
</dl>

<a name="Create a new DateOnly object"></a>

## Create a new DateOnly object
**Kind**: global class  
**Param{number}**: [year=1970] The year the of the date  
**Param{number}**: [month=1] The year the of the date  
**Param{number}**: [date=1] The year the of the date  
<a name="DateOnly"></a>

## DateOnly
A date object with without time

**Kind**: global class  

* [DateOnly](#DateOnly)
    * _instance_
        * [.getFullYear()](#DateOnly+getFullYear)
        * [.getMonth()](#DateOnly+getMonth)
        * [.getDate()](#DateOnly+getDate)
        * [.setFullYear(v)](#DateOnly+setFullYear)
        * [.getDay()](#DateOnly+getDay)
        * [.setMonth(v)](#DateOnly+setMonth)
        * [.setDate(v)](#DateOnly+setDate)
        * [.toString([sep])](#DateOnly+toString)
        * [.toISOString()](#DateOnly+toISOString)
        * [.toJSON()](#DateOnly+toJSON)
        * [.toDateString()](#DateOnly+toDateString)
        * [.isValid()](#DateOnly+isValid)
    * _static_
        * [.fromNumber(n)](#DateOnly.fromNumber)
        * [.fromString(s)](#DateOnly.fromString)
        * [.fromDate(d)](#DateOnly.fromDate)

<a name="DateOnly+getFullYear"></a>

### dateOnly.getFullYear()
Return the year only from the DateOnly

**Kind**: instance method of [<code>DateOnly</code>](#DateOnly)  
**Returns{number}**:   
<a name="DateOnly+getMonth"></a>

### dateOnly.getMonth()
Return the month value from the DateOnly.
Indexed from 1, 12 is december

**Kind**: instance method of [<code>DateOnly</code>](#DateOnly)  
**Returns{number}**:   
<a name="DateOnly+getDate"></a>

### dateOnly.getDate()
Return the date value, or the day of the month
Indexed from 1, max of 31 depending the month

**Kind**: instance method of [<code>DateOnly</code>](#DateOnly)  
**Returns{number}**:   
<a name="DateOnly+setFullYear"></a>

### dateOnly.setFullYear(v)
Return the year only from the DateOnly

**Kind**: instance method of [<code>DateOnly</code>](#DateOnly)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | The new desired value for the year |

<a name="DateOnly+getDay"></a>

### dateOnly.getDay()
Get day of the week

**Kind**: instance method of [<code>DateOnly</code>](#DateOnly)  
<a name="DateOnly+setMonth"></a>

### dateOnly.setMonth(v)
Return the month value from the DateOnly.
Indexed from 1, 12 is december

**Kind**: instance method of [<code>DateOnly</code>](#DateOnly)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | The new desired value for the value |

<a name="DateOnly+setDate"></a>

### dateOnly.setDate(v)
Set the date value, or the day of the month

**Kind**: instance method of [<code>DateOnly</code>](#DateOnly)  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>number</code> | The new desired value for the date |

<a name="DateOnly+toString"></a>

### dateOnly.toString([sep])
Set the date value, or the day of the month

**Kind**: instance method of [<code>DateOnly</code>](#DateOnly)  
**Returns{string}**: the date represented as a string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [sep] | <code>string</code> | <code>&quot;-&quot;</code> | The seperator to use between date components |

<a name="DateOnly+toISOString"></a>

### dateOnly.toISOString()
Return a string in ISO8601 format
All time values are set to zero

**Kind**: instance method of [<code>DateOnly</code>](#DateOnly)  
**Returns{string}**: the date represented as an ISO8601 string  
<a name="DateOnly+toJSON"></a>

### dateOnly.toJSON()
JSON serializes the date to an ISO8601 date

**Kind**: instance method of [<code>DateOnly</code>](#DateOnly)  
**Returns{string}**: the date represented as an ISO8601 string  
<a name="DateOnly+toDateString"></a>

### dateOnly.toDateString()
Returns a Date stirng

**Kind**: instance method of [<code>DateOnly</code>](#DateOnly)  
<a name="DateOnly+isValid"></a>

### dateOnly.isValid()
Returns if the current date time object is valid or not

**Kind**: instance method of [<code>DateOnly</code>](#DateOnly)  
<a name="DateOnly.fromNumber"></a>

### DateOnly.fromNumber(n)
Crete a DateOnly Object from a number, numbers represent the days since
1 Jan 1970

**Kind**: static method of [<code>DateOnly</code>](#DateOnly)  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | The number to be converted to a DateOnly Object |

<a name="DateOnly.fromString"></a>

### DateOnly.fromString(s)
Create a DateOnly Object from some string. Wraps new Date(str)

**Kind**: static method of [<code>DateOnly</code>](#DateOnly)  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>string</code> | The string to read the date info from |

<a name="DateOnly.fromDate"></a>

### DateOnly.fromDate(d)
Create a DateOnly Object from some string. Wraps new Date(str)

**Kind**: static method of [<code>DateOnly</code>](#DateOnly)  

| Param | Type | Description |
| --- | --- | --- |
| d | <code>Date</code> | The date to use in creating a new DateOnly object using the date's UTC values |

