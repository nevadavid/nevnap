# Névnap

Nevnap (névnap) is a minimalist JavaScript library that displays hungarian namedays.

- 🔌 No dependencies
- ↔️ No XHR

The names used in this package are from [Wikipedia](https://hu.wikipedia.org/wiki/Magyar_n%C3%A9vnapok_list%C3%A1ja_d%C3%A1tum_szerint).

## Installation

```
npm i nevnap
```

or

```
yarn add nevnap
```

## API

### Methods

#### `today(): string`

Getting namedays on the current day.

```javascript
import { today } from 'nevnap';

today(); // Tamás
```


#### `on(date: string): string`

Getting namedays on a specific date.

```javascript
import { on } from 'nevnap';

on('04-22'); // Csilla, Noémi
```

#### `to(name: string): string`

Getting date on a specific name.

```javascript
import { to } from 'nevnap';

to('Csilla'); // 04-22
```
