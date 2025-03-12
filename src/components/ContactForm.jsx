import { useRef, useState } from "react";
import useStore from "../useStore/useStore";

export default function ContactForm() {
  const { language } = useStore();
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyJS4ZdkBYb0jduPQck3Cof0yxwk5oiCrJQosLWobUZhUwQftP44uZpfasRSLP0fhYThw/exec";
  const formRef = useRef(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const submitBtn = form.querySelector("#send-msg");
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Mensaje:", message);

    if (!name || !email || !message) {
      console.log("❌ Faltan campos por llenar");
      setAlertType("error");
      setAlertMessage(
        language === "es"
          ? "Por favor, completa todos los campos."
          : "Please fill in all fields."
      );
      setTimeout(() => setAlertMessage(""), 5000);
      return;
    }

    submitBtn.disabled = true;

    const formData = new FormData(form);
    console.log("Enviando datos a:", scriptURL);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        console.log("✅ Respuesta recibida:", response);
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        setAlertType("success");
        setAlertMessage(
          language === "es"
            ? "¡Mensaje enviado con éxito!"
            : "Message sent successfully!"
        );
        setTimeout(() => setAlertMessage(""), 5000);
        form.reset();
      })
      .catch((error) => {
        console.error("❌ Error en el envío:", error.message);
        setAlertType("error");
        setAlertMessage(
          language === "es"
            ? "Hubo un error al enviar el mensaje. Intenta de nuevo."
            : "There was an error sending the message. Please try again."
        );
      })
      .finally(() => {
        submitBtn.disabled = false;
      });
  };

  return (
    <div className="contact-form">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="contact-form-f"
        name="submit-to-google-sheet"
      >
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="Name"
            placeholder={language?.toLowerCase() === "es" ? "Nombre" : "Name"}
            className="form-control"
            required
          />

          <input
            type="email"
            id="email"
            name="Email"
            placeholder={
              language?.toLowerCase() === "es" ? "Correo electrónico" : "Email"
            }
            className="form-control"
            required
          />

          <textarea
            id="message"
            name="Message"
            placeholder={
              language?.toLowerCase() === "es"
                ? "Escribe tu mensaje"
                : "Enter your message"
            }
            className="form-control"
            required
          ></textarea>

          <button type="submit" className="btn btn-dark" id="send-msg">
            {language?.toLowerCase() === "es" ? "Enviar" : "Send"}
          </button>
        </div>

        {alertMessage && (
          <div
            id="alert"
            className={`alert ${
              alertType === "success" ? "alert-success" : "alert-error"
            }`}
          >
            {alertMessage}
          </div>
        )}
      </form>
    </div>
  );
}
