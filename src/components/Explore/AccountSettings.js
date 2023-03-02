import React, { useEffect, useRef, useState } from "react";

const AccountSettings = () => {
  const ChangePhone = useRef("");
  const ChangeLogin = useRef("");
  const OldPassword = useRef("");
  const NewPassword = useRef("");
  const ConfirmPassword = useRef("");
  const [Photo, setPhoto] = useState("image/user.png");
  console.log(localStorage.getItem("AccountName"));
  useEffect(() => {
    fetch(
      "http://localhost:3010/PhotoImage?image=" +
        localStorage.getItem("AccountName"),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data[0].Avatar.length) {
          setPhoto(data[0].Avatar);
        } else {
          setPhoto("image/user.png");
        }
      });
  }, []);

  function SaveChanges() {
    var NewPhone = ChangePhone.current.value;
    var NewLogin = ChangeLogin.current.value;
    var Tel = localStorage.getItem("Login");
    if ((NewPhone.length === 0) & (NewLogin.length !== 0)) {
      NewPhone = localStorage.getItem("Login");
    }
    if ((NewLogin.length === 0) & (NewPhone.length !== 0)) {
      NewLogin = localStorage.getItem("AccountName");
    }
    if (NewPhone.length !== 0 && NewLogin.length !== 0) {
      fetch("http://localhost:3010/AccountData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Login: NewLogin,
          Phone: NewPhone,
          OldPhone: Tel,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
      localStorage.setItem("Login", NewPhone);
      localStorage.setItem("AccountName", NewLogin);
    } else {
      alert("введите данные");
    }
  }
  function SavePasswordChanges() {
    const OldPassword1 = OldPassword.current.value;
    const NewPassword1 = NewPassword.current.value;
    const ConfirmPassword1 = ConfirmPassword.current.value;
    if (NewPassword1 === ConfirmPassword1) {
      fetch("http://localhost:3010/ChangePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Password: NewPassword1,
          OldPassword: OldPassword1,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    } else {
      alert("Repeat Password");
    }
  }

  function ChangePhoto() {
    let myFormData = document.getElementById("myForm");
    fetch("http://localhost:3010/Account", {
      method: "POST",
      body: new FormData(myFormData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("Avatar", data);
        console.log(localStorage.getItem("Avatar"));
        document.getElementsByClassName("ForUser")[0].src = data;
        document.getElementsByClassName("ForAccountImg")[0].src = data;
        setPhoto(data);
      });
  }
  function clickImage() {
    document.getElementById("file-image").click();
  }
  function SavePhoto(event) {
    console.log("загрузилось");
    ChangePhoto();
  }
  return (
    <div className="section-account">
      <h1>Edit account</h1>
      <form id="myForm" method="post" encType="multipart/form-data">
        <input
          type="file"
          name="filedata"
          id="file-image"
          onChange={SavePhoto.bind(this)}
        />
        <br />
        <div className="size-image">
          <img className="ForAccountImg-change" src={Photo} alt="" />
        </div>
        <br />
        <button className="ButtonDownload" type="button" onClick={clickImage}>
          Change avatar
        </button>
      </form>
      <div>
        <h4 className="form-name-input">My Phone</h4>
        <input
          ref={ChangePhone}
          placeholder={localStorage.getItem("Login")}
          className="input-form"
        />
        <h4 className="form-name-input">My Account Name</h4>
        <input
          ref={ChangeLogin}
          placeholder={localStorage.getItem("AccountName")}
          className="input-form"
        />
        <button className="ButtonDownload" onClick={SaveChanges}>
          Save Changes
        </button>
        <h2 className="title-change-password">Change password</h2>
        <h4 className="form-name-input">Current password</h4>
        <input className="input-form" ref={OldPassword} />
        <h4 className="form-name-input">New password</h4>
        <input className="input-form" ref={NewPassword} />
        <h4 className="form-name-input">Confirm new password</h4>
        <input className="input-form" ref={ConfirmPassword} />
        <button
          className="button-change-password"
          onClick={SavePasswordChanges}
        >
          Save New Password
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
