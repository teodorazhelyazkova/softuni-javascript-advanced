function validate() {
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", submitHandler);

  const validationConfig = [
    {
      id: "username",
      field: document.getElementById("username"),
      pattern: /[A-Za-z0-9]{3,20}/g,
    },
    {
      id: "email",
      field: document.getElementById("email"),
      pattern: /\w+@\w+\.\w+/g,
    },
    {
      id: "password",
      field: document.getElementById("password"),
      pattern: /[\w]{5,15}/g,
    },
    {
      id: "confirm-password",
      field: document.getElementById("confirm-password"),
      pattern: /[\w]{5,15}/g,
    },
    {
      id: "companyNumber",
      field: document.getElementById("companyNumber"),
      pattern: /[1-9][0-9]{3}/g,
    },
  ];

  const companyCheckbox = document.getElementById("company");
  companyCheckbox.addEventListener("change", companyHandler);
  let isCompany = false;

  const isInputValid = [];

  function companyHandler(e) {
    if (companyCheckbox.checked) {
      isCompany = true;
      document.getElementById("companyInfo").style = "display: block";
    }
  }

  function submitHandler(e) {
    let isValidationOver = false;
    e.preventDefault();

    for (let { id, field, pattern } of validationConfig) {
      if (id === "companyNumber") {
        isValidationOver = true;

        if (!isCompany) {
          return;
        }
      }

      if (id === "confirm-password") {
        const firstPassword = validationConfig.find(
          (el) => el.id === "password"
        ).field;

        const secondPasswword = field;
        comparePasswords(firstPassword, secondPasswword);
      }

      isInputValueValid(pattern, field);
    }

    if (isValidationOver && !isInputValid.includes(false)) {
      document.getElementById("valid").style.display = "block";
    }
  }

  function isInputValueValid(regex, element) {
    if (!regex.test(element.value)) {
      element.style = "border-color: red";
      isInputValid.push(false);
    }
    isInputValid.push(true);
  }

  function comparePasswords(firstPass, secondPass) {
    if (firstPass.value !== secondPass.value) {
      firstPass.style = "border-color: red";
      secondPass.style = "border-color: red";
    }
    secondPass.isValid = true;
  }
}
