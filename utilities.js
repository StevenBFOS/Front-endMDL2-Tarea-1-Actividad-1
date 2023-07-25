function resumenOrden1 () {
    let producto, cantidad, precio, total
    precio = 52000
    producto = "POP UP PARADE – Sesshomaru"
    cantidad = parseInt(prompt("¿Cuántos quiere llevar?"));
    total = precio * cantidad;
    document.getElementById ("resumen").textContent = cantidad + " " + producto + ` (¢${precio} c/u) ` + "por un total de: " + "¢" + total + " " + "¡Muchas Gracias!"
}

function resumenOrden2 () {
    let producto, cantidad, precio, total
    precio = 25000
    producto = "Camisa(s) — ITACHI"
    cantidad = parseInt(prompt("¿Cuántos quiere llevar?"));
    total = precio * cantidad;
    document.getElementById ("resumen").textContent = cantidad + " " + producto + ` (¢${precio} c/u) ` + "por un total de: " + "¢" + total + " " + "¡Muchas Gracias!"
}

function resumenOrden3 () {
    let producto, cantidad, precio, total
    precio = 95000
    producto = "KIMETSU NO YAIBA — Manga Completo"
    cantidad = parseInt(prompt("¿Cuántos quiere llevar?"));
    total = precio * cantidad;
    document.getElementById ("resumen").textContent = cantidad + " " + producto + ` (¢${precio} c/u) ` + "por un total de: " + "¢" + total + " " + "¡Muchas Gracias!"
}