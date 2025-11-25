import type { FormData } from "@/types/form";

const WHATSAPP_NUMBER = "573166159904";

export function sendToWhatsApp(data: FormData): void {
  const mensaje = `
*NUEVO REGISTRO*

*Producto de Interés:* ${data.producto}
*Nombre Completo:* ${data.nombreCompleto}
*Número de Cédula:* ${data.cedula}
*Ubicación:* ${data.departamento}, ${data.ciudad}
*Correo Electrónico:* ${data.correo}
*Fecha de Nacimiento:* ${data.fechaNacimiento}
*Número de Celular:* ${data.celular}
  `.trim();

  const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    mensaje
  )}`;

  window.open(urlWhatsApp, "_blank");
}
