"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  IdCard,
  BadgeDollarSign,
  OctagonAlert,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Juan M.",
      // role: "Empresaria",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      text: "Estaba reportado y en ningún lado me daban crédito. Aquí me aprobaron en minutos y saqué mi iPhone 13 sin problema. Excelente servicio.",
      rating: 5,
    },
    {
      name: "Andrés P.",
      // role: "Comerciante",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
      text: "Pensé que por estar reportado no podía sacar un celular. Con el 30% de cuota inicial me aprobaron rápido. Buen trato y buena garantía.",
      rating: 5,
    },
    {
      name: "Valentina R.",
      // role: "Profesional Independiente",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
      text: "Me explicaron todo súper claro, hice el estudio, me aprobaron y entregaron mi iPhone el mismo día. Muy recomendados.",
      rating: 5,
    },
  ];

  const services = [
    {
      title: "Cédula de Ciudadanía",
      description:
        "Estrena el celular de tus sueños solo con tu cédula. Sin papeleos, sin filas y con aprobación rápida. ¡Llévatelo hoy mismo!",
      icon: <IdCard className="w-12 h-12" />,
    },
    {
      title: "Cuota Inicial",
      description:
        "Lleva el celular que quieres aportando una cuota inicial de 30% y completa el resto con financiamiento flexible.",
      icon: <BadgeDollarSign className="w-12 h-12" />,
    },
    {
      title: "No Tener Reportes en Telcom",
      description:
        "Historial sin reportes en operadores como Movistar, Claro, Tigo entre otras, para facilitar la aprobación del equipo.",
      icon: <OctagonAlert className="w-12 h-12" />,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image src="/logo.svg" alt="Logo" width={90} height={90} />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Inicio
              </a>
              <a
                href="#requisitos"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Requisitos
              </a>
              <a
                href="#beneficios"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Beneficios
              </a>
              <a
                href="#testimonios"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Testimonios
              </a>
              <Link
                href="/formulario"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Solicitar Crédito
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                  ✨ Solicita tu crédito hoy mismo
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Estrena el Celular de tus{" "}
                <span className="text-blue-600">Sueños</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Obtén el financiamiento que necesitas de forma rápida, segura y
                100% digital. Aprobación en menos de 24 horas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/formulario"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Solicitar Ahora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={() =>
                    document
                      .getElementById("requisitos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
                >
                  Ver Requisitos
                </button>
              </div>
              {/* <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-900">+5,000</p>
                  <p className="text-gray-600">Clientes Satisfechos</p>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">4.9/5</p>
                  <p className="text-gray-600">Calificación</p>
                </div>
              </div> */}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-3xl opacity-20"></div>
              <Image
                 src="/celular.jpeg"
                alt="Personas trabajando"
                width={600}
                height={600}
                className="relative rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Aprobación Rápida
                    </p>
                    <p className="text-sm text-gray-600">
                      En menos de 24 horas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="requisitos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Requisitos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos créditos accesibles con requisitos simples para que
              puedas obtener el celular que deseas sin complicaciones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200 group"
              >
                <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                {/* <button className="text-blue-600 font-semibold flex items-center hover:gap-2 transition-all">
                  Más información
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="beneficios"
        className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Proceso Simple y Seguro
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                En solo 3 pasos puedes obtener tu crédito de manera
                completamente digital
              </p>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Realiza tu estudio de crédito",
                    desc: "Llena el formulario y en minutos un asesor validará tu información.",
                  },
                  {
                    step: "2",
                    title: "Una vez aprobado, acércate a nuestra tienda",
                    desc: "Presentas tu cédula y llevas el 30% de cuota inicial.",
                  },
                  {
                    step: "3",
                    title: "¡Te entregamos tu iPhone el mismo día!",
                    desc: "Disfruta de tu nuevo celular al instante.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-blue-100">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/formulario"
                className="inline-flex items-center mt-8 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
             <Image
                src="/celular.jpeg"
                alt="Dashboard"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600">
              Miles de personas confían en nosotros
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Image
                 src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex-1 text-center md:text-left">
                  <div className="flex gap-1 justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>
                  <p className="text-xl text-gray-700 mb-4 italic">
                    &quot;{testimonials[currentTestimonial].text}&quot;
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </p>
                    {/* <p className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Solicita tu crédito ahora y recibe una respuesta en menos de 24
            horas
          </p>
          <Link
            href="/formulario"
            className="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
          >
            Solicitar Crédito Ahora
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SmartGadgets</h3>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>smartventaspasto@gmail.com</li>
                <li>+57 314 754 5454</li>
                <li>Pasto, Nariño</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Política de Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 SmartGadgets. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
