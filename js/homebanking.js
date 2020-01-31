
var nombreUsuario = "Sabrina";
var pass = "banco";
var saldoCuenta = 5000;
var limiteExtraccion = 1000;


window.onload = function() {
   iniciarSesion();
   cargarNombreEnPantalla();
   actualizarSaldoEnPantalla();
   actualizarLimiteEnPantalla();
}

function iniciarSesion() {
  var user = prompt("Ingrese el usuario");
  var password = prompt("Ingrese la contraseña");
    if (user === nombreUsuario && password === pass){
    alert("Usted se ha logueado correctamente");
    alert("Bienvenido a su HomeBanking");
    return;
   } else {
    alert("Login inválido, Tu dinero ha sido retenido por razones de seguridad.");
}
login();
}

function cambiarLimiteDeExtraccion() {
  var limite = parseInt (prompt ("Por favor, ingrese su nuevo límite de extracción"));
  limiteExtraccion = limite
  actualizarLimiteEnPantalla()
  alert ("Su nuevo límite de extracción es de $ "+ limite);
}

function extraerDinero() {
  var saldoAnterior = saldoCuenta;
  var monto = parseInt (prompt  ("Por favor, Ingrese el monto a extraer"));
  if (monto <= saldoCuenta && monto <= limiteExtraccion && monto%100==0){
     restarDinero (monto);
     alert ("Usted ha retirado: $" + monto + "\nSu saldo anterior: $" + saldoAnterior + "\nEl saldo actual de su cuenta es de:  $" + saldoCuenta);
     actualizarSaldoEnPantalla();
    }
    else if (monto >= saldoCuenta) {
     alert ("Disculpe, no posee saldo suficiente para retirar el monto ingresado");
    }
    else if (monto >= limiteExtraccion){
     alert ("Disculpe, su límite de extracción es menor al monto ingresado");
    }
    else if(monto%100!==0){
     alert ("Disculpe, solo es posible extraer múltipolos de cien");
 }
}

function depositarDinero() {
  var saldoAnterior = saldoCuenta;
  var monto =  parseInt (prompt("Por favor, ingrese el monto a depositar"));
  if (monto <= 0){
  alert ("Disculpe, no es posible depositar montos menores a cero");
  }else{
  sumarDinero(monto)
  actualizarSaldoEnPantalla()
  alert ("Usted ha depositado: $" + monto + "\nSu saldo anterior: $" + saldoAnterior + "\nEl saldo actual de su cuenta es de:  $" + saldoCuenta);
}
}

function pagoServicio(nombreServicio, montoServicio){
      alert ("El monto a abonar de su factura de " + nombreServicio + " es de: $"+ montoServicio );
      if (saldoCuenta >= montoServicio){
      var saldoAnterior = saldoCuenta;
      restarDinero(montoServicio);
      alert ("Ud ha abonado su factura de "+ nombreServicio + " exitosamente."+ "\nSu saldo anterior era de $" + saldoAnterior + "\nEl dinero descontado de su cuenta es de $" + montoServicio +  "\nEl saldo actual de su cuenta es de $" + saldoCuenta);
      actualizarSaldoEnPantalla();
      }else{
      alert ("Usted no posee saldo suficiente para abonar el servicio");
      }
}

function pagarServicio() {
  var nombreServicio= prompt("Por favor, indique que número del servicio que desea abonar: \n1-Luz $210  \n2-Internet $350  \n3-Agua $570 \n4-Teléfono $425");
  var luz= 210;
  var internet= 350;
  var agua= 570;
  var telefono=425;

  switch(nombreServicio) {

    case "1":
       pagoServicio ("luz", luz);
    break;

    case "2":
      pagoServicio ("internet", internet);
    break;

    case "3":
      pagoServicio ("agua", agua);
    break;

    case "4":
      pagoServicio ("telefono", telefono);
    break;

    default:
      alert("Ese no es un comando valido");
}
}

function transferirDinero() {
  var cuentaAmiga1 = "1234567";
  var cuentaAmiga2 = "7654321";
  var monto = parseInt (prompt ("Por favor, ingrese el monto que desea transferir"));

   if (saldoCuenta >= monto){
  var cuenta = parseInt (prompt ("Por favor, ingrese el número de cuenta al que desea transferir"));

   if (cuenta == cuentaAmiga1 || cuenta ==cuentaAmiga2 ){
     restarDinero(monto);
     actualizarSaldoEnPantalla()
     alert("Usted ha transferido a: " + cuenta + " la suma de $" + monto + "\nEl saldo actual de su cuenta es de $" + saldoCuenta);

   } else if (cuenta != cuentaAmiga1 || cuenta !=cuentaAmiga2 ){
  alert ("Disculpe, solo es posible tranferir dinero a Cuentas Amigas");
   }

   } else  {
 alert ("Usted no posee saldo suficiente para efectuar la trasnferncia");
   }
}



function sumarDinero(monto){
  saldoCuenta += monto;
}

function restarDinero(monto){
  saldoCuenta -= monto;
}

function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenide " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
