# Névnap

Nevnap (névnap) is a minimalist JavaScript library that displays hungarian namedays.

- 🔌 No dependencies
- ↔️ No XHR
- 📦 Only 13.9kB (including names)

The names used in this package are from [Wikipedia](https://hu.wikipedia.org/wiki/Magyar_n%C3%A9vnapok_list%C3%A1ja_d%C3%A1tum_szerint).

## Installation

```
npm i nevnap
```

or

```
yarn add nevnap
```

## Browser (UMD)

```html
<!-- CDN example (unpkg) -->
<script src="https://unpkg.com/nevnap@latest"></script>

<script>
nevnap.today();
</script>
```

## API

### Methods

#### `today(): string[]`

Getting today's nameday(s).

```javascript
import { today } from 'nevnap';

today(); // ['Zsuzsanna', 'Eliza', 'Konrád']
```

#### `tomorrow(): string[]`

Getting tomorrow's nameday(s).

```javascript
import { tomorrow } from 'nevnap';

tomorrow(); // ['Aladár', 'Álmos', 'Leó']
```

#### `on(date: string): string[]`

Getting nameday(s) on a specific date.

```javascript
import { on } from 'nevnap';

on('04-22'); // ['Csilla', 'Noémi', 'Kájusz', 'Noé']
```

#### `to(name: string): string[]`

Getting date(s) to a specific name.

```javascript
import { to } from 'nevnap';

to('Csilla'); // ['04-22', '08-10']
```
