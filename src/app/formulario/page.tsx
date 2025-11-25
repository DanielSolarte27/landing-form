"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  User,
  CreditCard,
  Package,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { sendToWhatsApp } from "@/lib/whatsapp";
import type { FormData } from "@/types/form";
import Image from "next/image";

export default function FormularioPage() {
  const [formData, setFormData] = useState<FormData>({
    producto: "",
    nombreCompleto: "",
    cedula: "",
    departamento: "",
    ciudad: "",
    correo: "",
    fechaNacimiento: "",
    celular: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Enviar a WhatsApp
    sendToWhatsApp(formData);

    // Mostrar mensaje de éxito
    setShowSuccess(true);

    // Resetear formulario después de 2 segundos
    setTimeout(() => {
      setFormData({
        producto: "",
        nombreCompleto: "",
        cedula: "",
        departamento: "",
        ciudad: "",
        correo: "",
        fechaNacimiento: "",
        celular: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
        <div className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¡Solicitud Enviada!
          </h2>
          <p className="text-gray-600 mb-8">
            Hemos recibido tu información. Te contactaremos por WhatsApp muy
            pronto para continuar con el proceso.
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-blue-600 transition"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver al Inicio
            </Link>
            <div className="flex-shrink-0">
              <Image src="/logo.svg" alt="Logo" width={80} height={80} />
            </div>
          </div>
        </div>
      </header>

      {/* Form Section */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          {/* <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <span className="ml-2 text-sm font-medium text-blue-600">
                  Datos Personales
                </span>
              </div>
              <div className="w-16 h-1 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500">
                  Verificación
                </span>
              </div>
              <div className="w-16 h-1 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500">
                  Aprobación
                </span>
              </div>
            </div>
          </div> */}

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solicita tu Crédito
            </h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y te contactaremos en menos de 24 horas
              👩🏻💻💙
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="space-y-6">
              {/* Producto */}
              <label className="flex items-center text-sm font-bold text-gray-800 mb-3">
                <Package className="w-5 h-5 mr-2 text-blue-600" />
                Producto en el que estás interesado *
              </label>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-bold text-gray-800 mb-3">
                    <Package className="w-5 h-5 mr-2 text-blue-600" />
                    SEMINUEVOS *
                  </label>
                  <select
                    name="producto"
                    value={formData.producto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-gray-800 bg-white"
                  >
                    <option value="">Selecciona un producto</option>
                    <option value="Crédito Personal">iPhone 11 - 64GB</option>
                    <option value="Crédito Empresarial">
                      iPhone 11 - 128GB
                    </option>
                    <option value="Crédito de Vehículo">
                      iPhone 11 - 256GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 12 - 64GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 12 - 128GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 12 - 256GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 12 Pro - 128GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 12 Pro - 256GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 12 Pro Max - 128GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 12 Pro Max - 256GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 13 - 128GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 13 - 256GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 13 Pro - 128GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 13 Pro - 256GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 13 Pro Max - 128GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 13 Pro Max - 256GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 14 - 128GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 14 - 256GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 14 Pro - 128GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 14 Pro - 256GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 14 Pro Max - 128GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 14 Pro Max - 256GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 15 - 128GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 15 - 256GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 15 Plus - 128GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 15 Plus - 256GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 15 Pro - 128GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 15 Pro - 256GB
                    </option>
                    <option value="Crédito Hipotecario">
                      iPhone 15 Pro Max - 256GB
                    </option>
                  </select>
                </div>
                {/* Select Nuevos */}
                <div>
                  <label className="flex items-center text-sm font-bold text-gray-800 mb-3">
                    <Package className="w-5 h-5 mr-2 text-green-600" />
                    NUEVO *
                  </label>
                  <select
                    name="productoNuevo"
                    value={formData.producto || ""}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition text-gray-800 bg-white"
                  >
                    <option value="">Selecciona un producto</option>
                    <option value="iPhone 11 - 128GB">iPhone 11 - 128GB</option>
                    <option value="iPhone 12 - 128GB">iPhone 12 - 128GB</option>
                    <option value="iPhone 13 - 128GB">
                      iPhone 13 - 128GB
                    </option>
                  </select>
                </div>
              </div>
              {/* Nota informativa */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">💡 Nota:</span> Selecciona
                  solo uno de los dos tipos de producto (Seminuevo o Nuevo)
                </p>
              </div>

              {/* Nombre Completo */}
              <div>
                <label className="flex items-center text-sm font-bold text-gray-800 mb-3">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="nombreCompleto"
                  value={formData.nombreCompleto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Juan Pérez García"
                />
              </div>

              {/* Cédula */}
              <div>
                <label className="flex items-center text-sm font-bold text-gray-800 mb-3">
                  <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                  Número de Cédula *
                </label>
                <input
                  type="text"
                  name="cedula"
                  value={formData.cedula}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="1234567890"
                />
              </div>

              {/* Departamento y Ciudad */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-bold text-gray-800 mb-3">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    Departamento *
                  </label>
                  <input
                    type="text"
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Nariño"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-800 mb-3 block">
                    Ciudad de Residencia *
                  </label>
                  <input
                    type="text"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Pasto"
                  />
                </div>
              </div>
              {/* Correo */}
              <div>
                <label className="flex items-center text-sm font-bold text-gray-800 mb-3">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              {/* Fecha de Nacimiento */}
              <div>
                <label className="flex items-center text-sm font-bold text-gray-800 mb-3">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  Fecha de Nacimiento *
                </label>
                <input
                  type="date"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              {/* Celular */}
              <div>
                <label className="flex items-center text-sm font-bold text-gray-800 mb-3">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  Número de Celular Activo *
                </label>
                <input
                  type="tel"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="3001234567"
                />
                <p className="text-sm text-gray-500 mt-2 flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  Te llegará un código de verificación por WhatsApp
                </p>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">
                  📋 Información Importante
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Todos los campos son obligatorios</li>
                  <li>✓ Tu información está protegida y encriptada</li>
                  <li>✓ Recibirás respuesta en menos de 24 horas</li>
                  <li>
                    ✓ Te contactaremos vía WhatsApp al número proporcionado
                  </li>
                </ul>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Enviar Solicitud 📲"
                )}
              </button>
            </div>
          </div>

          {/* Security Badge */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            <p className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Tus datos están protegidos con encriptación SSL de 256 bits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
