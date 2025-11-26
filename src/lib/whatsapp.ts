import type { FormData } from "@/types/form";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export function sendToWhatsApp(data: FormData): void {
  const productoSeleccionado = data.productoSeminuevo || data.productoNuevo || 'No especificado';
  const tipoProducto = data.productoSeminuevo ? 'SEMINUEVO' : 'NUEVO';
  const mensaje = `
*NUEVO REGISTRO*

*Producto de Interés:* ${productoSeleccionado}
*Tipo de Producto:* ${tipoProducto}
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
