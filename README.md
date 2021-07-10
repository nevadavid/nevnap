# nevnap

Névnap is a minimalist JavaScript library that displays hungarian namedays.

## Installation

```
npm i nevnap
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
