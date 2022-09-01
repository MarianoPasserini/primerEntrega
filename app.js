class productos {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}
// PROCEDO A DECLARAR LAS VARIABLES A UTILIZAR PARA EL PROYECTO EN BASE AL CONSTRUCTOR
let gpuLowEnd = new productos("1030", 5000, 10);
let gpuMidEnd = new productos("1060", 10000, 10);
let gpuHighEnd = new productos("1080", 20000, 10);
let cpuLowEndIntel = new productos("i3", 5000, 10);
let cpuMidEndIntel = new productos("i5", 10000, 10);
let cpuHighEndIntel = new productos("i7", 20000, 10);
let cpuLowEndAMD = new productos("Ryzen 3", 5000, 10);
let cpuMidEndAMD = new productos("Ryzen 5", 10000, 10);
let cpuHighEndAMD = new productos("Ryzen 7", 20000, 10);
let ram8gb = new productos("8gb", 5000, 10);
let ram16gb = new productos("16gb", 10000, 10);
let ram32gb = new productos("32gb", 20000, 10);
let ssdLowEnd = new productos("120gb", 5000, 10);
let ssdMidEnd = new productos("240gb", 10000, 10);
let ssdHighEnd = new productos("480gb", 20000, 10);
let hddLowEnd = new productos("500gb", 5000, 10);
let hddMidEnd = new productos("1tb", 10000, 10);
let hddHighEnd = new productos("2tb", 20000, 10);
let motherboardAMD = new productos("asus", 5000, 10);
let motherboardIntel = new productos("gigabyte", 5000, 10);
let fuenteLowEnd = new productos("500w", 5000, 10);
let fuenteMidEnd = new productos("750w", 10000, 10);
let fuenteHighEnd = new productos("1000w", 20000, 10);
let gabinete = new productos("corsair", 5000, 10);

// PROCEDO A DECLARAR LAS FUNCIONES PARA MOSTRAR LOS PRODUCTOS Y AGREGARLOS AL CARRITO

let carrito = [];
function mostrarMother(motherboardAMD, motherboardIntel, carrito){ 
    let pick = prompt("1- Motherboard AMD: " + motherboardAMD.nombre + " Precio: " + motherboardAMD.precio + " Stock: " + motherboardAMD.stock + "\n" + "2- Motherboard Intel: " + motherboardIntel.nombre + " Precio: " + motherboardIntel.precio + " Stock: " + motherboardIntel.stock);
        switch (pick) {
            case "1":
                carrito.push(motherboardAMD.precio);
                motherboardAMD.stock = motherboardAMD.stock - 1;
                alert("Has elegido: " + motherboardAMD.nombre + " Precio: " + motherboardAMD.precio + " Stock: " + motherboardAMD.stock);
                return motherboardAMD.precio;
            case "2":
                carrito.push(motherboardIntel.precio);
                motherboardIntel.stock = motherboardIntel.stock - 1;
                alert("Has elegido: " + motherboardIntel.nombre + " Precio: " + motherboardIntel.precio + " Stock: " + motherboardIntel.stock);
                return motherboardIntel.precio;
            default:
                alert("Opcion invalida");
                return 0;
        }
}
function mostrarGpu (gpuLowEnd,gpuMidEnd,gpuHighEnd, carrito){
    let pick = prompt("1- Gpu Low End: " + gpuLowEnd.nombre + " Precio: " + gpuLowEnd.precio + " Stock: " + gpuLowEnd.stock + "\n" + "2- Gpu Mid End: " + gpuMidEnd.nombre + " Precio: " + gpuMidEnd.precio + " Stock: " + gpuMidEnd.stock + "\n" + "3- Gpu High End: " + gpuHighEnd.nombre + " Precio: " + gpuHighEnd.precio + " Stock: " + gpuHighEnd.stock);
        switch (pick) {
            case "1":
                carrito.push(gpuLowEnd.precio);
                gpuLowEnd.stock = gpuLowEnd.stock - 1;
                alert("Has elegido: " + gpuLowEnd.nombre + " Precio: " + gpuLowEnd.precio + " Stock: " + gpuLowEnd.stock);
                return gpuLowEnd.precio;
            case "2":
                carrito.push(gpuMidEnd.precio);
                gpuMidEnd.stock = gpuMidEnd.stock - 1;
                alert("Has elegido: " + gpuMidEnd.nombre + " Precio: " + gpuMidEnd.precio + " Stock: " + gpuMidEnd.stock);
                return gpuMidEnd.precio;
            case "3":
                carrito.push(gpuHighEnd.precio);
                gpuHighEnd.stock = gpuHighEnd.stock - 1;
                alert("Has elegido: " + gpuHighEnd.nombre + " Precio: " + gpuHighEnd.precio + " Stock: " + gpuHighEnd.stock);
                return gpuHighEnd.precio;
            default:
                alert("Opcion invalida");
                return 0;
        }
}
function mostrarCpu(cpuLowEndAMD, cpuMidEndAMD, cpuHighEndAMD, cpuLowEndIntel, cpuMidEndIntel, cpuHighEndIntel,carrito){ 
    let pick = prompt("1- Cpu Low End AMD: " + cpuLowEndAMD.nombre + " Precio: " + cpuLowEndAMD.precio + " Stock: " + cpuLowEndAMD.stock + "\n" + "2- Cpu Mid End AMD: " + cpuMidEndAMD.nombre + " Precio: " + cpuMidEndAMD.precio + " Stock: " + cpuMidEndAMD.stock + "\n" + "3- Cpu High End AMD: " + cpuHighEndAMD.nombre + " Precio: " + cpuHighEndAMD.precio + " Stock: " + cpuHighEndAMD.stock + "\n" + "4- Cpu Low End Intel: " + cpuLowEndIntel.nombre + " Precio: " + cpuLowEndIntel.precio + " Stock: " + cpuLowEndIntel.stock + "\n" + "5- Cpu Mid End Intel: " + cpuMidEndIntel.nombre + " Precio: " + cpuMidEndIntel.precio + " Stock: " + cpuMidEndIntel.stock + "\n" + "6- Cpu High End Intel: " + cpuHighEndIntel.nombre + " Precio: " + cpuHighEndIntel.precio + " Stock: " + cpuHighEndIntel.stock);
        switch (pick) {
            case "1":
                carrito.push(cpuLowEndAMD.precio);
                cpuLowEndAMD.stock = cpuLowEndAMD.stock - 1;
                alert("Has elegido: " + cpuLowEndAMD.nombre + " Precio: " + cpuLowEndAMD.precio + " Stock: " + cpuLowEndAMD.stock);
                return cpuLowEndAMD.precio;
            case "2":
                carrito.push(cpuMidEndAMD.precio);
                cpuMidEndAMD.stock = cpuMidEndAMD.stock - 1;
                alert("Has elegido: " + cpuMidEndAMD.nombre + " Precio: " + cpuMidEndAMD.precio + " Stock: " + cpuMidEndAMD.stock);
                return cpuMidEndAMD.precio;
            case "3":
                carrito.push(cpuHighEndAMD.precio);
                cpuHighEndAMD.stock = cpuHighEndAMD.stock - 1;
                alert("Has elegido: " + cpuHighEndAMD.nombre + " Precio: " + cpuHighEndAMD.precio + " Stock: " + cpuHighEndAMD.stock);
                return cpuHighEndAMD.precio;
            case "4":
                carrito.push(cpuLowEndIntel.precio);
                cpuLowEndIntel.stock = cpuLowEndIntel.stock - 1;
                alert("Has elegido: " + cpuLowEndIntel.nombre + " Precio: " + cpuLowEndIntel.precio + " Stock: " + cpuLowEndIntel.stock);
                return cpuLowEndIntel.precio;
            case "5":
                carrito.push(cpuMidEndIntel.precio);
                cpuMidEndIntel.stock = cpuMidEndIntel.stock - 1;
                alert("Has elegido: " + cpuMidEndIntel.nombre + " Precio: " + cpuMidEndIntel.precio + " Stock: " + cpuMidEndIntel.stock);
                return cpuMidEndIntel.precio;
            case "6":
                carrito.push(cpuHighEndIntel.precio);
                cpuHighEndIntel.stock = cpuHighEndIntel.stock - 1;
                alert("Has elegido: " + cpuHighEndIntel.nombre + " Precio: " + cpuHighEndIntel.precio + " Stock: " + cpuHighEndIntel.stock);
                return cpuHighEndIntel.precio;
            default:
                alert("Opcion invalida");
                return 0;
    }
}
function mostrarRam(ram8gb,ram16gb,ram32gb,carrito){
    let pick = prompt("1- Ram 8gb: " + ram8gb.nombre + " Precio: " + ram8gb.precio + " Stock: " + ram8gb.stock + "\n" + "2- Ram 16gb: " + ram16gb.nombre + " Precio: " + ram16gb.precio + " Stock: " + ram16gb.stock + "\n" + "3- Ram 32gb: " + ram32gb.nombre + " Precio: " + ram32gb.precio + " Stock: " + ram32gb.stock);
        switch (pick) {
            case "1":
                carrito.push(ram8gb.precio);
                ram8gb.stock = ram8gb.stock - 1;
                alert("Has elegido: " + ram8gb.nombre + " Precio: " + ram8gb.precio + " Stock: " + ram8gb.stock);
                return ram8gb.precio;
            case "2":
                carrito.push(ram16gb.precio);
                ram16gb.stock = ram16gb.stock - 1;
                alert("Has elegido: " + ram16gb.nombre + " Precio: " + ram16gb.precio + " Stock: " + ram16gb.stock);
                return ram16gb.precio;
            case "3":
                carrito.push(ram32gb.precio);
                ram32gb.stock = ram32gb.stock - 1;
                alert("Has elegido: " + ram32gb.nombre + " Precio: " + ram32gb.precio + " Stock: " + ram32gb.stock);
                return ram32gb.precio;
            default:
                alert("Opcion invalida");
                return 0;
        }
}

function mostrarFuente(fuenteLowEnd,fuenteMidEnd,fuenteHighEnd,carrito){
    let pick = prompt("1- Fuente Low End: " + fuenteLowEnd.nombre + " Precio: " + fuenteLowEnd.precio + " Stock: " + fuenteLowEnd.stock + "\n" + "2- Fuente Mid End: " + fuenteMidEnd.nombre + " Precio: " + fuenteMidEnd.precio + " Stock: " + fuenteMidEnd.stock + "\n" + "3- Fuente High End: " + fuenteHighEnd.nombre + " Precio: " + fuenteHighEnd.precio + " Stock: " + fuenteHighEnd.stock);
        switch (pick) {
            case "1":
                carrito.push(fuenteLowEnd.precio);
                fuenteLowEnd.stock = fuenteLowEnd.stock - 1;
                alert("Has elegido: " + fuenteLowEnd.nombre + " Precio: " + fuenteLowEnd.precio + " Stock: " + fuenteLowEnd.stock);
                return fuenteLowEnd.precio;
            case "2":
                carrito.push(fuenteMidEnd.precio);
                fuenteMidEnd.stock = fuenteMidEnd.stock - 1;
                alert("Has elegido: " + fuenteMidEnd.nombre + " Precio: " + fuenteMidEnd.precio + " Stock: " + fuenteMidEnd.stock);
                return fuenteMidEnd.precio;
            case "3":
                carrito.push(fuenteHighEnd.precio);
                fuenteHighEnd.stock = fuenteHighEnd.stock - 1;
                alert("Has elegido: " + fuenteHighEnd.nombre + " Precio: " + fuenteHighEnd.precio + " Stock: " + fuenteHighEnd.stock);
                return fuenteHighEnd.precio;
            default:
                alert("Opcion invalida");
                return 0;
        }
}
function mostrarAlmacenamiento(hddLowEnd,hddMidEnd,hddHighEnd,ssdLowEnd,ssdMidEnd,ssdHighEnd,carrito){
    let pick = prompt("1- HDD Low End: " + hddLowEnd.nombre + " Precio: " + hddLowEnd.precio + " Stock: " + hddLowEnd.stock + "\n" + "2- HDD Mid End: " + hddMidEnd.nombre + " Precio: " + hddMidEnd.precio + " Stock: " + hddMidEnd.stock + "\n" + "3- HDD High End: " + hddHighEnd.nombre + " Precio: " + hddHighEnd.precio + " Stock: " + hddHighEnd.stock + "\n" + "4- SSD Low End: " + ssdLowEnd.nombre + " Precio: " + ssdLowEnd.precio + " Stock: " + ssdLowEnd.stock + "\n" + "5- SSD Mid End: " + ssdMidEnd.nombre + " Precio: " + ssdMidEnd.precio + " Stock: " + ssdMidEnd.stock + "\n" + "6- SSD High End: " + ssdHighEnd.nombre + " Precio: " + ssdHighEnd.precio + " Stock: " + ssdHighEnd.stock);
        switch (pick) {
            case "1":
                carrito.push(hddLowEnd.precio);
                hddLowEnd.stock = hddLowEnd.stock - 1;
                alert("Has elegido: " + hddLowEnd.nombre + " Precio: " + hddLowEnd.precio + " Stock: " + hddLowEnd.stock);
                return hddLowEnd.precio;
            case "2":
                carrito.push(hddMidEnd.precio);
                hddMidEnd.stock = hddMidEnd.stock - 1;
                alert("Has elegido: " + hddMidEnd.nombre + " Precio: " + hddMidEnd.precio + " Stock: " + hddMidEnd.stock);
                return hddMidEnd.precio;
            case "3":
                carrito.push(hddHighEnd.precio);
                hddHighEnd.stock = hddHighEnd.stock - 1;
                alert("Has elegido: " + hddHighEnd.nombre + " Precio: " + hddHighEnd.precio + " Stock: " + hddHighEnd.stock);
                return hddHighEnd.precio;
            case "4":
                carrito.push(ssdLowEnd.precio);
                ssdLowEnd.stock = ssdLowEnd.stock - 1;
                alert("Has elegido: " + ssdLowEnd.nombre + " Precio: " + ssdLowEnd.precio + " Stock: " + ssdLowEnd.stock);
                return ssdLowEnd.precio;
            case "5":
                carrito.push(ssdMidEnd.precio);
                ssdMidEnd.stock = ssdMidEnd.stock - 1;
                alert("Has elegido: " + ssdMidEnd.nombre + " Precio: " + ssdMidEnd.precio + " Stock: " + ssdMidEnd.stock);
                return ssdMidEnd.precio;
            case "6":
                carrito.push(ssdHighEnd.precio);
                ssdHighEnd.stock = ssdHighEnd.stock - 1;
                alert("Has elegido: " + ssdHighEnd.nombre + " Precio: " + ssdHighEnd.precio + " Stock: " + ssdHighEnd.stock);
                return ssdHighEnd.precio;
            default:
                alert("Opcion invalida");
                return 0;
        }

    }

// Ahora creo el storage para guardar los datos de los productos

localStorage.setItem("gpuLowEnd", JSON.stringify(gpuLowEnd));
localStorage.setItem("gpuMidEnd", JSON.stringify(gpuMidEnd));
localStorage.setItem("gpuHighEnd", JSON.stringify(gpuHighEnd));
localStorage.setItem("hddLowEnd", JSON.stringify(hddLowEnd));
localStorage.setItem("hddMidEnd", JSON.stringify(hddMidEnd));
localStorage.setItem("hddHighEnd", JSON.stringify(hddHighEnd));
localStorage.setItem("ssdLowEnd", JSON.stringify(ssdLowEnd));
localStorage.setItem("ssdMidEnd", JSON.stringify(ssdMidEnd));
localStorage.setItem("ssdHighEnd", JSON.stringify(ssdHighEnd));
localStorage.setItem("motherboardAMD", JSON.stringify(motherboardAMD));
localStorage.setItem("motherboardIntel", JSON.stringify(motherboardIntel));
localStorage.setItem("ram8gb", JSON.stringify(ram8gb));
localStorage.setItem("ram16gb", JSON.stringify(ram16gb));
localStorage.setItem("ram32gb", JSON.stringify(ram32gb));
localStorage.setItem("fuenteLowEnd", JSON.stringify(fuenteLowEnd));
localStorage.setItem("fuenteMidEnd", JSON.stringify(fuenteMidEnd));
localStorage.setItem("fuenteHighEnd", JSON.stringify(fuenteHighEnd));
localStorage.setItem("cpuLowEndAMD", JSON.stringify(cpuLowEndAMD));
localStorage.setItem("cpuMidEndAMD", JSON.stringify(cpuMidEndAMD));
localStorage.setItem("cpuHighEndAMD", JSON.stringify(cpuHighEndAMD));
localStorage.setItem("cpuLowEndIntel", JSON.stringify(cpuLowEndIntel));
localStorage.setItem("cpuMidEndIntel", JSON.stringify(cpuMidEndIntel));
localStorage.setItem("cpuHighEndIntel", JSON.stringify(cpuHighEndIntel));
localStorage.setItem("gabinete", JSON.stringify(gabinete));

//FUNCION PARA MOSTRAR EL CARRITO Y EL TOTAL DE LA COMPRA


for (let i = 0; i < 2; i++) {
    mostrarGpu(gpuLowEnd, gpuMidEnd, gpuHighEnd, carrito)
    mostrarAlmacenamiento(hddLowEnd, hddMidEnd, hddHighEnd, ssdLowEnd, ssdMidEnd, ssdHighEnd, carrito)
    mostrarMother(motherboardAMD, motherboardAMD, carrito)
    mostrarRam(ram8gb, ram16gb, ram32gb, carrito)  
    mostrarFuente(fuenteLowEnd, fuenteMidEnd, fuenteHighEnd, carrito)
    mostrarCpu(cpuLowEndAMD, cpuMidEndAMD, cpuHighEndAMD, cpuLowEndIntel, cpuMidEndIntel, cpuHighEndIntel, carrito)
    carrito.push(gabinete.precio)
    gabinete.stock = gabinete.stock - 1;
}

alert("El total de su compra es: " + carrito.reduce((a, b) => a + b, 0));

// Ahora procedo a utilizar el get item para mostrar los datos de los productos

let gpuLowEndGetter = JSON.parse(localStorage.getItem("gpuLowEnd"));
let gpuMidEndGetter = JSON.parse(localStorage.getItem("gpuMidEnd"));
let gpuHighEndGetter = JSON.parse(localStorage.getItem("gpuHighEnd"));
let hddLowEndGetter = JSON.parse(localStorage.getItem("hddLowEnd"));
let hddMidEndGetter = JSON.parse(localStorage.getItem("hddMidEnd"));
let hddHighEndGetter = JSON.parse(localStorage.getItem("hddHighEnd"));
let ssdLowEndGetter = JSON.parse(localStorage.getItem("ssdLowEnd"));
let ssdMidEndGetter = JSON.parse(localStorage.getItem("ssdMidEnd"));
let ssdHighEndGetter = JSON.parse(localStorage.getItem("ssdHighEnd"));
let motherboardAMDGetter = JSON.parse(localStorage.getItem("motherboardAMD"));
let motherboardIntelGetter = JSON.parse(localStorage.getItem("motherboardIntel"));
let ram8gbGetter = JSON.parse(localStorage.getItem("ram8gb"));
let ram16gbGetter = JSON.parse(localStorage.getItem("ram16gb"));
let ram32gbGetter = JSON.parse(localStorage.getItem("ram32gb"));
let fuenteLowEndGetter = JSON.parse(localStorage.getItem("fuenteLowEnd"));
let fuenteMidEndGetter = JSON.parse(localStorage.getItem("fuenteMidEnd"));
let fuenteHighEndGetter = JSON.parse(localStorage.getItem("fuenteHighEnd"));
let cpuLowEndAMDGetter = JSON.parse(localStorage.getItem("cpuLowEndAMD"));
let cpuMidEndAMDGetter = JSON.parse(localStorage.getItem("cpuMidEndAMD"));
let cpuHighEndAMDGetter = JSON.parse(localStorage.getItem("cpuHighEndAMD"));
let cpuLowEndIntelGetter = JSON.parse(localStorage.getItem("cpuLowEndIntel"));
let cpuMidEndIntelGetter = JSON.parse(localStorage.getItem("cpuMidEndIntel"));
let cpuHighEndIntelGetter = JSON.parse(localStorage.getItem("cpuHighEndIntel"));
let gabineteGetter = JSON.parse(localStorage.getItem("gabinete"));