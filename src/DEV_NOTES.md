

# Sistema para modal. 

En app organizo toda la pagina agrego los componente como el canvas, modal y partes de UI, dentro del canvas agrego mi componente Experience.jsx que es desde donde voy a controlar todo el 3d.

Modal Componente FloorInfoModal envio dos props, uno para saber que floor esta seleccionado, y una funcion que se le va a pasar onclick para que pueda cerrar el modal. el modal abre y se cierra con una condiccion   if (floor === null) return null

a experience envio los useState desde app.jsx para saber que piso esta seleccionado y poder trabajar con ello. 

en experience llamo los componente para los botones que van abrir mi modal y tambien les doy la orden de que no aparezcan cuando el modal esta abierto. a su vez  envio onSelectedFloor al componente FloorButton.jsx que controla en cambio del useState de setSelecterFloor para poder cambiar el estado desde FloorButton.jsx por el piso correspondiente. 

FloorButton lo recibe y lo modifica con el click del botton. <button onClick={() => onSelect(floor)}> a su vez recibe un valor para floor cambiando el estado por este valor. y al hacerlo FloorInfoModal.jsx recibe el valor de floor y imprime los datos correspondientes para el modal. 


# Sistema para modal

## 1. `App.jsx` — Estado y estructura general

`App.jsx` organiza la página principal y renderiza los componentes generales:

* `Navbar`
* `HeroTexts`
* `Canvas`
* `FloorInfoModal`
* `Areas`
* `Location`
* `Footer`

Dentro de `Canvas` se renderiza `Experience.jsx`, que se encarga de controlar la experiencia 3D.

En `App.jsx` se mantiene el estado que determina qué piso está seleccionado:

```jsx
const [selectedFloor, setSelectedFloor] = useState(null)
```

`selectedFloor` contiene el piso seleccionado y `setSelectedFloor` permite modificarlo.

---

## 2. `FloorInfoModal.jsx` — Mostrar y cerrar el modal

Desde `App.jsx` se envían dos props al modal:

```jsx
<FloorInfoModal
  floor={selectedFloor}
  onClose={() => setSelectedFloor(null)}
/>
```

### `floor`

Indica qué piso está seleccionado.

```jsx
floor={selectedFloor}
```

El modal utiliza este valor para saber qué información debe mostrar.

### `onClose`

Es una función que permite cerrar el modal:

```jsx
onClose={() => setSelectedFloor(null)}
```

Cuando se ejecuta, `selectedFloor` vuelve a `null`.

El modal comprueba si existe un piso seleccionado:

```jsx
if (floor === null) return null
```

Si `floor` es `null`, el componente no renderiza nada.

---

## 3. `Experience.jsx` — Control de la experiencia 3D

Desde `App.jsx` se pasan a `Experience.jsx` el estado y la función que permite modificarlo:

```jsx
<Experience
  selectedFloor={selectedFloor}
  onSelectFloor={setSelectedFloor}
/>
```

`Experience.jsx` recibe:

* `selectedFloor`: para saber qué piso está seleccionado.
* `onSelectFloor`: función que permite cambiar el piso seleccionado.

`Experience.jsx` contiene los componentes relacionados con la interacción del modelo 3D, incluyendo los botones que permiten seleccionar los pisos.

También puede utilizar `selectedFloor` para controlar qué elementos 3D deben mostrarse u ocultarse cuando el modal está abierto.

---

## 4. `FloorButton.jsx` — Seleccionar un piso

`Experience.jsx` pasa a `FloorButton.jsx` la función para seleccionar un piso y el valor correspondiente:

```jsx
<FloorButton
  onSelect={onSelectFloor}
  floor={floor}
/>
```

`FloorButton.jsx` recibe:

* `onSelect`: función que permite cambiar el piso seleccionado.
* `floor`: valor que identifica el piso representado por el botón.

Cuando el usuario hace click:

```jsx
<button onClick={() => onSelect(floor)}>
```

Se ejecuta:

```jsx
setSelectedFloor(floor)
```

Por ejemplo, si:

```jsx
floor = 3
```

el click termina ejecutando:

```jsx
setSelectedFloor(3)
```

Esto actualiza el estado en `App.jsx`.

---

## 5. Flujo de datos

El estado tiene una única fuente de verdad: `App.jsx`.

```text
App.jsx
│
├── selectedFloor
├── setSelectedFloor
│
├── Canvas
│   │
│   └── Experience.jsx
│       │
│       └── FloorButton.jsx
│           │
│           └── click
│               ↓
│           onSelect(floor)
│               ↓
│           setSelectedFloor(floor)
│
└── FloorInfoModal.jsx
        │
        └── recibe floor
            ↓
        muestra la información
```

### Ejemplo: abrir el modal

Si el usuario hace click en el Piso 3:

```text
FloorButton
    ↓
onSelect(3)
    ↓
setSelectedFloor(3)
    ↓
selectedFloor = 3
    ↓
FloorInfoModal recibe floor={3}
    ↓
muestra la información del Piso 3
```

### Ejemplo: cerrar el modal

Cuando el usuario pulsa el botón de cerrar:

```text
onClose()
    ↓
setSelectedFloor(null)
    ↓
selectedFloor = null
    ↓
FloorInfoModal recibe floor={null}
    ↓
if (floor === null) return null
    ↓
el modal desaparece
```

---

## 6. Comunicación entre componentes

La comunicación sigue el flujo habitual de React:

### El estado vive en el padre

```jsx
const [selectedFloor, setSelectedFloor] = useState(null)
```

### El padre pasa información a los hijos

```jsx
<FloorInfoModal floor={selectedFloor} />
```

### El padre pasa funciones a los hijos

```jsx
<FloorButton onSelect={setSelectedFloor} />
```

### El hijo ejecuta la función recibida

```jsx
onSelect(floor)
```

De esta forma, `FloorButton` no modifica directamente el estado. Ejecuta una función que recibió mediante props.

---

## 7. Idea principal

La arquitectura puede resumirse así:

```text
                 App.jsx
                   │
          ┌────────┴────────┐
          │                 │
          ↓                 ↓
   Experience.jsx     FloorInfoModal
          │                 ↑
          ↓                 │
   FloorButton.jsx          │
          │                 │
          └───────┐         │
                  ↓         │
            setSelectedFloor
                  │
                  ↓
          selectedFloor
                  │
                  └─────────→ Modal
```

La idea principal es que **`App.jsx` mantiene el estado**, mientras que los componentes hijos reciben los datos y las funciones necesarias mediante `props`.

Esto permite que cada componente tenga una responsabilidad clara:

* **`App.jsx`** → mantiene el estado y organiza la página.
* **`Experience.jsx`** → controla la experiencia 3D.
* **`FloorButton.jsx`** → detecta el click y selecciona un piso.
* **`FloorInfoModal.jsx`** → muestra la información del piso seleccionado y permite cerrarlo.
