const username_input = document.getElementById("username").value;
const password_input = document.getElementById("password").value;
console.log(username_input);
console.log(password_input);

// document.getElementById("submit-btn").addEventListener("click", hello());
// document.getElementById("submit-btn").addEventListener("click", function() {
// alert("คุณคลิกปุ่มนี้โดยใช้ addEventListener!");
// });

const login = () => {
    const username_input = document.getElementById("username").value;
    console.log("username "+ username_input);
    const password_input = document.getElementById("password").value;
    console.log("password "+ password_input);

    if (username_input === "" || password_input === "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน Nissannn!!!!!!!");
    }

    else if (username_input != "Hinlnw" || password_input != "555"){
        alert("ข้อมูลไม่ถูกต้อง")
    }
    
    else {
        alert("เข้าสู่ระบบสำเร็จ")
    }

}

