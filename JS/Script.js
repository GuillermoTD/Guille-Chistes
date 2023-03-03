window.addEventListener("DOMContentLoaded", async () => {
  let userName = window.localStorage.getItem("userName");

  let inputUserName = "";

  if (userName == null) {
    await Swal({
      title: "Escribe tu nombre",
      input: "text",
      inputLabel: "Your IP address",
      inputValue: "",
      showCancelButton: true,
      allowOutsideClick: false,
      inputValidator: async (value) => {
        if (!value) {
          return "No puedes dejar este campo vacio";
        }

        localStorage.setItem("userName", value);// here we are setting the name of the user

        inputUserName = value; // here we reassing this variable to store the name of the user
        console.log(inputUserName);
        await Swal({
          title: `Hola ${inputUserName}, te gustaria escuchar unos buenos chistes?
           seguro te haran reir... o quizas 
            no xD, veamos que pasa`,
          allowOutsideClick: false,
        });
      },
    });
  }
});
