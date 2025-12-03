const istatus = 500

if (istatus === 200) {
    console.log("OK")
} else if (istatus === 400) {
    console.log("Bad Request")
} else {
    console.log("Other Status")
}

switch (istatus){
    case 200:
        console.log("OK")
        break
    case 400:
        break
    default:
        console.log("Other Status")
}

const result = (istatus === 200) ? "OK" : "Not OK" //ถ้าจริงทำหลัง? ถ้าไม่จริงทำหลัง:
console.log(result)