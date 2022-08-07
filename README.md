# Burger queen

## Índice

* [1. Descripción del proyecto](#1-descripción-del-proyecto)
* [2. Funcionamiento](#2-funcionamiento)
* [3. Definición del producto](#3-definición-del-producto)
* [4. Diseño de la aplicación](#4-diseño-de-la-aplicación)
* [5. Resultado final](#5-resultado-final)
* [6. Herramientas usadas](#6-herramientas-usadas)
* [7. Autoras](#7-autoras)

## **1. Descripción del proyecto**

<p align="center"><img src='https://i.ibb.co/B65bktf/font1.png' width='40%'/></p><br><br>

<p align="justify">
Burger queen es un aplicativo que ayudará a un pequeño restaurante de hamburguesas para la toma de pedidos y que posteriormente se envié al sistema integrado del área de la cocina mediante la conexión a Firestore DB. El diseño realizado fue pensado de cara al usuario, la simplicidad con la que fue plasmada hace que la interacción con esta aplicación sea intuitiva y cómoda. Esta página está pensada para un NestHub, por lo tanto, las medidas usadas para esta PWA son de 1024 x 600 pixeles. A continuación, la siguiente información servirá para tener libre acceso al programa Burger queen:
</p>

<p align="center">

| Usuario                      | Contraseña    |
|------------------------------|---------------|
| waiter@burguer-queen.com     |   111111      |
| cook_boss@burguer-queen.com  |   111111      |
</p>

## **2. Funcionamiento**

<p align="justify">Lo primero que se mostrará es un loader, que es un cargador de todos los componentes integrados a esta PWA para que su ejecución se dé con éxito en la memoria del sistema. Luego mostrará la vista del login donde se tiene 2 únicas maneras con las que puede ingresar el mesero y el jefe de cocina.
Si el mesero coloca sus credenciales correctas, podrá visualizar el menú de la casa con sus precios respectivos y podrá adicionar o disminuir los productos según sea el caso. También podrá ver el precio unitario y el total para brindar esta información a los clientes, una vez que esté listo la solicitud, podrá enviar el detalle del pedido al área de Cocina y también podrá visualizar del estado de estos para que sean entregados a los comensales.
Si el jefe de cocina ingresa al aplicativo, podrá ver las órdenes que están pendientes para su preparación y atenderlos.</p>

## **3. Definición del producto**

El Product Owner presentó un backlog que es el resultado de su trabajo con el cliente de Burger queen hasta el día de hoy:

#### **[Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente**

Yo como mesera quiero tomar el pedido de un cliente para no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.

#### **Criterios de aceptación**


✅ Anotar nombre de cliente.

✅ Agregar productos al pedido.

✅ Eliminar productos.

✅ Ver resumen y el total de la compra.

✅ Enviar pedido a cocina (guardar en la base de datos de Firebase).

✅ Se ve y funciona bien en una _tablet_

### **Definición de terminado**


✅ Debes haber recibido _code review_ de al menos una compañera.

✅ Haces _test_ unitarios y, además, has testeado tu producto manualmente.

✅ Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.

✅ Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### **[Historia de usuario 2] Jefe de cocina debe ver los pedidos**

Yo como jefa de cocina quiero ver los pedidos de los clientes en orden y marcar cuáles están listos para saber qué se debe cocinar y avisar a los meserosque un pedido está listo para servirlo a un cliente.

#### **Criterios de aceptación**

✅ Ver los pedidos ordenados según se van haciendo.

✅ Marcar los pedidos que se han preparado y están listos para servirse.

### **Definición de terminado**

✅ Debes haber recibido code review de al menos una compañera.

✅ Haces test unitarios y, además, has testeado tu producto manualmente.

✅ Hiciste tests de usabilidad e incorporaste el feedback del usuario.

***

#### **[Historia de usuario 3] Mesero debe ver pedidos listos para servir**
Yo como mesero quiero ver los pedidos que están preparados para entregarlos rápidamente a los clientes que las hicieron.

#### **Criterios de aceptación**

✅ Ver listado de pedido listos para servir.

✅ Marcar pedidos que han sido entregados.

### **Definición de terminado**

✅ Debes haber recibido _code review_ de al menos una compañera.

✅ Haces _test_ unitarios y, además, has testeado tu producto manualmente.

✅ Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.

✅ Desplegaste tu aplicación y has etiquetado tu versión (git tag).

✅ Los datos se deben mantener íntegros, incluso después de que un pedido ha terminado. Todo esto para poder tener estadísticas en el futuro.

## **4. Diseño de la aplicación**

**Prototipos de alta fidelidad**

<p align="center">
<img src='https://i.ibb.co/9VrY21m/Logo1.jpg' width='50%'></p>
<p align="center">
<img src='https://i.ibb.co/nznN1G2/Logo2.jpg' width='50%'></p>
<p align="center">
<img src='https://i.ibb.co/KhTGCbf/Logo3.jpg' width='50%'></p>

</p>

## **5. Resultado final**

#### **Vista del mesero**

<p align="center">
<img src='https://i.ibb.co/3vdF9nb/View1.gif' width='50%'></p><br><br>

#### **Vista del cocinero**

<p align="center">
<img src='https://i.ibb.co/pyBYKPY/cook.gif' width='50%'></p><br><br>

## **6. Herramientas usadas**
* Figma
* React
* Firebase
* Bootstrap
* SweetAlert
* Adobe Photoshop
* Jest JS
* GitHub

## **7. Autoras**

* [Juana Llanje](https://github.com/Juana-89)
  
* [Thalia Román](https://github.com/thaliaroman)
  
