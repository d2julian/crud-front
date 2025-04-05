## Parte frontend del Crud

Este es el repositorio de la parte front de la tarea. La parte del backend se encuentra [AQUÍ](https://github.com/d2julian/crud-back)

### Arrancar el proyecto

```bash
$ npm install
```

Recomendable primero arrancar la parte backend.

```bash
$ npm run dev
```

### Desarrollo de la tarea.

La tarea se podía enfocar de 2 manerás diferentes:

- Hacer el crud de Hoteles, y luego copiarlo y pegarlo para el de Clientes y Bookings cambiando un
  par de cosas en los componentes. Esto es con diferencia la manera más rápida. Pero tiene como desventaja que se repite mucho código, poco mantenible.

- Hacerlo modular: Crear componentes genéricos, que simplemente reciban por props lo que tienen que hacer y pintarlo. Ventajas: Muy modular, muy escalable y mantenible, al terminar crear un crud nuevo es cuestión de minutos Pero como desventaja es que el inicio es mucho más lento y difícil.

Se ha optado por la opción modular. Para ello se ha creado el componentes genéricos, Crud, Table y Form. El componente Crud, en el prop de headers, reciba las cabeceras que tiene que pintar, los items a pintar, y las funciones que tiene que usar para crear/modificar/borrar. En el crud, se usan estos props, para construir el header y el body de Table de forma dinámica, además del Form también de forma dinámica. Además, la web es responsive.

Para no repetir tanto código, se ha usado un custom hook, useCrud, que recibe las funciones de fetch (encontradas en api.tsx) y las devuelve junto al resultado de los fetch.

La tarea se ha realizado en React@18 usando Typescript y vite como base. Además, se han usado estas librerías:

- React Router: Para la navegación entre Hoteles, Clientes y Reservas.

- Tailwind: Se ha usado para hacer los estilos de la aplicación.

- React Hot Toast: Para mostrar de forma elegante si el registro se ha creado/modificado/eliminado correctamente.

- React Icons: Una librería con muchos iconos. Se usan en los botones de añadir, modificar y eliminar.

- React Spinners: Se muestra un spinner cuando se está llamando al backend. A mí, en local, al hacerse la petición tan rápido casi no se aprecia, pero si le cambiais la propiedad isLoading a true a cualquier componente de pages, se verá mejor.

### Cosas a mejorar.

- No se han hecho tests.

- Añadir comentarios

- Hay algunos errores de eslint / ts que se tienen que corregir, sobre todo en el componente Form y Field. Me di cuenta tarde que en el Booking, aparte de inputs, también hay selects donde van los datos de Hoteles y Clientes.

- Cada vez que se hace una operación a la api insertar / modificar / borrar, se lanza un get nuevamente para recuperar los datos. Esto se podría mejorar si se añade el resultado al useState de data. También se podría usar un context o una librería de estado.

- El manejo de errores es un poco pobre. Simplemente se enseña un toast. Podría ser mejor, por ejemplo si se intenta borrar un hotel,
  pero este tiene una reserva, desde el backend se devuelve un error de la fk (que esto tampoco esta muy bien) y se enseña el toast de que ha ocurrido un error.
- El Form no tiene ningún tipo de validación. Simplemente se han marcado todos los campos a required para estar seguro que no se dejan sin rellenar. Se deberían validar en el onSubmit o incluso usar alguna libreria externa como Formik.
